import React from "react";
import { useParams } from "react-router-dom";
import { solarPanels } from "../../../data/EquipmentData";
import ImageGalleryComponent from "../../../components/ImageGalleryComponent";

import "./PanelsPage.css";

const PanelsPage = () => {
  const { id } = useParams();
  const panel = solarPanels.find((inv) => inv.id === parseInt(id));

  if (!panel) {
    return <p>Panel not found</p>;
  }

  return (
    <div className="inverter-page">
      <h1>{panel.name}</h1>
      <div className="inverter-page-wrapper">
        <div className="inverter-page-cont left-inv-cont">
          <ImageGalleryComponent images={panel.images} />
        </div>
        <div className="inverter-page-cont right-inv-cont">
          <h3>{panel.name}</h3>
          <p>{panel.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <table>
              <tbody>
                <tr>
                  <th>Max Input Power:</th>
                  <td>{panel.specifications.MaxPower}</td>
                </tr>
                <tr>
                  <th>Max Input Voltage:</th>
                  <td>{panel.specifications.MaxVoltage}</td>
                </tr>
                <tr>
                  <th>CellType:</th>
                  <td>{panel.specifications.CellType}</td>
                </tr>
                <tr>
                  <th>NominalOperatingCell:</th>
                  <td>{panel.specifications.NominalOperatingCell}</td>
                </tr>
                <tr>
                  <th>Cabinet Size:</th>
                  <td>{panel.specifications.CabinetSize}</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>{panel.specifications.Weight}</td>
                </tr>
                <tr>
                  <th>Warranty:</th>
                  <td>{panel.specifications.Warranty}</td>
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

export default PanelsPage;
