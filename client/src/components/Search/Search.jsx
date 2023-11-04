import React from "react";
import { LeftArrow, Search, RightArrow } from "../../assets/index";
import { SearchData } from "./assets/data";
import Card from "./Card";
import BottomNav from "../BottomNavigation/BottomNav";


const SearchPage = () => {
  return (
    <div className="bg-[#121212] h-[100%] rounded-lg">
      <div className="flex items-center bg-[#00000080] px-[1rem] py-[.5rem] w-[100%]">
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={LeftArrow} alt="" />
        </button>
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={RightArrow} alt="" />
        </button>
        <div className="relative">
          <input
            type="text"
            className="bg-[#242424] px-[2rem] py-[.8rem] rounded-3xl outline-white min-w-[5rem] w-[20vw]"
            placeholder="What do you want to listen to?"
          />
          <img
            className="h-[1.2rem] absolute top-[1rem] left-2"
            src={Search}
            alt=""
          />
        </div>

        <div className="absolute right-[1rem]">
          <button className="text-[#A7A7A7] px-[1.5rem] py-[.5rem] rounded-3xl font-semibold">
            Sign Up
          </button>
          <button className="bg-white font-semibold text-black px-[1.5rem] py-[.5rem] rounded-3xl">
            Login
          </button>
        </div>
      </div>

      <div id="SearchPage_main" className="p-[1rem] max-h-[90%] pt-[3rem] overflow-y-scroll">
        <h1 className="py-[1rem] text-[1.2rem] font-bold">Browse All</h1>
        <div className="flex flex-wrap mb-[4rem] justify-evenly">
          {SearchData.map((card) => {
            const { img, title, bg_color } = card;
            return <Card img={img} title={title} bg_color={bg_color} />;
          })}
        </div>

        <div>
          <BottomNav/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
