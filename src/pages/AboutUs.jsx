/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import {RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6} from 'react-icons/ri'



export default function Index() {
  return (
    <>
<br />
      <section className="relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                About One-Stop Ethiopia
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                support victims of <a
                  href="/whatis"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  SGBV
                </a> and various
                cultural/traditional harmful practice, to provide relevant information and counseling
                service available, and facilitate easy access to the medical and legal services of the one
                stop centers in the country. This would enable victims to recover from the
                psychological/emotional and physical trauma they have suffered, as well as obtain legal
                remedy and justice they deserve. {" "}


              </p>
              <div className="mt-12">
                <a
                  href="/whatis"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  What is SGBV
                </a>
                <a
                  href="/LegalAidService"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >

                  Legal Aid Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="assets/img/DRC_SGBV.jpg"
          alt="..."
        />
         {/* <img
          className="absolute b-auto  pt-56 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="assets/img/DRC_SGBV.jpg"
          alt="..."
        /> */}
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      

        <div className="container mx-auto overflow-hidden ">
          <div className="flex flex-wrap items-center">
            <div className="w-full   ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Our Scope
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              The scope of this project includes providing the ability to chat, whether it is by using text, video 
or the calling service to get in touch with our qualified counsellors to acquire, what we call the 
“First aid” of psychological and/or legal counseling services or to ask for information on what to 
do next and who/where to go to. Also create awareness by uploading blogs, announcements and 
training videos to inform and educate people. But since there are One-stop centers available in
helping victims of SGBV, FGM/C, STD, early marriage, teenage pregnancy and abortion, this 
project does not provide in person counselling or treatment for victims rather it provides them 
with the necessary information on where to find these services.
              </p>
              
             
            </div>

           
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                     
                      <p className="text-lg text-white font-semibold">
                      Physical violence
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                     
                      <p className="text-lg text-whitefont-semibold">
                      Verbal violence
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                     
                      <p className="text-lg text-white  font-semibold">
                      Psychological violence
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-7 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      
                      <p className="text-lg text-white  font-semibold">
                      Sexual violence
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                     
                      <p className="text-lg text-white font-semibold">
                      Harassment and sexual harassment
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      
                      <p className="text-lg text-white font-semibold">
                        Domestic violence or in intimate relationships.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6  rounded-full">
                
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Types of gender-based violence
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Violence is often associated only with physical violence, neglecting other nonphysical forms. Violence is a complex issue and categorising different types of violence can never be exact.
              </p>
              
              
              
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                Objectives 
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                In Ethiopia, women, girls as well as boys face physical, emotional, and sexual abuses and gender 
based violence (SGBV) that undermine their health and ability to earn a living; disrupt their social 
systems and relationships; and rob them of their childhood and education. SGBV refers to any act 
that is perpetrated against a person's will and is based on gender norms and unequal power 
relationships. It includes psychological and sexual violence, and denial of resources or access to 
services, as well as threats of violence and coercion.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber1/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Provide initial psychological and legal counseling to victims before referring them to the 
one stop shop for further treatment
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber2/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        To answer Victims questions with readymade answers by using Telegram bot.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber3/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        To provide video conferencing platform to allow easy and private access including for 
persons with hearing impairment
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber4/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        To provide a chat platform for victims that want their privacy
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber5/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Allow victims to use a phone system tailored to their needs for direct and easy access for 
people who do not have smart phones or internet access
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <RiNumber6/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Send out SMS services that create awareness by reaching the vast majority of the 
population
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="assets/img/IMG_9598_newsbanner.jpg"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            “If you are going to fight Gender Based Violence. Fighting it . It doesn't start when you see two opposite gender fighting , but it start with you. On how do you speak to other people. What do you say to other people and how do you behave or act around other people. How do you address other people and how do you respond to other people.”
            </p>
          </div>
        </div>
      </section>

     


      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you want our help 
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                come and talk to our counsellors One-Stop Ethiopia will make sure you are safe
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/counclersearch"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get Counsellor
                </a>
                
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
