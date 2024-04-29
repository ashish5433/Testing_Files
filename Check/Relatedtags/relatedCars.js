import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import YachtMoreFilter from "../MoreFilters/yachtFilter";

export default function RelatedtagsCars() {
  const[carsCategory,setCarsCategory] = useState("None")
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="bg-black relative hover:h-max border-b-1 hover: delay-200 ">
        <div className="flex justify-center gap-3 p-2">
          <select className="px-3 rounded-full" name="buy" id="buy">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          {/* <select onChange={(e)=>{setYachtCategory(e.target.value)}} className="px-3 rounded-full" name="yacht_type" id="yacht_type">
              <option value="motor yachts">Motor Yachts</option>
              <option value="sail boats">Sail Boats</option>
              <option value="solar">Solar</option>
              <option value="tenders">Tenders</option>
              <option value="upcoming yachts">Upcoming Yachts</option>
          </select>
          <select className="px-3 rounded-full" name="yacht_subcategories" id="yacht_subcategories">
            {
              yachtCategory=="motor yachts" ? 
              <>
              <option value="motor yachts">Motor Yachts</option>
              <option value="multi-hull">Multi-Hull</option>
              <option value="solar">Solar</option>
              <option value="super yachts">Super Yachts</option>
              <option value="mega yachts">Mega Yachts</option>
              <option value="giga yachts">Giga Yachts</option>
              <option value="terra yachts">Terra Yachts</option>
              </>
              : null
            }
            {
              yachtCategory=="sail boats" ? 
              <>
              <option value="single Hull">Single Hull</option>
              <option value="catamaran">Catamaran</option>
              <option value="trimaran">Trimaran</option>
              <option value="solar">Solar</option>
              </>
               : null
            }
            {
              yachtCategory=="solar" ?
              <>
              <option value="single Hull">Single Hull</option>
              <option value="multi hull">Multi Hull</option>
              <option value="hybrid">Hybrid</option>
              </>              
               : null
            }
            {
              yachtCategory=="tenders" ? 
              <>
              <option value="single Hull">Centre Console</option>
              <option value="multi hull">Limousine</option>
              <option value="hybrid">R.I.B's</option>
              <option value="classic">Classic</option>
              <option value="beachlander">Beachlander</option>
              <option value="amphibous">Amphibous</option>
              </> : null
            }
            {
              yachtCategory=="upcoming yachts" ? "none" : null
            }
            {
              yachtCategory=="None" ? <option value="none">None</option> : null
            }
            </select> */}
          <select className="px-3 rounded-full" name="bodyType" id="bodyType">
            <option value="body type">Body Type</option>
            <option value="coupe">Coupe</option>
            <option value="hyper cars">Hyper Cars</option>
            <option value="super cars">Super Cars</option>
            <option value="vintagec cars">Vintage Cars</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="convertible">Convertible</option>
            <option value="limousine">Limousine</option>
          </select>
          <select className="px-3 rounded-full" name="make" id="make">
            <option value="body type">Audi</option>
            <option value="coupe">BMW</option>
            <option value="hyper cars">Mercedes-Benz</option>
            <option value="super cars">Lexus</option>
            <option value="vintagec cars">Tesla</option>
            <option value="sedan">Porsche</option>
            <option value="suv">Jaguar</option>
            <option value="hatchback">Land Rover</option>
            <option value="convertible">Volvo</option>
            <option value="limousine">Cadillac</option>
            <option value="body type">Ferrari</option>
            <option value="coupe">Meserati</option>
            <option value="hyper cars">Bugatti</option>
            <option value="super cars">Pagani</option>
            <option value="vintagec cars">Koenigsegg</option>
            <option value="sedan">Mc-Laren</option>
            <option value="suv">Brabus</option>
            <option value="hatchback">Aston-Martin</option>
            <option value="convertible">Bentley</option>
            <option value="limousine">Maybach</option>
          </select>
          <select className="px-3 rounded-full" name="model" id="model">
            <option value="model">Model</option>
            <option value="coupe">Coupe</option>
            <option value="hyper cars">Hyper Cars</option>
            <option value="super cars">Super Cars</option>
          </select>
          <select className="px-3 rounded-full" name="fuel Type" id="fuel Type">
            <option value="model">Petrol</option>
            <option value="coupe">Diesel</option>
            <option value="hyper cars">Fully Electric</option>
            <option value="super cars">Hyprid</option>
          </select>
          <Dropdown >
            <Dropdown.Toggle className="bg-white text-black border px-3 rounded-pill" id="dropdown-basic">
              Price
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2 py-1">
            <div className="flex flex-row ">
            <div>30000</div>
                <div><input
                  type="range"
                  id="points"
                  name="points"
                  min="30000"
                  max="300000000000000"
                /></div>
                <div>1300000000000000</div>
            </div>
            <div>Value:</div>
            </Dropdown.Menu>
          </Dropdown>
        
          <select className="px-3 rounded-full" name="Listed By" id="listed by">
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="dealer">Dealer</option>
          </select>
          <button onClick={()=>{setYachtCategory(!yachtCategory);console.log(yachtCategory)}} className="px-3 rounded-full bg-white">More filter</button>
          <YachtMoreFilter show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </div>
    </div>
  );
}
