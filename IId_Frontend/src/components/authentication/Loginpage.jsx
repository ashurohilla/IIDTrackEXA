import { useState } from "react";
import AuthApi from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import FixedPlugin from "../fixedPlugin/FixedPlugin";
import InputField from "../fields/InputField";
import { Link } from "react-router-dom";
import mygif from '../../assets/loginPage.gif';

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    setButtonText("Signing in");
    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      console.log(response);
      if (response.data && response.status === true) {
        return setError(response.data.msg);
      }
      console.log(response);
      return setProfile(response);
      
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const setProfile = async (response) => {
    var token = response.data.access;
    var decode = jwtDecode(token);
    let id = decode.user_id;
    let name = decode.name;
    console.log(name);
    localStorage.setItem("user",name)
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    return navigate("/dashboard");
  };

  return (
 

<div className=" px-16 h-screen  md:pt-8 ss:py-4 ss:px-6 bg-lightPrimary dark:!bg-navy-900 ">

<div className="  grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-2 pt-8  grid-flow-col h-full gap-4 ">
 {/* Sign in section */}
 
 <div className=" flex flex-col md:px-14 lg:px-20  justify-center text-darkBlue-500 ">
    <h4 className="mb-2.5 text-xl md:text-4xl font-bold text-darkBlue-500 dark:text-darktext">
      👋 Login here
    </h4>
    <p className="md:mb-9 md:ml-1 text-base text-darkBlue-500 dark:text-White-100">
      Enter your email and password to Login
    </p>

    {/* Email */}
    <form method="submit">
    <InputField
            onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }}
            autoComplete="mail"
            name="email"
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simple.com"
            id="Email"
            type="email"
            value={email}
          />
     
      <InputField
            onChange={(event) => {
            setPassword(event.target.value);
            setError(undefined);
          }}
            autoComplete="password"
            name="password"
            variant="auth"
            extra="mb-3 "
            label="Password*"
            placeholder="password"
            id="password"
            type="password"
            value={password}
            style="bd-darkBlue-500"
          />

      {/* Checkbox */}
      <button
            type="Submit"
            onClick={login}
            className="linear mt-2 w-full rounded-xl bg-lightBlue-500 py-[12px] text-base font-medium text-lightPrimary transition duration-200 hover:bg-lightBlue-500 active:bg-lightBlue-500 dark:bg-lightBlue-500 dark:text-white dark:hover:bg-lightBlue-500 dark:active:bg-brand-200"
          >
            {buttonText}
          </button>
    </form>

    <h1 className="text-red-700 dark:text-White-100">{error}</h1>

    <div className="mt-4 mb-4">
          <span className=" text-sm font-medium text-darkBlue-500 dark:text-darktext">
            Not a Member ?
          </span>

          <Link
            className=" flex float-right ml-1 text-sm font-medium text-lightBlue-500 hover:text-brand-600 dark:text-darktext mb-4"
            to="/register"
          >
            Register here
          </Link>
        </div>
  </div>
  
  <div className="flex  mr-10 absolute right-5 sm:hidden ss:hidden  w-full md:block lg:w-[45vw] 2xl:w-[44vw] mt-10">
  <img src={mygif} alt="my-gif" className= "w-[1000px] justify-center rounded-[30px] mr-10 border-White-100 border border-2" />
<FixedPlugin />
</div>
</div>
</div>
);
}
export default Loginpage;
