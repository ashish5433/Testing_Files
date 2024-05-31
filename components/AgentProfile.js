import classes from "../../styles/AgentProfile.module.css";
import Image from "next/image";

export default function AgentProfile() {
  return (
    <>
      <div className={classes.images}>
        <div className={classes.bg_image_div}>
          <Image
            className={classes.bg_image}
            src="/yachtcarousel2.jpg"
            width={1000}
            height={200}
            alt="Cover Pic"
          />
          <div className={classes.membership_div}>
            <Image
              className={classes.membership_image}
              src="/diamond_1.png"
              width={80}
              height={80}
              alt="member badge"
            />
          </div>

          {/*<div className={classes.bg_overlay}></div>*/}
        </div>
        <div className={classes.profile_image_div}>
          <Image
            className={classes.profile_image}
            src="/profilepic.jpg"
            width={250}
            height={250}
            alt="Profile Image"
          />
          <div className={classes.Agent_details}>
            <h1>Agent Name </h1>
            <h3>@agent_id</h3>
            <h3>Broker / Owner</h3>
            <div>
              <span>0</span>
              <span>Followers</span>
              <span>|</span>
              <span>0</span>
              <span>Following</span>
            </div>
          </div>
          <div className={classes.Agent_socials}>
            <Image
              className={classes.social_image}
              src="/black_facebook.png"
              width={40}
              height={40}
              alt="Socials"
            />
            <Image
              className={classes.social_image}
              src="/black_twitter.png"
              width={40}
              height={40}
              alt="Socials"
            />
            <Image
              className={classes.social_image}
              src="/black_instagram.png"
              width={40}
              height={40}
              alt="Socials"
            />
          </div>
        </div>
      </div>
      <div className={classes.side_div}>
        <h2>Also From The Brand</h2>
        <div>
          <div className={classes.related_product_name}>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel1.jpg"
              width={250}
              height={150}
              alt="product"
            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>

          <div className={classes.related_product_name}>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel2.jpg"
              width={250}
              height={150} 
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
          <div className={classes.related_product_name}>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel3.jpg"
              width={250}
              height={150}
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
          <div className={classes.related_product_name}>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel4.jpg"
              width={250}
              height={150}
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.upper_second_div}>
        <h3>About.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam
          quaerat reprehenderit soluta corrupti aperiam in optio. Impedit,
          provident repellendus!
        </p>
        <div className={classes.user_related_images}>
          <div>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel5.jpg"
              width={250}
              height={150}
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
          <div>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel6.jpg"
              width={250}
              height={150}
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
          <div>
            <Image
              className={classes.product_related_image}
              src="/yachtcarousel7.jpg"
              width={250}
              height={150}
              alt="product"

            />
            <div>
              <div>
                <h3>$800,000,000</h3>
                <h5>Product Name</h5>
              </div>
              <button>view</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.second_div}>
        <h1>~ Chennai</h1>
        <h1>~ 24 Listings</h1>
        <h1>~ 15 Sold</h1>
        <h1>~ Broker / Owner</h1>
        <h1>~ 19 Reviews</h1>
      </div>
      <div className={classes.third_div}>
        <h1>My Orders</h1>

        <div>
          <h3>No Previous Orders.</h3>
        </div>
      </div>
      <div className={classes.third_div}>
        <h1>My Garage</h1>
        <div>
          <h3>No Items Found.</h3>
        </div>
      </div>
      <div className={classes.third_div}>
        <h1>My Reviews</h1>
        <div>
          <h3>No Reviews Found.</h3>
        </div>
      </div>
      <div className={classes.message_div}>
        <Image
          className={classes.message_image}
          src="/message.png"
          width={32}
          height={32}
          alt="Message Icon"

        />
      </div>
      <div className={classes.fourth_div}>
        <h1>My Wall</h1>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </>
  );
}
