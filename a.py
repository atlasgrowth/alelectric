import json
import os
import requests
import time

def load_electricians_data(file_path="electricians.json"):
    """
    Load the electricians data from the provided JSON file.
    """
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading electricians data: {e}")
        return {}

def filter_electricians_without_website(electricians_data):
    """
    Filter the electricians data to only include those without a website.
    """
    filtered = {}
    for key, data in electricians_data.items():
        if not data.get('site'):  # Check if site is empty or doesn't exist
            filtered[key] = data

    return filtered

def fetch_place_reviews(place_ids, max_reviews=50):
    """
    Fetch reviews for the provided place IDs using the Apify Actor API.

    Args:
        place_ids: List of place IDs to fetch reviews for
        max_reviews: Maximum number of reviews to fetch per place

    Returns:
        Dictionary with place IDs as keys and their reviews as values
    """
    api_url = "https://api.apify.com/v2/acts/compass~google-maps-reviews-scraper/run-sync-get-dataset-items"
    token = "apify_api_o7mYRW8cyWa4FtBMQFfhu8rBpfWqVb1AnFwN"

    payload = {
        "placeIds": place_ids,
        "maxReviews": max_reviews
    }

    url = f"{api_url}?token={token}"
    headers = {"Content-Type": "application/json"}

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors

        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching reviews: {e}")
        return []

def organize_reviews_by_place(reviews_data):
    """
    Organize reviews by place ID.

    Args:
        reviews_data: List of review objects from Apify

    Returns:
        Dictionary with place IDs as keys and lists of reviews as values
    """
    organized = {}

    for review in reviews_data:
        # Skip reviews with errors
        if "error" in review:
            continue

        place_id = review.get("placeId")
        if not place_id:
            continue

        if place_id not in organized:
            organized[place_id] = []

        # Extract relevant review data
        review_data = {
            "text": review.get("text", ""),
            "reviewer_name": review.get("reviewerName", "Anonymous"),
            "date": review.get("publishedAtDate", ""),
            "stars": review.get("stars", 0),
            "likes": review.get("likes", 0),
            "photos": review.get("photos", []),
            "language": review.get("responseLanguage", "")
        }

        organized[place_id].append(review_data)

    return organized

def save_reviews_to_file(reviews_by_place, electricians_data, output_path="electricians_with_reviews.json"):
    """
    Save the reviews data to a new file, combining it with the original electricians data.
    """
    # Create a copy of the original data
    output_data = {}

    # Add reviews to each electrician
    for business_name, business_data in electricians_data.items():
        output_data[business_name] = business_data.copy()

        place_id = business_data.get("place_id")
        if place_id and place_id in reviews_by_place:
            # Add the reviews to the business data
            output_data[business_name]["detailed_reviews"] = reviews_by_place[place_id]

    # Save to file
    try:
        with open(output_path, 'w') as f:
            json.dump(output_data, f, indent=2)
        print(f"Reviews saved to {output_path}")
    except Exception as e:
        print(f"Error saving reviews: {e}")

def main():
    # Load electricians data
    electricians_data = load_electricians_data()
    if not electricians_data:
        print("No electricians data found. Exiting.")
        return

    print(f"Loaded {len(electricians_data)} electricians.")

    # Filter electricians without a website
    filtered_data = filter_electricians_without_website(electricians_data)
    print(f"Found {len(filtered_data)} electricians without a website.")

    if not filtered_data:
        print("No electricians without a website found. Exiting.")
        return

    # Get place IDs
    place_ids = [data.get("place_id") for _, data in filtered_data.items() if data.get("place_id")]
    print(f"Fetching reviews for {len(place_ids)} place IDs.")

    # Fetch reviews
    reviews_data = fetch_place_reviews(place_ids, max_reviews=50)
    print(f"Fetched {len(reviews_data)} review objects.")

    # Organize reviews by place
    reviews_by_place = organize_reviews_by_place(reviews_data)
    print(f"Organized reviews for {len(reviews_by_place)} places.")

    # Save to file
    save_reviews_to_file(reviews_by_place, filtered_data)

    print("Done!")

if __name__ == "__main__":
    main()