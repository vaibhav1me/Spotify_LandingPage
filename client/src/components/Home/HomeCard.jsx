import { Play } from "../../assets";

const HomeCard = ({img, title, desc}) => {
  return (
    <div id="" className=".homecard cursor-pointer bg-[#141414] p-[1rem] inline-block rounded-2xl hover:bg-[#373737] m-2">
      <div className="w-[10rem]">
        <div className="relative mb-3">
          <img className="h-[10rem] rounded-lg" src={img} alt="" />
          <button className="p-2 bg-green-500 rounded-full absolute bottom-0 right-0 m-3">
            <img className="h-[2rem]" src={Play} alt="" />
          </button>
        </div>
        <h1 className="font-bold mb-2">{title}</h1>
        <p className="text-[#9b9b9b] font-bold text-[.9rem]">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCard;
