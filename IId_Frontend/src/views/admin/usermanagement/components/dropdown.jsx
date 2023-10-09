import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-gray-700 bg-white border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
      >
        Action
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-lg">
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">
            Edit
          </button>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">
            Update
          </button>
          <button className="block px-4 py-2 text-red-600 hover:bg-red-200 focus:outline-none">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
