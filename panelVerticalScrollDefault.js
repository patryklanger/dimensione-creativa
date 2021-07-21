const checkIfSolutionsMain = () => {
  if (marketingSolutionsArray[0] != 0) marketingSlideSetValues(0);
};
const checkIfSoftwareMain = () => {
  if (softwareDevelopmentArray[0] != 0) softwareDevelopmentSlideSetValues(0);
};

window.addEventListener('scroll', (e) => {
  if (
    window.pageYOffset < 1.5 * viewHeight ||
    window.pageYOffset > 2.5 * viewHeight
  )
    checkIfSolutionsMain();
  if (
    window.pageYOffset < 2.5 * viewHeight ||
    window.pageYOffset > 3.5 * viewHeight
  )
    checkIfSoftwareMain();
});
