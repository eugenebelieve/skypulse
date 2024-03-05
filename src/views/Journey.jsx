import { Card } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Journey = ({ request, status }) => {

  return (
    <>
      <Card className='shadow-2xl'>

        <section className="text-gray-600 body-font">

          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">

              <div className="lg:w-2/5 md:w-1/2 md:pr-5 md:py-6">

                {(status >= 0) &&
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Welcome</h2>
                      <p className="leading-relaxed">Start here by submitting your request in natural language</p>
                    </div>
                  </div>
                }


                {(status >= 2) &&
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10L8 3.57l-1.91.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33l1.6-.42l5.31-1.43l4.35-1.16L21 11.5c.81-.24 1.28-1.06 1.07-1.86" /></svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FLIGHT</h2>
                      <p className="leading-relaxed">You have booked the flight with Airfrance and you will arrive on Monday at 11am</p>
                    </div>
                  </div>
                }

                {(status >= 3) &&
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" /><path d="m9 16l.348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16M8 7h.01M16 7h.01M12 7h.01M12 11h.01M16 11h.01M8 11h.01M10 22v-6.5m4 0V22" /></g></svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">HOTEL BOOKED</h2>
                      <p className="leading-relaxed">You will be able to check-in into your hotel at 15:00 but keep the luggage until then.</p>
                    </div>
                  </div>}

                {(status >= 4) &&

                  <div className="flex relative pb-12">
                    {request?.flights && request?.hotels && request?.poi &&

                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                    }
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.21 17c.44-.85.85-1.84 1.23-3H9v-2h1c.61-2.6 1-5.87 1-10h2c0 4.13.4 7.4 1 10h1v2h-.44c.38 1.16.79 2.15 1.23 3H17v2l2 3h-2.42c-.77-1.76-2.53-3-4.58-3c-2.05 0-3.81 1.24-4.58 3H5l2-3l-.03-2zm4.38-3h-1.18a21.77 21.77 0 0 1-1.13 3h3.44c-.4-.87-.79-1.87-1.13-3" /></svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">ACTIVITIES SET</h2>
                      <p className="leading-relaxed">On Monday you will visit The Louvre, on Tuesday you will go up the Eiffel Tower and on the last day you will ride a Bateaux Mouches on the Seine for a
                        Romantic Cruise with a beautiful sunset.</p>
                    </div>
                  </div>
                }

                {(status >= 5) &&
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                      <p className="leading-relaxed">Now you just need to Validate and Pay</p>
                    </div>
                  </div>}
              </div>


              {status < 5 && <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="img/skypulse.webp" alt="step" />}


              {/** 
                <div className="relative w-96 h-full">
                  <iframe className="absolute top-0 left-0 w-full h-full"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Paris,France&amp;ie=UTF8&amp;t=&amp;iwloc=B&amp;output=embed"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                  </iframe>
                </div>

                */}


              {status >= 5 && <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="img/flight.jpg" alt="step" />}



            </div>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Journey;
