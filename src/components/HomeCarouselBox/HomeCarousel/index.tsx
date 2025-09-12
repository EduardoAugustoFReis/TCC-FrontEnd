import { HomeCarouselContainer } from "./styles";
import { motion } from "framer-motion";

import img1 from "../../../assets/image/img1.jpg";
import img2 from "../../../assets/image/img2.jpg";
import img3 from "../../../assets/image/img3.jpg";
import img4 from "../../../assets/image/img4.jpg";
import { useEffect, useRef, useState } from "react";

const images = [img1, img2, img3, img4];

const HomeCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current?.scrollWidth;
      const scrollOfSet = carouselRef.current?.offsetWidth;
      const result = (scrollWidth - scrollOfSet);
      setWidth(result);
    }
  }, []);

  return (
    <HomeCarouselContainer>
      <motion.div
        className="carousel"
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="innerCarousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200}}
          animate={{x: 0}}
          transition={{duration: 0.3}}
        >
          {images.map((image) => {
            return (
              <motion.div key={image} className="image">
                <img src={image} alt="Imagem do carrousel" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </HomeCarouselContainer>
  );
};

export default HomeCarousel;
