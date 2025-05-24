"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const mealItems = [
  { _id: "679ba491694c5cd16d2a7f10", name: "Nisan" },
  { _id: "679927ff2ec5426c78226a8e", name: "Ram" },
  { _id: "679927f62ec5426c78226a8c", name: "Audi" },
  { _id: "679ba491694c5cd16d2a7f10", name: "Nisan" },
  { _id: "679927ff2ec5426c78226a8e", name: "Ram" },
  { _id: "679927f62ec5426c78226a8c", name: "Audi" },
  { _id: "679ba491694c5cd16d2a7f10", name: "Nisan" },
  { _id: "679927ff2ec5426c78226a8e", name: "Ram" },
  { _id: "679927f62ec5426c78226a8c", name: "Audi" },
 
];

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-500 text-white sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
      
        <div>
          <a href="/">
            <img
              src="https://i.postimg.cc/C5SrMXNd/car.png"
              alt="Cars"
              className="w-20 h-20 ml-5"
            />
          </a>
        </div>


        <div className="hidden md:flex md:justify-center items-center gap-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/allproduct" className="hover:text-gray-300">
            All Product
          </a>
          <div className="relative">
            <button
              className="hover:text-gray-300 flex items-center gap-1"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded shadow-md z-30">
                {mealItems.map((meal) => (
                  <a
                    key={meal._id}
                    href={`/car-detail/${meal._id}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {meal.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>

          {!user && (
            <>
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
              <a href="/register" className="hover:text-gray-300">
                Register
              </a>
            </>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="border border-white text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Logout
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4 space-y-2">
          <a href="/" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="/allproduct" className="hover:text-gray-300">
            All Product
          </a>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-gray-300">
              Products
              <ChevronDown size={16} />
            </summary>
            <div className="ml-4 mt-2">
              {mealItems.map((meal) => (
                <a
                  key={meal._id}
                  href={`/mealcard/${meal._id}`}
                  className="block py-1 hover:text-gray-300"
                >
                  {meal.name}
                </a>
              ))}
            </div>
          </details>
          <a href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          {!user && (
            <>
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
              <a href="/register" className="hover:text-gray-300">
                Register
              </a>
            </>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full border border-white text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
