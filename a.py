import json
import sys
import os
from datetime import datetime

def clean_reviews_data(input_file, output_file=None):
    """
    Clean the electricians data to extract only business name, place_id, review text, and 's' field
    for each business, filtering for only 5-star reviews.

    Args:
        input_file: Path to the input JSON file
        output_file: Path to the output JSON file (optional)
    """
    # Generate default output filename if not provided
    if not output_file:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_file = f"clean_electricians_5star_{timestamp}.json"

    try:
        # Load the data
        print(f"Loading data from {input_file}...")
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Create cleaned data structure
        cleaned_data = {}

        for business_name, business_info in data.items():
            # Check if the business has detailed reviews
            if "detailed_reviews" not in business_info:
                print(f"No detailed reviews found for {business_name}, skipping.")
                continue

            # Filter for 5-star reviews
            five_star_reviews = []
            for review in business_info.get("detailed_reviews", []):
                if review.get("stars") == 5:
                    # Only include the review text
                    five_star_reviews.append(review.get("text", ""))

            if not five_star_reviews:
                print(f"No 5-star reviews found for {business_name}, skipping.")
                continue

            # Add the business to the cleaned data with only required fields
            cleaned_data[business_name] = {
                "name": business_name,
                "place_id": business_info.get("place_id", ""),
                "s": business_info.get("s", ""),
                "five_star_reviews": five_star_reviews
            }

        # Save the cleaned data
        print(f"Saving cleaned data to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(cleaned_data, f, indent=2, ensure_ascii=False)

        print(f"Successfully processed {len(cleaned_data)} businesses with 5-star reviews.")
        return True

    except Exception as e:
        print(f"Error: {str(e)}")
        return False

def main():
    """
    Main function to run the script with command line arguments or interactive input.
    """
    print("=" * 50)
    print("Electricians 5-Star Reviews Cleaner")
    print("=" * 50)

    # Check if file path was provided as command line argument
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    else:
        # Otherwise, prompt the user for the file path
        input_file = input("Enter path to the electricians JSON file: ").strip()

    if not input_file:
        print("No input file specified. Exiting.")
        return

    if not os.path.exists(input_file):
        print(f"File not found: {input_file}")
        return

    # Get output file path (optional)
    output_file = None
    if len(sys.argv) > 2:
        output_file = sys.argv[2]
    else:
        output_prompt = input("Enter output file path (leave blank for auto-generated filename): ").strip()
        if output_prompt:
            output_file = output_prompt

    # Clean the data
    success = clean_reviews_data(input_file, output_file)

    if success:
        print("Done!")
    else:
        print("Failed to clean the data.")

    print("=" * 50)

if __name__ == "__main__":
    main()