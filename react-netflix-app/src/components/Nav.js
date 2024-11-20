import React, { useEffect, useState } from "react";

export default function Nav() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav
      className={`${
        show ? "bg-black" : ""
      }   fixed w-full h-24 p-10 z-10 flex justify-between items-center ease-in duration-400`}
    >
      <img
        alt="netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        className="fixed left-10 h-12 object-contain"
        onClick={() => {
          window.location.reload();
        }}
      />
      <img
        alt="user logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        className="fixed right-10 h-14 object-contain"
      />
    </nav>
  );
}
