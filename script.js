'use strict';
const sections = document.querySelectorAll('.section--child');
const aboutUs1 = document.getElementById('about-us');
const aboutUs2 = document.getElementById('about-us2');
const aboutUs3 = document.getElementById('process');
const caseStudySections = document.querySelectorAll('.casestudy--part');
const linkedinLink = document.querySelectorAll('.linkedin--link');
const facebookLink = document.querySelectorAll('.facebook--link');
const portfolioLink = document.querySelectorAll('.portfolio--link');
const scrollManager = document.querySelector('.scroll--manager');
const portfolioLinkMobile = document.querySelectorAll(
  '.portfolio--link--mobile'
);
let currentCaseStudy = 1;
const blogLink = document.querySelectorAll('.blog--link');
let isScrolling = false;

let mobileTechCurrentSlide = 0;
const modalExitButton = document.querySelector('.round--button--blue');
const nextArrow = document.querySelector('.next_arrow');
const previousArrow = document.querySelector('.previous_arrow');

const animationArray = [];

const technologiesAnimation = document.querySelector(
  '.center--container--technologies'
);
const aboutUs2Animation = document.querySelector('.animate_me_aboutus2');
const aboutUs3Animation = document.querySelector('.animate_me_aboutus3');
const creator1Animation = document.querySelectorAll('.creator1--animate--me');
const creator2Animation = document.querySelectorAll('.creator2--animate--me');
const caseStudyAnimation = document.querySelectorAll('.casestudy--animate--me');
const trustedusAnimation = document.querySelectorAll('.trustedus--animate');
const teamAnimation = document.querySelectorAll('.team--animate--me');
const pricingAnimation = document.querySelectorAll('.pricing--animate--me');
const aboutUs3AnimationTiles = document.querySelector('.about--us2--tiles');
const aboutUs4Animation = document.querySelector('.about_us3_animate');
const radioForm = document.getElementsByName('help--category');
const mainPageLeft = document.querySelector('.left--container_main_content');
const blogSectionLeft = document.querySelector('.blog-section-left');
const whatWeDoAnimation = document.querySelector('.left--container_what_we_do');
const technologies = document.querySelector('.technologies--grid');
const nextSectionButtonArr = document.querySelectorAll('.scroll--down');
const whatWeDoButton = document.querySelector('.button--to_what_we_do');
const blogButton = document.querySelector('.button--blog');
const whatWeDoSection = document.getElementById('what-we-do');
const softwareDevSection = document.getElementById('software-development');
const softwareTile = document.querySelector('.link--tile--right');
const marketingTile = document.querySelector('.link--tile--left');
const marketingSoulutionsSection = document.getElementById(
  'marketing-solutions'
);
const yellowBoxAnimation = document.querySelector('.yellow--box--center');
const softwareDevAnim = document.querySelector(
  '.page--primary--software_development'
);
const rightContainerWhatWeDo = document.querySelector(
  '.right--container_what_we_do_grid'
);
const backButtonMarketing = document.querySelectorAll(
  '.back--button_marketing'
);
const menu = document.querySelector('.menu--container');
const header = document.querySelector('.header--container');
const menuButton = document.querySelector('.header--button');
const backButtonSoftware = document.querySelectorAll('.back--button_sd');
const marketingSubpages = document.querySelectorAll('.marketing--subpages');
const softwareDevelopmentSubpages = document.querySelectorAll('.sd--subpages');
const contactForm = document.querySelector('.contact--form--actual');
const strategyDivClicker = document.querySelector(
  '.subcategory--title_strategy'
);
const menuLinks = document.querySelectorAll('.menu-link');
const designDivClicker = document.querySelector('.subcategory--title_design');
const designButton = document.querySelector('.subpage--button_design');
const uxuiDivClicker = document.querySelector('.subcategory--title_uxui');
const uxuiButton = document.querySelector('.subpage--button_uxui');
const eshopsButton = document.querySelector('.subpage--button_eshops');
const websitesButton = document.querySelector('.subpage--button_webistes');
const softwareButton = document.querySelector('.subpage--button_software');
const sdMobileTile = document.querySelector('.sd--tile--title_mobile');
const sdEshopTile = document.querySelector('.sd--tile--title_eshop');
const sdWebsitesTile = document.querySelector('.sd--tile--title_websites');
const sdSoftwareTile = document.querySelector('.sd--tile--title_software');
const nextCaseStudyButtons = document.querySelectorAll('.next--case--study');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  header.classList.toggle('menu--active');
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
      console.log('here');
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

