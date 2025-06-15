import "./App.css";
import Header from "./components/header";
import Btnw from "./components/btnw";
import Box1 from "./components/box1";
import Box2 from "./components/box2";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/bg1.png";
import img8 from "./assets/bg2.png";
import img9 from "./assets/bg3.png";
import img10 from "./assets/bg4.png";
import img11 from "./assets/bg5.png";
import img12 from "./assets/bg8.png";
import img13 from "./assets/bg6.png";
import img14 from "./assets/bg7.png";
import imgotv from "./assets/otv.png";

import img15 from "./assets/bg9.png";
import Btnb from "./components/btnb";
import Box3 from "./components/box3";

import img16 from "./assets/icon (9).png";
import img17 from "./assets/icon (10).png";
import img18 from "./assets/icon (11).png";

import img19 from "./assets/bg10.png";
import img20 from "./assets/bg11.png";
import img21 from "./assets/bg12.png";
import img22 from "./assets/bg13.png";
import img23 from "./assets/bg14.png";
import img24 from "./assets/bg15.png";
import Box4 from "./components/box4";
import Footer from "./components/footer";

let sec2box1 = [
  { img: img1, name: "Living Room", id: "1" },
  { img: img2, name: "Special Bedroom", id: "2" },
  { img: img3, name: "Dining & Kitchen", id: "3" },
  { img: img4, name: "Home Accessories", id: "4" },
  { img: img5, name: "Outdoor", id: "5" },
  { img: img6, name: "Lighting & Decor", id: "6" },
];

let sec3box2 = [
  {
    img: img7,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "",
    remaining: "    ",
    id: "1",
  },
  {
    img: img8,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "89.00",
    remaining: "12",
    id: "2",
  },
  {
    img: img9,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "",
    remaining: "45",
    id: "3",
  },
  {
    img: img10,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "",
    remaining: "77",
    id: "4",
  },
  {
    img: img11,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "",
    remaining: "93",
    id: "5",
  },
  {
    img: img12,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "333.99",
    remaining: "1",
    id: "6",
  },
  {
    img: img13,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "40.99",
    remaining: "",
    id: "7",
  },
  {
    img: img14,
    name: "Form Chair Brass Base",
    imgotv: imgotv,
    sena: "569.00",
    nowsena: "156.00",
    remaining: "22",
    id: "8",
  },
];

let sec5box3 = [
  {
    img: img16,
    name: "Free Shipping",
    des: "Get complimentary ground shipping on every order. Don't love it? Send it back, on us.",
    id: "1",
  },
  {
    img: img17,
    name: "Free Returns",
    des: "Get complimentary ground shipping on every order. Don't love it? Send it back, on us.",
    id: "2",
  },
  {
    img: img18,
    name: "Support Online",
    des: "Get complimentary ground shipping on every order. Don't love it? Send it back, on us.",
    id: "3",
  },
];

let sec6box4 = [
  { img: img19 },
  { img: img20 },
  { img: img21 },
  { img: img22 },
  { img: img23 },
  { img: img24 },
];
function App() {
  return (
    <div>
      <Header />

      <div className="sec1 h-[560px]">
        <div className="flex justify-between items-center text-center font-bold  lg:mx-[26px] h-[100%] bg-[#00000059] py-[150px] px-[20px] rounded-[15px]">
          <button className="bg-[#ffffff7c] border-[1px] border-[#EBEBEB] rounded-[50%] py-1 px-2 lg:p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-4 lg:w-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div>
            <p className="text-white text-[8px] lg:text-[13px] uppercase">
              Beautiful & Elegant
            </p>
            <p className="text-white lg:text-[70px] text-[24px] font-bold">Premium Bedroom</p>
            <p className="text-white text-[10px] lg:text-[16px] pb-[20px] lg:pb-[60px]">
              Discount 50% On Products & Free Shipping.
            </p>
            <Btnw name="Shop Now" />
          </div>

          <button className="bg-[#FFFFFF7c]  border-[1px] border-[#EBEBEB] rounded-[50%]  py-1 px-2 lg:p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-4 lg:w-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="sec2 m-[30px] lg:m-[50px]">
        <p className="text-center font-semibold text-[24px] lg:text-[36px]">Top Categories</p>
        <p className="text-center text-[#555555] text-[10px] lg:text-[14px]">
          Our products are designed for everyone, environmentally friendly.
        </p>

        <div className="flex lg:flex-nowrap flex-wrap justify-between w-[95%] lg:w-[80%] m-auto py-[30px]">
          {sec2box1.map((e) => {
            return <Box1 img={e.img} name={e.name} key={e.id} />;
          })}
        </div>
      </div>

      <div className="sec3 m-[30px] lg:m-[50px]">
        <p className="text-center font-semibold  text-[24px] lg:text-[36px]">Top Trending</p>
        <p className="text-center text-[#555555] text-[10px] lg:text-[14px]">
          Our products are designed for everyone, environmentally friendly.
        </p>

        <div className="flex flex-wrap gap-[20px] justify-between w-[95%] lg:w-[80%] m-auto py-[15px] lg:py-[30px]">
          {sec3box2.map((e) => (
            <Box2
              key={e.id}
              id={e.id}
              img={e.img}
              name={e.name}
              imgotv={e.imgotv}
              sena={e.sena}
              nowsena={e.nowsena}
              remaining={e.remaining}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Btnw name="Load More" />
        </div>
      </div>

      <div className="sec4 flex justify-end items-center">

        <div className=" lg:bg-white bg-[#ffffffcc] w-[60%] lg:w-[30%] text-center p-8 rounded-2xl  lg:mr-52">
          <p className="text-[#999999] text-[8px] lg:text-[12px]">LIMITED EDITION</p>
          <p className="text-[#111111] text-[24px] lg:text-[32px] py-2">Unique Style</p>
          <p className="text-[#555555] text-[8px] lg:text-[12px] mb-7">
            The watch is carefully designed with quality materials, such as the
            domed sapphire crystal, and the meticulous level of detail - from
            the dial to the delicate gold hour markers.
          </p>
          <Btnb name="Discover Now" />
        </div>

      </div>

      <div className="sec5 flex justify-between pb-5 lg:py-[60px] border-b-2 border-b-[#EBEBEB] w-[95%] lg:w-[75%] m-auto">
        {sec5box3.map((e) => {
          return <Box3 key={e.id} img={e.img} name={e.name} des={e.des} />;
        })}
      </div>

      <div className="sec6 my-5 lg:my-14">
        <p className="text-center font-semibold  text-[24px] lg:text-[36px]">Follow Us</p>
        <p className="text-center text-[#555555]  text-[10px] lg:text-[14px]">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>

        <div className="w-[95%] lg:w-[75%] m-auto flex lg:flex-nowrap flex-wrap justify-between py-5">
          {sec6box4.map((e) => (
            <Box4 img={e.img} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
