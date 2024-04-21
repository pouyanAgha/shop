import React, { useState } from 'react';

import LiMenu from './LiMenu';

const LiItem = ({ text1, text2, text3, text4, text5, children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const removeHidden = () => {
    setIsHidden(false);
  };

  const addHidden = () => {
    setIsHidden(true);
  };
  return (
    <div>
      <li className="h-[5vh] w-40 list-none bg-yellow-400 text-3xl font-semibold text-black">
        <a
          href="http://www.google.com"
          className="flex h-[5vh] w-full items-center justify-center hover:bg-lime-500"
          onMouseEnter={removeHidden}
          onMouseLeave={addHidden}
        >
          {children}
        </a>
        <div
          onMouseEnter={removeHidden}
          onMouseLeave={addHidden}
          className={isHidden ? 'hidden' : 'bg-black text-yellow-500'}
        >
          <LiMenu name={text1}>{text1}</LiMenu>
          <LiMenu name={text2}>{text2}</LiMenu>
          <LiMenu name={text3}>{text3}</LiMenu>
          <LiMenu name={text4}>{text4}</LiMenu>
          <LiMenu name={text5}>{text5}</LiMenu>
        </div>
      </li>
    </div>
  );
};

export default LiItem;
