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
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = ()=>{
    return(
        <div className="container">
            <div className="container1">

                    <div className="info">
                        <img src={logo} alt="logo" id="logo"></img>

                        <p className="intra">Hi, I am</p>
                        <p className="name">MAYOWA OLANIYAN</p> 
                        <p className="dev">MERN stack Developer</p>
                        <div className="socials">
                            <a href="mailto:mayowafolaniyan@gmail.com" target="_blank"><IoIosMail /></a>
                            <a href="https://github.com/Olamayorrh" target="_blank"><FaGithub /></a>
                             <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank"><FaLinkedin /></a>
                            
                         </div>

                    </div>

                    <div className="img">

                        <div className="nav">

                            <div className="harmbug" >
                                <span className="line1 line"></span>
                                <span className="line2 line"></span>
                                <span className="line3 line"></span>

                            </div>

                            <div className="menus">
                                <p className="menu"><a href='#abb' class="navLink">About me</a></p>
                                <p className="menu"><a href='#ski' class="navLink">Skills</a></p>
                                <p className="menu"><a href='#port' class="navLink">Portfolio</a></p>
                                <p className="menu menuc"><a href='#contact' class="navLink">CONTACT ME</a></p>
                            </div>   


                        </div>


                        <div class="pix">
                             
                            <img src={image} alt="mypix" id="img1"></img>
                        
                        </div>


                    </div>
            </div>

            <div className="black">
                <p id="black">In the symphony of software development, I harmonize the roles of designer, developer, and maintenance engineer. From the inception of an idea to its perpetuity in the digital realm, my commitment is unwavering.<br></br> As a software developer, I am not merely a coder; I am an orchestrator of digital experiences, a weaver of solutions, and a guardian of the digital frontier. The odyssey continues, with each line of code and every design element contributing to the ever-evolving tapestry of technology.</p>
            </div>


            <div className="abaut" id="abb">

                <h3 id="about">About Me</h3>
                <p id="myabout">My name is Mayowa Olaniyan I am a passionate and innovative software developer with keen interest in creating impactful solutions through code.<br></br>
                    I thrive in the dynamic world of technology, where everyline of code presents an opportunity to solve a problem and make positive impact.
                </p>

                <div class="explore"> | Explore | </div>
                <img src={sepa} alt="separator"></img>

            

                <div id="card">
                    <div className="parent">

                            <card className="des des1">
                                <h3>DESIGN</h3>
                                <p> I am an architect of user experiences, wielding wireframes and design thinking to breathe life into concepts.
                                    I ensure that software not only function seamlessly but also provides an intuitive and delightful journey for <br></br>users. 
                                    My design philosophy revolves around user-centricity,employing principles of accessibility, aesthetics, 
                                    and usability to create interfaces that resonate with end-users.
                                </p>
                            </card>

                            <card className="des des2">
                                <h3>DEVELOPEMENT</h3>
                                <p>As a developer, I immerse myself in the art of coding. Armed with proficiency in diverse programming <br></br>languages and frameworks,
                                    I construct the backbone of applications.Also as a developer, problem-solving<br></br> is my forte, whether it's building backend systems,
                                    optimizing front-end performance, or creating efficient algorithms, I relish the challenge of transforming ideas into functional, scalable,
                                    and elegant solutions.
                                </p>
                            </card>

                    </div>

                        <card className="des des3">
                            <h3>MAINTENANCE</h3>
                            <p>As a software engineer, I ensure the longevity and reliability of  software. This involves debugging, updating, and patching to adapt to evolving requirements<br></br>
                                and to fortify against the relentless march of technological advancements. My commitment to maintaining clean and efficient code ensures  software remains resilient<br></br>
                                against test of time.
                            </p>
                        </card>

                    </div>

                    <img src={sepa} alt="separator"></img>
             </div>


             <div className="skill" id="ski">
                    <h3 id="skills">SKILLS</h3>
                    <div className='use'><p id="use">USING NOW:</p></div>

                    <div className="lang">
                        <div className="lange"><img src={html} className="langg"></img>
                            <p>HTML5</p>
                        </div>
                        <div className="lange"><img src={css} className="langg"></img>
                            <p>CSS3</p>
                        </div>
                        <div className="lange"><img src={jsc} className="langg"></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="lange"><img src={git} className="langg"></img>
                            <p>GIT</p>
                        </div>
                        <div className="lange"><img src={typs} className="langg"></img>
                            <p>TYPESCRIPT</p>
                        </div>
                        <div className="lange"><img src={node} className="langg"></img>
                            <p>NODEJS</p>
                        </div>
                        <div className="lange"><img src={mongo} className="langg"></img>
                            <p>MONGODB</p>
                        </div>
                    </div>

                

                </div>

                {/* <img src="../../images/css.svg"></img> */}


                <div className="portfolio">
                    <h3 id="port">PORTFOLIO</h3>
                
                    
                    <div className="card">
                        <card><img src="../../images/work2.jpg" className="crd"></img> <a href='https://olamayorrh.github.io/calculator/calculator.html' className="lnk">Read More</a></card>
                        <card><img src="../../images/work3.jpg" className="crd"></img>  <a href='https://olamayorrh.github.io/countDown/countdownTimer/index.html' className="lnk">Read More</a></card>
                        <card><img src="../../images/work4.jpg" className="crd"></img>  <a href='' className="lnk">Read More</a></card>
                    </div>
            
                    <div className="card">
                        <card><img src="../../images/work5.jpg" className="crd"></img>  <a href='' className="lnk">Read More</a></card>
                        <card><img src="../../images/work1.jpg" className="crd"></img>  <a href='' className="lnk">Read More</a></card>
                        <card><img src="../../images/work6.jpg" className="crd"></img>  <a href=''className="lnk">Read More</a></card>
                    </div>
        
                </div>


                <div className="contact" id="contact">
                    <h3 id="conct">CONTACT</h3>
                    {/* <form action="https://formsubmit.co/olamayorrh@gmail.com" method="POST"></form> */}
                    <form >
                       <div> <input type="text" name="uname" id="uname" placeholder="Enter your name" required></input></div>
                        <div><input type="text"  name="umail" id="umail" placeholder="Enter your email" required></input></div>
                        <div><input type="text" name="num" id="num"  placeholder="Enter your number" required></input></div>
                        <div><textarea placeholder="Message" name="mssg" id="mssg" rows="15px" cols="40px" required></textarea></div>
                        <button type="submit" id="btn" onclick="sendMail()">Send Message</button>
            
                    </form>
                </div>

                <div className="footer">
                    <p id="bk"><a href='#home'>back to top</a></p>

                    <div className="socials social">
                        <a href="https://web.facebook.com/" target="_blank"><img src="./images/facebookIcon.png" className="imgg img2"></img></a>
                        <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank"><img src="./images/linked.png" className="imgg img2"></img></a>
                        <a href="https://twitter.com/home" target="_blank"><img src="./images/twitterIcon.png" className="imgg img2"></img></a>
                        <a href="mailto:mayowafolaniyan@gmail.com" target="_blank"><img src="./images/mail.png" className="imgg img2"></img></a>
                    </div>
                    
                    <p id="copy">&copy mayowa 2024</p>
                </div>
           

        
        </div>
    )
};
export default Home;