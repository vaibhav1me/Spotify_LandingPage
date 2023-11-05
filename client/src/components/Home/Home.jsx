import { LeftArrow, RightArrow } from "../../assets";
import BottomNav from "../BottomNavigation/BottomNav";
import HomeCard from "./HomeCard";
import { HomeData } from "./assets/data";

const Home = () => {
  return (
    <div className="bg-[#121212] h-[100%] rounded-lg ">
      <div className="flex items-center justify-between bg-[#00000080] homeTop px-[1rem] py-[1.3rem] w-[100%]">
        <div className="flex">
          <button className="mr-[1.5rem] mainTopArrow">
            <img className="h-[1.5rem]" src={LeftArrow} alt="" />
          </button>
          <button className="mr-[1.5rem] mainTopArrow">
            <img className="h-[1.5rem]" src={RightArrow} alt="" />
          </button>
        </div>

        <div className="flex">
          <button className="text-[#A7A7A7] px-[1.5rem] py-[.5rem] rounded-3xl font-semibold  loginButton">
            Sign Up
          </button>
          <button className="bg-white font-semibold text-black px-[1.5rem] py-[.5rem] rounded-3xl loginButton">
            Login
          </button>
        </div>
      </div>

      <div
        id="HomePage_main"
        className="p-[1rem] max-h-[87%] pt-[3rem] overflow-y-scroll"
      >
        <h1 className="py-[1rem] text-[1.2rem] font-bold">Spotify Playlists</h1>
        <div className="homeData flex flex-wrap mb-[4rem] justify-start">
          {HomeData.map((card) => {
            const { img, title, desc } = card;
            return <HomeCard img={img} title={title} desc={desc} />;
          })}
        </div>

        <div>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
