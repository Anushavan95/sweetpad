import React from "react";
// import { TEXT_1, TEXT_2, TEXT_3, TEXT_4 } from "../../constants/infoContext";

const InfoContents = () => {
  let infoItemDesctop = [
    { id: 1, link: "tokenomics", title: "Tokenomics " },
    { id: 2, link: "roadMap", title: "Roadmap" },
    { id: 3, link: "calculator-id", title: "Calculator" },
    { id: 4, link: "social", title: "Media" },
  ];

  function scrollSmoothTo(elementId: string) {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }
  let items = infoItemDesctop.map((elem) => {
    return (
      <div className="info-item-border header-item-border " key={elem.id}>
        <div className="info-item read-more-button">
          <h2
            className="info-item-h2"
            onClick={() => scrollSmoothTo(elem.link)}
          >
            {elem.title}
          </h2>
        </div>
      </div>
    );
  });
  return (
    <div>
      <section className="content-container">
        <div className="info-content">{items}</div>
      </section>
    </div>
  );
};
export default InfoContents;
