import React from "react";

const Stickman = () => {
  return (
    <svg
      width="72"
      height="142"
      viewBox="0 0 72 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stickman"
    >
      <circle cx="28.5082" cy="23.601" r="22.7226" fill="#BBC0C3" />
      <circle cx="30.051" cy="78.7761" r="29.9021" fill="#BBC0C3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0163 68.1457L25.4524 67.7656L23.5896 134.24C23.4993 134.641 23.4478 135.058 23.4393 135.485C23.3707 138.917 26.097 141.755 29.5287 141.823L38.0685 141.994C41.5002 142.063 44.3378 139.336 44.4063 135.905C44.4749 132.473 41.7486 129.635 38.3169 129.567L37.2956 129.546L39.0163 68.1457Z"
        fill="#BBC0C3"
        className="leg leg-left"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0163 68.1457L25.4524 67.7656L23.5896 134.24C23.4993 134.641 23.4478 135.058 23.4393 135.485C23.3707 138.917 26.097 141.755 29.5287 141.823L38.0685 141.994C41.5002 142.063 44.3378 139.336 44.4063 135.905C44.4749 132.473 41.7486 129.635 38.3169 129.567L37.2956 129.546L39.0163 68.1457Z"
        fill="#BBC0C3"
        className="leg leg-right"
      />
      <rect
        x="30.5913"
        y="70.3535"
        width="44.7174"
        height="12.7134"
        rx="6.35669"
        transform="rotate(-43.3887 30.5913 70.3535)"
        fill="#BBC0C3"
      />
    </svg>
  );
};

export default Stickman;
