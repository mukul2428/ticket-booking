import Header from "./ui/header";
import Login from "./ui/login";
export default function Home() {
  return (
    <>
      <Header />
      <Login />
      <div>
        <img
          src="/CrowedImage.png"
          className="w-screen"
          alt="Home Page Image"
        />
      </div>
      <div className="text-black flex justify-center items-center">
        Buy and sell tickets for thousands of events!
      </div>
    </>
  );
}
