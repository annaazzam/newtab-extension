const defaultImages = [
  {
    url: 'https://images.unsplash.com/photo-1593270573246-2dca2f2c1c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    credit: 'Joshua Woroniecki',
    username: '@joshua_j_woroniecki',
  },
  {
    url: 'https://images.unsplash.com/photo-1592490578831-4c55bd5b06d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Neil Thomas',
    username: '@neilmarkthomas',
  },
  {
    url: 'https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Rahul Bhosale',
    username: '@rahul_design',
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Bailey Zindel',
    username: '@baileyzindel',
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Pietro De Grandi',
    username: '@peter_mc_greats',
  },
  {
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Luca Bravo',
    username: '@lucabravo'
  },
  {
    url: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Jeremy Bishop',
    username: '@jeremybishop',
  },
  {
    url: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    credit: 'Daniela Cuevas',
    username: '@danielacuevas',
  },
  {
    url: 'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80',
    credit: 'Dave Hoefler',
    username: '@johnwestrock',
  },
  {
    url: 'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    credit: 'Ryan Schroeder',
    username: '@ryanschroeder',
  },
  {
    url: 'https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    credit: 'Marcelo Quinan',
    username: '@marceloquinan',
  }
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

const setCredit = (credit, account) => {
  document.getElementById('credit').textContent = credit;
  document.getElementById('username').href = `https://unsplash.com/${account}`;
  document.getElementById('username').textContent = account;
};


getExistingPicture().then(pic => {
  const randomNumber = Math.floor(Math.random() * defaultImages.length);
  const randomImage = defaultImages[randomNumber];
  setImage(pic || randomImage.url);
  !pic && setCredit(randomImage.credit, randomImage.username);
});
