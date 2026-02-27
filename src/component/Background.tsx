import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900" />
      
      {/* Concentric circles */}
      <div className="absolute top-60 left-60">
        <div className="w-32 h-32 border-2 border-purple-400 rounded-full opacity-20" />
        <div className="absolute top-2 left-2 w-28 h-28 border-2 border-purple-300 rounded-full opacity-30" />
        <div className="absolute top-4 left-4 w-24 h-24 border border-purple-200 rounded-full opacity-40" />
      </div>
      
      <div className="absolute bottom-40 right-60">
        <div className="w-24 h-24 border-2 border-blue-400 rounded-full opacity-25" />
        <div className="absolute top-2 left-2 w-20 h-20 border-2 border-blue-300 rounded-full opacity-35" />
        <div className="absolute top-4 left-4 w-16 h-16 border border-blue-200 rounded-full opacity-45" />
      </div>
      
      
      {/* Additional decorative elements */}
      <div className="absolute top-80 right-80 w-16 h-16 border-2 border-pink-400 rounded-full opacity-20 " />
      <div className="absolute bottom-60 left-80 w-12 h-12 border border-blue-300 rounded-full opacity-30 " />
      <div className="absolute top-40 left-1/2 w-8 h-8 bg-purple-400 rounded-full opacity-25 blur-xl " />
    </div>
  );
};

export default Background;
