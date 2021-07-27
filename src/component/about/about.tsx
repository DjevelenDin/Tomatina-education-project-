import React, { Component } from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1>
          Про <span className="greenTitle">Томатіну</span>
        </h1>

        <div className="firstBlock">
          <div className="textAbout">
            <p className="titleAbt">TOMATINA</p>
            <p>
              Ресторан здорового харчування Tomatina - це не лише свіжі ідеї від
              наших бренд-кухарів, а й ситні, корисні та вітамінні страви, які
              ви маєте змогу створити особисто.І не важливо чи ви надаєте
              перевагу веганській, вегетаріанській чи м’ясній кухні - у нашому
              меню ви завжди знайдете ідеальний для себе варіант. І головне -
              всі наші страви готуються виключно зі свіжих фермерських продуктів
              та за принципами здорового харчування.
            </p>
          </div>
          <div className="photoAbout2">
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/11/czezar-1-500x500.png"
              alt="salad"
            />
          </div>
        </div>
        <div className="secondBlock">
          <div className="photoAbout2">
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/11/z-krevetkamy-1-500x500.png.pagespeed.ce.iZpZgRxsf0.png"
              alt="salad"
            />
          </div>

          <div className="textAbout">
            <p className="titleAbt">Створи свій авторський салат</p>
            <p>
              Окрім супів, сендвічів, десертів чи оригінальних напоїв ми
              пропонуємо наші основні хіти - це салат-паста та конструктор. Це
              значить, що у нашому гастробарі можна обрати як вже готовий мікс
              від шеф-кухаря так і створити особисто, виходячи з власних
              уподобань, і витратити на це не більше як 5 хвилин часу.Салат-бар
              Tomatina нараховує близько 50 компонентів та понад 15 соусів, з
              яких створюються індивідуальні страви на будь-який смак. Ви просто
              обираєте улюблені інгредієнти і за кілька кліків ваш авторський
              варіант готовий.І якщо ви ще не куштували салат-пасту,
              рекомендуємо обов’язково спробувати цю нашу фірмову страву з
              італійським характером.
            </p>
          </div>
        </div>
        <div>
          <p className="titleForSecondBlock">Чому люблять TOMATINA?</p>
        </div>
        <div className="containerAbout-2">
          <div className="firstBlockIcons">
            <div className="product">
              <div className="product-icon">
                <div className="icon-1">
                  <svg
                    className="bg"
                    width="47"
                    height="45"
                    viewBox="0 0 47 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
                      stroke="#518B26"
                    ></path>{" "}
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi-bi-hand-thumbs-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </div>
              </div>
              <div className="product-text">
                <p className="titleAbt">Тільки свіжі продукти</p>
                <p>
                  Рибка тільки-но з моря, салат з грядки, курка з ферми. Нічого
                  не заморожуємо!
                </p>
              </div>
            </div>
          </div>
          <div className="secondBlockIcons">
            <svg
              className="bg"
              width="47"
              height="45"
              viewBox="0 0 47 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
                stroke="#518B26"
              ></path>{" "}
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi-bi-emoji-heart-eyes"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
            </svg>
            <div className="product-text">
              <p className="titleAbt">Оригінальні рецепти</p>
              <p>
                Окрім перевірених часом шедеврів у меню є багато несподіванок
              </p>
            </div>
          </div>
        </div>
        <div className="containerAbout-3">
          <div className="thirdBlockIcons">
            <div className="product-text">
              <svg
                className="bg"
                width="47"
                height="45"
                viewBox="0 0 47 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
                  stroke="#518B26"
                ></path>{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi-bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
              <p className="titleAbt">Якісні інгредієнти</p>
              <p>
                Всі інгредієнти проходять відповідний контроль якості та
                сертифікації. Такі правила!
              </p>
            </div>
          </div>
          <div className="fourBlockIcons">
            <div className="product-text">
              <svg
                className="bg"
                width="47"
                height="45"
                viewBox="0 0 47 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
                  stroke="#518B26"
                ></path>{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi-bi-truck"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <p className="titleAbt">Доставляємо всюди</p>
              <p>
                Привозимо смачну та корисну їжу у будь-який район Львова та у
                передмістя!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
