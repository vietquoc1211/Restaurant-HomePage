import './Chefsec.css'
import chef1 from '../../assets/chefs-1.jpg';
import chef2 from '../../assets/chefs-2.jpg';
import chef3 from '../../assets/chefs-3.jpg';
import {Slide} from "react-awesome-reveal";
export default function Chefsec() {
  return <>
  <div className='container bg-white  overflow-hidden md:px-5 lg:px-20 px-0'>
     <div className="title text-center text-[20px] py-8">
      <h5 className='text-gray-400'>CHEFS</h5>
      <h3 className='text-[42px] font-semibold'>Our <span className='text-red-600'>Proffesional</span> Chefs</h3>
     </div>
     <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-24 py-4 mt-2 overflow-hidden">
      <Slide direction='left' triggerOnce duration={2000}>
      <div className="card bg-white  rounded-xl overflow-hidden shadow-lg pb-3 hover:scale-[1.05] transition-transform">
           <img src={chef1} alt='chef1' className='w-full rounded-b-xl'></img>
           <div className="cardcontent text-center mt-3">
           <h4 className='font-bold text-[17px] tracking-wide'>Walter White</h4>
             <h5  className='text-[15px] text-gray-500 mt-2 '>Master Chef</h5>
             <p  className='text-[12px] text-gray-500 mt-2 md:text-[14px] lg:text-[14px]'>Velit aut quia fugit et et. Dolorum ea voluptate vel<br></br> tempore tenetur ipsa quae aut. Ipsum exercitationem<br></br>
             iure minima enim corporis et voluptate.</p>
           </div>
        </div>
      </Slide>
      <Slide direction='down' triggerOnce duration={2000}>
      <div className="card  bg-white rounded-xl overflow-hidden shadow-lg pb-3 hover:scale-[1.05] transition-transform">
           <img src={chef2} alt='chef2'  className='w-full rounded-b-xl'></img>
           <div className="cardcontent text-center mt-3">
           <h4 className='font-bold text-[17px] tracking-wide'>Sarah Jhonson</h4>
                <h5 className='text-[15px] text-gray-500 mt-2'>Patissier</h5>
                <p  className='text-[12px] text-gray-500 mt-2 md:text-[14px] lg:text-[14px]'>Quo esse repellendus quia id. Est eum et accusantium<br></br> pariatur fugit nihil minima suscipit corporis. Voluptate <br></br>
                sed quas reiciendis animi neque sapiente.</p>
            </div>
        </div>
      </Slide>
      <Slide direction='right' triggerOnce duration={2000}>
      <div className="card  bg-white rounded-xl overflow-hidden shadow-lg pb-3 hover:scale-[1.05] transition-transform">
           <img src={chef3} alt='chef3' className='w-full rounded-b-xl'></img>
           <div className="cardcontent text-center mt-3">
           <h4 className='font-bold text-[17px] tracking-wide'>William Anderson</h4>
            <h5  className='text-[15px] text-gray-500 mt-2'>Cook</h5>
            <p  className='text-[12px] text-gray-500 mt-2 md:text-[14px] lg:text-[14px]'>Vero omnis enim consequatur. Voluptas consectetur<br></br>
            unde qui molestiae deserunt. Voluptates enim aut<br></br> architecto porro aspernatur molestiae modi.</p>
            </div>
        </div>
      </Slide>

     </div>
  </div>
  </>
}
