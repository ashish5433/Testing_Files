import React from "react";

export default function Home() {
  return (
    <div>
        <div className="bg-neutral-100 p-3">
          <h4>Listing Details</h4>
          <div className="md:grid md:grid-cols-4 gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg  flex flex-col px-3 py-2 text-md">
              <span>Overall Listings</span>
              <span className="lg:text-4xl mt-3 font-semibold flex">
                <span>235</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "60px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Photos</span>
              <span className="lg:text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Videos</span>
              <span className="lg:text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Product Sold</span>
              <span className="lg:text-4xl mt-3 font-semibold">180</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-3 mt-3">
          <h4>Enquiries</h4>
          <div className="md:grid md:grid-cols-3 gap-4 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg  flex flex-col px-3 py-2 text-md">
              <span>Total Enquiries Recieved</span>
              <span className="lg:text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Answered Enquiries</span>
              <span className="lg:text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Unanswered Enquiries</span>
              <span className="lg:text-4xl mt-3 font-semibold">23000</span>
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg  flex flex-col px-3 py-2 text-md">
              <span>Total Live View Request</span>
              <span className="lg:text-3xl mt-3 font-semibold">
                <span>23200</span>
                <span
                  style={{ color: "red", scale: "1.6", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  sensors
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Visit Request</span>
              <span className="lg:text-3xl mt-3 font-semibold">
                <span>200</span>
                <span
                  style={{ color: "indigo", scale: "1.6", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  distance
                </span>
              </span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Calls Recieved</span>
              <span className="lg:text-3xl mt-3 font-semibold">
                <span>500</span>
                <span
                  style={{ color: "indigo", scale: "1.5", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  phone_in_talk
                </span>
              </span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Chats Enquiries</span>
              <span className="lg:text-3xl mt-3 font-semibold">
                <span>230</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-3 mt-3">
          <h4>Listing Details</h4>
          <div className="md:grid md:grid-cols-4 gris-rows-auto gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg  flex flex-col px-3 py-2 text-md">
              <span>Total Views</span>
              <span className="lg:text-4xl mt-3 font-semibold">
                <span>235</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Clicks Recieved</span>
              <span className="lg:text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Views Recieved</span>
              <span className="lg:text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col  px-3 py-2 text-md">
              <span>Total Add to Wishlist</span>
              <span className="lg:text-4xl mt-3 font-semibold">180</span>
            </div>
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg flex flex-col  mt-2 px-3 py-2 text-md">
              <span>Overall Reviews</span>
              <span className="lg:text-4xl mt-3 font-semibold">180</span>
            </div>
          </div>
        </div>
    </div>
  );
}
