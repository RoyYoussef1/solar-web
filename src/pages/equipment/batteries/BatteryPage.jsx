import React from "react";
import { useParams } from "react-router-dom";
import {Batteries} from "../../../data/EquipmentData";
import ImageGalleryComponent from "../../../components/ImageGalleryComponent";

import "./BatteryPage.css"
import Button from "../../../components/button/Button";

const BatteryPage = () => {
  const { id } = useParams();
  const battery = Batteries.find((inv) => inv.id === parseInt(id));

  if (!battery) {
    return <p>Battery not found</p>;
  }

  return (
    <div className="inverter-page">
      <h1>{battery.name}</h1>
      <div className="inverter-page-wrapper">
        <div className="inverter-page-cont left-inv-cont">
          <ImageGalleryComponent images={battery.images} />
        </div>
        <div className="inverter-page-cont right-inv-cont">
          <h3>{battery.name}</h3>
          <p>{battery.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <table>
              <tbody>
                <tr>
                  <th>Max Input Power:</th>
                  <td>{battery.specifications.MaxPower}</td>
                </tr>
                <tr>
                  <th>Nominal Voltage:</th>
                  <td>{battery.specifications.NominalVoltage}</td>
                </tr>
                <tr>
                  <th>Capacity:</th>
                  <td>{battery.specifications.Capacity}</td>
                </tr>
                <tr>
                  <th>Cycle Life:</th>
                  <td>{battery.specifications.CycleLife}</td>
                </tr>
                <tr>
                  <th>Temperature Range:</th>
                  <td>{battery.specifications.TemperatureRange}</td>
                </tr>
                <tr>
                  <th>Dimension:</th>
                  <td>{battery.specifications.Dimension}</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>{battery.specifications.Weight}</td>
                </tr>
                <tr>
                  <th>Warranty:</th>
                  <td>{battery.specifications.Warranty}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="inverter-page-cta">
            <Button buttonLabel="Download Brochure" buttonURL={battery.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryPage;
