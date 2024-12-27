import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removefromorder, selectorderLastTotal, selectorderTotal ,clearOrderItems} from '../../Redux/Order';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';


export default function Order() {
  const dispatch = useDispatch();
  const subtotal = useSelector(selectorderTotal);
  const totalprice = useSelector(selectorderLastTotal);
  const orderitems = useSelector(state => state.order.items);
  const handleRemoveItem = (idMeal) => {
    dispatch(removefromorder({ idMeal }));
    toast('Meal removed from your order!', { // Add toast notification
      position: 'top-right',
      duration: 1500,
      style: {
        color: "white",
        borderRadius: "12px",
        backgroundColor: "black",
      },
      transition: Bounce,
    });
  };
  const handleClearAllOrders=()=>{
    dispatch(clearOrderItems())
    toast('Your Order cancelled', { // Add toast notification
      position: 'top-right',
      duration: 1500,
      style: {
        color: "white",
        borderRadius: "12px",
        backgroundColor: "black",
      },
      transition: Bounce,
    });
  }
  return (
    <>
      <div className='container mt-20'>
        <div className="titleor text-center">
          <h3 className='text-red-600 text-[46px] font-bold'>Your Order</h3>
        </div>
          <ToastContainer/>
        {/* Check if there are no items in the order */}
        {orderitems.length === 0 ? (
            <div className="flex justify-center items-center mt-12">
              <div className="text-center font-semibold text-2xl">
                Take Your Order Now
              </div>
            </div>
        ) : (
          <div className='mt-7 ordertemp grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="">
              <h4 className='text-[25px] font-bold ml-20'>Orders</h4>
              {orderitems.map(item => (
                <div className="order flex mt-7 items-center justify-around" key={item.idMeal}>
                  <div className='relative'>
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className='w-28 rounded-2xl relative'
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className='close absolute top-2 left-2 bg-red-600 rounded-full p-1 cursor-pointer'
                      onClick={() => dispatch(handleRemoveItem(item.idMeal))}
                    />
                  </div>
                  <div className="info ml-5">
                    <div className="name font-medium text-[17px] tracking-wider">{item.strMeal}</div>
                    <div className="price font-medium text-[17px]">${item.idMeal.toString().substring(0, 3)}</div>
                  </div>
                  <div className='text-[17px] font-semibold'>Qun<span className='ml-2'>:</span><span className='ml-2'>{item.quantity}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Only show the total price section if there are items in the order */}
        {orderitems.length > 0 && (
          <div className='flex justify-center items-center mt-5'>
            <div className="totalprice border border-gray-600 rounded-md w-3/4 px-3 py-2 rounded-md md:3/4 lg:w-2/4">
              <div className="titcheck text-center">
                <h3 className='text-[25px] font-semibold'>Total Price</h3>
              </div>
              <div className='mt-4'>
                <div className='flex items-center justify-between mt-3'>
                  <h3>SubTotalPrice:</h3>
                  <h3>${subtotal}</h3>
                </div>
                <div className='flex items-center justify-between mt-3'>
                  <h3>Tax Of Order:</h3>
                  <h3>10% of TotalPrice</h3>
                </div>
                <hr className='mt-3' />
                <div className='flex items-center justify-between mt-4'>
                  <h3>TotalPrice</h3>
                  <h3>${totalprice}</h3>
                </div>
               <Link to="/checkout"> <button className='w-full block mt-4 bg-red-600 text-white rounded-md py-1'>Process To Checkout</button></Link>
              </div>
            </div>
          </div>
        )}
            {orderitems.length > 0 && (
              <div className=' flex justify-end px-14 mt-5'>
                <button className='bg-red-600 text-white py-2 px-2 rounded-sm hover:bg-red-700' onClick={() => dispatch(handleClearAllOrders())}>Clear Orders</button>
              </div>

            )}
      </div>
    </>
  );
}
