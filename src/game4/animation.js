export const createAnimation = (element1, element2) => {
  let flip = element1.animate(
    [
      { transform: "rotate(0) scale(0.7)" },
      { transform: "rotate(0) scale(0.7)", offset: 0.9 },
      { transform: "rotate(180deg) scale(0.7)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
    }
  );

  let fill = element2.animate(
    [
      {
        clipPath: `polygon(
    0% 0%,
    100% 0%,
    100% 24%,
    50% 47%,
    50% 47%,
    50% 47%,
    50% 47%,
    50% 47%,
    50% 47%,
    50% 47%,
    50% 47%,
    0% 24%
  )`,
      },
      {
        clipPath: `polygon(
    0% 4%,
    100% 4%,
    100% 24%,
    55% 45%,
    55% 100%,
    55% 100%,
    55% 100%,
    45% 100%,
    45% 100%,
    45% 100%,
    45% 45%,
    0% 24%
  )`,
        offset: 0.1,
      },
      {
        clipPath: `polygon(
    0% 24%,
    100% 24%,
    100% 24%,
    55% 45%,
    55% 80%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%,
    45% 80%,
    45% 45%,
    0% 24%
  )`,
        offset: 0.45,
      },
      {
        clipPath: `polygon(
    45% 45%,
    55% 45%,
    55% 45%,
    55% 45%,
    55% 58%,
    100% 76%,
    100% 100%,
    0% 100%,
    0% 76%,
    45% 58%,
    45% 45%,
    45% 45%
  )`,
        offset: 0.8,
      },
      {
        clipPath: `polygon(
    50% 53%,
    50% 53%,
    50% 53%,
    50% 53%,
    50% 53%,
    100% 76%,
    100% 100%,
    0% 100%,
    0% 76%,
    50% 53%,
    50% 53%,
    50% 53%
  )`,
        offset: 0.85,
      },
      {
        clipPath: `polygon(
    50% 53%,
    50% 53%,
    50% 53%,
    50% 53%,
    50% 53%,
    100% 76%,
    100% 100%,
    0% 100%,
    0% 76%,
    50% 53%,
    50% 53%,
    50% 53%
  )`,
      },
    ],
    {
      duration: 8000,
      easing: "linear",
    }
  );

  fill.pause();
  flip.pause();

  return [flip, fill];
};

export const moveIn = (element) => {
  const moveIn = element.animate(
    [
      {
        transform: "translateX(100vw)",
      },
      { transform: "translateX(0vw)" },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  return moveIn;
};

export const moveOut = (element) => {
  const moveOut = element.animate(
    [
      {
        transform: "translateX(0vw)",
      },
      {
        transform: "translateX(-100vw)",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  return moveOut;
};
