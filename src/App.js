import React from "react";
import logo from "./assets/2421884.svg"
import "./index.css"
import {Route,Routes,NavLink} from "react-router-dom";
import map from "./assets/2.svg"
import time from "./assets/Mask Group.svg"
import phone from "./assets/Mask Group-1.svg"
import Page1 from "./components/Page 1";
import Page2 from "./components/Page 2";
import Page3 from "./components/Page 3";
import Page4 from "./components/Page 4";
import Page5 from "./components/Page 5";
import Page6 from "./components/Page 6";


function App() {
  return (
    <div className="container">
      <div className="nav">
          <div className="logo">
              <NavLink to={"/"}><img src={logo} alt=""/></NavLink>
          </div>
          <div className="info">
              <a href={"https://maps.app.goo.gl/pPu1RPEGuisAAG4L7"}><img src={map} alt=""/>ул. Чернышевского 75</a>
              <a><img src={time} alt=""/>8.00 - 20.00</a>
              <a href={"tel:83912950948"}><img src={phone} alt=""/>8 (391) 295-09-48</a>
          </div>
          <div className="btn">
              <button>Онлайн-запись</button>
          </div>

      </div>
        <div className="navbar">
            <NavLink to={"/"}>Главная</NavLink>
            <NavLink to={"/цены"}>Цены</NavLink>
            <NavLink to={"/услуги"}>Услуги</NavLink>
            <NavLink to={"/специалисты"}>Специалисты</NavLink>
            <NavLink to={"/контакты"}>Контакты</NavLink>
            <NavLink to={"/информация"}>Информация</NavLink>
            <NavLink to={"/отзывы"}>Отзывы</NavLink>

        </div>

        <Routes>
            <Route path={"/цены"} element={<Page1/>}/>
            <Route path={"/услуги"} element={<Page2/>}/>
            <Route path={"/специалисты"} element={<Page3/>}/>
            <Route path={"/контакты"} element={<Page4/>}/>
            <Route path={"/информация"} element={<Page5/>}/>
            <Route path={"/отзывы"} element={<Page6/>}/>
        </Routes>
    
    </div>
  );
}

export default App;
