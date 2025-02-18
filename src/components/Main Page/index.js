import React from 'react';
import "./main.css"
import leftMedia from "../../assets/Group 300.svg"
import rightMedia from "../../assets/Group 312.svg"
import cup from "../../assets/image 7.svg"
import box1 from "../../assets/Group 434.svg"
import box2 from "../../assets/Group 459.svg"
import box3 from "../../assets/Group 462.svg"
import box4 from "../../assets/Group 465.svg"
import box5 from "../../assets/Group 458.svg"
import box6 from "../../assets/Group 461.svg"
import box7 from "../../assets/Group 464.svg"
import box8 from "../../assets/Group 466.svg"


const Index = () => {
    return (
        <div className={"container"}>
            <div className="part1">
                <div className="img">
                    <div className="card">
                        <h1>Грамотные взрослые
                            и детские врачи</h1>
                        <div className="btn">
                            <button>Подробнее</button>
                            <div className="media">
                                <img src={leftMedia} alt=""/>
                                <img src={rightMedia} alt=""/>
                            </div>
                        </div>
                        <div className="award">
                        <img src={cup} alt=""/>
                            <p><strong>Лучшая клиника</strong> по версии Комсомольской правды</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="part2">
                <h1>Наши услуги</h1>
                <div className="card-block">
                    <div className="box">
                        <img src={box1} alt=""/>
                        <h2>Диагностика</h2>
                    </div>
                    <div className="box">
                        <img src={box2} alt=""/>
                        <h2>Прием врачей</h2>
                    </div>
                    <div className="box">
                        <img src={box3} alt=""/>
                        <h2>Комплексные программы</h2>
                    </div>
                    <div className="box">
                        <img src={box4} alt=""/>
                        <h2>Анализы</h2>
                    </div>
                    <div className="box">
                        <img src={box5} alt=""/>
                        <h2>Медицинские справки</h2>
                    </div>
                    <div className="box">
                        <img src={box6} alt=""/>
                        <h2>Дневной стационар</h2>
                    </div>
                    <div className="box">
                        <img src={box7} alt=""/>
                        <h2>Процедурный кабинет</h2>
                    </div>
                    <div className="box">
                        <img src={box8} alt=""/>
                        <h2>Хирургия</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;