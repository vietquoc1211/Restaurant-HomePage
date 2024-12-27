import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import contactanimation from "../../animation/Animation - 1734018926412.json";
import sucessanimation from '../../animation/mtCB945B2w (2).json'
import "@lottiefiles/lottie-player";
import Lotti from 'lottie-react';
import './Contact.css';
import {addMessage} from '../../Redux/Contact';
import { useDispatch } from 'react-redux';
import { useState,useRef } from 'react';
import { Slide} from "react-awesome-reveal";

export default function Contact() {
  const [mesage ,setmessage]=useState(false);
  const textareaRef = useRef(null);
  const dispatch =useDispatch()
  const handlesumbitme = (e) => {
    e.preventDefault(); // Prevent form default submission
    const messageText = e.target.message.value; // Get the value from the textarea
    dispatch(addMessage({ text: messageText })); // Dispatch the message
    setmessage(true); // Show success animation
    if (textareaRef.current) {
      textareaRef.current.value = ''; // Clear the textarea
    }
  };
  
  return (
    <div className="">
      <div className="container mt-14 pt-3 pb-20 px-5 ">
        <div className='grid grid-cols-1 md:grid-cols-2 gapx-6 mt-8 items-center overflow-hidden'>
        <Slide direction='up' duration={1500}>
          <div className="animation ">
            <Lotti animationData={contactanimation} loop={true} className='h-96'/>
          </div>
          </Slide>
          <div className="message">
             <div className="titcontact">
              <h3 className='text-[42px] font-semibold'><span className='text-black'>Need Help?</span><span className='text-red-600'>Contact Us</span></h3>
               <div className="details grid grid-cols-1 md:grid-cols-2 gap-2 mt-7 lg:gap-3 ">
                 <div className="address bg-gray-100 flex items-center py-2 px-1">
                  <FontAwesomeIcon icon={faMap} className='text-white bg-red-700 rounded-full p-2 text-[22px] mx-2' />
                  <div className="des">
                  <h4>Our Address</h4>
                  <p className=' md:text-[14px]'>A108 Adam Street, New York</p>
                  </div>
                 </div>
                 <div className="opening bg-gray-100 flex items-center py-2 px-1 ">
                 <FontAwesomeIcon icon={faShareNodes} className='text-white bg-red-700 rounded-full p-2 text-[22px] mx-2' />
                 <div className="des">
                 <h4>Opening Hours</h4>
                 <p className=' md:text-[14px]'><span>Mon-Sat:</span> 11AM - 23PM; <span>Sunday :</span> Closed</p>
                 </div>
                 </div>
               </div>
               <div className="contactinput mt-8 ml-2">
                <form onSubmit={handlesumbitme}>
                <label className="block">
                <span className="block text-[20px] font-serif ">We are here to hear your opinion and feedback!</span>
                <textarea   ref={textareaRef}  name='message' rows="6"  placeholder="Message"        required className='w-2/3 border-2 border-gray-300 mt-3 shadow-sm focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 rounded-md text-sm'></textarea>
                </label>
                {mesage ? (<div className='flex items-center'> <Lotti animationData={sucessanimation} loop={false} className="h-16" />
                  <h3 className='text-[27px] font-semibold'>Thanks for joining!</h3>
                </div>
) : (
  <button
    type="submit"
    className="border border-red-500 rounded-md border-2 px-5 py-1 text-red-500 mt-3"
  >
    Send
  </button>
)}

                 
                </form>
               </div>
             </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}
