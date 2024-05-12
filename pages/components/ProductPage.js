import Link from "next/link";
import classes from "../../styles/ProductPage.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import bike from "../../public/yachtcarousel1.jpg";
import Navbar2 from "./navbar2";
import ProductCard from "./ProductCards";
import yachtCarousel from "@/CarouselImageData/yachtCarousel";

export default function ProductPage() {
  return (
    <>
      <div className={`fixed w-full -mt-14 ${classes.navfix}`}>
        <Navbar2 />
      </div>

      <div>
        <div className={`mt-14 ${classes.main_info_div}`}>
          <div className={classes.name_and_like}>
            <div className={classes.name}>
              <div className={classes.product_name}>
                <h1>PRODUCT NAME</h1>
              </div>
              <div className={classes.brand_name}>
                <h3>BRAND NAME</h3>
              </div>
            </div>
            <div className={classes.likenshare}>
              <div className={classes.share}>
                <Image
                  className={classes.icons}
                  src="/share_4.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={classes.like}>
                <Image
                  className={classes.icons}
                  src="/share_4.png"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className={classes.product_image_and_agentinfo}>
            <div className={classes.product_image}>
              {/* <Image
                className={classes.product_images}
                src="/yachtcarousel2.jpg"
                width={}
                height={100}
              /> */}
            </div>
            {/* <div className={classes.agentinfo}>
              <div className={classes.agent_backimg}>
                <Image
                  className={classes.product_images_fit}
                  src="/atvcarousel6.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={classes.agent_img}>
                <Image
                  className={classes.product_images_fit}
                  src="/profilepic.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={classes.agent_details}>
                <h4>Listed By : </h4>
                <h2>Agent Name</h2>
              </div>
            </div> */}
          </div>
          <div className={classes.price_contact_buynow}>
            <div className={classes.price}>
              <div className={classes.curr}>
                <h3 className="text-xl font-mono">In USD</h3>
              </div>
              <div className={classes.money}>
                <h2 className="text-indigo-800">$ 500,000,000</h2>
              </div>
              <div className={classes.next_curr}>
                <Link href="#" className={classes.links}>
                  <h3 className="text-sm">EUR</h3>
                </Link>
                <Link href="#" className={classes.links}>
                  <h3 className="text-sm">USD</h3>
                </Link>
                <Link href="#" className={classes.links}>
                  <h3 className="text-sm">IND</h3>
                </Link>
              </div>
            </div>
            <div className={classes.contact}>
              <button>
                <Image
                  className={classes.icons}
                  src="/map_1.png"
                  width={64}
                  height={64}
                />
                <p>VISIT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/call_2.png"
                  width={64}
                  height={64}
                />
                <p>CALL</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/chat_1.png"
                  width={64}
                  height={64}
                />
                <p>CHAT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/liveview_2.png"
                  width={64}
                  height={64}
                />
                <p>LIVE VIEW</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/bookavisit_2.png"
                  width={64}
                  height={64}
                />
                <p>BOOK A VISIT</p>
              </button>
            </div>
            <div className={classes.buynow}>
              <div className={classes.buy_btn}>
                <button>BUY NOW</button>
                <div>
                  <p>Delivery in 15 day.</p>
                </div>
              </div>
              <div className={classes.cart_btn}>
                <button>
                  <Image
                    className={classes.icons}
                    src="/cart_2.png"
                    width={64}
                    height={64}
                  />
                  <p>Add To Cart</p>
                </button>
                <button>Add To Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div}>
          <div className={`-mt-5 flex ${classes.sssss}`}>
            <div className="mr-10">
              <div className={classes.ideation}>
                <h3>Design Thinking Ideation</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  ex quaerat vitae alias expedita a similique, quos tempora
                  maxime deserunt.
                </p>
              </div>
              <div className={classes.specifications}>
                <h3 className="mt-3">General Specifications</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Accomodations</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Amenities</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Tender and Toys</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Interior</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Exterior</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
                <h3 className="mt-3">Engine</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className={classes.top0}></div>
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-[50%]">
                  <div className={classes.gallery0}></div>
                  <div className={classes.gallery0}></div>
                </div>
                <div className="flex flex-row w-[46%]">
                  <div className={classes.gallery1}></div>
                  <div className={classes.gallery1}></div>
                </div>
              </div>

              <div className="flex flex-row w-full">
                <div className={classes.gallery2}></div>
                <div className="flex flex-col w-[50%]">
                  <div className={classes.gallery3}></div>
                  <div className="flex flex-row w-[92%]">
                    <div className={classes.gallery1}></div>
                    <div className={classes.gallery1}></div>
                  </div>
                  <div className={classes.gallery4}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.about}>
          <div className={classes.about_product}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              error distinctio accusamus enim vitae maxime repellendus totam
              aliquam, recusandae possimus, vero sit dolorem perspiciatis sunt
              voluptas nesciunt dicta quos quasi quas dolorum! Aliquid facere
              dolor in sapiente optio excepturi autem, perspiciatis rerum
              impedit. Asperiores, consequatur perferendis. Quam a id eius.
              Repellat porro aliquam culpa amet placeat dignissimos, debitis
              aut, labore dolorum quae aperiam quasi reprehenderit molestias
              tempora assumenda! Quibusdam maiores tempore fuga sed cum nesciunt
              sint fugit magni praesentium vel excepturi id odio quasi,
              accusantium non commodi minus, necessitatibus omnis adipisci dolor
              ex modi exercitationem. Deserunt voluptas architecto maxime, iure
              ullam explicabo corporis sapiente temporibus expedita saepe
              repellendus eaque hic ab, unde tempora officia eligendi vel
              perspiciatis. Est facilis rem voluptatum blanditiis perferendis?
              Recusandae minus beatae fugit officiis, provident cum numquam
              nesciunt nemo incidunt accusantium aliquid laboriosam illo
              voluptates quis quod hic repellendus quia enim nobis quaerat
              dolorem. Sed, fugiat dolores magni nobis illum quas eius? Dicta
              tempore sequi nihil! Corporis ipsa consequuntur pariatur error vel
              soluta laborum, atque aperiam doloribus, nobis culpa maxime, quas
              sint nihil magnam. Tenetur impedit et amet, accusantium ullam
              nulla eos commodi neque hic? Eligendi esse eius explicabo
              blanditiis illum ab optio, natus doloribus! Deserunt!
            </p>
          </div>
          <div className={classes.about_agent}>
            <div className={classes.about_agent_backimg}>
              <Image
                className={classes.product_images_fit}
                src="/atvcarousel6.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.about_agent_img}>
              <Image
                className={classes.product_images_fit}
                src="/profilepic.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.about_agent_details}>
              <h4>Listed By : </h4>
              <h1>Agent Name</h1>
              <h4>Direct Owner/ Broker at Sunseeker</h4>
              <div className="flex">
                <div>
                  <ul>
                    <li>
                      <div className="flex">
                        <span className="material-symbols-outlined scale-150">
                          location_on
                        </span>
                        <span>
                          <h5 className="mt-3">Chennai</h5>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <span className="material-symbols-outlined scale-150">
                          location_on
                        </span>
                        <span>
                          <h5 className="mt-3">24 Listings</h5>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <span className="material-symbols-outlined scale-150">
                          location_on
                        </span>
                        <span>
                          <h5 className="mt-3">15 Sold</h5>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <span className="material-symbols-outlined scale-150">
                          location_on
                        </span>
                        <span>
                          <h5 className="mt-3">Broker/Owner</h5>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <span className="material-symbols-outlined scale-150">
                          location_on
                        </span>
                        <span>
                          <h5 className="mt-3">19 Reviews</h5>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className={classes.company0}></div>
                  <h3 className="ml-10 font-bold">Company</h3>
                  <h4 className="ml-10 -mt-3">Direct Owner/ Broker</h4>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="justify-between">
                  <button className="m-3">
                    <Image
                      className={classes.icons}
                      src="/call_2.png"
                      width={64}
                      height={64}
                    />
                    <p>CALL</p>
                  </button>
                  <button className="m-3">
                    <Image
                      className={classes.icons}
                      src="/chat_1.png"
                      width={64}
                      height={64}
                    />
                    <p>CHAT</p>
                  </button>
                  <button className="m-3">
                    <Image
                      className={classes.icons}
                      src="/bookavisit_2.png"
                      width={64}
                      height={64}
                    />
                    <p>BOOK A VISIT</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.lower_cart}>
          <div className={classes.price_contact_buynow}>
            <div className={classes.price}>
              <div className={classes.money_det}>
                <h5>Brand Name</h5>
                <h3>Product Name</h3>
                <h1>$ 500,000,000</h1>
              </div>
            </div>
            <div className={classes.contact}>
              <button>
                <Image
                  className={classes.icons}
                  src="/map_1.png"
                  width={64}
                  height={64}
                />
                <p>VISIT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/call_2.png"
                  width={64}
                  height={64}
                />
                <p>CALL</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/chat_1.png"
                  width={64}
                  height={64}
                />
                <p>CHAT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/liveview_2.png"
                  width={64}
                  height={64}
                />
                <p>LIVE VIEW</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/bookavisit_2.png"
                  width={64}
                  height={64}
                />
                <p>BOOK A VISIT</p>
              </button>
            </div>
            <div className={classes.buynow}>
              <div className={classes.buy_btn}>
                <button>BUY NOW</button>
                <div>
                  <p>Delivery in 15 day.</p>
                </div>
              </div>
              <div className={classes.cart_btn}>
                <button>
                  <Image
                    className={classes.icons}
                    src="/cart_2.png"
                    width={64}
                    height={64}
                  />
                  <p>Add To Cart</p>
                </button>
                <button>Add To Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-10">
            <h3>More from Seller</h3>
            <ProductCard products={yachtCarousel} view={true} />
            <h3 className="-mt-10">Similiar Listings</h3>
            <ProductCard products={yachtCarousel} view={true} />
          </div>
          <div className="mt-full">
          <div className=" flex justify-end "><div className="m-3 w-20 h-20 p-3 bg-teal-700 rounded-full pointer"><span style={{scale:"2", padding:"10px",color:"white"}} className="material-symbols-outlined">
support_agent
</span></div></div>
            <div className="w-full h-14 bg-indigo-950 flex justify-center">
              <div  className="flex space-x-6 dec mt-3">
                <span><Link style={{textDecoration:"none", color:"white"}} href={"#"}>About Us</Link></span>
                <span><Link style={{textDecoration:"none", color:"white"}} href={"#"}>Contact</Link></span>
                <span><Link style={{textDecoration:"none", color:"white"}} href={"#"}>Career at Shawkeen</Link></span>
                <span><Link style={{textDecoration:"none", color:"white"}} href={"#"}>Become Partners</Link></span>
                <span><Link style={{textDecoration:"none", color:"pink"}} href={"#"}>Invest in Shaukeens</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
