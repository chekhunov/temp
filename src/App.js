import React from 'react';
// import Link from 'react-router-dom';
// import logo from '../images/content/logo.png';
import ecoSvg from './images/icons/eco-svg.svg';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div class="wrapper">
      <header id="header-section" class="header">
        <div class="container">
          <div class="header__inner">
            <div class="header__box">
              <a class="logo" to="/">
                {/* <img class="logo__img" src={logo} alt="image logo" /> */}
              </a>

              <nav class="menu">
                <button class="menu__popup" type="button">
                  <span></span>
                </button>

                <ul class="menu__list">
                  <li class="menu__item menu__item--active">
                    <a class="menu__link" href="#">
                      Тести
                    </a>

                    <ul class="menu__list-popup">
                      <li class="menu__item-popup">
                        <a class="menu__link-popup" href="#">
                          Тести
                        </a>
                      </li>

                      <li class="menu__item-popup">
                        <a class="menu__link-popup" href="#">
                          Тести
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <a class="header__link" href="#">
              Увійти
            </a>
          </div>
        </div>
      </header>

      <main class="main">
        <section class="content">
          <div class="container">
            <div class="content__inner">
              <h1 class="content__title title">Тести</h1>

              <span class="content__subtitle">Привіт, Ваня</span>
              <p class="content__text">Ось тести доступні для тебе:</p>

              <div class="content__box">
                <div class="content__menu">
                  <ul class="content__list">
                    <li class="content__item">
                      <a class="content__icon" href="#">
                        <svg class="content__svg">{ecoSvg}</svg>
                      </a>
                    </li>

                    <li class="content__item">
                      <a class="content__icon" href="#">
                        <svg class="content__svg">
                          <svg class="content__svg">{ecoSvg}</svg>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="content__items">
                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">
                      Охорона лісу
                      <span>(рівень 1)</span>fsff fsf
                    </h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">
                      Охорона лісу <span>(рівень 2)</span>
                    </h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">
                      Охорона лісу <span>(рівень 3)</span>
                    </h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">
                      Охорона лісу <span>(рівень 4)</span>
                    </h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">
                      Охорона лісу <span>(рівень 5)</span>
                    </h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">Еко вікторина</h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">Еко вікторина</h2>
                  </article>

                  <article class="card-eco">
                    <svg class="card-eco__icon">
                      <svg class="content__svg">{ecoSvg}</svg>
                    </svg>

                    <h2 class="card-eco__title">Еко вікторина</h2>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <p class="footer__copy">©2021 CopyRight Example. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
