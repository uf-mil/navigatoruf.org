import React, {useState} from "react";
import Header from "../components/Header";

import assets from "../assets";

const ImageSection = () => {
  return (
    <section className="relative max-w-6xl mx-auto py-8">
      <div className="flex justify-center">
        <img src={assets["teams.jpg"]} alt="teams" className="w-full object-relative rounded-lg h-relative" />
      </div>
    </section>
  );
};

const ImageGrid = ({ openModal }) => {
  const images = [
    { src: 'boat.jpg', alt: 'Boat at Sea' },
    { src: 'navigator.jpg', alt: 'Boat Preparing' },
    { src: 'navigatorams.jpg', alt: 'Testing Equipment' },
    { src: 'person.jpg', alt: 'Teamwork' },
    { src: 'hawaii_stc.jpg', alt: 'Teamwork' },
    { src: 'hawaii_dock.jpg', alt: 'Teamwork' },
    { src: 'boat_at_alumni_event-min.jpg', alt: 'Teamwork' },
    { src: 'dec_2015_trial.jpg', alt: 'Teamwork' },
  ];

  return (
    <section className="max-w-6xl mx-auto py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={assets[image.src]}
            alt={image.alt}
            className="w-full object-cover h-[200px] rounded-lg cursor-pointer"
            onClick={() => openModal(assets[image.src])}
          />
        </div>
      ))}
    </section>
  );
};


const Modal = ({ modalSrc, isVisible, closeModal }) => {
  return (
    <div
      id="modal"
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 ${isVisible ? '' : 'hidden'}`}
    >
      <span className="absolute top-10 right-10 text-white text-3xl cursor-pointer" onClick={closeModal}>
        &times;
      </span>
      <img alt="modal" src={modalSrc} className="max-w-full max-h-full object-contain" />
    </div>
  );
};

const PhotosPage = () => {
  // This function shows hidden lines
  const [modalSrc, setModalSrc] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Open the modal and set the image source
  const openModal = (src) => {
    setModalSrc(src);
    setIsModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
  <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
    <div className="relative">
      <Header title="Photos" />
    </div>
    <section className="pt-20 pb-5 bg-gray-300">
      <ImageSection />
      <ImageGrid openModal={openModal} />
      <Modal modalSrc={modalSrc} isVisible={isModalVisible} closeModal={closeModal} />
    </section>
  </div>
  );
};

export default PhotosPage;
