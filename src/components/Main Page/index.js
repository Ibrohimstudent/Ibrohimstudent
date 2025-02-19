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
import comp1 from "../../assets/Mask Group.png"
import comp2 from "../../assets/Mask Group-1.png"
import comp3 from "../../assets/Mask Group-2.png"
import comp4 from "../../assets/Mask Group-3.png"
import num from "../../assets/Ellipse 31.png"
import direktor from "../../assets/direktor.png"


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
            <div className="part3">
                <h1>Почему именно к нам?</h1>
                <div className="comp-block">
                    <div className="comp">
                        <div className="images">
                            <img className={"comp1"} src={comp1} alt=""/>
                            <img className={"num"} src={num} alt=""/>
                            <h2>1</h2>
                        </div>

                        <div className="text">
                            <h2>Качество</h2>
                            <p>80% наших врачей обладают высшей или 1-й категорией</p>
                        </div>

                    </div>
                    <div className="comp">
                        <div className="images">
                            <img className={"comp1"} src={comp2} alt=""/>
                            <img className={"num"} src={num} alt=""/>
                            <h2>2</h2>
                        </div>

                        <div className="text">
                            <h2>Анализы</h2>
                            <p>Вы можете сдавать любые анализы, даже самые редкие</p>
                        </div>

                    </div>
                    <div className="comp">
                        <div className="images">
                            <img className={"comp1"} src={comp3} alt=""/>
                            <img className={"num"} src={num} alt=""/>
                            <h2>3</h2>
                        </div>

                        <div className="text">
                            <h2>Программы</h2>
                            <p>Для вашего удобства мы разработали программы медицинского обслуживания</p>
                        </div>

                    </div>
                    <div className="comp">
                        <div className="images">
                            <img className={"comp1"} src={comp4} alt=""/>
                            <img className={"num"} src={num} alt=""/>
                            <h2>4</h2>
                        </div>

                        <div className="text">
                            <h2>На дому</h2>
                            <p>Проводим лечение на дому, если состояние пациента не позволяет прийти в клинику</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="part4">
                <h1>Видео о клинике</h1>
                <iframe width="560" height="415" src="https://www.youtube.com/embed/O1Ed2mNdDhQ?si=IrNaLqJfDLb4nPop"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="part5">
                <h1>О клинике</h1>
                <div className="block">
                    <div className="blog">
                        <img src={direktor} alt=""/>
                        <h4>Директор клиники</h4>
                        <p>Марина Александровна</p>
                        <button>Перейти к карточке врача</button>
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.  <br/><br/>

                        Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida, et mattis nulla
                        luctus. Aenean mattis nunc ac gravida pretium. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus.  <br/><br/>

                        Pellentesque malesuada fermentum magna eget laoreet. Etiam fringilla orci a consequat gravida.
                        Mauris lobortis quis mauris vitae posuere. <br/><br/>

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.

                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br/><br/>

                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident. <br/><br/>

                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                        et dolorum fuga. Et harum quidem rerum.. <br/><br/>

                        Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida, et mattis nulla
                        luctus. Aenean mattis nunc ac gravida pretium. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. <br/><br/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Index;