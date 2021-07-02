'use strict';

let viewHeight = window.innerHeight;

let currentPage = '#main-page';

let isScrolling = false;

let marketingSolutionsArray = [0, 100, 200, 300];
let softwareDevelopmentArray = [0, 100, 200, 300, 400];
let mobileTechCurrentSlide = 0;

const nextArrow = document.querySelector('.next_arrow');
const previousArrow = document.querySelector('.previous_arrow');

const historyState = {
  marketing: marketingSolutionsArray,
  software: softwareDevelopmentArray,
  currentPage: '#main-page',
};

history.replaceState(historyState, '', '/');
const technologies = document.querySelector('.technologies--grid');
const nextSectionButtonArr = document.querySelectorAll('.scroll--down');
const whatWeDoButton = document.querySelector('.button--to_what_we_do');
const whatWeDoSection = document.getElementById('what-we-do');
const softwareDevSection = document.getElementById('software-development');
const softwareTile = document.querySelector('.link--tile--right');
const marketingTile = document.querySelector('.link--tile--left');
const marketingSoulutionsSection = document.getElementById(
  'marketing-solutions'
);
const backButtonMarketing = document.querySelectorAll(
  '.back--button_marketing'
);
const backButtonSoftware = document.querySelectorAll('.back--button_sd');
const marketingSubpages = document.querySelectorAll('.marketing--subpages');
const softwareDevelopmentSubpages = document.querySelectorAll('.sd--subpages');

const strategyDivClicker = document.querySelector(
  '.subcategory--title_strategy'
);
const designDivClicker = document.querySelector('.subcategory--title_design');
const designButton = document.querySelector('.subpage--button_design');
const uxuiDivClicker = document.querySelector('.subcategory--title_uxui');
const uxuiButton = document.querySelector('.subpage--button_uxui');
const scrollManager = document.querySelector('.scroll--manager');
const eshopsButton = document.querySelector('.subpage--button_eshops');
const websitesButton = document.querySelector('.subpage--button_webistes');
const softwareButton = document.querySelector('.subpage--button_software');
const sdMobileTile = document.querySelector('.sd--tile--title_mobile');
const sdEshopTile = document.querySelector('.sd--tile--title_eshop');
const sdWebsitesTile = document.querySelector('.sd--tile--title_websites');
const sdSoftwareTile = document.querySelector('.sd--tile--title_software');

console.log(nextArrow);

nextArrow.addEventListener('click', () => {
  nextSlideTech();
});

previousArrow.addEventListener('click', () => {
  previousSlideTech();
});

designButton.addEventListener('click', () => {
  marketingSlideSetValues(2);
});
uxuiButton.addEventListener('click', () => {
  marketingSlideSetValues(3);
});

eshopsButton.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(2);
});
websitesButton.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(3);
});

softwareButton.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(4);
});

backButtonSoftware.forEach((e) => {
  e.addEventListener('click', () => softwareDevelopmentSlideSetValues(0));
});

sdMobileTile.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(1);
});
sdEshopTile.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(2);
});
sdWebsitesTile.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(3);
});
sdSoftwareTile.addEventListener('click', () => {
  softwareDevelopmentSlideSetValues(4);
});

marketingTile.addEventListener('click', () => {
  history.pushState(historyState, '', '#marketing-solutions');
  marketingSoulutionsSection.scrollIntoView({ behavior: 'smooth' });
});
softwareTile.addEventListener('click', () => {
  history.pushState(historyState, '', '#software-development');
  softwareDevSection.scrollIntoView({ behavior: 'smooth' });
});

whatWeDoButton.addEventListener('click', () => {
  history.pushState(historyState, '', '#what-we-do');
  whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
});

nextSectionButtonArr.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target
      .closest('section')
      .nextSibling.nextSibling.scrollIntoView({ behavior: 'smooth' });
  });
});

