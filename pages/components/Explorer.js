import React, { useState } from "react";
import {useRouter} from "next/router";
import { useEffect } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();
export default function Explorer() {
 
  const router = useRouter();
  
  
  
  
  return (
    <div>
    
      <div className="w-full h-[100vh] flex justify-center explorer">

        <div className="bg-neutral-200 w-[60%] h-4/6 p-10 rounded-xl m-14 flex flex-col">
          <div className=" flex flex-col">
            <span className="font-semibold text-3xl mb-1 ">
              Create your account and Start Selling
            </span>
            <span>
              Get Connected to Affluent Clients across the world.{" "}
              <span className="text-orange-500 font-bold">
                Fast Secure and Verified
              </span>
            </span>
          </div>
          <div className="flex w-full flex-row mt-5">
            <div className="flex flex-col w-[50%] ml-10">
              <div className="flex flex-col -mt-3">
                <label className="pl-2 mb-1 font-semibold">Legal Name of Business</label>
                <input
                  type="text"
                  placeholder="Raunak Biswas"
                  className="w-3/6 h-10 p-2 rounded-full border-2 border-red-200"
                ></input>
              </div>
              <div className="flex flex-col mt-2">
                <label className="pl-2 mb-1 font-semibold">Business Address</label>
                <input
                  type="text"
                  placeholder="UAE, Dubai"
                  className="w-3/6 h-10 p-2 rounded-full border-2 border-red-200"
                ></input>
              </div>
              <div className="flex flex-col mt-2">
                <label className="pl-2 mb-1 font-semibold">Business Category</label>
                <input
                  type="text"
                  placeholder="Dealer"
                  className="w-3/6 h-10 p-2 rounded-full border-2 border-red-200"
                ></input>
              </div>
              <div className="flex flex-col mt-2">
                <label className="pl-2 mb-1 font-semibold">
                  Company Identification Number
                </label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-3/6 h-10 p-2 rounded-full border-2 border-red-200"
                ></input>
              </div>
              <div className="flex flex-col mt-2">
                <label className="pl-2 mb-1 font-semibold">Tax Identification Number</label>
                <input
                  type="text"
                  placeholder="xxx-xxx-xxxx"
                  className="w-3/6 h-10 p-2 rounded-full border-2 border-red-200"
                ></input>
              </div>
            </div>
            <div className="flex flex-col -mt-5">
              <div>
                <h4 className="font -bold text-neutral-700">What you get</h4>
              </div>
              <div>
                <ul className="-ml-14">
                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Recieve Quick Enquiries</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Sell any Products and Services in seconds</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Repair and Maintenance</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Connect and Collaborate with Businesses</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Unlimited Categories</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Worldwide Listing</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Raise a Request and Hire a Professional</span>
                  </li>

                  <li className="flex ">
                    <span className="material-symbols-outlined p-1 text-neutral-400">
                      album
                    </span>
                    <span className="text-lg ">Earn from Shaukeens</span>
                  </li>
                </ul>
                <button className="w-96 h-12 rounded-full bg-orange-500 text-neutral-100 font-bold text-lg">Submit Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
