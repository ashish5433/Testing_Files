'use client'

import React, { useEffect, useRef } from "react";
// import alanBtn from '@alan-ai/alan-sdk-web';
import iotChangeHandler from "./HomeGradient";
import { useRouter } from 'next/router'

const AlanContainer = ({yo,setYo}) => {
    const router = useRouter();
  const rootElRef = useRef(null);
  useEffect(() => {
    // console.log(window);
    const alanBtn=require('@alan-ai/alan-sdk-web');
    alanBtn({
        key:
        'd5c97d1dfae249816449e4242f8a394d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        rootEl:document.getElementById("alan-btn"),
        onCommand: (commandData) => {
            if (commandData.command === "navigation") {
              let val = commandData.route;
              console.log(val);
              if(val==="product"){
                router.push("/components/ProductPage");
              }
              else if(val==="login"){
                router.push("/login");
              }
              else if(val==="Superbike"){
                router.push("/components/ProductsList/superbike");
              }
              else if(val==="naked"){
                router.push("/components/ProductsList/naked");
              }
              else if(val==="electric"){
                router.push("/components/ProductsList/electric");
              }
              else if(val==="Cruiser"){
                router.push("/components/ProductsList/cruiser");
              }
              else if(val==="classic"){
                router.push("/components/ProductsList/classic");
              }
              else if(val==="moped"){
                router.push(`/components/ProductsList/ev%20mopad`);
              }
              else if(val==="vintage cars"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="sedan"){
                router.push("/components/ProductsList/sedan")
              }
              else if(val==="suv"){
                router.push("/components/ProductsList/suv")
              }
              else if(val==="hatchback"){
                router.push("/components/ProductsList/hatchback")
              }
              else if(val==="luxury cars"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val ==="ev cars"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="television"){
                router.push("/components/ProductsList/television")
              }
              else if(val==="washing machine"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="game console"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="microwave ovens"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="air conditioner"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val ==="refrigerator"){
                router.push("/components/ProductsList/Refrigerator")
              }
              else if(val==="Villas"){
                router.push("/components/ProductsList/villas")
              }
              else if(val==="Apartments"){
                router.push("/components/ProductsList/Apartments")
              }
              else if(val==="office space"){
                router.push("/components/ProductsList/superbike")
              }
              else if(val==="house"){
                router.push("/components/ProductsList/house")
              }
              else if(val==="studio"){
                router.push("/components/ProductsList/studio")
              }
            
          }
          
          },
            
    });
    
  }, []);
  return (
    <div className="alan-btn-container">
      <div ref={rootElRef}></div>
    </div>
  )
}
export default AlanContainer;