import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-300">
      <div className="container mx-auto  flex justify-between p-3">
        <h1>liton</h1>
        <div className="flex gap-2">
          <h4>home</h4>
          <h4>about</h4>
          <h4>contact</h4>
          <h4>contact us</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
