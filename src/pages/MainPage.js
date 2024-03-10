import React from "react";
import Header from '../components/Header';
import profileImg from '../assets/profile.jpg';
import { motion } from "framer-motion";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import TypeIt from "typeit-react";

function MainPage(){
    
    return(
        <div className="mainpage">
            <Header/>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: "easeInOut",
                    duration: 2,
                    y: { duration: 1 },
                }}
            >
            <body className="content">
                <img className="profile_img" alt="profile" src={profileImg} width={300} height={400} />
                <div className="introduce">
                    <TypeIt
                        options={{
                            speed: 100,
                            waitUntilVisible: true,
                            startDelay: 1000,
                            cursor: false,
                            lifeLike: true,
                        }}><h1 className="introduce_title">
                        안녕하세요. 끝이 없는 성장을 원하는
                        <br/>
                        김유림입니다.
                    </h1></TypeIt>
                    <h2 className="introduce_sentence">
                        안녕하세요. front-end 신입 개발자가 되고 싶은 김유림입니다.
                        <br/>
                        제 장점인 소통 능력과 성실한 자세로 앞으로도,
                        <br/>
                        성장에 끝이 없는 개발자가 되겠습니다!
                    </h2>
                    <h1 className="education_title">
                        Education
                    </h1>
                    <h2 className="education">
                        &ensp;2018.03-2023.08 : 인천대학교 컴퓨터공학부 전공
                    </h2>
                    <div className="contact">
                        <h1 className="contact_title">Contact</h1>
                        <a href="tel:01082116085" className="phone">&ensp;<MdOutlinePhoneAndroid /> 010-8211-6085</a>
                        <a href="mailto:kimyurim0914@gmail.com" className="email">&ensp;<MdAlternateEmail /> kimyurim0914@gamil.com</a>
                    </div>
                </div>
            </body>
        </motion.div>
        </div>
    );
}
export default MainPage;
