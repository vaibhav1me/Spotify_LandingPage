import { LeftArrow, RightArrow } from "../../assets";
import BottomNav from "../BottomNavigation/BottomNav";
import HomeCard from "./HomeCard";
import { HomeData } from "./assets/data";

const Home = () => {
  return (
    <div className="bg-[#121212] h-[100%] rounded-lg">
      <div className="flex items-center bg-[#00000080] px-[1rem] py-[1.3rem] w-[100%]">
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={LeftArrow} alt="" />
        </button>
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={RightArrow} alt="" />
        </button>

        <div className="absolute right-[1rem]">
          <button className="text-[#A7A7A7] px-[1.5rem] py-[.5rem] rounded-3xl font-semibold">
            Sign Up
          </button>
          <button className="bg-white font-semibold text-black px-[1.5rem] py-[.5rem] rounded-3xl">
            Login
          </button>
        </div>
      </div>

      <div
        id="HomePage_main"
        className="p-[1rem] max-h-[90%] pt-[3rem] overflow-y-scroll"
      >
        <h1 className="py-[1rem] text-[1.2rem] font-bold">Spotify Playlists</h1>
        <div className="flex flex-wrap mb-[4rem]">
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
