import { React, useEffect} from "react";
import Header from '../components/Header';
import todolist_img from '../assets/todolist.png';
import crud_img from '../assets/crudweb.png';
import mydiary_img from '../assets/My diary.jpg';
import portfolio_img from '../assets/portfolioimg.png';
import { IoLogoGithub } from "react-icons/io";
import ScrollOut from "scroll-out";

function PortfolioPage(){
    useEffect(() => {
        ScrollOut();
    })
    
    return(
        <div className="portfoliopage">
            <Header/>
            <div className="body">
            <h2 className="title">Portfolio</h2>
            <div className="portfolio_content">
                <section data-scroll className="project_1">
                    <h1 className="project_title">
                        Todo list
                    </h1>
                    <div className="project_period">
                        2023.12 {'('}1人 개인 프로젝트{')'}
                    </div>
                    <div className="content_img">
                        <img className="project_img" src={todolist_img} />
                    </div>
                    <a href="https://github.com/yulmukim/react_todolist/tree/master" className="git"><IoLogoGithub /> Readme 보러가기</a>
                    <h2 className="project_skill">#html #css #javascript #react</h2>
                    <h2 className="main_function">✓ 주요 기능 : 할 일 추가, 완료한 일 체크, 삭제</h2>
                    <h2 className="project_description">
                        간단하게 할 일을 작성하고, 완료, 삭제할 수 있는 기능을 구현한 미니 프로젝트입니다.
                    </h2>
                </section>
                <section data-scroll className="project_2">
                    <h1 className="project_title">
                        CRUD Web
                    </h1>
                    <div className="project_period">
                        2023.12 {'('}1人 개인 프로젝트{')'}
                    </div>
                    <div className="content_img">
                        <img className="project_img" src={crud_img} />
                    </div>
                    <a href="https://github.com/yulmukim/react_CRUD_WEB/tree/master" className="git"><IoLogoGithub /> Readme 보러가기</a>
                    <h2 className="project_skill">#html #css #javascript #react</h2>
                    <h2 className="main_function">✓ 주요 기능 : 글 작성, 글 읽기, 글 수정, 글 삭제</h2>
                    <h2 className="project_description">
                        Front-End QNA 게시판으로, CRUD 내용을 공부하기 위해 만들게 되었습니다.<br/>
                        Create, Read, Update, Delete의 기능을 기반으로 구현한 간단한 웹 페이지입니다.
                    </h2>
                </section>
                <section data-scroll className="project_3">
                    <h1 className="project_title">
                        My Diary
                    </h1>
                    <div className="project_period">
                        2024.01-02 {'('}1人 개인 프로젝트{')'}
                    </div>
                    <div className="content_img">
                        <img className="project_img" src={mydiary_img} />
                    </div>
                    <a href="https://github.com/yulmukim/My-Diary_React" className="git"><IoLogoGithub /> Readme 보러가기</a>
                    <h2 className="project_skill">#html #css #javascript #react</h2>
                    <h2 className="main_function">✓ 주요 기능 : 오늘의 날씨 확인하기, 일기 작성, 포춘쿠키 운세 뽑기</h2>
                    <h2 className="project_description">
                    나만의 Diary 웹사이트를 만들어 보았습니다.<br/> 
                    주요 기능으로는 오늘의 날씨, 오늘의 일기, 오늘의 포춘쿠키의<br/> 
                    3가지 기능으로 구성되어 있습니다. 
                    </h2>
                </section>
                <section data-scroll className="project_4">
                    <h1 className="project_title">
                        김유림's portfolio website
                    </h1>
                    <div className="project_period">
                        2024.03 {'('}1人 개인 프로젝트{')'}
                    </div>
                    <div className="content_img">
                        <img className="project_img" src={portfolio_img} />
                    </div>
                    <a href="https://github.com/yulmukim/KYR_portfolio_website" className="git"><IoLogoGithub /> Readme 보러가기</a>
                    <h2 className="project_skill">#html #css #javascript #react</h2>
                    <h2 className="project_description">
                        현재 웹사이트에 해당합니다.<br/>
                        Home화면, skills화면, portfolio화면으로 구성되어 있으며,<br/>
                        김유림's portfolio website를 목적으로 만들었습니다.
                    </h2>
                </section>
            </div>
            </div>
        </div>
    );
}
export default PortfolioPage;