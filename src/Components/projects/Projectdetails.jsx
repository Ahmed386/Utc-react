import React from "react";
// import { Carousel } from "3d-react-carousal";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Carousel from 'react-bootstrap/Carousel';
import "swiper/css";
import { motion } from "framer-motion";



// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper's default styles
import "swiper/css/navigation"; // Optional: if you need navigation buttons
import "swiper/css/pagination";
import MyCarousel from './../mycarousel/Mycarousel';

export default function Projectdetails() {
  const { id } = useParams();
  const selectedProject = projects.find((project) => project.id == id);

  return (
    <>
      <div className="projectpage">
        <div className="projectspage ubg  py-5">
          <div className="text-center mt-5 text-white heading">
            <h1 className="fs-1 fw-bold">Projects</h1>
            <p>
              {selectedProject.title}
              <span className="text-white-50 px-2">
                {selectedProject.subtitle}
              </span>
            </p>
          </div>

          <div className="container bord px-5 py-4 ">
            <div className="bg-white p-5">
              <div className="slider center py-3  ">
                <MyCarousel selectedProject={selectedProject} />
              </div>

              <div className="row  py-5">
                <motion.div
                  className="col-lg-6"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 0.1 }}
                >
                  <div className="">
                    <div>
                      <img src="/projinfo.png" className="w-100" alt="" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 0.1 }}
                >
                  <div className="">
                    <div className="">
                      <p className="text-uppercase firstline">
                        {selectedProject.descriptiontitle}
                      </p>
                      <h1 className="secondline">Project Information</h1>
                      <p className="devpreef">{selectedProject.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <p className="text-uppercase firstline">
                    {selectedProject.client}
                  </p>
                  <h1 className="secondline">
                    {selectedProject.aboutdeveloper}
                  </h1>
                  <p className="devpreef">{selectedProject.developerbreef}</p>
                </div>
                <div className="col-lg-5 projdownphotos">
                  <div className="d-flex row align-items-end">
                    <div className="col-lg-6">
                      <img src={selectedProject.tLetter} alt="" />
                    </div>
                    <div className="d-flex col-lg-6 ">
                      <img src={selectedProject.redDot} alt="" />
                      <img src={selectedProject.tatweer} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
