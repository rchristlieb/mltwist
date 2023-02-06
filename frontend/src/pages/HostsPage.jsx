import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HostsPage = () => {
  const [hosts, setHosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // const hData = [
  //   {
  //     id: 1,
  //     name: "Veronica Wells",
  //     desc: "Dedicated Homeowner",
  //     url: "images/host_photo1.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "Samuel Jackson",
  //     desc: "Tough Guy",
  //     url: "images/host_photo2.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "William Shatner",
  //     desc: "Famous Actor",
  //     url: "images/host_photo3.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Mick Jagger",
  //     desc: "Rock and Roll",
  //     url: "images/host_photo4.webp",
  //   },
  // ];

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then((res) => res.json())
      .then(
        (result) => {
          setDataLoaded(true);
          setHosts(result);
        },
        (error) => {
          setDataLoaded(false);
        }
      );
  }, []);

  // Don't render until hosts retrieved

  if (!dataLoaded) {
    return null;
  } else {
    return (
      <div className="flex justify-center p-4">
        <div className="flex flex-wrap">
          {hosts.map((hostItem) => {
            return (
              <div className="flex flex-col m-8 items-center text-lg">
                <Link to={`/hosts/${hostItem.id}`}>
                  <img
                    className="max-w-md rounded-md"
                    src={hostItem.url}
                    alt="Rental Host"
                  ></img>
                </Link>
                <Link to={`/hosts/${hostItem.id}`}>
                  <p className="font-bold">{hostItem.name}</p>
                </Link>
                <p>{hostItem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
