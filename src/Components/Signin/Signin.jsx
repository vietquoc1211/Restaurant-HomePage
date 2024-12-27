import './Signin.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import img from "../../assets/WhatsApp Image 2024-12-06 at 00.49.49.jpeg";
import logo from "../../assets/favicon.png";
import { signin ,clearError} from '../../Redux/Authentication';
import { useEffect } from 'react';

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error} = useSelector((state) => state.Auth); // Retrieve error from Redux state

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with an uppercase letter and be 5-10 characters long.')
      .required('Password is required'),
  });
  useEffect(()=>{
   dispatch(clearError())
  },[dispatch])
  // Formik form submission
  const signinSubmit = async (values) => {
    dispatch(signin(values))
    try {
      const user = await dispatch(signin(values)); // Wait for the signin action to complete
      if (user) {
        navigate("/home"); // Navigate after the user is successfully signed in
      }
    } catch (error) {
      console.error(error); // Handle error if needed
    }
  };
 
  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: signinSubmit,
  });

  return (
    <div className="mt-16 h-[91.4vh] flex w-full">
      {/* Left Section */}
      <div className='half color-half bg-white flex justify-center items-center'>
        <div>
          <img src={logo} alt='logo' className='w-10' />
          <h3 className='font-bold text-[24px] mt-4'>Sign in to your account</h3>
          {/* Display error message */}
          {error && <div className="alert alert-danger mt-2">{error}</div>}
          <form className='mt-7' onSubmit={Formik.handleSubmit}>
            <div>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">Email</span>
                <input
                  type="text"
                  className="mt-3 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
                  name='email'
                  placeholder='Your Email'
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {Formik.errors.email}
                  </div>
                )}
              </label>
            </div>
            <div className='mt-4'>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">Password</span>
                <input
                  type="password"
                  className="mt-3 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
                  name='password'
                  placeholder='Your Password'
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.password && Formik.touched.password && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {Formik.errors.password}
                  </div>
                )}
              </label>
            </div>
            <div className='mt-5 flex justify-end'>
              <button
                className='border border-red-500 rounded-md border-2 px-4 py-1 text-red-500'
                disabled={!(Formik.isValid && Formik.dirty)}
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className='half2 img-half bg-red-600 overflow-hidden'>
        <motion.img
          src={img}
          alt="Sliding Image"
          className="signinimg mt-10 ml-28"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
        />
        <h3 className='text-white mt-6 font-bold text-[22px] ml-10'>
          Welcome To Our Restaurant Mealify!
        </h3>
      </div>
    </div>
  );
}


