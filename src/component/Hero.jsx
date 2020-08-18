import React from "react";
import Fade from "react-reveal/Fade";
import formatNumber from "../utils/formatNumber";
import Button from "../element/Button/Button";
import heroFrame from "../assets/img/hero-frame.jpg";
import heroImage from "../assets/img/hero-image.jpg";
import iconAttractions from "../assets/icons/ic_attractions.svg";
import iconCities from "../assets/icons/ic_cities.svg";
import iconTraveler from "../assets/icons/ic_traveler.svg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            {/* <button className="btn btn-primary">Show Me Now</button> */}
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto" style={{ marginRight: 32 }}>
                <img
                  width="36"
                  height="36"
                  src={iconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 32 }}>
                <img
                  width="36"
                  height="36"
                  src={iconAttractions}
                  alt={`${props.data.attractions} Attractions`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.attractions)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Attractions
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={iconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5 ">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={heroImage}
                alt="Room"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 2 }}
              />
              <img
                src={heroFrame}
                alt="Room"
                className="img-fluid position-absolute"
                style={{ margin: "-0 -15px -15px 0", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
