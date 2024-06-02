import React from "react";
import { useParams } from "react-router-dom";
import {Batteries} from "../../../data/EquipmentData";
import ImageGalleryComponent from "../../../components/ImageGalleryComponent";

import "./BatteryPage.css"

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
                  <td>{battery.specifications.MaxInputPower}</td>
                </tr>
                <tr>
                  <th>Max Input Voltage:</th>
                  <td>{battery.specifications.MaxInputVoltage}</td>
                </tr>
                <tr>
                  <th>Max AC Input/Output Apparent Power:</th>
                  <td>{battery.specifications.MaxACInputOutputApparentPower}</td>
                </tr>
                <tr>
                  <th>Noise:</th>
                  <td>{battery.specifications.Noise}</td>
                </tr>
                <tr>
                  <th>IP Rating:</th>
                  <td>{battery.specifications.IPRating}</td>
                </tr>
                <tr>
                  <th>Cabinet Size:</th>
                  <td>{battery.specifications.CabinetSize}</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>{battery.specifications.Weight}</td>
                </tr>
                <tr>
                  <th>Type of Cooling:</th>
                  <td>{battery.specifications.TypeCooling}</td>
                </tr>
                <tr>
                  <th>Warranty:</th>
                  <td>{battery.specifications.Warranty}</td>
                </tr>
              </tbody>
            </table>
            {/* <ul>
              <li>Power: {inverter.specifications.power}</li>
              <li>Voltage: {inverter.specifications.voltage}</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryPage;
