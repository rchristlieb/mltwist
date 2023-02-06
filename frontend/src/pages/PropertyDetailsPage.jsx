import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const PropertiesDetailsPage = () => {
  const [properties, setProperties] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [hostProperties, setHostProperties] = useState([]);
  const [hostDataLoaded, setHostDataLoaded] = useState(false);
  const [propertiesDataLoaded, setPropertiesDataLoaded] = useState(false);
  const [hostPropertyDataLoaded, setHostPropertyDataLoaded] = useState(false);

  /*--------------------------------------------------------------------------

  Property data array

  Array that would be returned with /properties fetch. Fetch fails
  with CORS (cross orgin resource sharing) failure. The browser will only 
  allow access from one web server on the host the brwser is running on even 
  if on different ports. 

  This array allows for the testing of the page component

  --------------------------------------------------------------------------
*/
  //   const pData = [
  //     {
  //       id: 1,
  //       name: "Wonderful House",
  //       desc: "Wonderful View",
  //       checkIn: "2023-02-12",
  //       checkOut: "2023-02-28",
  //       url: "/images/property_photo1.jpg",
  //       price: 375,
  //       guests: 4,
  //       bedrooms: 2,
  //       beds: 2,
  //       bathrooms: 2,
  //     },
  //     {
  //       id: 2,
  //       name: "Luxury House",
  //       desc: "Luxurious interior",
  //       checkIn: "2023-02-19",
  //       checkOut: "2023-02-25",
  //       url: "/images/property_photo2.jpg",
  //       price: 595,
  //       guests: 6,
  //       bedrooms: 4,
  //       beds: 4,
  //       bathrooms: 3,
  //     },
  //     {
  //       id: 3,
  //       name: "Beautiful House",
  //       desc: "Great Neighborhood",
  //       checkIn: "2023-03-05",
  //       checkOut: "2023-03-11",
  //       url: "/images/property_photo3.jpg",
  //       price: 300,
  //       guests: 4,
  //       bedrooms: 3,
  //       beds: 3,
  //       bathrooms: 2,
  //     },
  //     {
  //       id: 4,
  //       name: "Vacation House",
  //       desc: "Great View",
  //       checkIn: "2023-03-05",
  //       checkOut: "2023-03-11",
  //       url: "/images/property_photo4.jpg",
  //       price: 210,
  //       guests: 5,
  //       bedrooms: 3,
  //       beds: 3,
  //       bathrooms: 2,
  //     },
  //   ];

  //   /*
  //   --------------------------------------------------------------------------

  //   Host data array

  //   --------------------------------------------------------------------------
  // */

  //   const hData = [
  //     {
  //       id: 1,
  //       name: "Veronica Wells",
  //       desc: "Dedicated Homeowner",
  //       url: "/images/host_photo1.webp",
  //     },
  //     {
  //       id: 2,
  //       name: "Samuel Jackson",
  //       desc: "Tough Guy",
  //       url: "/images/host_photo2.webp",
  //     },
  //     {
  //       id: 3,
  //       name: "William Shatner",
  //       desc: "Famous Actor",
  //       url: "/images/host_photo3.webp",
  //     },
  //     {
  //       id: 4,
  //       name: "Mick Jagger",
  //       desc: "Rock and Roll",
  //       url: "/images/host_photo4.webp",
  //     },
  //   ];

  //   /*
  //   --------------------------------------------------------------------------

  //   Host Property association data array

  //   --------------------------------------------------------------------------
  // */

  //   const hpData = [
  //     { id: 1, hostId: 1, propertyId: 1 },
  //     { id: 2, hostId: 2, propertyId: 2 },
  //     { id: 3, hostId: 3, propertyId: 3 },
  //     { id: 4, hostId: 4, propertyId: 4 },
  //     { id: 5, hostId: 1, propertyId: 2 },
  //     { id: 6, hostId: 3, propertyId: 2 },
  //     { id: 7, hostId: 4, propertyId: 2 },
  //   ];

  useEffect(() => {
    fetch("http://localhost:3001/hostProperties")
      .then((res) => res.json())
      .then(
        (result) => {
          setHostPropertyDataLoaded(true);
          setHostProperties(result);
        },
        (error) => {
          setHostPropertyDataLoaded(false);
        }
      );
    fetch("http://localhost:3001/hosts")
      .then((res) => res.json())
      .then(
        (result) => {
          setHostDataLoaded(true);
          setHosts(result);
        },
        (error) => {
          setHostDataLoaded(false);
        }
      );
    fetch("http://localhost:3001/properties")
      .then((res) => res.json())
      .then(
        (result) => {
          setPropertiesDataLoaded(true);
          setProperties(result);
        },
        (error) => {
          setPropertiesDataLoaded(false);
        }
      );
  }, []);

  // get property id from dynamic router params
  let routeParams = useParams();

  // filter for property that match routing param
  let propertyItemTemp = properties.filter(
    (pItem) => pItem.id === Number(routeParams.id)
  );
  // Since there is only one object in array, copy to simple object
  let propertyItem = propertyItemTemp[0];

  // Get associations to this property
  let hpAssoc = hostProperties.filter(
    (hpItem) => hpItem.propertyId === Number(routeParams.id)
  );

  let hostItems = [];
  let i = 0;

  // Use nested loops to filter for hosts associated with this property
  for (const hItem of hosts) {
    for (const hpItem of hpAssoc) {
      if (hItem.id === hpItem.hostId) {
        hostItems[i++] = hItem;
      }
    }
  }

  // Don't render until all tables retrieved

  if (!hostPropertyDataLoaded) {
    return null;
  }
  if (!hostDataLoaded) {
    return null;
  }
  if (!propertiesDataLoaded) {
    return null;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col m-8 items-center text-lg">
        <Link to="/properties">
          <img
            className="max-w-md rounded-md"
            src={propertyItem.url}
            alt="Property"
          ></img>
        </Link>
        <Link to="/properties">
          <p className="font-bold">{propertyItem.name}</p>
        </Link>

        <p>{propertyItem.desc}</p>
        <p>{Number(propertyItem.price).toFixed(2)} night</p>
        <p>
          Check in {propertyItem.checkIn} | Check out {propertyItem.checkOut}
        </p>
      </div>
      <h1 className="font-bold text-lg">People Who Host This Property</h1>
      <div className="flex flex-wrap">
        {hostItems.map((hostItem) => {
          return (
            <div className="flex flex-col m-8 items-center text-lg">
              <Link to="/hosts">
                <img
                  className="max-w-md rounded-md"
                  src={hostItem.url}
                  alt="Host"
                ></img>
              </Link>
              <Link to="/hosts">
                <p className="font-bold">{hostItem.name}</p>
              </Link>
              <p>{hostItem.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
