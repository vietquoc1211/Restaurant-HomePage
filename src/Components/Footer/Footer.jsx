import './Footer.css';
import logo from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight,faLocationDot, faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className='container footer px-2 py-5 mt-4 '>
      <div className="end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <div className="about text-white flex z-50 flex-col">
        <div className="logo-pic flex items-center relative ml-14">
              <img src={logo} alt="pic-logo" className='w-10'/>
               <h2 className='text-[20px]'>Mealify</h2>
            </div>
            <p className='ml-14 mb-5 text-white text-[16px] mt-2'>Mealify is a restaurant landing page thatoffers a delicious dining experience to itscustomers.</p>
            <h4 className='text-[20px] text-white self-center relative'>Social Media</h4>
            <div className='flex justify-center gap-9 mt-3'>
      <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </Link>
      <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} size="1x" />
      </Link>
      <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </Link>
      <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </Link>
    </div>
        </div>
        <div className="subscription">
        <h4 className='text-white text-[19px] mb-2 font-bold font-sans'>Subscribe our Newsletter</h4>
        <p className='text-white '> Dont miss out on our latest menu updates and exclusive offers - join our newsletter today and stay up-to-date with all things Mealify!</p>
        <div className="quicklinks mt-4">
        <h4 className='text-white font-extrabold'>Quick Links</h4>
        <div className="links2 flex flex-row flex-wrap mr-14">
        <ul className="r w-1/3 mt-2">
           <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white' /><Link to="#" className='text-white font-[16px] p-1'>Menu</Link></li>
            <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white'/><Link to="#"className='text-white font-[16px] p-1'>About Us</Link></li>
            <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white'/><Link to="#"className='text-white font-[16px] p-1'>Testimonial</Link></li>
        </ul>
        <ul className="t mt-2">
          <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white'/><Link to="#"className='text-white font-[16px] p-1'>Promo</Link></li>
          <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white'/><Link to="#" className='text-white font-[16px] p-1'>Contact</Link></li>
          <li className='mt-1'><FontAwesomeIcon icon={faAngleRight} color='white'/><Link to="#"className='text-white font-[16px] p-1'>Our Partners</Link></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="touch ml-4">
          <h4 className='text-white font-bold text-[19px] font-sans'>Get in Touch</h4>
           <ul className='mt-5'>
            <li className='text-white mt-3'><FontAwesomeIcon icon={faLocationDot} size="lg" color='red'/><Link className='ml-2'>A108 Adam Street, New York, NY 535022</Link></li>
            <li className='text-white mt-3' ><FontAwesomeIcon icon={faEnvelope} size="lg"  color='red'/><Link className='ml-2'>contact@example.com</Link></li>
            <li className='text-white mt-3'> <FontAwesomeIcon icon={faPhone} size="lg" color='red' /><Link className='ml-2'>+1 5589 55488 55</Link></li>
           </ul>
        </div>
      </div>
    </div>
  )
}
