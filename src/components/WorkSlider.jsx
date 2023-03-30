import React from "react";
import WarehouseDistributions from "../assests/iimages/WarehouseDistributions.svg";
import SpecialTransport from "../assests/iimages/SpecialTransport.svg";
import LogisticsCard from "../assests/iimages/LogisticsCard.svg";
import TransportationCard from "../assests/iimages/TransportationCard.svg";
import PackagingSolutions from "../assests/iimages/PackagingSolutions.svg";

const WorkSlider = () => {
  const cardInfo = [
    {
      src: TransportationCard,
      service: "Liquid Transportation",
      transport: "Premium Tankers",
    },
    {
      src: PackagingSolutions,
      service: "Packaging Solutions",
      transport: "Warehouse Management",
    },
    {
      src: LogisticsCard,
      service: "Contract Logistics",
      transport: "Road Transportation",
    },
    {
      src: WarehouseDistributions,
      service: "Warehouse and Distribution",
      transport: "Large Warehouse",
    },
    {
      src: SpecialTransport,
      service: "Specialized Transport",
      transport: "Ocean Transports",
    },
  ];
  return (
    <div className="flex absolute -top-48 justify-center w-full">
      <div className="w-11/12">
        <section className="grid gap-x-2 w-full grid-cols-5">
          {cardInfo.map((info) => (
            <div
              style={{ background: `url(${info.src}) no-repeat center/cover` }}
              className="slider-card pl-5 flex items-end pb-2"
            >
              <div>
                <h2 className="text-white">{info.service}</h2>
                <p className=" text-yellow-600 yellow-color-gradient">
                  {info.transport}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-5 flex justify-center">
          <button className="px-11 py-3.5 .f-family-krub font-semibold relative btn text-white">
            More Work
          </button>
        </section>
      </div>
    </div>
  );
};

export default WorkSlider;
