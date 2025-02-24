#!/bin/bash
echo "Starting deployment process..."

# Build your project with GitHub Pages mode
echo "Building project..."
GITHUB_PAGES=true npm run build

# Navigate to build directory
cd dist/public

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Create a copy of index.html as 404.html for GitHub Pages
cp index.html 404.html

# Initialize git in the build directory
git init
git checkout -b gh-pages || git checkout gh-pages
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
echo "Pushing to GitHub Pages..."
git push --force "https://${GITHUB_TOKEN}@github.com/atlasgrowth/alelectric.git" gh-pages:gh-pages

echo "Deployment complete!"