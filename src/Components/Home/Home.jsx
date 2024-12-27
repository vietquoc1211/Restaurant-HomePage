import './Home.css';
import homeimg from '../../assets/hero-img.png';
import Chefsec from '../Chefsec/Chefsec';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Fade ,Slide} from "react-awesome-reveal";
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Gallery from '../GalleryPhoto/Gallery';
import OfferMeals from './OfferMeals/OfferMeals';
export default function Home() {
  return <>
  <div>
    <div className=' container'>
         <div className="header mt-16 md:mt-16 lg:mt-16  bg-zinc-200 flex justify-center items-center overflow-hidden h-[94vh] py-1 md:h-[72vh] lg:h-[75vh]  md:py-0 lg:py-0 md:px-3">
          <div className="sec1">
            <div className="home grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 items-center ml-8 md:ml-0 lg:ml-0 ">
              <div className="pra py-8 md:py-0 lg:py-0">
                <Fade direction='down' duration={1000} triggerOnce>
                <h2 className=" text-[42px] whitespace-pre-line font-bold lg:text-[62px] md:text-[55px]">Enjoy Your Healthy<br></br>
                Delicious Food</h2>
                </Fade>
                <Fade direction='down' duration={1000} triggerOnce>
                <p className="text-[15px] whitespace-pre-line text-gray-500 mt-1 md:text-[14px] lg:text-[16px] ">Sed autem laudantium dolores. Voluptatem itaque ea consequatur <br></br>
                eveniet. Eum quas beatae cumque eum quaerat.</p>
                </Fade>
                <div className="buttonssec1 mt-7 flex items-center">
                  <button className='tablebtn bg-red-600 text-white hover:bg-red-700'><a href=''>Book a Table</a></button>
                  <a href=''className='vedio-btn text-black flex items-center relative hover:text-red-600 ml-7'><span className='icon2 relative flex items-center justify-center rounded-[50%]'><FontAwesomeIcon icon={faPlay} className="z-50 " /></span>
                  <span className='ml-2'>Watch a Video</span></a>
                </div>
              </div>
                <div className="pichome">
                 <Slide direction='right'triggerOnce >
                 <img src={homeimg} alt='dishfood' className=' w-7/12 mt-10 md:w-9/12 lg:w-9/12  md:mt-0 lg:mt-0'></img>
                 </Slide>
                </div>
            </div>
            <div className="brandsSocial  flex items-center justify-end mt-2 md:mt-5">
             <div className="brands">
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className='text-red-600 rounded-full p-2  bg-white mx-1 transition-[0.8s] hover:text-white hover:bg-red-600' />
             </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} className='text-red-600 rounded-full p-2 bg-white mx-1 transition-[0.8s] hover:text-white hover:bg-red-600' />
             </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='text-red-600 rounded-full p-2 bg-white mx-1 transition-[0.8s] hover:text-white hover:bg-red-600'/>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faWhatsapp} className='text-red-600 rounded-full p-2 bg-white mx-1 transition-[0.8s] hover:text-white hover:bg-red-600' />
            </a>
             </div>
          </div>
          </div>
        </div> 
    </div>
    <OfferMeals/>
    <div className='mt-10'>
    <Chefsec/>
    </div>
    <Gallery/>
    <Footer/>
  </div>
  </>
  
   
}
