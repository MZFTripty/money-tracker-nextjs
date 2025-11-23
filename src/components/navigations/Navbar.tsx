import React from "react";

export default function Navbar() {
  return (
    // <div className="container mx-auto p-4 border-b border-gray-300 flex justify-center">
    //   <h1 className="text-xl font-bold">MultiTasker</h1>
    // </div>
    <div className="container mx-auto p-4 border-b border-gray-300 lg:flex justify-center font-mono text-sm z-10">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center w-full drop-shadow-sm">
        MultiTasker
      </h1>
    </div>
  );
}
