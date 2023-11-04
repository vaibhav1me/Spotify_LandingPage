const Card = ({bg_color, img, title}) => {
  return (
    <div
      className="card w-[11rem] cursor-pointer h-[11rem] rounded-xl overflow-hidden p-[1rem] mr-[1rem] mb-[1rem] items-center justify-start relative"
      style={{ backgroundColor: `${bg_color}` }}
    >
      <h2 className="text-[1.2rem] font-bold">{title}</h2>
      <img
        className="h-[7rem] absolute bottom-[-4%] right-[-10%] rotate-[25deg]"
        src={img}
        alt=""
      />
    </div>
  );
}

export default Card
