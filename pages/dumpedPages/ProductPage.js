import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProgressBar from "react-progressbar-on-scroll";
import CarouselPage from "../components/Carousel";
import Filter from "../components/Filter/filter";

export default function Product() {
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);

  const handleChange = () => {
    if (window.scrollY >= 0 && window.scrollY < 300) {
      setColor1(true);
    } else setColor1(false);
    if (window.scrollY > 300 && window.scrollY < 600) {
      setColor2(true);
    } else setColor2(false);
    if (window.scrollY > 600 && window.scrollY < 1300) {
      setColor3(true);
    } else setColor3(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
  });
  const [photo, setPhoto] = useState("/real_estate.jpg");

  const changePhoto = (newsrc) => {
    setPhoto(newsrc);
  };

  return (
    <>
      <div className="product_page">
        <div className="nav22 ">
          <ul>
            <li className={color1 ? "li1 " : "li2"}>Overview</li>
            <li className={color2 ? "li1 " : "li2"}>Description</li>
            <li className={color3 ? "li1 " : "li2"}>Parameters</li>

            <li className="li2">Review</li>
            <li className="li2">Similar Products</li>
          </ul>
        </div>
          <div>
            <div className="progressbar">
              <ProgressBar position="bottom" height={10} color="black" />
            </div>

            <div className="card22 rounded-lg">
              <div className="main_card">
                <Image
                  className="main-image s"
                  src={photo}
                  width={1920}
                  height={1080}
                />
                <div className="flex  flex-row -mt-[520px]">
                  <div className="mx-2 px-3 py-1 rounded-lg bg-white text-black  ">
                    <button>First</button>
                  </div>
                  <div className="mx-2 px-3 py-1 rounded-lg bg-white text-black  ">
                    <button>Second</button>
                  </div>
                  <div className="mx-2 px-3 py-1 rounded-lg bg-white text-black  ">
                    <button>Third</button>
                  </div>
                  <div className="mx-2 px-3 py-1 rounded-lg bg-white text-black  ">
                    <button>Fourth</button>
                  </div>
                </div>
              </div>
              <div className="side_card">
                <h5 className="text-slate-900">Related Images :</h5>
                <div className="side_card1 border-2">
                  <Image
                    onClick={() => changePhoto("/real_estate.jpg")}
                    className="side-images"
                    src="/real_estate.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="side_card1 border-2">
                  <Image
                    onClick={() => changePhoto("/in_estate.jpg")}
                    className="side-images"
                    src="/in_estate.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="side_card1 border-2">
                  <Image
                    onClick={() => changePhoto("/in_estate_3.jpg")}
                    className="side-images"
                    src="/in_estate_3.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="side_card1 border-2">
                  <Image
                    onClick={() => changePhoto("/in_estate_2.jpg")}
                    className="side-images"
                    src="/in_estate_2.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>

            <div className="description">
              <div className="flex flex-row">
                <div>
                  <h1 className="text-slate-900">Description</h1>
                </div>
                <div
                  style={{ marginLeft: "60%" }}
                  className="seller flex flex-row "
                >
                  <div>
                    <span className="material-symbols-outlined m1 seller_photo shadow">
                      person
                    </span>
                  </div>
                  <div>
                    <h4>Raunak</h4>
                  </div>
                </div>
              </div>

              <hr />
              <div className="desc_details">
                <div className="desc_details1 dd1 ">
                  <h2 className="mb-8">Product Details:</h2>
                  <h5>Product: Real Estate</h5>
                  <h5>Price: $133,434,679</h5>
                  <div className="flex flex-row">
                    <div>
                      <h5>Location: </h5>
                    </div>
                    <div className="price -mt-3">
                      <span class="material-symbols-outlined loc1 ml-2 rounded-2xl">
                        location_on
                      </span>
                      <h4>Kolkata</h4>
                    </div>
                  </div>
                </div>
                <div className="desc_details1 dd2"></div>
                <div className="desc_details1 dd3">
                  <h4>Contact Information</h4>
                  <div className="flex flex-row">
                    <div className="">
                      <svg
                        className="mr-2 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="Green"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </div>
                    <div>
                      <button>Call </button>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="">
                      <svg
                        className="mr-2 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="Green"
                        class="bi bi-chat-square-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </div>
                    <div>
                      <button>Message </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parameters-main">
              <h1>Parameters</h1>
              <hr />
              <div className="parameters">
                <div>No of Rooms :7 </div>
                <div>
                  <button>View Rooms</button>
                </div>
                <div>Location :Urban </div>
                <div>Area : 3400sq.ft </div>
              </div>
            </div>
            <div className="similar_products-main-div">
              <h1>Similar Products</h1>
              <hr />
              <div className="similar_products">
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_4.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    className="similar_products_image"
                    src="/product_1.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    className="similar_products_image"
                    src="/product_2.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    className="similar_products_image"
                    src="/product_3.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    className="similar_products_image"
                    src="/product_5.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_5.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_1.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_3.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_2.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    className="similar_products_image"
                    src="/product_4.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