const animationElementsArray = [
  whatWeDoAnimation,
  aboutUs2Animation,
  technologiesAnimation,
];
const menuSections = document.querySelectorAll('.menu--child');
portfolioLink.forEach((e) =>
  e.addEventListener('click', () => {
    window
      .open('https://www.intonewdimension.com/presentation', '_blank')
      .focus();
  })
);
let currentCaseStudyOffset = [];
function caseStudyInit() {
  nextCaseStudyButtons.forEach((e) =>
    e.addEventListener('click', () => {
      if (currentCaseStudy <= caseStudySections.length) {
        currentCaseStudy++;
        var tempOffsetArr = currentCaseStudyOffset.map((e) => e - 100);
        currentCaseStudyOffset = tempOffsetArr;
        for (let i = 0; i < caseStudySections.length; i++) {
          caseStudySections[i].style.transform =
            'translateX(' + currentCaseStudyOffset[i] + 'vw)';
        }
      }
    })
  );
  let i = 0;
  caseStudySections.forEach((e) => {
    e.classList.add('casestudy' + i);
    e.style.transform = 'translateX(' + i * 100 + 'vw)';
    currentCaseStudyOffset.push(i * 100);
    i++;
  });
}

function resetCaseStudy() {
  currentCaseStudy = 0;
  var tempOffsetArr = [];
  for (let i = 0; i < caseStudySections.length; i++) {
    tempOffsetArr.push(i * 100);
    caseStudySections[i].style.transform = 'translateX(' + i * 100 + 'vw)';
  }
  currentCaseStudyOffset = tempOffsetArr;
}
document.querySelectorAll('.back--button_casestudies').forEach((e) => {
  e.addEventListener('click', () => {
    resetCaseStudy();
  });
});
caseStudyInit();

portfolioLinkMobile.forEach((e) =>
  e.addEventListener('click', () => {
    menu.classList.toggle('active'),
      header.classList.toggle('menu--active'),
      window
        .open('https://www.intonewdimension.com/presentation', '_blank')
        .focus();
  })
);

blogLink.forEach((e) =>
  e.addEventListener('click', () => {
    window.open('https://blog.intonewdimension.com', '_blank').focus();
  })
);

facebookLink.forEach((e) =>
  e.addEventListener('click', () => {
    window
      .open(
        'https://www.facebook.com/Dimensione.CreativaSoftwareHouse',
        '_blank'
      )
      .focus();
  })
);

const strategyClicked = () => {
  marketingSoulutionsSection.scrollIntoView();
  setTimeout(marketingSlideSetValues, 1000, 1);
};
const designClicked = () => {
  marketingSoulutionsSection.scrollIntoView();
  setTimeout(marketingSlideSetValues, 1000, 2);
};
const productDesignClicked = () => {
  marketingSoulutionsSection.scrollIntoView();
  setTimeout(marketingSlideSetValues, 1000, 3);
};
const mobileAppClicked = () => {
  softwareDevSection.scrollIntoView();
  setTimeout(softwareDevelopmentSlideSetValues, 1000, 1);
};
const eShopClicked = () => {
  softwareDevSection.scrollIntoView();
  setTimeout(softwareDevelopmentSlideSetValues, 1000, 2);
};
const websitesClicked = () => {
  softwareDevSection.scrollIntoView();
  setTimeout(softwareDevelopmentSlideSetValues, 1000, 3);
};
const dedicatedClicked = () => {
  softwareDevSection.scrollIntoView();
  setTimeout(softwareDevelopmentSlideSetValues, 1000, 4);
};

linkedinLink.forEach((e) =>
  e.addEventListener('click', () => {
    window
      .open('https://www.linkedin.com/company/dimensionecreativa', '_blank')
      .focus();
  })
);
let sectionHeights = [];
function countHeights() {
  sectionHeights = [];
  let tempMaxHeight = 0;
  sections.forEach((e) => {
    let actualSectionHeight = e.offsetHeight;
    tempMaxHeight += actualSectionHeight;
    sectionHeights.push(tempMaxHeight);
  });
}
countHeights();

