import React, { useState } from "react";

import Bicycle1 from "../assets/bicycle1.jpeg";

import styles from "./App.module.css";

const bikes = [
  {
    name: 'Bike 1',
    imageURL: Bicycle1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Bike 2',
    imageURL: Bicycle1,
    description: 'Bike 2 description',
  },
  {
    name: 'Bike 3',
    imageURL: Bicycle1,
    description: 'Bike 3 description',
  }
]

export const App = () => {
  const [bikeIndex, setBikeIndex] = useState(0);
  const currentBike = bikes[bikeIndex];

  const handleMenuClick = (index) => {
    setBikeIndex(index);
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <span>Header</span>
      </div>
      <div className={styles.menu}>
        {bikes.map((bike, index) => (
          <button 
            key={bike.name} 
            className={styles.menuItem}
            onClick={() => handleMenuClick(index)}
          >
            {bike.name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <div className="flex flex-col w-full">
          <div className="flex-1 p-4 flex justify-center">
            <div className="flex flex-col gap-4 max-w-[1200px]">
              <div>{currentBike.name}</div>
              <div className="flex justify-center">
                <img src={currentBike.imageURL} className="rounded-xl" />
              </div>
              <p>{currentBike.description}</p>
            </div>
          </div>
          <div className="w-full p-4 flex justify-center">
            <div className="max-w-[1200px]">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
