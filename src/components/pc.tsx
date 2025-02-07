import Cart from "./Subcomponents/cart";
import Like from "./Subcomponents/like";
import Src from "../assets/Screenshot 2025-02-07 114633.png";
interface Props {
  name: string;
  price: string;
}

const Pc = ({name, price}:Props) => {
  return (
    <div className="bg-black flex flex-col items-center w-[371px] h-[496px] rounded-2xl hover:shadow-lg hover:scale-101 shadow-black transition-all duration-150">
      <div className="bg-[#e5e5e5] w-[350px] h-[369px] rounded-2xl mt-4">
        <div className="flex flex-row justify-end gap-1 w-[333px] mt-3 pr-5">
          <Like />
          <Cart />
        </div>
        <div className=" w-[350px] h-[350px] rounded-t-2xl">
          <img src={Src} alt="" />
        </div>
      </div>
      <div className="w-[350px] justify-between flex flex-row">
        <div>
          <h1 className="text-white text-2xl mt-4">{name}</h1>
          <h1 className="text-white text-lg mt-2">{price}</h1>
        </div>
        <div>
          <button className="w-30 h-10 text-black rounded-full bg-white mt-7 cursor-pointer hover:bg-[#dea240] transition-all duration-150">
            <strong>Buy</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pc;