let caseStudyTimer;
let marketingSolutionsArray = [0, 100, 200, 300];
let softwareDevelopmentArray = [0, 100, 200, 300, 400];
const historyState = {
  marketing: marketingSolutionsArray,
  software: softwareDevelopmentArray,
  currentPage: '#main-page',
};
const menuLinksDeactivate = () => {
  menuLinks.forEach((e) => {
    e.classList.remove('activelink');
  });
};
const deactivateAllAnimations = () => {
  whatWeDoAnimation.classList.remove('active');
  if (mainPageLeft.classList.contains('active'))
    mainPageLeft.classList.remove('active');
  blogSectionLeft.classList.remove('active');
  technologiesAnimation.classList.remove('active--technologies');
  menuLinksDeactivate();
  softwareDevAnim.classList.remove('active');
  aboutUs2Animation.classList.remove('active');
  aboutUs3Animation.classList.remove('active');
  aboutUs3AnimationTiles.classList.remove('active');
  aboutUs4Animation.classList.remove('active');
  yellowBoxAnimation.classList.remove('active');
  creator1Animation.forEach((e) => e.classList.remove('active'));
  creator2Animation.forEach((e) => e.classList.remove('active'));
  teamAnimation.forEach((e) => e.classList.remove('active'));
  caseStudyAnimation.forEach((e) => e.classList.remove('active'));
  pricingAnimation.forEach((e) => e.classList.remove('active'));
  // trustedusAnimation.forEach((e) => e.classList.remove('active'));
};

