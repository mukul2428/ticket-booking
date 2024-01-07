"use client";

const Footer = () => {
  return (
    <>
      <div className="w-screen flex justify-center items-center relative">
        <img
          src="/CrowedImage.png"
          className="w-full h-auto"
          alt="Home Page Image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-90"></div>
        <div className="absolute z-10 bg-white rounded-lg">
          <div className="flex flex-col m-2 p-4 justify-center items-center">
            <h2 className="text-2xl text-orange-600 font-bold">
              Subscribe to us!
            </h2>
            <div className="text-blue-900 font-semibold">
              Leave your e-mail address to be instantly informed about the
              events you are interested in
            </div>
            <div className="flex flex-row m-2 p-2">
              <input
                type="text"
                className="common-input"
                placeholder="What type of event are you interested in?"
              />
              <input
                type="text"
                className="common-input ml-2"
                placeholder="Email Address"
              />
              <button className="ml-2 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
