import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const user = useAppSelector(useCurrentUser)

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Bicycle</div>
        <div className="hidden md:flex gap-4">
          <a href="/" className="hover:text-gray-300">Home</a>

          {
             !user && <> <a href="/login" className="hover:text-gray-300">Login</a>
          <a href="/register" className="hover:text-gray-300">Register</a> </>
          }

          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="hidden md:block">
          {user && <button onClick={handleLogout} className="btn cursor-pointer border border-white text-white px-4 py-2 rounded hover:bg-gray-700">
            Logout
          </button>}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <a href="/" className="block py-2 hover:text-gray-300">Home</a>
          <a href="/about" className="block py-2 hover:text-gray-300">About</a>
          <a href="/services" className="block py-2 hover:text-gray-300">Services</a>
          <a href="/contact" className="block py-2 hover:text-gray-300">Contact</a>
          {user && <button
           onClick={handleLogout}
            className="btn cursor-pointer w-full mt-4 border border-white text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Logout
          </button>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