function checkAndAnimate(element, mobile = false) {
  if (
    element < sectionHeights[0] - 10 &&
    historyState.currentPage != '#main-page'
  ) {
    historyState.currentPage = '#main-page';
    history.pushState(historyState, '', '/');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    mainPageLeft.classList.add('active');
    menuLinks[0].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 0;
    resetCaseStudy();
  } else if (
    element > sectionHeights[0] - 10 &&
    element < sectionHeights[1] - 10 &&
    historyState.currentPage != '#casestudy'
  ) {
    historyState.currentPage = '#casestudy';
    history.pushState(historyState, '', '#casestudy');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    caseStudyAnimation.forEach((e) => e.classList.add('active'));
    menuLinks[1].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
    countHeights();
  } else if (
    element > sectionHeights[1] - 10 &&
    element < sectionHeights[2] - 10 &&
    historyState.currentPage != '#opinions'
  ) {
    historyState.currentPage = '#opinions';
    history.pushState(historyState, '', '#opinions');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[2].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
    resetCaseStudy();
  } else if (
    element > sectionHeights[2] - 10 &&
    element < sectionHeights[3] - 10 &&
    historyState.currentPage != '#partners'
  ) {
    historyState.currentPage = '#partners';
    history.pushState(historyState, '', '#partners');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[3].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  }
  // else if (
  //   element > sectionHeights[3] - 10 &&
  //   element < sectionHeights[4] - 10 &&
  //   historyState.currentPage != '#partners2'
  // ) {
  //   historyState.currentPage = '#partners2';
  //   history.pushState(historyState, '', '#partners2');
  //   if (!mobile) {
  //     deactivateAllAnimations();
  //   } else {
  //     menuLinksDeactivate();
  //   }
  //   menuLinks[3].classList.add('activelink');
  //   trustedusAnimation.forEach((e) => {
  //     e.classList.add('active');
  //   });
  // }
  else if (
    element > sectionHeights[3] - 10 &&
    element < sectionHeights[4] - 10 &&
    historyState.currentPage != '#what-we-do'
  ) {
    historyState.currentPage = '#what-we-do';
    history.pushState(historyState, '', '#what-we-do');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    whatWeDoAnimation.classList.add('active');
    menuLinks[4].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[4] - 10 &&
    element < sectionHeights[5] - 10 &&
    historyState.currentPage != '#marketing-solutions'
  ) {
    historyState.currentPage = '#marketing-solutions';
    history.pushState(historyState, '', '#marketing-solutions');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[4].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[5] - 10 &&
    element < sectionHeights[6] - 10 &&
    historyState.currentPage != '#software-development'
  ) {
    historyState.currentPage = '#software-development';
    history.pushState(historyState, '', '#software-development');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[4].classList.add('activelink');
    softwareDevAnim.classList.add('active');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[6] - 10 &&
    element < sectionHeights[7] - 10 &&
    historyState.currentPage != '#about-us'
  ) {
    historyState.currentPage = '#about-us';
    history.pushState(historyState, '', '#about-us');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    // menuLinks[2].classList.add('activelink');
    aboutUs2Animation.classList.add('active');
    document.querySelector('.header--background').style.opacity = 1;
    yellowBoxAnimation.classList.add('active');
    menuLinks[8].classList.add('activelink');
  } else if (
    element > sectionHeights[7] - 10 &&
    element < sectionHeights[8] - 10 &&
    historyState.currentPage != '#about-us2'
  ) {
    historyState.currentPage = '#about-us2';
    history.pushState(historyState, '', '#about-us2');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    aboutUs3Animation.classList.add('active');
    // menuLinks[4].classList.add('activelink');
    aboutUs3AnimationTiles.classList.add('active');
    menuLinks[8].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[8] - 10 &&
    element < sectionHeights[9] - 10 &&
    historyState.currentPage != '#process'
  ) {
    historyState.currentPage = '#process';
    history.pushState(historyState, '', '#process');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    // menuLinks[2].classList.add('activelink');
    aboutUs4Animation.classList.add('active');
    menuLinks[5].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[9] - 10 &&
    element < sectionHeights[10] - 10 &&
    historyState.currentPage != '#pricing'
  ) {
    historyState.currentPage = '#pricing';
    history.pushState(historyState, '', '#pricing');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[6].classList.add('activelink');
    pricingAnimation.forEach((e) => e.classList.add('active'));
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[10] - 10 &&
    element < sectionHeights[11] - 10 &&
    historyState.currentPage != '#technologies'
  ) {
    historyState.currentPage = '#technologies';
    history.pushState(historyState, '', '#technologies');
    if (!mobile) {
      menuLinksDeactivate();
      deactivateAllAnimations();
    }
    menuLinks[7].classList.add('activelink');
    technologiesAnimation.classList.add('active--technologies');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[11] - 10 &&
    element < sectionHeights[12] - 10 &&
    historyState.currentPage != '#creator1'
  ) {
    historyState.currentPage = '#creator1';
    history.pushState(historyState, '', '#creator1');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    creator1Animation.forEach((e) => e.classList.add('active'));
    document.querySelector('.header--background').style.opacity = 1;
    menuLinks[9].classList.add('activelink');
  } else if (
    element > sectionHeights[12] - 10 &&
    element < sectionHeights[13] - 10 &&
    historyState.currentPage != '#creator2'
  ) {
    historyState.currentPage = '#creator2';
    history.pushState(historyState, '', '#creator2');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    creator2Animation.forEach((e) => e.classList.add('active'));
    menuLinks[9].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[13] - 10 &&
    element < sectionHeights[14] - 10 &&
    historyState.currentPage != '#team'
  ) {
    historyState.currentPage = '#team';
    history.pushState(historyState, '', '#team');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    teamAnimation.forEach((e) => e.classList.add('active'));
    menuLinks[10].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[14] - 10 &&
    element < sectionHeights[15] - 10 &&
    historyState.currentPage != '#blog'
  ) {
    historyState.currentPage = '#blog';
    history.pushState(historyState, '', '#blog');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    blogSectionLeft.classList.add('active');
    menuLinks[11].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[15] - 10 &&
    element < sectionHeights[16] - 10 &&
    historyState.currentPage != '#contact_us'
  ) {
    historyState.currentPage = '#contact_us';
    history.pushState(historyState, '', '#contact_us');
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
    menuLinks[12].classList.add('activelink');
    document.querySelector('.header--background').style.opacity = 1;
  } else if (
    element > sectionHeights[16] - 10 &&
    element < sectionHeights[17] - 10 &&
    historyState.currentPage != '#footer'
  ) {
    historyState.currentPage = '#footer';
    history.pushState(historyState, '', '#footer');
    document.querySelector('.header--background').style.opacity = 1;
    if (!mobile) {
      deactivateAllAnimations();
    } else {
      menuLinksDeactivate();
    }
  }
}

const queryStrings = [
  '#main-page',
  '#casestudy',
  '#opinions',
  '#partners',
  '#what-we-do',
  '#marketing-solutions',
  '#software-development',
  '#about-us',
  '#about-us2',
  '#process',
  '#pricing',
  '#technologies',
  '#creator1',
  '#creator2',
  '#team',
  '#blog',
  '#contact_us',
  '#footer',
];
let queryString = '';
let currentPage = '';
let viewHeight = window.innerHeight;
const params = new URLSearchParams(window.location.search);
if (params.has('marketing')) {
  let num = params.get('marketing');
  switch (num) {
    case '1':
      strategyClicked();
      break;
    case '2':
      designClicked();
      break;
    case '3':
      productDesignClicked();
      break;
    default:
  }
} else if (params.has('software')) {
  let num = params.get('software');
  switch (num) {
    case '1':
      mobileAppClicked();
      break;
    case '2':
      eShopClicked();
      break;
    case '3':
      websitesClicked();
      break;
    case '4':
      dedicatedClicked();
      break;
    default:
  }
} else {
  if (window.location.hash == '' || window.location.hash == '#')
    menuLinks[0].classList.add('activelink');
  if (queryStrings.includes(window.location.hash)) {
    queryString = window.location.hash;
  } else queryString = '#main-page';
  sections[queryStrings.indexOf(queryString)].scrollIntoView();
}
checkAndAnimate(scrollManager.scrollTop);

