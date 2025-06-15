const Box1 = ({ img, name }) => {
  return (
    <div className="text-center lg:w-auto w-[30%] flex justify-center flex-col items-center">
      
      <img className="rounded-[50%] bg-amber-50 lg:w-32 lg:h-32 w-20 h-20" src={img} alt="img" />
      <p className="lg:text-[16px] text-[10px] py-2.5">{name}</p>
    </div>
  );
};

export default Box1;
