import React from "react";
// interface ButtonProps {
//   text: string;
//   // Add more props here if needed
// }

const ButtonComp = ({
  text = "",
  transparent = false,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      className={`
      ${
        !transparent
          ? "bg-customPrimary text-customLight"
          : "text-customPrimary"
      }
      border-2
      py-[0.8rem]
      px-[2.6rem]
      border-customPrimary
      rounded-[50rem]
      w-[150px]/
      h-[60px]/
      font-medium
      ${className}
    `}
    >
      {text}
    </button>
  );
};
// ButtonComp.defaultProps = {
//   text: "Default Text",
// };

export default ButtonComp;
