console.log('script');

const defaultImages = [
  'https://www.cathaven.com.au/assets/Headers/4294f65d12/Home-page-header__FillWzk3MCwyOTVd.jpg',
];

chrome.storage.local.remove("newtabPicture");

const getExistingPicture = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get("newtabPicture", (result) => {
      resolve(result.newtabPicture);
    });
  });
}

const setImage = (image) => {
  document.getElementById('background').style.backgroundImage = `url(${image})`;
};

getExistingPicture().then(pic => {
  const randomNumber = Math.floor(Math.random() * defaultImages.length);
  const randomImage = defaultImages[randomNumber];
  setImage(pic || randomImage);
});
