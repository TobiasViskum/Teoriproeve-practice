import React, { useEffect, useState } from "react";
import { bell } from "../assets";
import { twJoin } from "tailwind-merge";

const Bell = () => {
  const [permission, setPermission] = useState<
    "granted" | "default" | "denied"
  >("default");

  const subscribe = () => {
    try {
      Notification.requestPermission().then((result) => {
        setPermission(result);
      });
    } catch (err) {
      console.log("Couldn't ask for notification permission");
    }
  };

  // useEffect(() => {
  //   if (
  //     Notification.permission &&
  //     typeof Notification.permission === "string"
  //   ) {
  //     setPermission(Notification.permission);
  //   }
  // }, []);

  return (
    <>
      <img
        onClick={subscribe}
        src={bell}
        alt="bell"
        className={twJoin(
          "fixed top-4 right-4 w-8 h-8",
          permission === "granted" ? "" : "animate-bounce"
        )}
      />
    </>
  );
};

export default Bell;
