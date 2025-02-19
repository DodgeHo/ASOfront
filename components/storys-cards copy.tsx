"use client";
import React, { useState } from 'react';
import { FaChevronLeft , FaChevronRight  } from 'react-icons/fa';

export default function StorysCards() {
  /**
   * NavList初始化tabs内的数据
   * NavListIndex初始化tabs在第一个
   * ChangeClickLeftFun点击左边箭头移动一个
   */
  const [NavList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [NavListIndex, SetNavListIndex] = useState(0);
  const ChangeClickLeftFun = () => {
    if (NavListIndex === 0) { } else {
      var Index = NavListIndex;
      Index--;
      SetNavListIndex(Index);
    }
  };
  const ChangeClickRightFun = () => {
    if (NavListIndex < NavList.length - 3) {
      var Index = NavListIndex;
      Index++;
      SetNavListIndex(Index);
    } else { }
  };

  return (
    <div className='SliderBarBigBox'>
      <div className='Arrow' onClick={() => { ChangeClickLeftFun() }}>
        <FaChevronLeft  />
      </div>
      <div className='NavBigBox'>
        <div className='NavList' style={{ left: -1 * 440 * NavListIndex + 'px' }}>
          {NavList.map((item, index) =>
            <div key={index} className='NavOne' ref={React.createRef<HTMLDivElement>()}>{item}</div>
          )}
        </div>
      </div>
      <div className='Arrow' onClick={() => { ChangeClickRightFun() }}>
        <FaChevronRight  />
      </div>
    </div>
  );
}