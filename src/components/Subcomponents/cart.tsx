import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <div className="h-5 w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="CurrentColor"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${cart ? "fill-black" : "fill-none scale-95 "} transition-all duration-300 ease-in-out cursor-pointer`}
        onClick={() => setCart(!cart)}
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    </div>
  );
};

export default Cart;
