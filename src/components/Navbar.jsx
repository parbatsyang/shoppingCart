import React from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="bg-blue-100">
      <div className="h-[80px] w-full max-w-[1240px] mx-auto flex items-center justify-evenly">
        <Link to={"/"}>
          <h1 className="text-3xl">OnlineStore</h1>
        </Link>
        <div className="flex">
          <Link to={"/item"}>
            <BsMinecartLoaded className="text-2xl" />
          </Link>
          <div className="absolute top-4 text-2xl ms-6 text-red-500">
            {cartProducts.length}
          </div>
          <div className="ms-10 font-serif text-xl">Total : Rs</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
