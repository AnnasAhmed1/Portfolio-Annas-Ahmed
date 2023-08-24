import React, { JSXElementConstructor } from "react";
// interface ButtonProps {
//   text: string;
//   // Add more props here if needed
// }

const ButtonComp = ({
  text = "",
  transparent = false,
  center = false,
  color = "customPrimary",
  icon = <div />,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${!transparent ? `bg-${color} text-customLight` : `text-${color}`}
      ${center ? "mx-auto" : null}
      mx-auto
      block
      border-2
      py-[0.8rem]
      px-[2.6rem]
      border-customPrimary
      rounded-[50rem]
      font-medium
      ${className}
    `}
    >
      {text}
      {icon}
    </button>
  );
};
// ButtonComp.defaultProps = {
//   text: "Default Text",
// };

export default ButtonComp;
