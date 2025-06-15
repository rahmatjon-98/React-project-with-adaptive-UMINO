const Box3 = ({ img, name, des }) => {
  return (
    <div className="w-[30%] lg:w-[25%] text-center">
      <img className="m-auto w-[25px]" src={img} alt="" />
      <p className="text-[9px] lg:text-[12px] text-[#111111] font-semibold py-2">{name}</p>
      <p className="text-[9px] lg:text-[12px] text-[#555555]">{des}</p>
    </div>
  );
};

export default Box3;
