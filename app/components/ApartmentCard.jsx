import Link from "next/link";
import React from "react";
import Image from "next/image";

function ApartmentCard({apartmentLocation, apartmentRooms, apartmentPrice, apartmentSize, apartmentBeds, apartmentDistrict, apartmentPhotos, apartmentTitle, imgData}) {

 /*  console.log(props.imgData[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url) */
 
/* 
console.log(imgData[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url) */
console.log(imgData, "images")
// Check if imgData and its nested properties exist
/* const imgUrl = imgData[0]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
console.log(imgUrl); */




  return (
    <>
    <Link href="/pages/apartment">
   <div className="card">
        <div className="card_image">
          {" "}
          <Image
             src="/images/something.jpg"
             alt={apartmentTitle}
             width={250}
            height={150}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            400px" 
            className="the_card_image"
          />
        </div>

        <div className="card_content">
        <span className="small-label">{apartmentDistrict}</span>
          <h4 className="apartment_descrpiton">{apartmentLocation}</h4>
          <p className="price">{apartmentPrice} DKK/month</p>
          <div className="address">
            {" "}
            <Image
              src="/images/location.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">{apartmentLocation ? apartmentLocation : "unavailable"}</p>
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
            <p className="card_p">{apartmentSize}</p>
          <p>{apartmentSize ? apartmentSize : 'unavailable'}</p>
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
            <p className="card_p">{apartmentRooms} bedrooms</p>
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
            <p className="card_p">{apartmentBeds} beds</p>
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
