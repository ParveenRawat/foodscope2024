import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-green">
      <div className="p-2 flex flex-row justify-between items-center ">
        <div>
          <img
            className="pl-6"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="m-auto px-10">
          <p className="text-3xl text-center font-bold max-w-lg text-jade">
            AT Recipe.Org we strive to make the best recipes available to you
            from around the world
          </p>
        </div>
        <div className="flex flex-row gap-10 p-10 m-5">
          <div className="">
            <h2 className="font-bold text-forest">Important Links</h2>
            <ul className="text-jade">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-forest">Follow Us</h2>
            <ul className="text-jade">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-forest text-[#F6FCDF] flex flex-row justify-between">
        <div className="px-10">&copy; 2024 All Rights Reserved</div>

        <div className="px-16">Recipe.Org</div>
      </div>
    </div>
  );
};

export default Footer;
