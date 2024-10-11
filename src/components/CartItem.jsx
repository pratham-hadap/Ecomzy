






import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center gap-6 border-b pb-4 mb-4">
      {/* Image section */}
      <div className="">
        <img src={item.image} alt="itemimage"  className="h-[200px] w-[400px]" />
      </div>

      {/* Item details */}
      <div className="flex-grow">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        {/* <p className="text-sm text-gray-500 mt-1">{item.description}</p> */}
        <p className="text-sm text-gray-500 mt-1">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-bold text-green-600">${item.price}</p>
          <div
            className="cursor-pointer text-red-500 hover:scale-110 transition duration-300 ease-in-out"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
