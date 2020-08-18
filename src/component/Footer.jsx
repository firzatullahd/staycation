import React from "react";
import Button from "../element/Button/Button";
import IconText from "../component/IconText";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto" style={{ width: 370 }}>
          <IconText />
          <p className="brand-tagline">
            We will organize your holiday to be bautiful and memorable
          </p>
        </div>
        <div className="col-2 mr-5">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/properties">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/payments">
                Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-2 mr-5">
          <h6 className="mt-2">Explore</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/career">
                Career
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="mt-2">Connect With Us</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button
                type="link"
                isExternal
                href="mailto:support@staycation.id"
              >
                support@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="tel:+62085232301377">
                (+62) 852 3230 1377
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Kemang, jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2020 - All rights reserved - Staycation
        </div>
      </div>
    </footer>
  );
}
