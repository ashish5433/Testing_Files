import React from 'react'
import classes from "../../../../styles/DashboardAgent.module.css";
import Image from 'next/image';

export default function Listingcard() {
  return (
    <div>
        <div className={`rounded-xl overflow-hidden hover:scale-110 hover:mx-5 hover:transition hover:duration-500 hover:shadow-lg ${classes.agent_product}`}>
          <Image
            className={classes.agent_product_image}
            src="/carcarousel1.jpg"
            width={500}
            height={500}
          />
          <div className={classes.agent_product_detail}>
            <div>
              <span>200 HP</span>
              <span> | </span>
              <span>2019</span>
              <span> | </span>
              <span>Automatic</span>
              <span> | </span>
              <span>Diesel</span>
              <p>Product Brand</p>
              <h5>Product Name</h5>
            </div>
            <div className={classes.inner_agent_product_detail}>
              <span>EUR</span>
              <span>USD</span>
              <span>INR</span>
              <h5>$ 500,000,000</h5>
            </div>
          </div>
          <hr className={classes.agent_product_detail_hr} />
          <div className={classes.agent_product_detail_lower}>
            <p>Recieved From Affiliate Agents</p>
            <div className={classes.logos2}>
              <div className="items-center text-center">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-person-badge"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                </svg>
                <p>29k</p>
                <p>Views</p>
              </div>
              <div className="items-center text-center">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <p>30k</p>
                <p>Visit</p>
              </div>
              <div className="items-center text-center">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p>3k</p>
                <p>Call</p>
              </div>

              <div className="items-center text-center">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-chat-left-dots-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <p>4k</p>
                <p>Chat</p>
              </div>

              <div className="items-center text-center">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-broadcast"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
                <p>91</p>
                <p>Live view</p>
              </div>

              <div className="items-center text-center">
                <svg
                  className="m-auto "
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="indigo"
                  class="bi bi-person-workspace"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                </svg>
                <p>23k</p>
                <p>Appointment</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
