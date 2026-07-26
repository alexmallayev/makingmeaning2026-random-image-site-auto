# Automatic Random Image Website

This version does not require you to type image filenames into the code.

## Add your images

Put JPG, JPEG, PNG, GIF, WEBP, AVIF, or SVG files inside:

    public/images

The website automatically finds them during deployment.

## Important limitation

A normal static website cannot inspect a folder after it is already online.
Whenever you add or remove images, the hosting service must rebuild the site.

When the project is connected to GitHub and Netlify, this happens automatically
after you upload and commit new images in GitHub.

## Test it on your computer

You need Node.js installed.

1. Open Terminal in this folder.
2. Run:

       npm install
       npm run dev

3. Open the local URL shown in Terminal.

## Deploy with GitHub + Netlify

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. In Netlify, choose "Add new site" and "Import an existing project."
4. Connect the GitHub repository.
5. Use these settings:

       Build command: npm run build
       Publish directory: dist

6. Deploy.

After that, to add images:

1. Open public/images in your GitHub repository.
2. Click "Add file" and upload your images.
3. Commit the changes.
4. Netlify automatically rebuilds the website.

You never need to edit the image list.
