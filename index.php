<?php
    $email = "jesse.caitlyn.james20@gmail.com";
    $name = $_POST['m_name'];
    $v_email = $_POST['m_email'];
    $phone = $_POST['m_phone'];
    $subject = $_POST['m_subject'];
    $content = $_POST['m_message'];
    if(!isset($_POST['m_email']))
    {
        mail($email, $subject, $content.\r.$phone.\r.$v_email);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jesse</title>
    <link rel="stylesheet" href="./stylesheet.css">
</head>

<body>
    <!--Aside Start-->
    <aside>
        <h1><span>J</span>esse</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills & Experience</a></li>
                <li><a href="#past">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
        <footer><sub>Jesse Caitlyn James - Copyright 2023</sub></footer>
    </aside>
    <!--Aside End-->
    <div class="main-content">
        <!--Home Start-->
        <div class="home section active" id="home">
            <div class="head">
                <img src="" alt="">
                <h1>Jesse Philpott</h1>
            </div>
            <div>
                <p>Hey there, my name is Jesse.</p>
                <p>I am a current Griffith University student on the Gold Coast studying ICT. I've been studying IT and other technological courses on and off for half a decade, including technical theatre, a certificate III in ICT and currently a diploma in ICT, so I've picked up a few skills and a healthy knowledge base. I aim to continue developing my skills and knowledge and become a talented Software Developer and/or Computer Engineer. I strive to teach any useful skills I have to those around me with the idea that life will become easier for everyone the more knowledge and talents we all share. I have quite a few soft skills from my different experiences in life that I hope will make my journey a little easier and I am always committed to learning new skills and regularly rise to my potential quickly, I pride myself in maintaining a consistent quality of work, ethic and enthusiasm.</p>
                <p>I look forward to seeing where I take myself in the world and all the new relationships and skills I will develop along the way.</p>
            </div>
            <div class="start-buttons">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#past">Past Work</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
        <!--Home End-->
        <!--About Start-->
        <div class="about section" id="about">
            <div class="head">
                <img src="" alt="">
                <h1>About Me</h1>
            </div>
            <div class="about1">
                <p>I am an aspiring software developer from Cairns, in the Far North Queensland. I love to solve problems and come to creative solutions to them. I'm always looking forward to ways to diversify my skills and learn something new.</p>
                <p>I look to create new and innovative solutions to current problems. I want to use my skills to design and implement technology that will improve the lives of many. Most of all I want to be able to always reflect back on what i've done and what I did to get there.</p>
            </div>
            <div class="about2">
                <p>I graduated high school in 2020 after pursuing biology and spending my free time managing AV and lighting in the theatre. In 2021 I completed a Certificate 3 in ICT at TAFE QLD where I explored my love for computer hardware and software development. After taking a gap year to work I am now in Griffith University studying a Diploma in ICT which I expect to graduate with at the end of this year, where I look forward to starting a Bachelors in ICT majoring in software development.</p>
                <p>I'm most passionate about learning and showing others what i've learnt and how I developed and use my skills. I love nothing more than seeing my work produce the results I was looking for and reflecting on the things I learnt to get there.</p>
            </div>
            <div class="about_footer">
                <h4>Check Me Out Here:</h4>
                <p>Linkedin: <a href="www.linkedin.com/in/jesse-caitlyn-james"> Jesse-Caitlyn-James</a></p>
            </div>
        </div>
        <!--About End-->
        <!--Skills Start-->
        <div class="skills section " id="skills">
            <div class="head">
                <h1>My Skills and Experience</h1>
            </div>
            <div class="skill1">
                <ul>
                    <h4>Skill Confidence</h4>
                    <!--Skill Item-->
                    <li class="confiSlider">
                        <div class="progress">
                            <h6 class="skill">HTML</h6>
                            <div class="progress-in" style="width: 65%;"></div>
                            <div class="skill-percent">65%</div>
                        </div>
                    </li>
                    <!--Skill End-->
                    <!--Skill Item-->
                    <li class="confiSlider">
                        <div class="progress">
                            <h6 class="skill">CSS</h6>
                            <div class="progress-in" style="width: 45%;"></div>
                            <div class="skill-percent">45%</div>
                        </div>
                    </li>
                    <!--Skill End-->
                    <!--Skill Item-->
                    <li class="confiSlider">
                        <div class="progress">
                            <h6 class="skill">JavaScript</h6>
                            <div class="progress-in" style="width: 25%;"></div>
                            <div class="skill-percent">25%</div>
                        </div>
                    </li>
                    <!--Skill End-->
                    <!--Skill Item-->
                    <li class="confiSlider">
                        <div class="progress">
                            <h6 class="skill">Python</h6>
                            <div class="progress-in" style="width: 35%;"></div>
                            <div class="skill-percent">35%</div>
                        </div>
                    </li>
                    <!--Skill End-->
                    <!--Skill Item-->
                    <li class="confiSlider">
                        <div class="progress">
                            <h6 class="skill">Hardware</h6>
                            <div class="progress-in" style="width: 80%;"></div>
                            <div class="skill-percent">80%</div>
                        </div>
                    </li>
                    <!--Skill End-->
                </ul>
                <ul>
                    <h4>Here are some of my transfereable skills</h4>
                    <li class="soft_skill">Quick to Learn</li>
                    <li class="soft_skill">Time Management</li>
                    <li class="soft_skill">Communication</li>
                    <li class="soft_skill">Problem Solving</li>
                    <li class="soft_skill">Independent</li>
                    <li class="soft_skill">Goal Driven</li>
                    <li class="soft_skill">Troubleshooting</li>
                    <li class="soft_skill">Conflict Resolution</li>
                    <li class="soft_skill">Decision Making</li>
                    <li class="soft_skill">Teamwork</li>
                    <li class="soft_skill">Self-Reflection</li>
                </ul>
            </div>
            <section>
                <div class="education">
                    <ul>
                        <h2>Education/Qualifications</h2>
                        <!--Education Item-->
                        <li class="eduitem">
                            <h3>TAFE QLD</h3>
                            <i>Certificate III of ICT</i>
                            <p>In 2021 I chose to take my first forward step into the ICT field and get the knowledge I needed to select my path in the field. This course was just a general introduction to all elements ICT and some small-scale examples of what it would look like to work in some of the fields. The course introduced me to networking, hardware repair, maintenance and building, program development and customer interactions in the IT world. Some notable examples from assignments were building an office network from scratch using a Windows Server OS, diagnosing and repairing PCs that had faults either in hardware or boot options, building a computer for a fictional company meeting user requirements, and writing a program that could track user input, save and output data from the inputs. This course gave me an idea of the specific knowledge needed by different industry professions and showed me my love for software development and hardware structures/interactions.</p>
                        </li>
                        <!--Education Item-->
                        <li class="eduitem">
                            <h3>Griffith Univeristy</h3>
                            <i>Diploma of ICT</i>
                            <p>I am currently studying a diploma in ICT and expect to finish in October 2023. My goal is to use the new skills and connections I make here to start my career and start my professional life in the best spot I can. Whilst I haven't been here long I have already joined and participated in several extracurricular skill building workshops such as Griffith Business plus and Science plus, as well as two academic skill workshops. I also recently attended the THETA conference in Brisbane as a volunteer with Griffith's help and made some new connections there.</p>
                        </li>
                        <!--Education Item-->
                        <!--<li class="eduitem">
                            <h3>Insititue</h3>
                            <i>Qualification</i>
                            <p>Field of Study, Skills Learnt, Projects, etc</p>
                        </li>-->
                    </ul>
                </div>
                <div class="experience">
                    <ul>
                        <h2>Experiences</h2>
                        <!--Experience Item-->
                        <li class="expitem">
                            <h3>Tech Theatre</h3>
                            <i>Janurary 2019 - November 2020</i>
                            <p>During my final years of high school I joined the Cairns State High School Technical Theatre team, which is an extra-curricular class where students are taught how to operate a functional, commercial theater. It included basic school events that may have required the use of AV or lighting elements, as well as outside hire events that needed AV/lighting system. While there I found it was something I was very passionate about and committed as much time as I could to the development of my skills using the system as well as a few other universal skills. During my team at the theatre, I quickly proved I could lead a team of my peers to independently run events without problem and it was during this time that I picked up amongst leadership, my troubleshooting skills, interpersonal and some customer relations skills, as well as time management and planning skills. While not directly related to my chosen path of ICT, working in the theatre gave me the base skills I need to grow in IT and proved my passion in a technology related field.</p>
                        </li>
                        <!--Experience Item-->
                        <li class="expitem">
                            <h3>Target</h3>
                            <i>October 2021 - December 2022</i>
                            <p>During my time at Target I worked primarily in the Hardgoods department, promoting store flow and visual merchendising. I regularly acted independantly as well as with my teammates and leaders. I worked to create a safe work environment as a safety leader and fire warden. I was determined to support my teammates in their roles and to promote positive customer relations. I regularly served as a stock management team member, including receiving and instore handling. I also assisted with point of sale and customer service actions.</p>
                        </li>
                        <!--Experience Item-->
                        <li class="expitem">
                            <h3>Leishman Associates Volunteer</h3>
                            <i>April 2023</i>
                            <p>I attended the THETA 2023 conference in Brisbane as a volunteer. While there I assisted with packing tote bags, directing attendees and answering general questions about the venue and conference.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <!--Skills End-->
        <!--Past Start-->
        <div class="past section " id="past">
            <div class="head">
                <h1>Projects</h1>
            </div>
            <h2>Past Projects</h2>
            <div class="project_past">
                <!--Project Item-->
                <div class="projectitem">
                    <img src="./img/coinflip.png" alt="A Simple Coinflip WebPage">
                    <h5>Coinflip Webpage</h5>
                </div>
                <!--Project Item-->
                <!--<div class="projectitem">
                    <img src="" alt="">
                    <h5>Project Name</h5>
                </div>-->
                <!--Project Item-->
                <!--<div class="projectitem">
                    <img src="" alt="">
                    <h5>Project Name</h5>
                </div>-->
            </div>
            <h2>Current Projects</h2>
            <div class="project_curr">
                <!--Project Item-->
                <div class="projectitem">
                    <img src="./img/IEEE.png" alt="A webpage that converts decimals to IEEE encoding">
                    <h5>IEE 754 Binary Converter</h5>
                    <p>A webpage that will convert decimal to binary digits in IEEE 754 standards and vice-versa</p>
                </div>
                <!--Project Item-->
                <!--<div class="projectitem">
                    <img src="" alt="">
                    <h5>Project Name</h5>
                    <p>Short Description</p>
                </div>-->
            </div>
        </div>
        <!--Past End-->
        <!--Contact Start-->
        <div class="contact section" id="contact">
            <div class="head">
                <h1>Contact Me</h1>
            </div>
            <div>
                <ul>
                    <li>Mobile: 0450 200 380</li>
                    <li>Email: jesse.caitlyn.james20@gmail.com</li>
                    <li>Linkedin: Jesse-Caitlyn-James</li>
                    <li>Contact Method</li>
                </ul>
                <form action="index.html" method="post">
                    <h3>Send Me A Message</h3>
                    <div>
                    <input type="text" id="m_name" class=" form_small" name="m_name" placeholder="Name">
                    <input type="email" id="m_email" class=" form_small" name="m_email" placeholder="Email">
                    <input type="tel" id="m_phone" class=" form_small" name="m_phone" placeholder="Phone">
                    <input type="text" id="m_subject" class=" form_small" name="m_subject" placeholder="Subject">
                    </div>
                    <div class="m_info">
                        <label for="m_message">What Did You Want To Know?</label>
                        <textarea name="m_message" id="m_message" cols="30" rows="10" placeholder="Send Me A Message"></textarea>
                    </div>
                    <input type="submit" value="Send Message">
                </form>
            </div>
        </div>
        <!--Contact End-->
    </div>
    <script src="script.js"></script>
</body>

</html>