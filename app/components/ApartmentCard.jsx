import Link from "next/link";
import React from "react";
import Image from "next/image";

function ApartmentCard() {
  return (
    <>
      <div className="card">
        <div className="card_image">
          {" "}
          <Image
            src="/images/apt_example.jpg"
            alt="apartment"
            width={250}
            height={150}
            className="the_card_image"
          />
        </div>

        <div className="card_content">
          <h4 className="apartment_descrpiton">Spacious luxury flat</h4>
          <p className="price">23000 DKK/month</p>
          <div className="address">
            {" "}
            <Image
              src="/images/location.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">Sønder Blvd. 24, Kbh V</p>
          </div>
          <div className="sqm2">
            {" "}
            <Image
              src="/images/sqm.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">162m2</p>
          </div>
          <div className="bedrooms">
            {" "}
            <Image
              src="/images/bed.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">3 bedrooms</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
/* 
        <div className="card_button">
          {" "}
          <Link href="/apartments">
            <Image
              src="/images/arrow_button.svg"
              alt="arrow"
              width={33.37}
              height={32}
              className="the_arrow"
            />
          </Link>
        </div>
                  <div className="cpr">
            {" "}
            <p className="cpr_p">CPR</p>
            <p className="card_p">Available</p>
          </div>*/

export default ApartmentCard;