strategyDivClicker.addEventListener('click', () => {
  marketingSlideSetValues(1);
});
designDivClicker.addEventListener('click', () => {
  marketingSlideSetValues(2);
});
uxuiDivClicker.addEventListener('click', () => {
  marketingSlideSetValues(3);
});

const marketingSlideFromArr = (arr) => {
  for (let i = 0; i < marketingSubpages.length; i++) {
    marketingSubpages[i].style.transform = `translateX(${arr[i]}%)`;
  }
};
const softwareSlideFromArr = (arr) => {
  for (let i = 0; i < softwareDevelopmentSubpages.length; i++) {
    softwareDevelopmentSubpages[i].style.transform = `translateX(${arr[i]}%)`;
  }
};
const pushToHistoryMarketingTile = (array, subpage) => {
  historyState.marketing = array;
  history.pushState(historyState, '', subpage);
};

previousArrow.classList.add('hidden');

const nextSlideTech = () => {
  if (mobileTechCurrentSlide == 0) previousArrow.classList.remove('hidden');
  mobileTechCurrentSlide++;
  technologies.style.transform = `translateX(-${
    mobileTechCurrentSlide * 100
  }vw)`;
  if (mobileTechCurrentSlide == 4) nextArrow.classList.add('hidden');
};

const previousSlideTech = () => {
  if (mobileTechCurrentSlide == 4) nextArrow.classList.remove('hidden');
  mobileTechCurrentSlide--;
  technologies.style.transform = `translateX(-${
    mobileTechCurrentSlide * 100
  }vw)`;
  if (mobileTechCurrentSlide == 0) previousArrow.classList.add('hidden');
};

const marketingSlideSetValues = (slideNo, update = true) => {
  let subpageName = '#marketing-solutions';
  switch (slideNo) {
    case 0:
      marketingSolutionsArray = [0, 100, 200, 300];
      if (update) {
        pushToHistoryMarketingTile(marketingSolutionsArray, subpageName);
      }
      marketingSlideFromArr(marketingSolutionsArray);
      break;
    case 1:
      marketingSolutionsArray = [-100, 0, 100, 200];
      if (update) {
        pushToHistoryMarketingTile(marketingSolutionsArray, subpageName);
      }
      marketingSlideFromArr(marketingSolutionsArray);
      break;
    case 2:
      marketingSolutionsArray = [-200, -100, 0, 100];
      if (update) {
        pushToHistoryMarketingTile(marketingSolutionsArray, subpageName);
      }
      marketingSlideFromArr(marketingSolutionsArray);
      break;
    case 3:
      marketingSolutionsArray = [-300, -200, -100, 0];
      if (update) {
        pushToHistoryMarketingTile(marketingSolutionsArray, subpageName);
      }
      marketingSlideFromArr(marketingSolutionsArray);
      break;
  }
};

const pushToHistorySoftwareTile = (array, subpage) => {
  historyState.software = array;
  history.pushState(historyState, '', subpage);
};

const softwareDevelopmentSlideSetValues = (slideNo, update = true) => {
  let subpageName = '#software-development';
  switch (slideNo) {
    case 0:
      softwareDevelopmentArray = [0, 100, 200, 300, 400];
      if (update) {
        pushToHistorySoftwareTile(softwareDevelopmentArray, subpageName);
      }
      softwareSlideFromArr(softwareDevelopmentArray);
      break;
    case 1:
      softwareDevelopmentArray = [-100, 0, 100, 200, 300];
      if (update) {
        pushToHistorySoftwareTile(softwareDevelopmentArray, subpageName);
      }
      softwareSlideFromArr(softwareDevelopmentArray);
      break;
    case 2:
      softwareDevelopmentArray = [-200, -100, 0, 100, 200];
      if (update) {
        pushToHistorySoftwareTile(softwareDevelopmentArray, subpageName);
      }
      softwareSlideFromArr(softwareDevelopmentArray);
      break;
    case 3:
      softwareDevelopmentArray = [-300, -200, -100, 0, 100];
      if (update) {
        pushToHistorySoftwareTile(softwareDevelopmentArray, subpageName);
      }
      softwareSlideFromArr(softwareDevelopmentArray);
      break;
    case 4:
      softwareDevelopmentArray = [-400, -300, -200, -100, 0];
      if (update) {
        pushToHistorySoftwareTile(softwareDevelopmentArray, subpageName);
      }
      softwareSlideFromArr(softwareDevelopmentArray);
      break;
  }
};

