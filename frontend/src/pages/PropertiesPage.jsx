import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // const pData = [
  //   {
  //     id: 1,
  //     name: "Wonderful House",
  //     desc: "Wonderful View",
  //     checkIn: "2023-02-12",
  //     checkOut: "2023-02-28",
  //     url: "images/property_photo1.jpg",
  //     price: 375,
  //     guests: 4,
  //     bedrooms: 2,
  //     beds: 2,
  //     bathrooms: 2,
  //   },
  //   {
  //     id: 2,
  //     name: "Luxury House",
  //     guests: 4,
  //     desc: "Luxurious interior",
  //     checkIn: "2023-02-19",
  //     checkOut: "2023-02-25",
  //     url: "images/property_photo2.jpg",
  //     price: 595,
  //     bedrooms: 4,
  //     beds: 4,
  //     bathrooms: 3,
  //   },
  //   {
  //     id: 3,
  //     name: "Beautiful House",
  //     desc: "Great Neighborhood",
  //     checkIn: "2023-03-05",
  //     checkOut: "2023-03-11",
  //     url: "images/property_photo3.jpg",
  //     price: 300,
  //     guests: 4,
  //     bedrooms: 3,
  //     beds: 3,
  //     bathrooms: 2,
  //   },
  //   {
  //     id: 4,
  //     name: "Vacation House",
  //     desc: "Great View",
  //     checkIn: "2023-03-05",
  //     checkOut: "2023-03-11",
  //     url: "images/property_photo1.jpg",
  //     price: 375,
  //     guests: 5,
  //     bedrooms: 3,
  //     beds: 3,
  //     bathrooms: 2,
  //   },
  // ];

  useEffect(() => {
    fetch("http://localhost:3001/properties")
      .then((res) => res.json())
      .then(
        (result) => {
          setDataLoaded(true);
          setProperties(result);
        },
        (error) => {
          setDataLoaded(false);
        }
      );
  }, []);

  // Don't render until properties retrieved

  if (!dataLoaded) {
    return null;
  } else {
    return (
      <div className="flex justify-center p-4">
        <div className="flex flex-wrap">
          {properties.map((propertyItem) => {
            return (
              <div className="flex flex-col m-8 items-center text-lg">
                <Link to={`/properties/${propertyItem.id}`}>
                  <img
                    className="max-w-md rounded-md"
                    src={propertyItem.url}
                    alt="Rental Property"
                  ></img>
                </Link>
                <Link to={`/properties/${propertyItem.id}`}>
                  <p className="font-bold">{propertyItem.name}</p>
                </Link>

                <p>{propertyItem.desc}</p>
                <p>${Number(propertyItem.price).toFixed(2)} night</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
