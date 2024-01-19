'use client';
import MovingComponent from 'react-moving-text';
import SearchForm from '../../common/job-search/SearchForm';
import ImageBox from './ImageBox';
import Gethired from '@/components/Homepages/Gethired';
import RecentJobs from '@/components/Homepages/RecentJobs';
import Ugohire from '@/components/Homepages/Ugohire';
import Clientssay from '@/components/Homepages/Clientssay';

const AnimationsForChaining = ['fadeOutToRight'];
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const textData = [
  'Hiring',
  'Employment',
  'Placement',
  'Matching',
  // Add more text items as needed
];
const Index = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    if (animationIndex < AnimationsForChaining.length - 1) {
      setAnimationIndex(animationIndex + 1);
      setAnimationType(AnimationsForChaining[animationIndex + 1]);
    }
  };

  const [index, setIndex] = useState(0);

  const nextText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % textData.length);
  };

  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: `translateX(${index * -100}%)`,
  });

  // Auto-advance to the next text after a delay
  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 3000); // Change the delay as needed

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <section className="banner-section">
        <div className="hero-container">
          <div className="content-column col-lg-12 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box text-center">
                <h3 className="container">
                  A SIMPLE, CUTTING-EDGE, STATE-OF-THE-ART, ARTIFICIAL
                  INTELLIGENCE
                </h3>
                <div>
                  <div className="text-slider-container py-5">
                    <animated.div
                      className="text-slider-inner"
                      style={{ opacity, transform }}
                    >
                      {textData.map((text, i) => (
                        <div key={i} className="text-slider-item ">
                          {text}
                        </div>
                      ))}
                    </animated.div>
                  </div>
                </div>
                <h3 className="title-box text-center">PLATFORM</h3>
              </div>

              {/* buttons  */}
              <div className="d-flex gap-5 flex-lg-row flex-column justify-content-center ">
                <button type="button" class=" Job  px-5 p-2 fs-4">
                  Looking for Job?
                </button>
                <button type="button" class=" Hire px-5 p-2 fs-4">
                  Looking to Hire?
                </button>
              </div>
              {/* buttons  */}
            </div>
          </div>
        </div>
      </section>

      {/* GET HIRED */}
      <Gethired />
      {/* GET HIRED */}
      {/* RecentJobs */}
      <RecentJobs />
      {/* RecentJobs */}
      {/* Ugohire */}
      <Ugohire />
      {/* Ugohire */}
      {/* Clientssay */}
      {/* <Clientssay /> */}
      {/* Clientssay */}
    </>
  );
};

export default Index;
