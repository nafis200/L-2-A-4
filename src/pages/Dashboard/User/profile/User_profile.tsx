import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { useCurrentUser } from "../../../../redux/features/auth/authSlice";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

type UserType = {
  email: string;
  role: "admin" | "faculty" | "student" | "user";
  exp: number;
  iat: number;
};

const User_profile = () => {
  const user = useAppSelector(useCurrentUser) as UserType | null;

  return (
    <section className="relative min-h-screen">
 
      <div className="h-64 w-full relative">
        <img
          src="https://i.postimg.cc/ZnYt4BMN/pexels-photo-326055.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

   
      <div className="max-w-3xl mx-auto -mt-28 bg-white shadow-xl rounded-xl p-6 relative z-10">
        <div className="flex flex-col items-center">
         
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="https://i.postimg.cc/286RtWvR/glasses-lie-laptop-reflecting-light-from-screen-dark-169016-52267.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

      
          <h1 className="text-2xl font-bold mt-4">User Profile</h1>

        
          {user ? (
            <div className="mt-4 text-center space-y-1">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong>{" "}
                <span className="capitalize text-blue-600">{user.role}</span>
              </p>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">User information not available.</p>
          )}

          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/n-ahamed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/nafis200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.facebook.com/nafis200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User_profile;
