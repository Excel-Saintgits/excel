// Carousel.jsx
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photos from './photos.json';
import { motion } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'; 

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PhotoCarousel = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const select_photos = photos.slice(0, 4);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setCurrentPhoto(select_photos[index]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? select_photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentPhoto(select_photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === select_photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentPhoto(select_photos[newIndex]);
  };

  return (
    <div className="w-full mx-auto px-6">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        containerClass="w-full h-96"
        itemClass="p-2"
        transitionDuration={500}
      >
        {select_photos.map((photo, index) => (
          <div key={index} className="slider h-96">
            <img
              src={photo.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </Carousel>

      {lightboxOpen && currentPhoto && (
        <motion.div
          className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div onClick={closeLightbox} className="text-white absolute top-6 right-8 hover:scale-110 cursor-pointer">
            <AiOutlineClose className="h-8 w-8 text-white hover:text-gray-300" />
          </div>
          <motion.div
            className="max-w-3xl w-full p-4 rounded-lg flex items-center justify-between"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              className="text-lg text-white hover:bg-white hover:text-black focus:outline-none"
              onClick={goToPrevious}
              whileHover={{ scale: 1.1 }}
            >
              <AiOutlineLeft />
            </motion.button>
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <motion.button
              className="text-xl text-white hover:bg-white hover:text-black focus:outline-none"
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
            >
              <AiOutlineRight />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoCarousel;
