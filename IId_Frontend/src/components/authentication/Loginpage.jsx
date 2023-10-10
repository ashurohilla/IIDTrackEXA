import { useState } from "react";
import AuthApi from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import FixedPlugin from "../fixedPlugin/FixedPlugin";
import InputField from "../fields/InputField";
import { Link } from "react-router-dom";
import loginImage from "../../assets/img/login.png";
function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");

  const login = async (event) => {
    console.log(email, password);
    if (event) {
      event.preventDefault();
    }
    // if (email === "") {
    //   return setError("You must enter your email.");
    // }
    // if (password === "") {
    //   return setError("You must enter your password");
    // }
    setButtonText("Signing in");

    try {
      let response = await AuthApi.Login({
        email,
        password,
        
      });
    
      if (response.data ===200) {
        return setError("login succesfull");
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
    return navigate("/admin/*");
  };

  return (
    <div className="px-16 h-screen  md:pt-8 ss:py-4 ss:px-6 bg-lightPrimary dark:!bg-navy-900 ">

    <div className=" grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-2 pt-8 grid-flow-col h-full gap-4 m-8">
     {/* Sign in section */}
      
     <img src={loginImage} alt="my-gif" className= "w-[400px] justify-center rounded-[30px] mr-10 border-White-100  border-2" />

    <div className="flex flex-col  absolute right-0 w-full md:block lg:w-[50vw] 2xl:w-[45vw] md:px-10 lg:px-20 justify-center rounded-[30px] mt-10 mr-10 ">

      {/* <div className=" flex flex-col md:px-10 lg:px-20  justify-center rounded-[30px] m-8 mt-2"> */}

      <div className=" flex flex-col md:px-10 lg:px-20  justify-center bg-White-100 rounded-[30px] m-8 mt-2">

        <h4 className="mb-2.5 text-xl md:text-4xl font-bold text-darkBlue-500 dark:text-white">
        👋 Login here
        </h4>
        {/* <p className="md:mb-9 md:ml-1 text-base text-darkBlue-500 dark:text-darktext">
          Enter your email and password to login
        </p> */}

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
              placeholder="mail@simmmple.com"
              id="Email"
              type="email"
              className="font-bold text-lightBlue "
              value={email}
            />
         
          <br />
         <InputField
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
              autoComplete="passoword"
              name="password"
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="mail@simmmple.com"
              id="password"
              type="password"
              value={password}
            />
          {/* Checkbox */}
          <button
              type="Submit"
              onClick={login}
              className="linear mt-2 w-full rounded-xl bg-lightBlue py-[12px] text-base  text-lightPrimary transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white  font-bold dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {buttonText}
            </button>
        </form>

        <h1 className="text-red-700 font-bold">{error}</h1>

        <div className="mt-4 mb-4">
          <span className=" text-sm text-darkBlue-500 font-bold dark:text-white">
            Not a Member ?
          </span>

          <Link
            className=" flex float-right ml-1 text-sm font-bold text-lightBlue-500 hover:text-brand-600 dark:text-white mb-4"
            to="/register"
          >
            Register here
          </Link>
        </div>
      </div>
     
 <FixedPlugin />
</div>
    </div>
  </div>
  );
}

export default Loginpage;
