import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWifi} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import './OfferMeals.css'
export default function OfferMeals() {

  const [HomeMeals , SetHomemeals]=useState( [])
  const [CategoryMeals , SetCategoryMeals]=useState( [])

  async function getHomeMeals(){
    try{
         const {data} =await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
           SetHomemeals(data.meals)
           console.log(data.meals)
    }catch(error){
          console.error("Error fetching meals:", error);
                toast.error("Failed to fetch meals. Please try again later.", {
                  icon: <FontAwesomeIcon icon={faWifi} color="white" />,
                });
    }
  }

  async function getCategory(){
    try{
          const {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
          SetCategoryMeals(data.categories);
          console.log(data)
    }catch(error){
      console.error("Error fetching meals:", error);
      toast.error("Failed to fetch meals. Please try again later.", {
        icon: <FontAwesomeIcon icon={faWifi} color="white" />,
      });
    }
  }

 useEffect(()=>{
   getHomeMeals();
   getCategory();
 },[])

 const newitem =HomeMeals[1]
 const firstdiscount =HomeMeals[2]
 const secondtdiscount =HomeMeals[0]
  return (
    <div className="container mt-5">
         <ToastContainer/>
        <div className="categories ml-10">
          <div className="titleCat relative">
            <h3 className="text-[40px] font-bold ">Our <span className="text-red-600">Category</span></h3>
          </div>
          <div className=" flex justify-center mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-3 lg:grid-cols-8 w-4/5 gap-y-3">
                {CategoryMeals.map((item,index)=>{
                  if( ["Beef",
                  "Chicken",
                  "Lamb",
                  "Pork",
                  "Seafood",
                  "Side",
                  "Dessert",
                  "Vegan",].includes(item.strCategory)) {
                    return(
                      <Zoom key={item.idCategory} delay={index * 100} triggerOnce>
                        <div  className="w-[75px] h-[7.7rem] shadow-sm bg-slate-50  border-l border-r rounded-t-full rounded-b-full   flex flex-col justify-center text-center px-1">
                      <img src={item.strCategoryThumb} alt={item.strCategory} className=" rounded-full"/>
                      <span className="font-medium text-[14px] mt-2">{item.strCategory}</span>
                    </div>
                      </Zoom>
                    )
                  }
              } )}
            </div>
          </div>
        </div>
          <div className="container flex justify-center py-5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6    w-3/4">
           {newitem?(
            <Zoom triggerOnce>
                 <div className="newitem flex items-center bg-red-500 rounded-l-full relative ">
                <img src={newitem.strMealThumb} alt={newitem.strMeal} className="md:w-[100px] lg:w-[100px] rounded-full ml-[-2px] w-36 sm:w-44"/>
                <div className="ml-3">
                    <h4 className="text-white font-semibold">{newitem.strMeal}</h4>
                    <span className="text-white">${newitem.idMeal.toString().substring(0, 3)}</span>
                </div>
                <div className="customBorder">
                 <span className="font-extrabold">New!</span>
              </div>
             </div> 
            </Zoom>
           ):(<span></span>)}
         {firstdiscount?(
          <Zoom delay={100} triggerOnce>
                 <div className="discountitem flex items-center border-[3px] border-dashed border-gray-200 rounded-l-full  relative mt-5 md:mt-5 lg:mt-0">
              <img src={firstdiscount.strMealThumb} alt={firstdiscount.strMeal} className="md:w-[100px] lg:w-[100px] rounded-full ml-[-2px] w-36 sm:w-44"/>
              <div className="ml-3">
                  <h4 className=" font-semibold">{firstdiscount.strMeal}</h4>
                  <h6> <span className=" line-through">${firstdiscount.idMeal.toString().substring(0, 3)}</span> <span className="ml-4">$450</span></h6>
              </div>
              <div className=" absolute  bg-red-700 py-1 px-3 right-[-12px] top-[-12px]">
                 <span className="text-white font-extrabold">15%</span>
              </div>
           </div>
          </Zoom>
         ):(<span></span>)}
         {secondtdiscount?(
          <Zoom delay={200} triggerOnce>
               <div className="discountitem flex items-center border-[3px] border-dashed border-gray-200 rounded-l-full relative mt-5 md:mt-0 lg:mt-0">
                    <img src={secondtdiscount.strMealThumb} alt={secondtdiscount.strMeal} className="md:w-[100px] lg:w-[100px] rounded-full ml-[-2px] w-36 sm:w-44"/>
                    <div  className="ml-3">
                        <h4 className=" font-semibold">{secondtdiscount.strMeal}</h4>
                       <h6><span className=" line-through">${secondtdiscount.idMeal.toString().substring(0, 3)}</span><span className="ml-4">$420</span></h6>
                    </div>
                    <div className=" absolute bg-red-700 py-1 px-3 right-[-12px] top-[-12px]">
                        <span className="text-white font-extrabold">20%</span>
                    </div>
                 </div>
          </Zoom>
         ):(<span></span>)}
        </div>
    </div>
    </div>
  )
}
