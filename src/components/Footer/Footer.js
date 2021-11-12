import React from "react";

function Footer() {
  return (
    <ul className="flex justify-around">
      <li className="mt-4 mb-4">
        <button className="hover:text-white w-28 hover:bg-blue-400">
          <a href="mailto: raghavananth02@gmail.com">Email</a>
        </button>
      </li>
      <li className="mt-4 mb-4">
        <button className="hover:text-white w-28 hover:bg-blue-400">
          <a href="https://github.com/ananth243" target="_blank" rel="noreferrer">Github</a>
        </button>
      </li>
      <li className="mt-4 mb-4">
        <strong>Copyrights @Reserved</strong>
      </li>
    </ul>
  );
}

export default Footer;
