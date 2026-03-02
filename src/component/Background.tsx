import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-800" />

      <div className="absolute bottom-40 right-80">
        <div className="w-24 h-24 border-2 border-blue-400 rounded-full opacity-25" />
        <div className="absolute top-2 left-2 w-20 h-20 border-2 border-blue-300 rounded-full opacity-35" />
        <div className="absolute top-4 left-4 w-16 h-16 border border-blue-200 rounded-full opacity-45" />
      </div>

      <div className="absolute top-40 left-60">
        <div className="w-24 h-24 border-2 border-blue-400 rounded-full opacity-25" />
        <div className="absolute top-2 left-2 w-20 h-20 border-2 border-blue-300 rounded-full opacity-35" />
        <div className="absolute top-4 left-4 w-16 h-16 border border-blue-200 rounded-full opacity-45" />
      </div>
      <div className="absolute top-40 right-40">
        <div className="w-32 h-32 border-2 border-blue-400 rounded-full opacity-25" />
        <div className="absolute top-2 left-2 w-28 h-28 border-2 border-blue-300 rounded-full opacity-35" />
        <div className="absolute top-4 left-4 w-24 h-24 border border-blue-200 rounded-full opacity-45" />
        <div className="absolute top-6 left-6 w-20 h-20 border border-blue-200 rounded-full opacity-45" />
      </div>
    </div>
  );
};

export default Background;
