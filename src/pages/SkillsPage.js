import { React, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import html from '../assets/html.jpg';
import javascript from '../assets/javascript.jpg';
import css from '../assets/css.jpg';
import react from '../assets/react.jpg';

function SkiisPage(){

    return(
        <div className="skillspage">
            <Header />
            <div className="body">
                <h2 className="title">Skills</h2>
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
                    <div className="skills_content">
                    <div className="html">
                        <img className="html_img" src={html} width={50} height={50} />
                        <div className="html_text">
                            <h2 className="skills_title">Html</h2>
                            <h2 className="skills_description">-HTML의 기본적인 시맨틱 구조를 이해하고,  
                            기본 문법을 사용할 수 있습니다. 원하는 페이지에 맞춰, 
                            구조적으로 HTML을 작성할 수 있습니다.</h2>
                        </div>
                    </div>
                    <div className="javascript">
                        <img className="javascript_img" src={javascript} width={50} height={50} />
                        <div className="javascript_text">
                            <h2 className="skills_title">JavaScript</h2>
                            <h2 className="skills_description">-ES6+ 문법을 이해하고 사용할 수 있습니다. (let과 const, Default Parameter, arrow function 등)
                            <br/>-연산자, for,while 반복문, switch문, if문과 같은 기본 문법을 사용하여 프로그램을 작성할 수 있습니다.</h2>
                        </div>
                    </div>
                    <div className="css">
                        <img className="css_img" src={css} width={50} height={50} />
                        <div className="css_text">
                            <h2 className="skills_title">CSS</h2>
                            <h2 className="skills_description">-원하는 구조에 맞게 텍스트, 이미지 등을 배치할 수 있습니다.
                            <br/>-다양한 기기에 맞게 반응형 웹개발을 할 수 있습니다.
                            <br/>-flex, grid를 사용하여 레이아웃, 디자인 요소를 정의할 수 있습니다.</h2>
                        </div>
                    </div>
                    <div className="react">
                        <img className="react_img" src={react} width={50} height={50} />
                        <div className="react_text">
                            <h2 className="skills_title">React</h2>
                            <h2 className="skills_description">-useState, useEffect, useContext, useRef와 같은 리액트 훅을 사용하여 함수형 컴포넌트를 작성할 수 있습니다.
                            <br/>-Styled componets를 사용하여 CSS를 작성할 수 있습니다.
                            <br/>-API를 사용하여 웹페이지를 작성할 수 있습니다.</h2>
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>  
    );
}
export default SkiisPage;