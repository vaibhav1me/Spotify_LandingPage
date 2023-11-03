import React from "react";
import { LeftArrow, Search, RightArrow } from "../../assets/index";
import { SearchData } from "./assets/data";
import Card from "./Card";


const SearchPage = () => {
  return (
    <div className="">
      <div className="flex items-center bg-[#00000080] px-[1rem] py-[.5rem] relative">
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={LeftArrow} alt="" />
        </button>
        <button className="mr-[1.5rem]">
          <img className="h-[1.5rem]" src={RightArrow} alt="" />
        </button>
        <div className="relative">
          <input
            type="text"
            className="bg-[#242424] px-[2rem] py-[.8rem] rounded-3xl outline-white w-[140%]"
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

      <div id="SearchPage_main" className="p-[1rem]">
        <h1 className="py-[1rem] text-[1.2rem] font-bold">Browse All</h1>
        <div className="flex flex-wrap max-h-[37rem] overflow-y-scroll">
          {/* {
            SearchData.map((card) => {
                return (
                    <div className="card" style={{backgroundColor: `${card.bg_color}`}}>
                        <h2>{card.title}</h2>
                        <img src={card.img} alt="" />
                    </div>
                )
            })
        } */}
          {SearchData.map((card) => {
            const { img, title, bg_color } = card;
            return <Card img={img} title={title} bg_color={bg_color} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
