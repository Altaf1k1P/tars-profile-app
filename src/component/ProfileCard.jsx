import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Skeleton Card */}
        <div className="flex border border-gray-300 rounded-lg w-96 bg-white shadow-md">
          {/* Left Section: Skeleton Image */}
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-md animate-pulse"></div>
          </div>

          {/* Right Section: Skeleton Text */}
          <div className="w-2/3 pl-4 space-y-4">
            <div className="h-5 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Profile Card */}
      <div
        className={`flex flex-col items-center border border-gray-300 rounded-lg p-4 w-96 bg-white shadow-md transition-transform ${
          isHovered ? "hover:scale-105 hover:shadow-2xl" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)} // Set hover state
        onMouseLeave={() => setIsHovered(false)} // Unset hover state
      >
        {isHovered ? (
          <div className="bg-white shadow-xl rounded-lg p-6 w-96 text-center relative transform transition duration-300">
            {/* Profile Images */}
            <div className="relative">
              <img
                src={user.picture.large}
                alt={`Profile picture of ${user.name.first}`}
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <img
                src={user.picture.large}
                alt={`Profile of ${user.name.first}`}
                className="absolute top-20 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white w-28 h-28 hover:border-blue-400 hover:shadow-lg transition"
              />
            </div>

            {/* User Details */}
            <h2 className="text-2xl font-semibold mt-14 text-gray-800">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
            <p className="mt-3 text-gray-700 font-medium">
              {user.location.city}, {user.location.state}, {user.location.country}
            </p>
            <p className="text-gray-500 text-sm mt-1">{user.phone}</p>
          </div>
        ) : (
          <div className="flex">
            {/* Simple View (Default State) */}
            <div className="w-1/3 flex justify-center items-center">
              <img
                src={user.picture.large}
                alt={`Profile of ${user.name.first}`}
                className="w-24 h-24 rounded-md border border-gray-200"
              />
            </div>

            <div className="w-2/3 pl-4">
              <p className="font-semibold text-gray-700">
                {user.name.first} {user.name.last}
              </p>
              <p className="text-gray-500 capitalize">{user.gender}</p>
              <p className="text-gray-500 mt-2">Phone: {user.phone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
