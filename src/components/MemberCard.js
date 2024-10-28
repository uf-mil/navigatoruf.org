import React from 'react';

function MemberCard({ name, role, image, degree, graduationYear }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <div className="w-full h-48 overflow-hidden rounded-lg relative">
        <img src={image} alt={name} className="object-cover w-full h-full absolute top-0 left-0" />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-500 text-sm mt-1">{degree}</p>
        <p className="text-gray-500 text-sm mt-1">{graduationYear}</p>
      </div>
    </div>
  );
}

export default MemberCard;
