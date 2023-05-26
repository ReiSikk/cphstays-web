import Link from "next/link";
import React from "react";
import Image from "next/image";

function ApartmentCard(props) {
  console.log(props, "props in apartmendCard");

/*   const imageLoader = ({ src }) => {
    // Return the source URL for the image
    return src;
  }; */


  return (
    <>
    <Link href="/pages/apartment">
   <div className="card">
        <div className="card_image">
          {" "}
          <Image
             src={props.featuredImageHref}
             alt={props.apartmentTitle}
            width={250}
            height={150}
            className="the_card_image"
          />
        </div>

        <div className="card_content">
        <span className="small-label">{props.apartmentDistrict}</span>
          <h4 className="apartment_descrpiton">{props.apartmentLocation}</h4>
          <p className="price">{props.apartmentPrice} DKK/month</p>
          <div className="address">
            {" "}
            <Image
              src="/images/location.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">{props.apartmentLocation}</p>
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
            <p className="card_p">{props.apartmentSize}</p>
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
            <p className="card_p">{props.apartmentRooms} bedrooms</p>
          </div>{" "}
          <div className="beds">
            {" "}
            <Image
              src="/images/bed.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">{props.apartmentBeds} beds</p>
          </div>{" "}
        </div>
      </div>
    </Link>
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
