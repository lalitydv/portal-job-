import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Clientssay = () => {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="align-items-center">
            <h2 className="Headings text-center my-4">
              What our clients are saying
            </h2>
            <div className="text-center">
              Showing companies based on reviews and recent job openings
            </div>
          </div>

          {/* <div>
            <Swiper
              className="md:h-96 h-80"
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={3}
              autoplay
            >
              <SwiperSlide>
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                  alt="Mobile App Development Services"
                  className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                  alt="Mobile App Development Services"
                  className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://www.goodfirms.co/company/cerbosys-technologies-inc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://clutch.co/profile/cerbosys-technologies#summary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://www.appfutura.com/companies/cerbosys-technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div> */}

          

        </div>
      </div>
    </>
  );
};

export default Clientssay;
