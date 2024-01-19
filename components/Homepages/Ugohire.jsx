import React from 'react';

const Ugohire = () => {
  return (
    <div className="Ugohire-body py-5">
      <div className="container">
        <div className="align-items-center ">
          <h2 className="Headings text-center my-4">
            What can I do with UgoHire?
          </h2>
          <div className="text-center">
            Streamline your hiring process with strategic channels to reach
            qualified candidates
          </div>

          <div class="row d-flex justify-content-center align-content-center my-5">
            {/* <!-- Column 1 --> */}
            <div class="col-12 col-md-4 d-flex flex-column justify-content-center gap-4">
              <div class="card-body text-center  d-flex flex-column gap-3">
                <span className="icons-ug ">
                  <i
                    aria-hidden="true"
                    class="fas fa-user-ninja elementor-icon my-4"
                  ></i>
                </span>

                <div class="fs-4 font-weight-bold mb-4">Reduce Hiring bias</div>
                <div class=" px-5">
                  Structured digital interviews increase the predictive validity
                  of your hires by 65%.
                </div>
              </div>
            </div>

            {/* <!-- Column 2 --> */}
            <div class="col-12 col-md-4 d-flex flex-column justify-content-center gap-4">
              <div class="card-body text-center d-flex flex-column gap-3">
                <span className="icons-ug ">
                  {' '}
                  <i
                    aria-hidden="true"
                    class="fas fa-users-cog elementor-icon my-4"
                  ></i>
                </span>

                <div class="fs-4 font-weight-bold mb-4">
                  Save time & headspace
                </div>
                <div class="  px-5">
                  Reduce your time-to-hire by up to 75% and free up headspace
                  for other HR
                </div>
              </div>
            </div>
            {/* <!-- Column 3 --> */}
            <div class="col-12 col-md-4 d-flex flex-column justify-content-center gap-4">
              <div class="card-body text-center d-flex flex-column justify-content-center gap-3">
                <span className="icons-ug ">
                  <i
                    aria-hidden="true"
                    class="fas fa-user-ninja elementor-icon my-4"
                  ></i>
                </span>

                <div class="fs-4 font-weight-bold mb-4">
                  Minimize Environmental Impact
                </div>
                <div class="  px-5">
                  Did you know? U.S. office workers use ~10,000 sheets of paper
                  every year.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ugohire;
