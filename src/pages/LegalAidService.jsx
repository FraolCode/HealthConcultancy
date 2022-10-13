import React from "react";
import {  Link } from 'react-router-dom'
import {GiThorHammer} from 'react-icons/gi'
import {RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6} from 'react-icons/ri'

function AboutUs() {
 

  return (
    <main>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://www.unwomen.org/sites/default/files/2022-03/vaw-hero_0.JPG')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
              Legal Aid Service
              </h1>
              <p className="mt-8 text-lg text-blueGray-200">
              Under its Legal Aid Program EWLA assists women, particularly disadvantaged women, who are victims of gender-based violence free of charge. The service includes legal advice/counseling, writing court briefs (court charges and affidavits) as well as representing clients in courts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
    </div>

   

    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          
          <div className="w-full ">
            <div className="md:pr-12">
              <div className="text-lightBlue-600 text-xl p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                <GiThorHammer/>
              </div>
              <h3 className="text-3xl font-semibold">Legal Aid Service</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Under its Legal Aid Program EWLA assists women, particularly disadvantaged women, who are victims of gender-based violence free of charge. The service includes legal advice/counseling, writing court briefs (court charges and affidavits) as well as representing clients in courts.
              </p>
              <br />
              <h3 className="text-3xl font-semibold"> Ethiopia women lawyers' Association </h3>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                   
                    <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber1/>
                      </span> Who are the beneficiaries of the legal aid service?</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Women with no or limited financial capability to access legal services; mothers with the burden of taking care of children while having no money to buy bread, to provide roof over their head, to buy medicine, to send the children to school and to buy clothes; women who have been beaten, bitten, burnt, cut and degraded; girls who have been raped and sexually molested, wedded in childhood, abducted, beaten and burnt; women who have been denied of their property, their jobs and their means of income; children denied of parents, denied of support crucial for their upbringing, and denied of succession.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber2/>
                      </span> Barriers impeding women from accessing justice</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      poverty, not allowed to engage in public matters and being highly engrossed in care-taking role in the house, lack of information, not being allowed to speak out loud and as a result not being assertive, acceptance of violence and injustice to them, attitudinal problems towards violence against women and women’s position in the community, gender in sensitiveness of justice sector organs all are factors that impede women from accessing justice.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber3/>
                      </span> Preparation of Written Litigation</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      considering that justice will be jeopardized for women who cannot access justice sector organs due to lack of finance and information EWLA prepares all litigation papers (suits, responses, appeals, cross-appeals, affidavits) for the women to file at the court. This requires expertise in the legal field as well as other procedural and managerial skills. The types of remedies sought for the clients are various. There have been instances where EWLA’s members or staff members go to administrative bodies when clearly stated laws are infringed. EWLA has maintained good relationship with the police and the public prosecutors in its working years.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber4/>
                      </span>Representation</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      In order to assist clients, depending on the seriousness of the case, the possibility of jeopardy of justice for lack of the right intervention staff and members of the association represent selected clients’ cases in courts.Because of its high financial and time cost it is with great care such decisions are made. As representation of cases is undertaken with the aim to set precedence and to save women from failure in their cases it is undertaken with great care and vigor which usually results in success.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber5/>
                      </span>Legal Advice</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Information is very important to succeed in legal litigation. Women who come for free legal service usually are found to lack information. Therefore EWLA examines the reports these women file and forwards effective legal advice which ensures remedies to which women are entitled but have been out of reach to them. Legal advice continues till the end of the litigation which the clients can access through appearing at the EWLA legal aid centers.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber6/>
                      </span>Service Providers</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      The legal aid service is provided by 16 employees and 300 hundred volunteers with high commitment and expertise which capacitates them to pinpoint the right solutions for cases handled by them. Those volunteers from disciplines other than law are intensively trained in law and serve as paralegals in areas where legal professionals are non-existent. The service the volunteers provide under the EWLA hub is priceless to the Association but it can also be expressed in monetary as well as time terms which come up to 30,000 hours of free service per year.
                      </h4>
                    </div>
                  </div>
                </li>
                
               
              </ul>
              <br />
              <h3 className="text-3xl font-semibold">What can governments do?</h3>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Increase resources for shelters, hotlines and other services so that they can meet heightened demand.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Increase resources for shelters, hotlines and other services so that they can meet heightened demand.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Protect elected and non-elected women leaders from gender-based violence. Any efforts to protect and combat violence against women in politics must consider women in all their public roles, including women civil servants and experts.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Consider the communication needs of older women and women with limited access to ICT –– e.g. by setting up emergency warning systems in pharmacies and grocery stores.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Make information and communication channels accessible for women with disabilities.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Ensure women’s economic independence by enabling access to and control over regular, secure and long-term income.
                      </h4>
                    </div>
                  </div>
                </li>
                
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              klsa kajshdfm ahdskf ajsdhjkfa diabkjnds kjsahdfkasdbfsa
              ajdshfkasdhfjsaksadb faskjhdffka sdihansdkbfksad
              asdkjfhak dsjashdfm sa
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="assets/img/team-1-800x800.jpg"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Fraol</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  abc
                </p>
                
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="assets/img/team-2-800x800.jpg"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Bereket</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  abc
                </p>
               
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="assets/img/team-3-800x800.jpg"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Temesgen</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  abc
                </p>
                
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="assets/img/team-4-470x470.png"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">miki</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  abc
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className="pb-20 relative block bg-blueGray-800">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
            className="text-blueGray-800 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              Build something
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              Put the potentially record low maximum sea ice extent tihs
              year down to low ice. According to the National Oceanic and
              Atmospheric Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Excelent Services
            </h6>
            <p className="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-poll text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Grow your market
            </h5>
            <p className="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Launch time
            </h5>
            <p className="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                  Complete this form and we will get back to you in 24
                  hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="80"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default AboutUs;
