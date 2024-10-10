import React from 'react';

function MemberCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <img src={image} alt={name} className="w-full object-cover rounded-lg" />
      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default MemberCard;
