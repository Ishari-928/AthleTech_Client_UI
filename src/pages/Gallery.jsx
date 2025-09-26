import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import bgImage from "../assets/images/Home Page Carousel.svg";

const PageName = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "40px", md: "60px" },
          fontWeight: 800,
        }}
      >
        Gallery of <span style={{ color: "#FF754A" }}>Champions</span>
      </Typography>
      <Typography sx={{ marginTop: "5px", width: "80%" }}>
        Celebrating the spirit of athletics—one moment at a time.
      </Typography>
    </Box>
  );
};

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(12);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/v1/gallery/images");
        
         const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        
        const data = await response.json();
        setImages(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth <= 375) {
        setImagesPerPage(12);
      } else {
        setImagesPerPage(12);
      }
    };

    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);

    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div className="gallery-main-container">
      {images.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <Typography variant="h6">No images found in the gallery.</Typography>
        </Box>
      ) : (
        <>
          <div className="gallery-container">
            {currentImages.map((image, index) => (
              <div
                className="galleryimage"
                key={image.public_id ? String(image.public_id) : index}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={`Gallery ${index}`} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="popup-galleryimage" onClick={() => setSelectedImage(null)}>
              <span onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}>&times;</span>
              <img src={selectedImage.url} alt="Selected" />
            </div>
          )}

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-arrow"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`pagination-number ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                className="pagination-arrow"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <PageName />
      <Images />
    </div>
  );
};

export default Gallery;