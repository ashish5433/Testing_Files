import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function RelatedtagsEstate() {
  return (
    <div>
      <div className="bg-black relative h-14  hover:h-max border-b-1 hover: delay-200 ">
        <div className="flex justify-center gap-3 p-2">
          <select className="px-3 rounded-full" name="buy" id="buy">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
            <option value="sell">Sale</option>
          </select>
          <select className="px-3 rounded-full" name="property_type" id="property_type">
            <optgroup label="House">
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="estate">Estate</option>
              <option value="country house">Country House</option>
              <option value="chalet">Chalet</option>
              <option value="townhouse">Townhouse</option>
              <option value="bunglow">Bunglow</option>
            </optgroup>
            <optgroup label="Apartment">
              <option value="penthouse">Penthouse</option>
              <option value="duplex">Duplex</option>
              <option value="condo">Condo</option>
              <option value="others">Others</option>
            </optgroup>
            <optgroup label="Private Islands">
              <option value="artificial islands">Artificial Islands</option>
              <option value="river islands">River Island</option>
              <option value="islands and beaches">Islands and Beaches</option>
              <option value="coral islands">Coral Islands</option>
              <option value="continental islands">Continental Islands</option>
              <option value="oceanic islands">Oceanic Islands</option>
              <option value="tidal islands">Tidal Islands</option>
            </optgroup>
            <optgroup label="Castle">
              <option value="castle">Castle</option>
            </optgroup>
            <optgroup label="Land">
              <option value="Iindustrial">Industrial</option>
              <option value="commercial">Commercial</option>
              <option value="residental">Residential</option>
              <option value="project">Project</option>
            </optgroup>
            <optgroup label="Beachside Properties">
              <option value="beachiside properties">
                Beachside Properties
              </option>
            </optgroup>
          </select>
          <Dropdown >
            <Dropdown.Toggle className="bg-white text-black border px-3 rounded-pill" id="dropdown-basic">
              Price
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2 py-1">
            <div className="flex flex-row ">
            <div>0</div>
                <div><input
                  type="range"
                  id="points"
                  name="points"
                  min="0"
                  max="1000000"
                /></div>
                <div>1000000</div>
            </div>
            <div>Value:</div>
            </Dropdown.Menu>
          </Dropdown>
          <select className="px-3 rounded-full" name="Listed By" id="listed by">
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="real estate manager">Real Estate Manager</option>
            <option value="developers">Developers</option>
            <option value="investors">Investors</option>
          </select>
          <select className="px-3 rounded-full" name="Amenities" id="amenities">
            <option value="parking">Parking</option>
            <option value="pool">Pool</option>
            <option value="gym">Gym</option>
            <option value="balcony">Balcony</option>
            <option value="fireplace">Fireplace</option>
            <option value="jacuzzi">Jacuzzi</option>
            <option value="rooftop room">Rooftop Room</option>
            <option value="bar">Bar</option>
            <option value="sauna">Sauna</option>
            <option value="custom box">Custom Box</option> 
          </select>
          <button className="px-3 rounded-full bg-white">More filter</button>
        </div>
      </div>
    </div>
  );
}
