import { useEffect } from "react";
import './Signup.css';
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import img from "../../assets/WhatsApp Image 2024-12-06 at 00.49.49.jpeg";
import logo from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import { signUp ,clearError} from '../../Redux/Authentication';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.Auth);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "Password must start with an uppercase letter"
      )
      .required("Password is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  // const submitForm = (values) => {
  //   dispatch(signUp(values))
  //   if (!error && user) {
  //     navigate("/signin");
  //   }
  // };
  const submitForm = async (values) => {
    try {
      // Dispatch the signUp action and wait for it to complete
      const user = await dispatch(signUp(values)); // waits for action to complete
  
      if (user) {
        navigate("/signin"); // Navigate after sign up is successful
      }
    } catch (error) {
      console.error("Sign up failed", error); // Handle any errors during sign up
    }
  };


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema,
    onSubmit: submitForm,
  });
 useEffect(()=>{
 dispatch(clearError())
 },[dispatch])
  return (
    <div className="mt-16 h-[91.4vh] flex w-full">
    <div className="half color-half bg-white flex justify-center items-center">
      <div>
        <img src={logo} alt="logo" className="w-10" />
        <h3 className="font-bold text-[24px] mt-4">Create Your Account</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="mt-7" onSubmit={formik.handleSubmit}>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="mt-3 block w-full px-3 py-2 border border-red-300 rounded-md"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="alert alert-danger mt-2">{formik.errors.email}</div>
            )}
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              className="mt-3 block w-full px-3 py-2 border border-red-300 rounded-md"
              name="password"
              placeholder="Your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="alert alert-danger mt-2">{formik.errors.password}</div>
            )}
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium text-slate-700">Phone</span>
            <input
              type="number"
              className="mt-3 block w-full px-3 py-2 border border-red-300 rounded-md"
              name="phone"
              placeholder="Your Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="alert alert-danger mt-2">{formik.errors.phone}</div>
            )}
          </label>
          <Link to="/signin" className="text-blue-500 text-sm mt-3 inline-block">
            Already have an account? Log in
          </Link>
          <div className="mt-5 flex justify-end">
            <button
              className="border border-red-500 rounded-md px-4 py-1 text-red-500"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="half2 img-half bg-red-600 overflow-hidden">
      <motion.img
        src={img}
        alt="Sliding Image"
        className="signinimg mt-10 ml-28"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />
      <h3 className="text-white mt-6 font-bold text-[22px] ml-10">
        Welcome To Our Restaurant Mealify!
      </h3>
    </div>
    </div>
    
    
    
  );
}






