
import { useEffect, useState } from "react";
import axios from "axios";
import { addtoorders } from "../../Redux/Order";
import { useDispatch ,useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart , faWifi } from "@fortawesome/free-solid-svg-icons";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import { addlikeorder } from '../../Redux/LikeOrder';
import "./Menu.css";
import Modal from "./Modal/Modal";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [meals, setmeals] = useState([]);
  const { token } = useSelector((state) => state.Auth);
  ///state for modal//////
  const [selectedMeal ,setSelectedMeal]=useState(null)

    
  
  // Fetch meals from API
  async function getMeals() {
    try {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      setmeals(data.meals);
      console.log(data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
      toast.error("Failed to fetch meals. Please try again later.", {
        icon:  <FontAwesomeIcon icon={faWifi} color="white" />,
      });
    }
  }

  // Add meal to orders
  const addtoOrder = (values) => {
    if (!token) {
      toast("You need to log in to place an order.", {
        icon: <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />,
        style: {
          color: "white",
          borderRadius: "12px",
          backgroundColor: "black",
        },
        transition: Bounce,
      });
      navigate("/signup"); // Redirect to the login page
      return;
    }

    if(token){
      try {
        dispatch(addtoorders(values));
        toast("Order placed successfully!", {
          icon: <FaCheckCircle style={{ fontSize: "20px", color: "green" }} />,
          style: {
            color: "white",
            borderRadius: "12px",
            backgroundColor: "black",
          },
          transition: Bounce,
        });
      } catch (error) {
        console.error("Error adding order:", error);
        toast.error("Failed to add order. Please try again later.", {
          icon: <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />,
        });
      }
    
    }
      

    
  };
  //handle to addlikeMeal to the love list
  const handleaddLikeOrder =(value)=>{
    console.log(value)
    if (!token) {
      toast("You need to log in to place an order.", {
        icon: <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />,
        style: {
          color: "white",
          borderRadius: "12px",
          backgroundColor: "black",
        },
        transition: Bounce,
      });
      navigate("/signup"); // Redirect to the login page
      return;
    }


    if(token){
      dispatch(addlikeorder(value))
      toast("You Love this Meal", {
        icon: <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />,
        style: {
          color: "white",
          borderRadius: "12px",
          backgroundColor: "black",
        },
        transition: Bounce,
      });
     }
    }
         


  ///open Modal/////
  const openModal =(meal)=>{
   setSelectedMeal(meal)
  }
  ///close Modal
  const closeModal= ()=>{
    setSelectedMeal(null)
  }






  // Fetch meals on component mount
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="mt-16 container bg-red-600">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="titmennu text-center">
        <h3 className="text-[48px] font-semibold">
          Our <span className="text-white">Menu</span>
        </h3>
      </div>
      <div className="container px-5 mt-7">
        <div className="sec1 mt-3">
          <button className="bg-white p-2 rounded-md font-semibold cursor-none">Vegetarian</button>
          <div className="meals grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 py-5 mt-7 px-1">
            {meals.map((meal) => {
              if (meal.strCategory === "Vegetarian") {
                return (
                  <div
                    className="meal  bg-white flex justify-center items-center flex-col rounded-t-[100px] rounded-b-lg pb-2 mt-2 md:rounded-t-[30px] lg:rounded-t-[30px]"
                    key={meal.idMeal}
                  
                  >
                    <img
                      src={meal.strMealThumb}
                      className="rounded-full w-2/4 mt-[-30px] md:w-3/4 lg:w-3/4  cursor-pointer"
                      alt={meal.strMeal}
                      onClick={() => openModal(meal)}
                    />
                    <h3 className="mt-1 text-[15px] md:*:text-[18px] lg:text-[18px]">{meal.strMeal}</h3>
                    <h4 className="font-bold">${meal.idMeal.toString().substring(0, 3)}</h4>
                    <div className="order flex items-center mt-3">
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="white"
                        className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-4"
                        onClick={() => addtoOrder({ ...meal, quantity: 1 })}
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        color="white"
                        className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-3"
                        onClick={() => handleaddLikeOrder(meal)}
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="sec2 mt-3">
         <button className="bg-white p-2 rounded-md font-semibold cursor-none">Meat</button>
        <div className="meals grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 py-5 mt-7 px-1">
         {meals.map((meal)=>{
         if (meal.strCategory === "Beef" || meal.strCategory === "Lamb" || meal.strCategory ==="Chicken"){
            return<>
             <div className="meal bg-white flex justify-center items-center flex-col rounded-t-[100px] rounded-b-lg pb-2 md:rounded-t-[30px] lg:rounded-t-[30px]" key={meal.idMeal}  onClick={()=>openModal(meal)}>
               <img src={meal.strMealThumb} className=" rounded-full w-2/4 mt-[-30px] md:w-3/4 lg:w-3/4" alt={meal.strMeal}></img>
               <h3 className="mt-1 text-[15px] md:*:text-[18px] lg:text-[18px]">{meal.strMeal}</h3>
               <h4 className="font-bold">${meal.idMeal.toString().substring(0, 3)}</h4>
               <div className="oreder flex items-center mt-3">
               <FontAwesomeIcon icon={faPlus}  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-4"onClick={() => addtoOrder({ ...meal, quantity: 1 })}/>
                <FontAwesomeIcon icon={faHeart }  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-3"  onClick={()=>handleaddLikeOrder(meal)}/>
               </div>
              </div>
            </>
          }
        })}
      </div>
        </div>
        <div className="sec3 mt-3">
         <button className="bg-white p-2 rounded-md font-semibold cursor-none">SideMeal & SeaFood</button>
        <div className="meals grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 py-5 mt-7 px-1">
         {meals.map((meal)=>{
          if(meal.strCategory==="Side"|| meal.strCategory==="Miscellaneous"|| meal.strCategory==="Seafood"){
            return<>
             <div className="meal bg-white flex justify-center items-center flex-col rounded-t-[100px] rounded-b-lg pb-2 md:rounded-t-[30px] lg:rounded-t-[30px]" key={meal.idMeal}  onClick={()=>openModal(meal)}>
               <img src={meal.strMealThumb} className=" rounded-full w-2/4 mt-[-30px] md:w-3/4 lg:w-3/4" alt={meal.strMeal}></img>
               <h3 className="mt-1 text-[15px] md:*:text-[18px] lg:text-[18px]">{meal.strMeal}</h3>
               <h4 className="font-bold">${meal.idMeal.toString().substring(0, 3)}</h4>
               <div className="oreder flex items-center mt-3">
               <FontAwesomeIcon icon={faPlus}  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-4" onClick={() => addtoOrder({ ...meal, quantity: 1 })}/>
                <FontAwesomeIcon icon={faHeart }  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-3"  onClick={()=>handleaddLikeOrder(meal)}/>
               </div>
              </div>
            </>
          }
        })}
      </div>
        </div>
        <div className="sec5 mt-3">
         <button className="bg-white p-2 rounded-md font-semibold cursor-none"> Dessert</button>
        <div className="meals grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 py-5 mt-7 px-1">
         {meals.map((meal)=>{
           if(meal.strCategory==="Dessert"){
            return<>
              <div className="meal bg-white flex justify-center items-center flex-col rounded-t-[100px] rounded-b-lg pb-2 md:rounded-t-[30px] lg:rounded-t-[30px]" key={meal.idMeal}  onClick={()=>openModal(meal)}>
                <img src={meal.strMealThumb} className=" rounded-full w-2/4 mt-[-30px] md:w-3/4 lg:w-3/4" alt={meal.strMeal}></img>
                <h3 className="mt-1 text-[15px] md:*:text-[18px] lg:text-[18px]">{meal.strMeal}</h3>
                <h4 className="font-bold">${meal.idMeal.toString().substring(0, 3)}</h4>
                <div className="oreder flex items-center mt-3">
                <FontAwesomeIcon icon={faPlus}  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-4"onClick={() => addtoOrder({ ...meal, quantity: 1 })}/>
                 <FontAwesomeIcon icon={faHeart }  color="white" className="bg-black rounded-full p-2 font-[13px] cursor-pointer font-medium mx-3" onClick={()=>handleaddLikeOrder(meal)}/>
                </div>
              </div>
             </>
           }
         })}
      </div>
        </div>
      </div>
        {/* Render the modal */}
        {selectedMeal && <Modal meal={selectedMeal} closeModal={()=>closeModal()}/>}
    </div>
  );
}

