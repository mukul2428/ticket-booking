import googleIcon from "../../assets/images/google-icon.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import { useState } from "react";
const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleShowLogin = () => {
    setIsModalVisible(false);
  };
  if (!isModalVisible) return;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[400px]">
          <div className="bg-white rounded-md p-6 flex flex-col">
            <h1 className="text-lg font-bold">Log In</h1>
            <label className="text-sm font-bold mt-2">Email</label>
            <input
              className="mt-1 w-auto border-2 border-gray-300 rounded-lg h-10 p-4"
              placeholder="Your email address"
              type="text"
            />
            <label className="text-sm font-bold mt-4">Password</label>
            <input
              className="mt-1 w-auto border-2 border-gray-300 rounded-lg h-10 p-4"
              placeholder="Your Password"
              type="password"
            />
            <div className="flex flex-row mt-4">
              <input type="checkbox" />
              <label className="text-sm mx-2 text-gray-400">Remember me</label>
            </div>
            <button
              className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded-lg"
              onClick={handleShowLogin}
            >
              Log In
            </button>
            <div className="flex flex-row">
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
              <p className="text-sm my-1 mx-1 text-gray-300">Or log in with</p>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-32"></hr>
            </div>
            <div className="flex flex-row">
              <button className="w-full mx-1 mt-4 border border-gray-400 hover:bg-gray-400 hover:text-white text-black text-sm font-bold py-2 px-4 rounded-lg flex justify-center items-center">
                <img className="mx-1" src={facebookIcon}></img>Facebook
              </button>
              <button className="w-full mx-1 mt-4 border border-gray-400 hover:bg-gray-400 hover:text-white text-black text-sm font-bold py-2 px-4 rounded-lg flex justify-center items-center">
                <img className="mx-1" src={googleIcon}></img>Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
