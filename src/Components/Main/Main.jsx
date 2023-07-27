import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import img from "../../Assets/img (1).jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";
import img7 from "../../Assets/img (7).jpg";
import img8 from "../../Assets/img (8).jpg";
import img9 from "../../Assets/img (9).jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Beach Paradise",
    location: "Maldives",
    grade: "CULTURAL RELAX",
    fees: "$2300",
    description:
      "Escape to the beautiful beaches of the Maldives and indulge in a relaxing holiday.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "City Exploration",
    location: "New York City, USA",
    grade: "CULTURAL RELAX",
    fees: "$2500",
    description:
      "Discover the vibrant culture and iconic landmarks of New York City.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Mountain Retreat",
    location: "Swiss Alps",
    grade: "CULTURAL RELAX",
    fees: "$1800",
    description:
      "Embark on a thrilling adventure in the breathtaking Swiss Alps.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$850",
    description:
      "The Taj Mahal, in Agra, India, is an iconic white marble mausoleum built by Emperor Shah Jahan for his beloved wife, Mumtaz Mahal. Its breathtaking beauty and symbolic architecture attract visitors worldwide, making it a timeless testament to love and a must-see wonder.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$1700",
    description:
      "Machu Picchu, Peru, an ancient Incan citadel nestled in the Andes Mountains. Remarkable architecture and stunning views make it a must-visit UNESCO World Heritage Site. A mysterious and captivating glimpse into the Incan civilization.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Grate Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$1450",
    description:
      "One of the most remarkable Australian natural gifts is the Grate Barrier Reef. The Great Barrier Reef: Australia's vast and vibrant coral reef system. Rich marine life, perfect for snorkeling and diving.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$1600",
    description:
      "Cappadocia, in Turkey, a surreal and otherworldly destination. Known for its unique rock formations, fairy chimneys, and ancient cave dwellings, it offers a mesmerizing landscape. Hot air balloon rides provide breathtaking views at sunrise and sunset. Rich history and stunning scenery make it an unforgettable adventure for travelers seeking a taste of the extraordinary.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$1800",
    description:
      "Bali, Indonesia's enchanting island paradise. Known for its lush rice terraces, ancient temples, and pristine beaches, it offers a captivating blend of culture and natural beauty. From vibrant markets to serene yoga retreats, Bali caters to diverse interests. Whether seeking relaxation or adventure, this tropical haven promises an unforgettable escape for travelers seeking a slice of paradise.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Temple of Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$2100",
    description:
      "Angkor Wat, in Siem Reap, Cambodia, is a mesmerizing ancient temple complex. A UNESCO World Heritage Site, it showcases the pinnacle of Khmer architecture and art. Its iconic silhouette against the sunrise is a breathtaking sight, drawing visitors from around the globe. ",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="containt flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
