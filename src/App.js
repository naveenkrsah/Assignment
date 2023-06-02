import { TfiLinkedin } from "react-icons/tfi";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsGlobe2 } from "react-icons/bs";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full h-screen">
        <div className="bg-black bg-[url()] text-white firstdiv rounded-xl">
          <div className="first"></div>
          <div className="uptime flex flex-col space-y-">
            <h1>
              100% Uptime😎
            </h1><h1 className="text-[#BFBFBF] text-[28px] items-left p-0 m-0">Zero Infrastructure</h1>
            <h1 className="text-[#BFBFBF] text-[28px] ">Management</h1>
            
          </div>
          <a href="#" className="link text-zinc-400">
            <BsGlobe2 className="symbol"/> aesthisia.com
          </a>
          <div className="socialLinks">
            <TfiLinkedin color={"white"} />
            <ImFacebook color="white" />
            <BsInstagram color="white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="flex welcome-text">
          <h1 className="text-[#020100]">Welcome</h1>
          <h1 className="text-[#08A593]">Back!</h1>
        </span>
        <h1 className="again">Glad to see you, Again!</h1>
        <input
          type="email"
          name=""
          id=""
          className="px-4 input border border-[#464660] rounded-lg"
          placeholder="Enter your name"
        />
        <input
          type="password"
          name=""
          id=""
          className="px-4 input2 border border-[#464660] rounded-lg"
          placeholder="Enter your password"
        />
        <a className="fpsw">Forgot password?</a>
        <button className="login text-white">Log in</button>
        <span className="signUp flex">
          <h3 className="text-[#667085]">Don't have an account yet? </h3>
          <h3 className="text-[#08A593]">Sign Up</h3>
        </span>
      </div>
    </div>
  );
}

export default App;
