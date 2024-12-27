import { removelikeorder } from "../../Redux/LikeOrder"
import {  useSelector ,useDispatch} from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import './LikeOrder.css';


export default function LikeOrder() {
    const dispatch = useDispatch();
    const likeItems = useSelector(state => state.like.items); // Fallback added
    console.log("Like Items:", likeItems);
   

    const handleRemoveLikeOrder =(idMeal)=>{
        dispatch(removelikeorder({idMeal}))
        toast("Oops! We hope this good for you",{
            style:{
                color:'black',
                borderRadius: "12px",
                background:"white"
            },
            transition: Bounce,
        })
    }
  return (
    <div className="container mt-[3.6rem]">
     <ToastContainer/>
     <div className="likepage">
        <div className="liketitle text-center">
            <h3 className="text-red-600 text-[46px] font-bold">Your <span className="text-black text-[46px] font-bold">Liked</span> Meals</h3>
        </div>
         {/* Check if there are no items in the Likeorder */}
         {likeItems.length===0?(
            <div className="flex justify-center items-center mt-12">
            <div className="text-center font-semibold text-2xl">
             ComeOn Choose Your Faav 
            </div>
          </div>
         ):(<div className="rows px-6 mt-10">
            <div className="firstrow ">
                <button className="text-white bg-black py-2 px-3 rounded-md cursor-none">Liked Meals :</button>
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-7 ml-5 gap-y-4 gap-x-10">
                    {likeItems.map(item=>(
                        <div className="likeproduct" key={item.idMeal} >
                        <img src={item.strMealThumb}  alt={item.strMeal} className="w-32 rounded-sm"/>
                        <div className='flex items-center justify-between mt-3'>
                            <div>
                              <h4 className="font-serif font-medium text-[19px]">{item.strMeal}</h4>
                              <span>${item.idMeal.toString().substring(0, 3)}</span>
                            </div>
                            <button className="noselect"   onClick={() => handleRemoveLikeOrder(item.idMeal)}><span className="text ">Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
           
        </div>
      
    )}
     </div>
    </div>
  )
}
