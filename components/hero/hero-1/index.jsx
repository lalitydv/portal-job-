'use client';
import React, { useState } from 'react';
import MovingComponent from 'react-moving-text';
import SearchForm from '../../common/job-search/SearchForm';
import ImageBox from './ImageBox';
import Gethired from '@/components/Homepages/Gethired';
import RecentJobs from '@/components/Homepages/RecentJobs';
import Ugohire from '@/components/Homepages/Ugohire';
import Clientssay from '@/components/Homepages/Clientssay';

const AnimationsForChaining = ['fadeOutToRight'];

const Index = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    if (animationIndex < AnimationsForChaining.length - 1) {
      setAnimationIndex(animationIndex + 1);
      setAnimationType(AnimationsForChaining[animationIndex + 1]);
    }
  };

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
                <h3 className="">
                  A SIMPLE, CUTTING-EDGE, STATE-OF-THE-ART, ARTIFICIAL
                  INTELLIGENCE
                </h3>
                <div>
                  <MovingComponent
                    onAnimationEnd={handleChainAnimation}
                    type={animationType}
                    duration="1000ms"
                    timing="linear"
                    fillMode="forwards"
                    iteration={1}
                    style={{
                      display: 'inline-block',
                      border: '1px solid black',
                    }}
                  >
                    React-Moving-Text
                  </MovingComponent>
                </div>
                <h3 className="title-box text-center">PLATFORM</h3>
              </div>

              {/* buttons  */}
              <div className="d-flex gap-5 flex-lg-row flex-column justify-content-center ">
                <button type="button" class="btn btn-info  px-5 p-2 fs-4 ">
                  Looking for Job?
                </button>
                <button type="button" class="btn btn-primary px-5 p-2 fs-4">
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
