import React from "react";

import TestimonyAccent from "../assets/img/testimonial-landingPage-frame.jpg";
import Star from "../element/Star/Star";
import Button from "../element/Button/Button";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <figure>
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </figure>
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
              style={{ marginTop: 40 }}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
