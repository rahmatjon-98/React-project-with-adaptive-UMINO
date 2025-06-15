import logo from "../assets/Logo.png";

import img1 from "../assets/icon (12).png";
import img2 from "../assets/icon (13).png";
import img3 from "../assets/icon (14).png";
import img4 from "../assets/icon (15).png";
import img5 from "../assets/icon (16).png";
import img6 from "../assets/7 (1).png";
import img7 from "../assets/6 (1).png";
import Btnb from "./btnb";

import icon1 from '../assets/1.png'
import icon2 from '../assets/2.png'
import icon3 from '../assets/3.png'
import icon4 from '../assets/4.png'
import icon5 from '../assets/5.png'
import icon6 from '../assets/6.png'
import icon7 from '../assets/7.png'

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-[0px] lg:pt-[50px]">

      <div className="flex lg:flex-nowrap flex-wrap justify-center lg:justify-between w-[90%] lg:w-[80%] m-auto py-5 ">

        <div className="text-[#555555] text-[10px] py-5 lg:w-auto w-[90%] ">
          <img className="w-[70px] pb-[20px]" src={logo} alt="" />
          <p>268 St, South New York/NY 98944, United States</p>
          <p>+222-1800-2628</p>
          <p>blueskytechcompany@gmail.com</p>

          <div className="flex gap-2.5 items-center pt-[20px]">
            <a className="w-[25px]" href="">
              <img src={img1} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img2} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img3} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img4} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img5} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img6} alt="" />
            </a>
            <a className="w-[25px]" href="">
              <img src={img7} alt="" />
            </a>
          </div>
        </div>

        <div className="py-3 lg:w-auto w-[45%] ">
          <p className="font-semibold text-[11px] uppercase pb-3">
            Customer Service
          </p>
          <a className="text-[10px] text-[#555555]" href="">
            Privacy Policy
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Refund Policy
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Shipping & Return
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Term & Conditions
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Advanced Search
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Store Locations
          </a>
          <br />
        </div>

        <div className="py-3 lg:w-auto w-[45%] ">
          <p className="font-semibold text-[11px] uppercase pb-3">
            Shop By Categories
          </p>
          <a className="text-[10px] text-[#555555]" href="">
            Smartphone
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Headphones
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Computer & Desktop
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Cameras & Photos
          </a>
          <br />
          <a className="text-[10px] text-[#555555]" href="">
            Laptop & Ipad
          </a>
          <br />
        </div>

        <div className="lg:w-[35%] py-3  w-[90%] ">
          <p className="font-semibold text-[11px] uppercase pb-3">
            Sign Up to Newsletter
          </p>
          <p className="text-[11px] text-[#555555] pb-5">
            Enter your email address to get $10 off your first order and free
            shipping. Updates information on Sales and Offers.
          </p>

          <input
            type="email"
            placeholder="Enter your email..."
            className="w-[50%] mr-[10px] border-2 border-[#EBEBEB] rounded-[30px] py-1 lg:py-3 px-6 lg:px-10 text-[10px] bg-white"
          />

          <Btnb name="Subscribe" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-[80%] m-auto lg:pb-1 pb-7 lg:pt-4 border-t-2 border-[#DEDEDE]">
        <div className="text-[10px] hidden lg:flex gap-3 text-[#555555]">
          <a href="">Our Stores</a>
          <select className="">
            <option value="">English</option>
            <option value="">Russian</option>
            <option value="">Tajik</option>
          </select>

          <select>
            <option value="">United States (USD $)</option>
            <option value="">United States (USD $)</option>
            <option value="">United States (USD $)</option>
          </select>
        </div>

        <p className="text-[10px] text-[#555555]">
          © 2022 Umino Store. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2 py-2.5 lg:py-5">
          <a href=""><img className="w-[30px]" src={icon1} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon2} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon3} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon4} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon5} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon6} alt="" /></a>
          <a href=""><img className="w-[30px]" src={icon7} alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
