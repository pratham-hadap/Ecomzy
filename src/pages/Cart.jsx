





import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart items section */}
          <div className="flex-grow">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart summary section */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="text-2xl font-semibold text-gray-800">Summary</div>
            <p className="text-gray-600 mt-2">Total Items: {cart.length}</p>
            <p className="text-xl font-bold text-green-600 mt-4">
              Total Amount: ${totalAmount}
            </p>
            <button
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-6 
              rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            >
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold text-gray-700">Cart is Empty</h1>
          <Link to="/">
            <button
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md
               hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
