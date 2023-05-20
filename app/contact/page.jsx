import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      {" "}
      <section>
        <h1>Explain who and what we are</h1>
        <div className="hero-container">
          <Image
            src="/images/contact_hero.jpg"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          />
          <ul className="about_list">
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Lorem ipsum dolor sit amet, consect.
            </li>
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Lorem ipsum dolor sit amet, consect.
            </li>
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Lorem ipsum dolor sit amet, consect.
            </li>
          </ul>
          <div className="hero-quote">
            <h3></h3>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-right">
            <p>Lorem ipsum</p>
            <h3>Some kind of message </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>
          <div className="benefits-left">
            <Image
              src="/images/benefits-bg.webp"
              alt="benefits image"
              width={1200}
              height={800}
              className="benefits-img"
            />
            <ul className="benefits-list">
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
