import classes from "./AgentProfile.module.css";
import Image from "next/image";

export default function AgentProfile() {
  return (
    <div>
      <div className={classes.first}>
        <div className={classes.bg_image}>
          <Image
            className={classes.big_image}
            src="/yachtcarousel4.jpg"
            width={800}
            height={800}
          />
          <div className={classes.overlay}></div>
          <div className={classes.dash}>
            <div className={classes.details}>
              <div>
                <h2>Location</h2>
                <p>Chennai</p>
              </div>
              <h1>|</h1>
              <div>
                <h2>Ownership</h2>
                <p>Direct Owner</p>
              </div>
              <h1>|</h1>
              <div>
                <h2>Listings</h2>
                <p>7</p>
              </div>
            </div>
            <div className={classes.details2}>
              <div>
                <h2>Membership</h2>
                <p>Gold</p>
              </div>

              <h1>|</h1>
              <div>
                <h2>Sold</h2>
                <p>5</p>
              </div>
              <h1>|</h1>

              <div>
                <h2>Reviews</h2>
                <p>19</p>
              </div>
            </div>
            <div className={classes.functions}>
              <div>
                <Image
                  className={classes.icons2}
                  src="/location-svgrepo-com.svg"
                  width={30}
                  height={30}
                />
                <p>visit</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/call-phone-heart-svgrepo-com.svg"
                  width={30}
                  height={30}
                />
                <p>call</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/chat-svgrepo-com.svg"
                  width={30}
                  height={30}
                />
                <p>chat</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/live-svgrepo-com.svg"
                  width={30}
                  height={30}
                />
                <p>live view</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                  width={30}
                  height={30}
                />
                <p>meet</p>
              </div>
            </div>
            <div className={classes.imgnname}>
              <Image
                className={`${classes.icons}`}
                src="/profilepic.jpg"
                width={150}
                height={150}
              />
              <Image
                className={`${classes.icons_mem}`}
                src="/diamond_1.png"
                width={50}
                height={50}
              />
              <h4>Admin Name</h4>
            </div>
          </div>
        </div>
        <div className={classes.height_adjuster}>
          <div className={classes.border_adjuster}></div>
        </div>
        <div className={classes.grid_container}>
          <div className={classes.item1}>
            <h1>Reviews</h1>
            <ul className={classes.ull}>
              <li>Yacht</li>
              <li>Yacalckht</li>
              <li>Yaacacht</li>
              <li>Yacqwqht</li>
              <li>Yacvkht</li>
            </ul>
          </div>
          <div className={classes.items}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              labore doloribus quod sequi. Fuga, autem maiores soluta, repellat
              quis eligendi expedita, nesciunt veritatis non a animi praesentium
              temporibus earum dicta.
            </p>
          </div>
          <div className={classes.items}>
            <h1>Past Listings</h1>
            <ul className={classes.ull}>
              <li>Yacht</li>
              <li>Yacalckht</li>
              <li>Yaacacht</li>
              <li>Yacqwqht</li>
              <li>Yacvkht</li>
            </ul>
          </div>
          <div className={classes.items}>
            <h1>Sold</h1>
            <ul className={classes.ull}>
              <li>Yacht</li>
              <li>Yacalckht</li>
              <li>Yaacacht</li>
              <li>Yacqwqht</li>
              <li>Yacvkht</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
