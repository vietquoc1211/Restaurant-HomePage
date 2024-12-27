import { useDispatch, useSelector } from "react-redux";
import { setCustomerInfo, setPaymentMethod} from '../../Redux/Checkout';
import { selectorderLastTotal } from "../../Redux/Order";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Ensure this import is added
import {clearOrderItems} from '../../Redux/Order'
import logo from "../../assets/favicon.png";
import { useState } from "react";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [customerInfo, setInfo] = useState({ name: '', address: '', phone: '' });
  const [paymentMethod, setMethod] = useState('cash');
  const checoutprodect = useSelector(state => state.order.items);
  const totalprice = useSelector(selectorderLastTotal);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(setCustomerInfo(customerInfo));
    dispatch(setPaymentMethod(paymentMethod));

    toast.success('Your Order Done!', { // Toast notification
      position: 'top-right',
      autoClose: 2500, // Correct key for duration is autoClose
      style: {
        color: "black",
        borderRadius: "12px",
        backgroundColor: "white",
      },
      transition: Bounce,
    });

    // Navigate to home after a delay to allow the toast to display
    setTimeout(() => {
      dispatch(clearOrderItems()); // Clear the items in the cart
      navigate("/home");
    }, 2500);
  };

  return (
    <>
      <div className="mt-28 container px-2 flex justify-center">
        <ToastContainer />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-20 items-center">
          <div className="infouser">
            <img src={logo} className="w-10" />
            <h4 className=" text-[20px] font-serif font-medium mt-2">Your information to place your order</h4>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block">
                  <span className="block text-sm font-medium">Your Name:</span>
                  <input
                    type="text"
                    className="mt-3 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
                    name="name"
                    placeholder="Your Name"
                    value={customerInfo.name}
                    onChange={(e) => setInfo({ ...customerInfo, name: e.target.value })}
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="block">
                  <span className="block text-sm font-medium">Your Location:</span>
                  <input
                    type="text"
                    className="mt-3 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
                    name="address"
                    placeholder="Your Address"
                    value={customerInfo.address}
                    onChange={(e) => setInfo({ ...customerInfo, address: e.target.value })}
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="block">
                  <span className="block text-sm font-medium">Your Phone:</span>
                  <input
                    type="number"
                    className="mt-3 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
                    name="phone"
                    placeholder="Your Phone"
                    value={customerInfo.phone}
                    onChange={(e) => setInfo({ ...customerInfo, phone: e.target.value })}
                  />
                </label>
              </div>

              <div className="flex items-center mt-6">
                <div className="ml-2">
                  <label>
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setMethod(e.target.value)}
                    />
                    <span className="ml-2 text-[18px]">Cash</span>
                  </label>
                </div>
                <div className="ml-0 md:ml-5 lg:ml-5">
                  <label>
                    <input
                      type="radio"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setMethod(e.target.value)}
                    />
                    <span className="ml-2 text-[18px]">Card</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white rounded-md w-full py-2 mt-4 font-medium"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="lastcheckout">
            <div className="box border border-gray-300 py-10 px-5 rounded-md">
              {checoutprodect.map(item => (
                <div className="productcheckout flex items-center" key={item.idMeal}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-24 rounded-2xl relative"
                  />
                  <div className="ml-4">
                    <h4 className="font-serif font-medium text-[17px] tracking-wider">
                      {item.strMeal}
                    </h4>
                    <span className="font-serif font-medium text-[17px]">
                      ${item.idMeal.toString().substring(0, 3)}
                    </span>
                  </div>
                </div>
              ))}
              <hr className="mt-6"></hr>
              <div className="totalpricecheckout mt-4 text-center">
                <h4 className="text-[16px] font-serif font-medium">
                  Total Price: ${totalprice}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
