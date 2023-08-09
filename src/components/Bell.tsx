import React, { useEffect, useState } from "react";
import { bell } from "../assets";
import { twJoin } from "tailwind-merge";

const Bell = () => {
  // const [permission, setPermission] = useState(
  //   Notification.permission || "default"
  // );

  // const subscribe = () => {
  //   Notification.requestPermission().then((result) => {
  //     setPermission(result);
  //   });
  // };

  return (
    <>
      <img
        // onClick={subscribe}
        src={bell}
        alt="bell"
        className={twJoin(
          "fixed top-4 right-4 w-8 h-8"
          // permission === "granted" ? "" : "animate-bounce"
        )}
      />
    </>
  );
};

export default Bell;