currentPage = queryString;

document
  .querySelector('.button--write--to--us--mobile')
  .addEventListener('click', () => {
    window.location = '/contact.html';
  });

nextArrow.addEventListener('click', () => {
  nextSlideTech();
});
for (let [index, val] of menuLinks.entries()) {
  val.addEventListener('click', () => {
    if (index > 1 && index < 3)
      animationElementsArray[index - 1].classList.add('active');
    menu.classList.toggle('active');
    header.classList.toggle('menu--active');
  });
}
setTimeout(() => {
  menu.style.transition = 'transform ease-in 0.5s';
}, 250);

previousArrow.addEventListener('click', () => {
  previousSlideTech();
});
modalExitButton.addEventListener('click', () => {
  const modal = document.querySelector('.thank--you--modal--center');

  modal.classList.remove('thank--you--modal_active');
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
  setTimeout(() => {
    history.pushState(historyState, '', '#what-we-do');
    whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    whatWeDoAnimation.classList.add('active');
  }, 500);
});

blogButton.addEventListener('click', () => {
  setTimeout(() => {
    window.open('https://blog.intonewdimension.com', '_self');
  }, 500);
});

nextSectionButtonArr.forEach((button) => {
  button.addEventListener('click', (e) => {
    const element = e.target.closest('section').nextSibling.nextSibling;
    element.scrollIntoView({ behavior: 'smooth' });
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

setTimeout(() => mainPageLeft.classList.add('active'), 1000);
mainPageLeft.classList.add('active');

scrollManager.addEventListener('scroll', checkIfMain);
window.addEventListener('scroll', checkIfMain);

window.addEventListener(
  'scroll',
  function (event) {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      checkAndAnimate(window.scrollY + window.innerHeight / 2, true);
    }, 66);
  },
  false
);
function checkAndAnimateDesktop() {
  checkAndAnimate(scrollManager.scrollTop);
}
// Listen for scroll events
scrollManager.addEventListener(
  'scroll',
  function (event) {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(checkAndAnimateDesktop, 66);
  },
  false
);

window.addEventListener('resize', () => {
  countHeights();
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

contactForm.addEventListener('submit', (e) => {
  const modal = document.querySelector('.thank--you--modal--center');
  let formRadio = '';
  for (var i = 0, length = radioForm.length; i < length; i++) {
    if (radioForm[i].checked) {
      // do whatever you want with the checked radio
      formRadio = radioForm[i].value;
      // only one radio can be logically checked, don't check the rest
    }
  }
  e.preventDefault();
  const body = {
    company: document.querySelector('.contact--form--company--input').value,
    name: document.querySelector('.contact--form--name--input').value,
    phone: document.querySelector('.contact--form--phone--input').value,
    mail: document.querySelector('.contact--form--mail--input').value,
    helpCategory: formRadio,
    message: document.getElementById('contact--form--message').value,
  };
  const mailBody = {
    type: body.helpCategory,
    name: body.name,
    company: body.company,
    phoneNumber: body.phone,
    eMail: body.mail,
    message: body.message,
  };
  const send_button = document.querySelector('.button_send-message');
  var particles = new Particles(send_button);
  particles.disintegrate({
    direction: 'top',
    complete: () => particles.integrate({ duration: 0 }),
  });

  setTimeout(() => {
    document.querySelector('.contact--form--company--input').value = '';
    document.querySelector('.contact--form--name--input').value = '';
    document.querySelector('.contact--form--phone--input').value = '';
    document.querySelector('.contact--form--mail--input').value = '';
    document.getElementById('contact--form--message').value = '';
    modal.classList.add('thank--you--modal_active');
    for (var i = 0, length = radioForm.length; i < length; i++) {
      if (radioForm[i].checked) {
        // do whatever you want with the checked radio
        radioForm[i].checked = false;
        // only one radio can be logically checked, don't check the rest
      }
    }
  }, 1000);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://formsubmit.co/ajax/biuro@jazwiec.art');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(mailBody));
});
function openInstagram() {
  window
    .open('https://www.instagram.com/dimensione.creativa', '_blank')
    .focus();
}
