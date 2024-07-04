import React from 'react'

type Props = {
  text: string; // Define a prop 'text' of type string
};

const GradientText = ({text}: Props) => {
  return (
    <span className="bg-gradient-to-r from-primary-300 to-primary-900 text-transparent bg-clip-text">
      {text}
    </span>
  );
}

export default GradientText