import React from "react";

const ModalOverlay = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-30 z-50">
      {/* Add your modal content here */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* ... Your existing modal content ... */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalOverlay;
