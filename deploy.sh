#!/bin/bash
echo "Starting deployment process..."

# Build your project
echo "Building project..."
npm run build

# Navigate to build directory
cd dist/public

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Initialize git in the build directory
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
echo "Pushing to GitHub Pages..."
git push --force "https://${GITHUB_TOKEN}@github.com/atlasgrowth/alelectric.git" gh-pages:gh-pages

echo "Deployment complete!"
