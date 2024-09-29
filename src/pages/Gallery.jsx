// Gallery.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import photos from '../components/photos.json';
import videos from '../components/videos.json';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [displayItems, setDisplayItems] = useState([]);
  const [activeTab, setActiveTab] = useState('photos');
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeTab === 'photos') {
      const shuffledPhotos = [...photos].sort(() => 0.5 - Math.random());
      setDisplayItems(shuffledPhotos.slice(0, 12));
    } else if (activeTab === 'videos') {
      const shuffledVideos = [...videos].sort(() => 0.5 - Math.random());
      setDisplayItems(shuffledVideos.slice(0, 6));
    }
  }, [activeTab]);

  const openLightbox = (index) => {
    if (activeTab === 'photos') {
      setCurrentIndex(index);
      setLightboxPhoto(displayItems[index]);
    } else if (activeTab === 'videos') {
      setCurrentVideoIndex(index);
      setLightboxVideo(displayItems[index]);
    }
  };

  const closeLightbox = () => {
    setLightboxPhoto(null);
    setLightboxVideo(null);
  };

  const goToPrevious = () => {
    if (activeTab === 'photos') {
      const newIndex = currentIndex === 0 ? displayItems.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setLightboxPhoto(displayItems[newIndex]);
    } else if (activeTab === 'videos') {
      const newIndex = currentVideoIndex === 0 ? displayItems.length - 1 : currentVideoIndex - 1;
      setCurrentVideoIndex(newIndex);
      setLightboxVideo(displayItems[newIndex]);
    }
  };

  const goToNext = () => {
    if (activeTab === 'photos') {
      const newIndex = currentIndex === displayItems.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setLightboxPhoto(displayItems[newIndex]);
    } else if (activeTab === 'videos') {
      const newIndex = currentVideoIndex === displayItems.length - 1 ? 0 : currentVideoIndex + 1;
      setCurrentVideoIndex(newIndex);
      setLightboxVideo(displayItems[newIndex]);
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-[#35374E]">
          Gallery
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 mx-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'photos'
                ? 'bg-[#0C9E8F] text-white'
                : 'bg-transparent text-[#0C9E8F] border border-[#0C9E8F] hover:bg-[#0C9E8F] hover:text-white'
            }`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
          <button
            className={`px-6 py-2 mx-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === 'videos'
                ? 'bg-[#0C9E8F] text-white'
                : 'bg-transparent text-[#0C9E8F] border border-[#0C9E8F] hover:bg-[#0C9E8F] hover:text-white'
            }`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
            >
              {activeTab === 'photos' ? (
                <motion.img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <div className="relative w-full h-60 bg-black overflow-hidden">
                  <iframe
                    src={item.url}
                    title={item.title}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {(lightboxPhoto || lightboxVideo) && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute top-6 right-6 text-white cursor-pointer" onClick={closeLightbox}>
                <AiOutlineClose className="h-8 w-8 hover:text-gray-300" />
              </div>
              <motion.div
                className="relative w-full max-w-4xl mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'photos' && lightboxPhoto && (
                  <img
                    src={lightboxPhoto.url}
                    alt={lightboxPhoto.alt}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                {activeTab === 'videos' && lightboxVideo && (
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe
                      src={lightboxVideo.url}
                      title={lightboxVideo.title}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 ml-2 focus:outline-none"
                    onClick={goToPrevious}
                  >
                    <AiOutlineLeft className="h-6 w-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 mr-2 focus:outline-none"
                    onClick={goToNext}
                  >
                    <AiOutlineRight className="h-6 w-6" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
