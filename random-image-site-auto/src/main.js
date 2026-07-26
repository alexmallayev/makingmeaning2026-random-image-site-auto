import "./style.css";

// Vite automatically finds every supported image in public/images at build time.
// Add or remove images from that folder, then redeploy. No filename editing needed.
const imageModules = import.meta.glob(
  "/public/images/*.{jpg,jpeg,png,gif,webp,avif,svg}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const images = Object.values(imageModules);

const imageElement = document.getElementById("random-image");
const nextButton = document.getElementById("next-button");
const statusElement = document.getElementById("status");

let currentImageIndex = -1;

function showRandomImage() {
  if (images.length === 0) {
    imageElement.removeAttribute("src");
    imageElement.hidden = true;
    statusElement.textContent =
      'No images found. Add image files to the "public/images" folder.';
    nextButton.disabled = true;
    return;
  }

  imageElement.hidden = false;
  statusElement.textContent = "";
  nextButton.disabled = false;

  let newIndex = 0;

  if (images.length > 1) {
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentImageIndex);
  }

  currentImageIndex = newIndex;
  imageElement.src = images[currentImageIndex];
}

nextButton.addEventListener("click", showRandomImage);
showRandomImage();
