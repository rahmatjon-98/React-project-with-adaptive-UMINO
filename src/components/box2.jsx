const Box2 = ({ id, img, name, imgotv, sena, nowsena, remaining }) => {
  const hasDiscount = nowsena && nowsena.trim() !== "";
  const discountPercent = hasDiscount
    ? Math.round(((Number(sena) - Number(nowsena)) / Number(sena)) * 100)
    : 0;

  const isInStock = remaining && Number(remaining) > 0;

  return (
    <div className="lg:w-[23%] w-[44%] pt-[10px]">
      {hasDiscount && (
        <div className="absolute flex lg:flex-col flex-row items-start">
          <p className="bg-[#9C6D3A] text-white text-[8px] lg:text-[12px] px-2 lg:px-4 ml-2 mt-[12px] py-1 rounded-[50px]">
            -{discountPercent}%
          </p>
          <p className="bg-[#177983] text-white text-[8px] lg:text-[12px] px-2 lg:px-4 ml-2 mt-[12px] lg:mt-[4px] py-1 rounded-[50px]">
            Pre-Order
          </p>
        </div>
      )}

      <img src={img} alt={name} />

      <p className="lg:text-[14px] text-[12px] py-2.5">{name}</p>

      <img className="w-[40px] " src={imgotv} alt="rating" />

      <p className="py-2.5">
        {hasDiscount ? (
          <span className="text-[#9C6D3A]">
            ${nowsena}
            <span className="line-through text-[12px] text-[#8D979E] pl-2.5">
              ${sena}
            </span>
          </span>
        ) : (
          <span>${sena}</span>
        )}
      </p>
      {isInStock ? (
        <p className="text-[12px] font-semibold text-green-600 ">
          Осталось: {remaining} шт.
        </p>
      ) : (
        <p className="text-[12px] font-semibold text-red-600">
          Осталось: 0 шт.
        </p>
      )}
    </div>
  );
};

export default Box2;
