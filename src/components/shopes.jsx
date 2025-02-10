import React from "react";

const RecipeCard = ({ name, date, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <div className="bg-red-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
            {name[0].toUpperCase()}
          </div>
          <div className="ml-3">
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 00.75.75h9.75m-9-5.25h5.25m-5.25 0v10.5m0-10.5h5.25m5.25-3a.75.75 0 000 1.5h-12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />

      {/* Text Section */}
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Actions Section */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <button className="text-red-500 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 9.75l-9.75 9.75m0 0L9 14.25m-2.25 5.25H6.75a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
