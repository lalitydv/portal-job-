import Image from 'next/image';
import React from 'react';

const Gethired = () => {
  const checkboxStyle = {
    width: '20px',
    height: '20px',
    position: 'relative',
    backgroundColor: '#28a745',
    color: '#28a745',
  };

  return (
    <div>
      <div class=" container">
        <div class="row">
          {/* <!-- Column 1 --> */}
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center gap-4">
            <h1 class="Gethir-heding">GET HIRED, TRAINED AND CERTIFIED</h1>

            <div class="align-items-center">
              Reach out today and have one of our skilled recruiters discuss on
              the job training programs.
            </div>

            <div className="d-flex flex-column gap-3">
              <div class="d-flex gap-2 align-items-center">
                <i class="fas fa-check-square text-success fs-3"></i>
                <span class="fs-5"> Field Engineers</span>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <i class="fas fa-check-square text-success fs-3"></i>
                <span class="fs-5"> Hardware Technicians</span>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <i class="fas fa-check-square text-success fs-3"></i>
                <span class="fs-5"> HVAC Technicians</span>
              </div>
            </div>

            <button type="button" class="btn hired-button">
              Contact Us
            </button>
          </div>

          {/* <!-- Column 2 --> */}
          <div class="col-12 col-md-6">
            <Image
              width={486}
              height={589}
              layout="responsive"
              src="https://ugohire.com/wp-content/uploads/2021/03/clipart-1.svg"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gethired;
