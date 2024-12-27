import { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faHeart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [links, setLinks] = useState(["Home", "Menu", "Contact", "Signup"]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get token from Redux store
  const { token } = useSelector((state) => state.Auth);

  const handlLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  useEffect(() => {
    if (token) {
      setLinks(["Home", "Menu", "Contact", "Order"]); // Show protected routes
    } else {
      setLinks(["Home", "Menu", "Signup"]); // Show public routes
    }
  }, [token]);
  //////to style nav when scroll
  const headRef = useRef()
  useEffect(()=>{
        window.addEventListener("scroll",()=>{
          if(window.scrollY > 100){
              headRef.current.style.padding ="5px 0";
              headRef.current.style.boxShadow = "0px 4px 4px -2px rgba(0, 0, 0, 0.3)";

          }else{
            headRef.current.style.padding ="13px 0";
            headRef.current.style.boxShadow = "none";
          }
        })
  },[])

  return (
    <header ref={headRef} className="fixed w-full top-0 left-0 z-50 bg-white pt-[13px] transition-all duration-200">
      <div className="contain-content mx-auto flex items-center justify-around px-6">
        <div className="logo w-[17%]">
          <Link to="/" className="flex items-center">
            <span className="logoname text-[30px] ml-2 font-bold relative after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:top-[27px] after:bg-red-600 after:rounded-full">Mealify</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-[40px]">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="relative mylink text-zinc-400 hover:text-black text-[17px] font-medium cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
            {token && (
              <>
                <li className="relative mylink text-zinc-400 duration-75 hover:text-black text-[17px] font-medium cursor-pointer  ">
                  <Link to="/likeorder">
                    <FontAwesomeIcon icon={faHeart} />
                  </Link>
                </li>
                <li
                  className="relative mylink text-zinc-400 hover:text-black text-[17px] font-medium cursor-pointer"
                  onClick={handlLogout}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="relative mylink text-zinc-400 hover:text-black text-[17px] font-medium cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
            {token && (
              <>
                <li className="relative mylink text-zinc-400 hover:text-black text-[17px] font-medium cursor-pointer">
                  <Link to="/likeorder" onClick={() => setIsMobileMenuOpen(false)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </Link>
                </li>
                <li
                  className="relative mylink text-zinc-400 hover:text-black text-[17px] font-medium cursor-pointer"
                  onClick={() => {
                    handlLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
