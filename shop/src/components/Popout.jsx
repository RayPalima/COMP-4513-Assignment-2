import React from "react";

const Popout = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-xl w-full shadow-xl relative">
        <button
        onClick={onClose}
        className="font-bold flex justify-left rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popout;