import Image from "next/image";
import classes from "../../styles/Login.module.css";
import SignIn from "../../signs/signIn2";
import SignUp from "../../signs/signUp3";
export default function LoggingIn() {
  return (
      <div>
      <div className={classes.main_div}>
        <div className={classes.login_div}>
          <SignIn />
        </div>
        <div className={classes.signup_div}>
          <SignUp />
        </div>
        <div className={classes.assistance_btn}>
          <Image
            className={`${classes.assist_icon}`}
            src="/profile.png"
            width={50}
            height={50}
          />
          <p>Seek Assistance For Account Creation</p>
        </div>
      </div>
    </div>
  );
}
