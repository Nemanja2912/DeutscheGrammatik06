const moveFunc = (element, target, transition) => {
  const elementX = element.getBoundingClientRect().left;
  const elementY = element.getBoundingClientRect().top;

  const styleX = parseFloat(element.style.left);
  const styleY = parseFloat(element.style.top);

  element.style.transition = `${transition}ms linear`;

  element.style.left =
    target.getBoundingClientRect().left - elementX - styleX + "px";

  element.style.top =
    target.getBoundingClientRect().top - elementY - styleY + "px";
};

export default moveFunc;
