import React from "react";

import Bicycle1 from "../assets/bicycle1.jpeg";

import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <span>Header</span>
      </div>
      <div className={styles.menu}>
        <a className={styles.menuItem}>Bike 1</a>
        <a className={styles.menuItem}>Bike 2</a>
        <a className={styles.menuItem}>Bike 3</a>
      </div>
      <div className={styles.content}>
        <div className="flex flex-col w-full">
          <div className="flex-1 p-4 flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={Bicycle1} className="rounded-xl" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full p-4">Footer</div>
        </div>
      </div>
    </div>
  );
};
