import React from 'react'
import Iim1 from "../../Img/meeting-point.png";
import Iim2 from "../../Img/operator.png";
import Iim3 from "../../Img/email.png";
import Iim4 from "../../Img/hourglass.png";

const Connect = () => {
  return (
    <section className="main-section pt-16 pb-16" id="contect">
        <div className="container">
          <div className="row">
            <div className='col-lg-11 mx-auto px-4'>
                <div className='row'>
                <div className="col-lg-6 text-left">
              <span className="sub-title text-gray-900 font-p">
                QUICK CONTACT
              </span>
              <h2 className="main-h2 text-gray-500 font-p">
                Have Questions?
              </h2>
              <p className="mt-3 text-lg text-gray-500 md:w-[75%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="col-12">
                <div className="row mt-5 md:w-[96%]">
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Iim1} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-gray-600 font-p">
                      California Office
                      </h3>
                      <p className="text-lg  text-slate-400 font-p">
                      Rancho Palos Verdes, CA, 
                      

                      </p>
                      <br></br>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Iim2} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-gray-600 font-p">
                        Contact
                      </h3>
                      <p className="text-lg  text-slate-400 font-p">
                        Phone:<br></br>
                        (713) 623-1827
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Iim3} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-gray-600 font-p">
                        Email
                      </h3>
                      <p className="text-lg text-slate-400 font-p">
                        Phone:<br></br>
                        info@buildengllc.com
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Iim4} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-gray-600 font-p">
                      Texas Office
                      </h3>
                      <p className="text-lg text-slate-400 font-p">
                      Houston TX
                      </p>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-left">
              <span className="sub-title text-gray-900 font-p">
                LET’S CONNECT
              </span>
              <h2 className="main-h2 text-gray-500 font-p">Send Your Message</h2>
              <p className="mt-3 text-lg text-gray-500 md:w-[75%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="col-12 mt-5">
                <div className="">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <p className="text-lg font-p mb-2">Name</p>
                      <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <p className="text-lg font-p mb-2">Email</p>
                      <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <p className="text-lg font-p mb-2">Phone</p>
                      <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <p className="text-lg font-p mb-2">Subject</p>
                      <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-12 mb-4">
                      <p className="text-lg font-p mb-2">Your Message</p>
                      <textarea rows={7} className="form-control custom-form-control2" placeholder="Enter here..."></textarea>
                    </div>
                    <div className="col-12">
                      <button className="inline-block rounded-md border border-transparent bg-gray-400 px-12 py-3 text-center font-medium text-white hover:bg-gray-600">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>
          
          </div>
        </div>
      </section>
  )
}

export default Connect
