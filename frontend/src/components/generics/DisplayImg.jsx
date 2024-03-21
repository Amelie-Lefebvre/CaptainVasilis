// imports
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import "./_displayImg.scss";

const DisplayImg = ({ library }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await library();
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, [library]);

  useEffect(() => {
    const items = document.querySelectorAll(".image-item");

    const fadeInImages = () => {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
          item.style.transform = "translateY(20)";
        }, index * 400);
      });
    };

    fadeInImages();

    // Cleanup effect
    return () => {
      items.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
      });
    };
  }, [images]);

  const splitImagesIntoRows = (startIndex, count) => {
    return images.slice(startIndex, startIndex + count).map((image, index) => (
      <div
        key={startIndex + index}
        className="image-item"
        onClick={() => handleImageClick(startIndex + index)}
      >
        <img src={image} alt={`Image ${startIndex + index + 1}`} />
      </div>
    ));
  };

  const isMobile = useMediaQuery({ minWidth: 580 });

  return (
    <>
      {isMobile ? (
        images.length > 0 && (
          <article className="gallery_container">
            <div className="image-row">{splitImagesIntoRows(0, 3)}</div>
            <div className="image-row">{splitImagesIntoRows(3, 4)}</div>
            <div className="image-row">
              {splitImagesIntoRows(7, images.length - 7)}
            </div>
            {selectedImage && (
              <div className="overlay" onClick={handleCloseOverlay}>
                <img src={selectedImage} alt="Full-size Image" />
              </div>
            )}
          </article>
        )
      ) : (
        <article className="gallery_container_mini">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </article>
      )}
    </>
  );
};

DisplayImg.propTypes = {
  library: PropTypes.func.isRequired,
};

export default DisplayImg;
