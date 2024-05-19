import React from "react";
import { useParams } from "react-router-dom";
import inverters from "../../../data/inverters";
import ImageGalleryComponent from "../../../components/ImageGalleryComponent";

import "./InverterPage.css";

const InverterPage = () => {
  const { id } = useParams();
  const inverter = inverters.find((inv) => inv.id === parseInt(id));

  if (!inverter) {
    return <p>Inverter not found</p>;
  }

  return (
    <div className="inverter-page">
      <h1>{inverter.name}</h1>
      <div className="inverter-page-wrapper">
        <div className="inverter-page-cont left-inv-cont">
          <ImageGalleryComponent images={inverter.images} />
        </div>
        <div className="inverter-page-cont right-inv-cont">
          <h3>{inverter.name}</h3>
          <p>{inverter.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <table>
              <tbody>
                <tr>
                  <th>Max Input Power:</th>
                  <td>{inverter.specifications.MaxInputPower}</td>
                </tr>
                <tr>
                  <th>Max Input Voltage:</th>
                  <td>{inverter.specifications.MaxInputVoltage}</td>
                </tr>
                <tr>
                  <th>Max AC Input/Output Apparent Power:</th>
                  <td>{inverter.specifications.MaxACInputOutputApparentPower}</td>
                </tr>
                <tr>
                  <th>Noise:</th>
                  <td>{inverter.specifications.Noise}</td>
                </tr>
                <tr>
                  <th>IP Rating:</th>
                  <td>{inverter.specifications.IPRating}</td>
                </tr>
                <tr>
                  <th>Cabinet Size:</th>
                  <td>{inverter.specifications.CabinetSize}</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>{inverter.specifications.Weight}</td>
                </tr>
                <tr>
                  <th>Type of Cooling:</th>
                  <td>{inverter.specifications.TypeCooling}</td>
                </tr>
                <tr>
                  <th>Warranty:</th>
                  <td>{inverter.specifications.Warranty}</td>
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

export default InverterPage;