backButtonMarketing.forEach((e) =>
  e.addEventListener('click', () => marketingSlideSetValues(0))
);
const checkIfMain = () => {
  if (marketingSolutionsArray[0] != 0) {
    marketingSlideSetValues(0);
  } else if (softwareDevelopmentArray[0] != 0) {
    softwareDevelopmentSlideSetValues(0);
  } else if (mobileTechCurrentSlide != 0) {
    mobileTechCurrentSlide = 0;
    previousArrow.classList.add('hidden');
    nextArrow.classList.remove('hidden');
    technologies.style.transform = `translateX(0)`;
  }
};

scrollManager.addEventListener('scroll', checkIfMain);

// Listen for scroll events
scrollManager.addEventListener(
  'scroll',
  function (event) {
    // console.log('is scrolling');
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      if (
        scrollManager.scrollTop < viewHeight - 10 &&
        historyState.currentPage != '#main-page'
      ) {
        historyState.currentPage = '#main-page';
        history.pushState(historyState, '', '/');
      } else if (
        scrollManager.scrollTop > viewHeight - 10 &&
        scrollManager.scrollTop < 2 * viewHeight - 10 &&
        historyState.currentPage != '#what-we-do'
      ) {
        historyState.currentPage = '#what-we-do';
        history.pushState(historyState, '', '#what-we-do');
      } else if (
        scrollManager.scrollTop > 2 * viewHeight - 10 &&
        scrollManager.scrollTop < 3 * viewHeight - 10 &&
        historyState.currentPage != '#marketing-solutions'
      ) {
        historyState.currentPage = '#marketing-solutions';
        history.pushState(historyState, '', '#marketing-solutions');
      } else if (
        scrollManager.scrollTop > 3 * viewHeight - 10 &&
        scrollManager.scrollTop < 4 * viewHeight - 10 &&
        historyState.currentPage != '#software-development'
      ) {
        historyState.currentPage = '#software-development';
        history.pushState(historyState, '', '#software-development');
      } else if (
        scrollManager.scrollTop > 4 * viewHeight - 10 &&
        scrollManager.scrollTop < 5 * viewHeight - 10 &&
        historyState.currentPage != '#about-us'
      ) {
        historyState.currentPage = '#about-us';
        history.pushState(historyState, '', '#about-us');
      } else if (
        scrollManager.scrollTop > 5 * viewHeight - 10 &&
        scrollManager.scrollTop < 6 * viewHeight - 10 &&
        historyState.currentPage != '#technologies'
      ) {
        historyState.currentPage = '#technologies';
        history.pushState(historyState, '', '#technologies');
      } else if (
        scrollManager.scrollTop > 6 * viewHeight - 10 &&
        scrollManager.scrollTop < 7 * viewHeight - 10 &&
        historyState.currentPage != '#contact_us'
      ) {
        historyState.currentPage = '#contact_us';
        history.pushState(historyState, '', '#contact_us');
      }
    }, 66);
  },
  false
);

window.addEventListener('resize', () => {
  viewHeight = window.innerHeight;
});

window.onpopstate = function (e) {
  softwareDevelopmentSlideSetValues(Math.abs(e.state.software[0] / 100), false);
  marketingSlideSetValues(Math.abs(e.state.marketing[0] / 100), false);
  const element = document.getElementById(e.state.currentPage.substring(1));
  element.scrollIntoView({ behavior: 'smooth' });
  historyState.currentPage = e.state.currentPage;
};
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
