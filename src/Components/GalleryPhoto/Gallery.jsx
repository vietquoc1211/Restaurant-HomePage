import img1 from '../../assets/galleryPhoto/meal-1.jpg';
import img2 from '../../assets/galleryPhoto/meal-2.jpg';
import img3 from '../../assets/galleryPhoto/meal-3.jpg';
import img4 from '../../assets/galleryPhoto/meal-5.jpg';
import img5 from '../../assets/galleryPhoto/meal-6.jpg';
import img6 from '../../assets/galleryPhoto/meal-7.jpg';
import person1 from '../../assets/1 (5).jpg';
import person2 from '../../assets/2 (1).jpg';
import person3 from '../../assets/3 (1).jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css'
export default function Gallery() {
    const settings = {
    dots: true,
    infinite: true,
  autoplay: true,
  autoplaySpeed: 4000, 
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
      };
    
  return (
    <div className="container py-14 mb-11 px-0 md:px-6 lg:px-6  mt-10 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:ml-5 md:ml-5 gap-x-3 ">
           <div className="testimonials overflow-hidden">
              <div className="title">
              <h5 className='text-gray-400'>TESTIMONIALS</h5>
              <h3 className='text-[35px] font-semibold'>SATISFIED <span className='text-red-600'>CUSTOMERS</span></h3>
              </div>
              <div className="slider-container mt-10  ml-7">
                   <Slider {...settings}>
                   <div>
                        <img src={person1} alt='person1' className='w-16 rounded-full'/>
                        <h4 className='text-red-600 mt-3'>John Doe</h4>
                        <span  className='text-gray-400 mt-1'>CEO, Founder</span>
                        <div>
                        <FontAwesomeIcon icon={faQuoteLeft} className='text-[25px] mt-3 mb-2' style={{ marginRight: "10px" }} />
                        </div>
                        <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab nostrum iusto? Dolor, quod ratione.</p>
                    </div>
                    <div>
                        <img src={person2} alt='person1' className='w-16 rounded-full'/>
                        <h4 className='text-red-600 mt-3'>Miwan konai</h4>
                        <span   className='text-gray-400 mt-1'>CEO, Founder</span>
                        <div>
                        <FontAwesomeIcon icon={faQuoteLeft} className='text-[25px] mt-3 mb-2' style={{ marginRight: "10px" }} />
                        </div>
                        <p className='w-2/3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro unde cum iste quo ab cumque distinctio explicabo consequatur optio?</p>
                    </div>
                    <div>
                        <img src={person3} alt='person1' className='w-16 rounded-full'/>
                        <h4 className='text-red-600 mt-3'>Enoy John</h4>
                        <span  className='text-gray-400 mt-1'>CEO, Founder</span>
                        <div>
                        <FontAwesomeIcon icon={faQuoteLeft} className='text-[25px] mt-3 mb-2' style={{ marginRight: "10px" }} />
                        </div>
                        <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt ipsam, et cupiditate consectetur tenetur iure obcaecati veritatis quasi ratione vel voluptatum harum..</p>
                       </div>
                   </Slider>
              </div>
           </div>
           <div className="gallery w-2/3  md:ml-0 lg:ml-0 ml-7 mt-20 md:mt-0 lg:mt-0">
            <div className="title">
            <h5 className='text-gray-400'>GALLERIES</h5>
            <h3 className='text-[35px] font-semibold'>PHOTO <span className='text-red-600'>GALLERIES</span></h3>
            <div className="PHOTOS grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-0 mt-7">
                <img src={img1} className='w-36 h-28 rounded-md'/>
                <img src={img2} className='w-36 h-28  rounded-md'/>
                <img src={img3} className='w-36 h-28 rounded-md'/>
                <img src={img4} className='w-36 h-28 rounded-md'/>
                <img src={img5} className='w-36 h-28  rounded-md'/>
                <img src={img6} className='w-36 h-28  rounded-md'/>
            </div>
            <Link to="/menu"><button className='bg-red-600 text-white rounded-3xl py-2 px-7 mt-6 hover:bg-red-700'>View Menu</button></Link>
            </div>
           </div>
        </div>
      
    </div>
  )
}
