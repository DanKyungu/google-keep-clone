import React from 'react';

const Button = ({ title, children, classes, clicked, texted, small }) => {
  if (texted) {
    return (
      <button
        className={`flex flex-shrink-0 text-gray-800 font-bold items-center px-4 py-1 hover:bg-gray-200 ${classes}`}
        onClick={clicked}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className={`flex flex-shrink-0 items-center justify-center ${
          small ? 'h-8 w-8' : 'h-10 w-10'
        } rounded-full hover:bg-gray-200 ${classes}`}
        onClick={clicked}
      >
        {children}
      </button>
    );
  }
};

export default Button;
