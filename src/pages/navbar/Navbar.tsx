import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Company Name */}
        <div className="text-xl font-bold">Bicycle</div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex gap-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/login" className="hover:text-gray-300">Login</a>
          <a href="/register" className="hover:text-gray-300">Register</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Login/Logout Button */}
        <div className="hidden md:block">
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-gray-700">
            Logout
          </button>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <a href="/" className="block py-2 hover:text-gray-300">Home</a>
          <a href="/about" className="block py-2 hover:text-gray-300">About</a>
          <a href="/services" className="block py-2 hover:text-gray-300">Services</a>
          <a href="/contact" className="block py-2 hover:text-gray-300">Contact</a>
          <button
            className="w-full mt-4 border border-white text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
