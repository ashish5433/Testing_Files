import React from "react";
import ProductCardContent from "../../Check/ProductCardContent";



export default function MorefromSeller({ products , view}) {

  return (
    <div >
      <div className={view ? "product-card-div-row" : "product-card-div-col"}>
        {products?.map((data) => (
          <ProductCardContent data={data} view={true}/>
        ))}
      </div>
      
    </div>
  );
}
