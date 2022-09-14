import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import Cart from "./Cart";

const btnGroup = [
  ["Stehlampe 35,-", "Sofa 149,-", "Couchtisch 99,-", "Sessel 109,-"],
  [
    "Geschirrschrank 209,-",
    "Schüssel 2,49",
    "Spülmaschine 419,-",
    "Esstisch 149,-",
    "Stuhl 39,-",
    "Kaffeemaschine 79,-",
  ],
  ["Kleiderschrank 169,-", "Wandlampe 34,-", "Teppich 99,-", "Bett 349,-"],
  ["Lampe 29,-", "Bücherschrank 319,-", "Schreibtisch 209,-", "Sessel 99,-"],
];

let handleChangePage;

const Screen1 = ({
  buttonCart,
  setButtonCart,
  screen2,
  changeButton,
  setHide,
  button,
  hide,
  answers,
  setAnswers,
}) => {
  useEffect(() => {
    if (!document.querySelector("#book1")) {
      const element = document.createElement("div");
      element.id = "book1";
      document.querySelector(".game1").appendChild(element);
    }

    const script = document.createElement("script");

    script.src = "flipbook.js";

    script.onload = () => {
      window.jQuery(document).ready(function ($) {
        const imageBookPath = "./image";

        function fullscreenErrorHandler() {
          if (window.self != window.top)
            return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again.";
        }

        const changePage = (currPage) => {
          changeButton(currPage);
        };

        var optionsBook1 = {
          height: 1056,
          width: 816 * 2,
          maxWidth: 700,
          maxHeight: 700,
          pageCount: 10,
          images: imageBookPath + "/image_{{xxx}}.jpg",
          lightbox: "#book1-trigger",
          lightboxClass: "lightbox-images" + "1",
          centeredWhenClosed: false,
          hardcovers: false,
          style: "wowbook-cs-white",
          toolbar: "",
          thumbnailsPosition: "bottom",
          thumbnailScale: 0.12,
          thumbnailsSprite: imageBookPath + "/thumbnails_sprite_0.12.jpg",
          perspective: 1000,
          slideShowDelay: 0,
          turnPageDuration: 250,
          responsiveHandleWidth: 50,
          onReleasePage: () => {
            setHide(false);
          },
          onHoldPage: () => {
            setHide(true);
          },
          onShowPage: () => {
            changePage($.wowBook("#book1")?.currentPage);
          },
          onFullscreenError: fullscreenErrorHandler,
        };

        $("#book1").wowBook(optionsBook1);
        window.book = $.wowBook("#book1");
        window.book.showLightbox();

        const navBtnsList = Array.from(
          document.querySelectorAll(".nav-wrapper")
        );

        for (let i = 0; i < navBtnsList.length; i++) {
          handleChangePage = () => {
            const pageBreak = i * 2 + 2;

            const navigate = (page) => {
              $.wowBook("#book1").gotoPage(page);
            };

            const currentPage = $.wowBook("#book1")?.currentPage;

            let timeoutCounter = 0;

            for (
              let j =
                currentPage < pageBreak ? currentPage + 2 : currentPage - 2;
              currentPage < pageBreak ? j <= pageBreak : j >= pageBreak;
              currentPage < pageBreak ? (j += 2) : (j -= 2)
            ) {
              setTimeout(() => {
                navigate(j);
              }, 500 * timeoutCounter);

              timeoutCounter++;
            }
          };

          navBtnsList[i].addEventListener("click", handleChangePage);
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.$ = null;

      const flipbook = document.querySelector(".wowbook-lightbox");

      const navBtnsList = Array.from(document.querySelectorAll(".nav-wrapper"));

      for (let i = 0; i < navBtnsList.length; i++) {
        navBtnsList[i].removeEventListener("click", handleChangePage);
      }

      if (flipbook) {
        flipbook.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (screen2) {
      const flipbook = document.querySelector(".wowbook-lightbox");

      flipbook.style.opacity = 0;
      flipbook.style.transition = "0.25s linear";

      setTimeout(() => {
        flipbook.remove();
      }, 250);
    }
  }, [screen2]);

  return (
    <>
      <div id="book1"></div>
      {btnGroup.map((btns, index) => {
        return (
          <React.Fragment key={index}>
            {(button === index * 2 + 2 || button === index * 2 + 1) && (
              <Buttons
                btns={btns}
                index={index + 1}
                hide={hide}
                answers={answers[index]}
                setButtonCart={setButtonCart}
                setAnswers={setAnswers}
              />
            )}
            <Cart level={buttonCart} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Screen1;
