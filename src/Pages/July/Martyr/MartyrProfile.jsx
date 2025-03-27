import React from "react";

const MartyrProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src="/martyr-image.jpg"
              alt="Abu Sayed"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Info Section */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-gray-800">Abu Sayed</h2>
            <p className="text-gray-600">Student, Begum Rokeya University, Rangpur</p>
            <p className="text-gray-500 text-sm">Date of Death: 16th July, 2024</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="bg-gray-200 p-2 rounded">Age: 23 years</p>
              <p className="bg-gray-200 p-2 rounded">Place of Birth: Babanpur, Pirganj, Rangpur</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">How He Became a Martyr</h3>
              <p className="text-gray-600 mt-2 text-sm">
                On July 16, during a peaceful demonstration for quota reforms, Abu Sayed stood his
                ground while others left. The police fired rubber bullets at him, and he attempted to
                shield himself with a stick. He was eventually hit repeatedly and succumbed to his injuries.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">Short Biography</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Abu Sayed, a student of the 12th batch in the English Department at Begum Rokeya University,
                was born in 2001 in Babanpur village. He excelled academically, earning a talent pool scholarship
                and achieving GPA-5 throughout his education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MartyrProfile;
