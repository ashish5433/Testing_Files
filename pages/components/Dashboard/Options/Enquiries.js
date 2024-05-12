import React from "react";
import calender from "../../../../images/calender.png";
import Image from "next/image";
import profilepic from "../../../../images/profilepic.png";

export default function Enquiries() {
  const listEnquiries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className="flex flex-col">
        <span className="bg-indigo-300 px-2   rounded-md text-2xl font-sans font-bold">
          <div className="mt-3 text-neutral-800 border-r-4 px-3 border-neutral-200 w-40">
            Enquiries
          </div>
          <span className="flex justify-end relative -mt-12 px-3">
            <div className="px-2 py-2">
              <Image
                className="rounded-full border-4  border-rose-600"
                src={calender}
                width={50}
                height={50}
                alt="calender"
              />
            </div>
          </span>
        </span>

        <span className="w-full mt-20 flex flex-row flex-wrap justify-center ">
          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <h5>Visit</h5>
            <h6>22</h6>
          </div>
          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <h5>Call</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-chat-left-dots-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <h5>Chat</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-broadcast"
              viewBox="0 0 16 16"
            >
              <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
            <h5>Live View</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto "
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-person-workspace"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
            </svg>
            <h5>Appointment</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-basket-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg>
            <h5>Orders</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-tools"
              viewBox="0 0 16 16"
            >
              <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
            </svg>
            <h5>Repairs</h5>
            <h6>22</h6>
          </div>

          <div className=" text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            <h5>Maintenance</h5>
            <h6>22</h6>
          </div>

          <div className="items-center text-center bg-slate-200 px-[2.5%] rounded-full py-2 m-1">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="indigo"
              class="bi bi-person-badge"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
            </svg>
            <h5>Hire</h5>
            <h6>22</h6>
          </div>
        </span>

        <hr />
        <div className="grid md:grid-row-1 md:grid-cols-2 gap-2">
          <div className="px-2 grid-rows-2 grid-cols-1 border-2 rounded-lg border-gray-300 p-3 ">
            <div className="static">
              <div className="flex flex-wrap  ">
                <span className="px-2 font-mono font-bold text-lg pointer border-r-2 border-black ">
                  All
                </span>
                <span className="px-2 font-mono font-bold text-lg pointer border-r-2 border-black ">
                  Customers
                </span>
                <span className="px-2 font-mono font-bold text-lg pointer border-r-2 border-black ">
                  Agent
                </span>
                <span className="px-2 font-mono font-bold text-lg pointer border-r-2 border-black ">
                  Partner
                </span>
                <span className="px-2 font-mono font-bold text-lg pointer ">
                  Support
                </span>
              </div>
              <hr />
            </div>
            <div className="h-[320px] overflow-y-scroll">
              {listEnquiries.map(() => {
                return (
                  <>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex m-2 mx-3">
                        <div>
                          <span>
                            <svg
                              className="m-auto"
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="indigo"
                              class="bi bi-geo-alt-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                          </span>
                          <span className="flex flex-col">
                            <span className="font-semibold">ANONYMOUS</span>
                            <span>Country, Region</span>
                          </span>
                        </div>
                      </div>
                      <div className="py-2 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quia vel cupiditate doloribus ullam repellat,
                        quas, sequi adipisci sint omnis ratione voluptatibus.
                      </div>
                      <div className="flex flex-col mx-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span className="text-sm">3:53 Am</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="px-2 grid-rows-2 grid-cols-1 border-2 rounded-lg border-gray-300 p-3 ">
            <div className="static">
              <div className="flex flex-wrap ">
                <div className="flex  flex-row">
                  <div className="flex flex-col  mx-3">
                    <span className="m-auto">
                      <Image src={profilepic} width={50} height={50} />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-semibold">ANONYMOUS</span>
                      <span className="text-sm">Country, Region</span>
                    </span>
                  </div>
                  <div className="flex flex-col mx-2 ">
                    <span className="ml-[22vw]">
                      <svg
                        className="m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="indigo"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </span>
                    <span className="text-sm w-14 ml-[22vw]  font-bold">
                      Request A Visit
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="h-[180px] overflow-y-scroll "></div>
            <hr />
            <div className="h-[50px] flex flex-row absolute">
              <span className="w-[110%]">
                <input
                  placeholder="Type a message ..."
                  type="text"
                  className=" border-2 px-2 border-gray-300 shadow-md rounded-lg h-14"
                />
              </span>
              <span className="material-symbols-outlined px-2  md:px-3 rounded-lg mx-1 border-2 border-violet-600 bg-rose-100 ">
                send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
