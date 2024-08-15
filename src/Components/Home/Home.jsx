import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Home.css"
import logo from '../../assets/images/Group.png'
import image from "../../assets/images/Mypic.png"
import sepa from "../../assets/images/separatorBlack1.png"
import html from "../../assets/images/html5.svg"
import css from "../../assets/images/css.svg"
import jsc from "../../assets/images/js.svg"
import git from "../../assets/images/git.svg"
import typs from "../../assets/images/typescript.png"
import node from "../../assets/images/nodejs.png"
import mongo from "../../assets/images/mongo2.png"
import { Link, NavLink } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Home = ()=>{

    const [isClicked, setIsclicked] = useState(true);
    console.log(isClicked);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j509uvu', 'template_j4nxkjj', form.current, {
            publicKey: 'JPioq9IYzdRZ2nzA4',
          })
          .then(
            () => {
              alert("Message sent successfully")
              console.log('SUCCESS!');
              console.log("message sent successfully");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          form == '';
      };

    return(
        <div className="container">
            <div className="container1" id="home">

                    <div className="info">
                        <img src={logo} alt="logo" id="logo"></img>

                        <h2 className="intra">Hi, I am</h2>
                        <h1 className="name">MAYOWA OLANIYAN</h1> 
                        <p className="dev">MERN stack Developer</p>
                        <div className="socials">
                            <a href="mailto:mayowafolaniyan@gmail.com" target="_blank"><IoIosMail className="imgg"/></a>
                            <a href="https://github.com/Olamayorrh" target="_blank"><FaGithub className="imgg"/></a>
                             <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank"><FaLinkedin className="imgg"/></a>
                            
                         </div>

                    </div>

                    <div className="img">

                        <div className="nav">

                            {/* {
                                isClicked? 
                                
                                <div className="harmbug" >
                                <span className="line1 line"></span>
                                <span className="line2 line"></span>
                                <span className="line3 line"></span>

                                </div>:
                                null
                            } */}

                              

                            
                            <button className='logo1'><img src={logo} alt="logo" id="logo1"></img></button>
                            <div className={isClicked ? "menus" : "mobile"} onClick={()=>setIsclicked(true)}>
                                <p className="menu"><a href='#abb' className="navLink">About me</a></p>
                                <p className="menu"><a href='#ski' className="navLink">Skills</a></p>
                                <p className="menu"><a href='#port' className="navLink">Portfolio</a></p>
                                <p className="menu menuc"><a href='#contact' className="navLink">CONTACT ME</a></p>
                            </div> 

                            <button className='hamburger' onClick={()=>setIsclicked(!isClicked)}>
                                {isClicked ? <img src='./images/menuOpen.png' className='Menu'></img> : <img src='./images/menuClose.png' className='Menu'></img>}
                              </button>  


                        </div>


                        <div className="pix">
                             
                            <img src={image} alt="mypix" id="img1"></img>
                        
                        </div>


                    </div>
            </div>

            <div className="black">
                <p id="black">In the symphony of software development, I harmonize the roles of designer, developer, and maintenance engineer. From the inception of an idea to its perpetuity in the digital realm, my commitment is unwavering.</p> 
                <p id="black"> As a software developer, I am not merely a coder; I am an orchestrator of digital experiences, a weaver of solutions, and a guardian of the digital frontier.</p>
                <p id="black"> The odyssey continues, with each line of code and every design element contributing to the ever-evolving tapestry of technology.</p>
            </div>


            <div className="abaut" id="abb">

                <h3 className="about set">About Me</h3>
                <p id="myabout">My name is Mayowa Olaniyan I am a passionate and innovative software developer with keen interest in creating impactful solutions through code.<br></br>
                    I thrive in the dynamic world of technology, where everyline of code presents an opportunity to solve a problem and make positive impact.
                </p>

                <div className="explore"> | Explore | </div>
                <img src={sepa} alt="separator" id="explore"></img>

            

                <div id="card">
                    <div className="parent">

                            <card className="des des1">
                                <h3>DESIGN</h3>
                                <p id="myabout"> I am an architect of user experiences, wielding wireframes and design thinking to breathe life into concepts.
                                    I ensure that software not only function seamlessly but also provides an intuitive and delightful journey for <br></br>users. 
                                    My design philosophy revolves around user-centricity,employing principles of accessibility, aesthetics, 
                                    and usability to create interfaces that resonate with end-users.
                                </p>
                            </card>

                            <card className="des des1">
                                <h3>DEVELOPEMENT</h3>
                                <p id="myabout">As a developer, I immerse myself in the art of coding. Armed with proficiency in diverse programming <br></br>languages and frameworks,
                                    I construct the backbone of applications.Also as a developer, problem-solving<br></br> is my forte, whether it's building backend systems,
                                    optimizing front-end performance, or creating efficient algorithms, I relish the challenge of transforming ideas into functional, scalable,
                                    and elegant solutions.
                                </p>
                            </card>

                    </div>

                        <card className="des des3">
                            <h3>MAINTENANCE</h3>
                            <p id="myabout">As a software engineer, I ensure the longevity and reliability of  software. This involves debugging, updating, and patching to adapt to evolving requirements<br></br>
                                and to fortify against the relentless march of technological advancements. My commitment to maintaining clean and efficient code ensures  software remains resilient<br></br>
                                against test of time.
                            </p>
                        </card>

                    </div>

                    <img src={sepa} alt="separator" id="explore"></img>
             </div>


             <div className="skill" id="ski">
                    <h3 className="skills set">SKILLS</h3>
                    <div className='use'><p id="use">USING NOW:</p></div>

                    <div className="lang">
                        <div className="lange"><img src={html} ></img>
                            <p>HTML5</p>
                        </div>
                        <div className="lange"><img src={css} ></img>
                            <p>CSS3</p>
                        </div>
                        <div className="lange"><img src={jsc} ></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="lange"><img src={git} ></img>
                            <p>GIT</p>
                        </div>
                        <div className="lange"><img src={typs} ></img>
                            <p>TYPESCRIPT</p>
                        </div>
                        <div className="lange"><img src={node} ></img>
                            <p>NODEJS</p>
                        </div>
                        <div className="lange"><img src={mongo} className="langg"></img>
                            <p>MONGODB</p>
                        </div>
                        <div className="lange">
                            <img src="./images/express1.png"></img>
                            <p>EXPRESS JS</p>
                        </div>

                        <div className="lange">
                            <img src="./images/github1.png"></img>
                            <p>GIT HUB</p>
                        </div>
                    </div>

                

                </div>

                {/* <img src="../../images/css.svg"></img> */}


                <div className="portfolio" id="port">
                    <h3 className=" portt set">PORTFOLIO</h3>
                
                    
                    <div className="card">
                        <card><img src="./images/countdown.png" className="crd"></img> <div className="detail"><h3>Countdown Timer</h3><p>Website during a maintenance, counting down to opening date.</p><a href='https://olamayorrh.github.io/countDown/countdownTimer/index.html' className="lnk">View Project</a></div></card>
                        <card><img src="./images/Qr_Codegenerator.png" className="crd"></img>  <div className="detail"><h3>Qr CodeGenerator</h3><p>Built by consuming qrcode API, using javascrip, html and css for the implementation. </p><a href='https://olamayorrh.github.io/qrCodeGenerator/' className="lnk">View Project</a></div></card>
                        <card><img src="./images/TodoApp.png" className="crd"></img>  <div className="detail"><h3>TodoApp</h3><p>TodoApp built with typescript to track your daily activities.</p><a href='https://olamayorrh.github.io/my_PortFolio/Documents/todoApp/index.html' className="lnk">View Project</a></div></card>
                    </div>
            
                    <div className="card">
                        <card><img src="./images/DynamicRoute.png" className="crd"></img>  <div className="detail"><h3>Dynamic Route</h3><p>Consumed an API to display diffent categories of available items and dynamically routing each item based on their id.</p><a href='https://dynamic-route-theta.vercel.app/' className="lnk">View Project</a></div></card>
                        <card><img src="./images/DisneyClone.png" className="crd"></img>  <div className="detail"><h3>Disney Clone</h3><p>Disney page cloned using REACT components</p><a href='https://disney-page-kohl.vercel.app/' className="lnk">View Project</a></div></card>
                        <card><img src="./images/calculator.png" className="crd"></img>  <div className="detail"><h3>Basic Calculator</h3><p>Calculator built with html and some javascript method, can perform basic calculations.</p><a href='https://olamayorrh.github.io/calculator/calculator.html' className="lnk">View Project</a></div></card>
                    </div>

                    <div className="card">
                        <card><img src="./images/expenseTracker.png" className="crd"></img>  <div className="detail"><h3>Expense Tracking App</h3><p>An application built with Html, css and Javascript, to keep track of user's budget and expenses</p><a href='https://expense-tracker-chi-umber.vercel.app/' className="lnk">View Project</a></div></card>
                        <card><img src="./images/travelAndTour.png" className="crd"></img>  <div className="detail"><h3>Travel and Tour website</h3><p>A Website built with React and tailwind for users to book flight to their various destinations of choice</p><a href='https://travel-and-tour-six.vercel.app/' className="lnk">View Project</a></div></card>
                       
                    </div>
        
                </div>


                <div className="contact" id="contact">
                    <h3 className="conct set">CONTACT</h3>
                   


                    {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email"  />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                    </form> */}
                    <form ref={form} onSubmit={sendEmail}>
                       <div> <input type="text" name="user_name" id="uname" placeholder="Enter your name" required></input></div>
                        <div><input type="text" name="user_email" id="umail" placeholder="Enter your email" required></input></div>
                        <div><input type="text" name="user_num" id="num"  placeholder="Enter your number" required></input></div>
                        <div><textarea placeholder="Message" name="message" id="mssg" rows="40px" cols="40px" required></textarea></div>
                        <button type="submit" id="btn" value="Send">Send Message</button>
            
                    </form>
                </div>

                <div className="footer">
                    <p id="bk"><a href='#home'>back to top</a></p>

                    <div className="socials social">
                        <a href="https://web.facebook.com/" target="_blank"><FaFacebookSquare className="imgg"/></a>
                        <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank"><FaLinkedin className="imgg"/></a>
                        <a href="https://twitter.com/home" target="_blank"><FaSquareTwitter className="imgg"/></a>
                        <a href="mailto:mayowafolaniyan@gmail.com" target="_blank"><IoIosMail className="imgg"/></a>
                    </div>
                    
                    <p id="copy">@mayowa 2024</p>
                </div>
           

        
        </div>
    )
};
export default Home;