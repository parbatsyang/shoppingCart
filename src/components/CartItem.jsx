import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="bg-slate-100 mb-2">
            <div className="w-full flex items-center justify-around h-[200px] max-w-[1320px] mx-auto">
              <div className="">
                <div className="">
                  <img
                    src={product.images[0]}
                    className="h-[180px] w-[300px]"
                  />
                </div>
              </div>
              <div className="w-[350px]">
                <div className="font-bold text-2xl ">{product.title}</div>
                <div className="font-senif text-lg mt-2">
                  Price: ${product.price}
                </div>
                <div>{product.description}</div>
              </div>
              <button
                className="bg-red-500 rounded-xl w-[100px] h-[50px]"
                onClick={() => removeToCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
