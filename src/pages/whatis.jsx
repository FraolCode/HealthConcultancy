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
            "url('https://devpolicy.org/wp-content/uploads/2011/12/gender.jpg')",
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
              What is SGBV
              </h1>
              <p className="mt-8 text-lg text-blueGray-200">
              Gender-based violence is a phenomenon deeply rooted in gender inequality, and continues to be one of the most notable human rights violations within all societies. Gender-based violence is violence directed against a person because of their gender. Both women and men experience gender-based violence but the majority of victims are women and girls.
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
              
              <h3 className="text-3xl font-semibold">What is gender-based violence?</h3>
              <br />
              <hr className="text-blueGray-300" />
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Under its Legal Aid Program EWLA assists women, particularly disadvantaged women, who are victims of gender-based violence free of charge. The service includes legal advice/counseling, writing court briefs (court charges and affidavits) as well as representing clients in courts.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Gender-based violence and violence against women are terms that are often used interchangeably as it has been widely acknowledged that most gender-based violence is inflicted on women and girls, by men. However, using the ‘gender-based’ aspect is important as it highlights the fact that many forms of violence against women are rooted in power inequalities between women and men. The terms are used interchangeably throughout EIGE’s work,  reflecting the disproportionate number of these particular crimes against women.
              </p>
              <br />
              <img
                alt="..."
                src="assets/img/ss.jpg"
                className="shadow-lg  mx-auto "
              />
<br /><br />

              <h3 className="text-3xl font-semibold"> Forms of violence </h3>

              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Gender-based violence is enacted under many different manifestations, from its most widespread form, intimate partner violence, to acts of violence carried out in online spaces. These different forms are not mutually exclusive and multiple incidences of violence can be happening at once and reinforcing each other. Inequalities experienced by a person related to their race, (dis)ability, age, social class, religion, sexuality can also drive acts of violence. This means that while women face violence and discrimination based on gender, some women experience multiple and interlocking forms of violence.
              </p>
              
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                   
                    <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber1/>
                      </span> Physical violence</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Any act which causes physical harm as a result of unlawful physical force. Physical violence can take the form of, among others, serious and minor assault, deprivation of liberty and manslaughter.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber2/>
                      </span>Sexual violence</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Any sexual act perfomed on an individual without their consent. Sexual violence can take the form of rape or sexual assault.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber3/>
                      </span> Psychological violence</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Any act which causes psychological harm to an individual. Psychological violence can take the form of, for example, coercion, defamation, verbal insult or harassment.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    
                  <div>
                      
                      <h1 className="text-xl" >  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                        <RiNumber4/>
                      </span>Economic violence</h1>
                      <br />
                      <h4 className="pl-10 ml-7 text-blueGray-500">
                      Any act or behaviour which causes economic harm to an individual. Economic violence can take the form of, for example, property damage, restricting access to financial resources, education or the labour market, or not complying with economic responsibilities, such as alimony.
                      </h4>
                    </div>
                  </div>
                </li>
                
                
               
              </ul>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              It is also important to recognise that gender-based violence may be normalised and reproduced due to structural inequalities, such as societal norms, attitudes and stereotypes around gender generally and violence against women specifically. Therefore it is important to acknowledge structural or institutional violence, which can be defined  as the subordination of women in economic, social and political life, when attempting to explain the prevalence of violence against women within our societies.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>

   




  
    
  </main>
  )
}

export default AboutUs;
