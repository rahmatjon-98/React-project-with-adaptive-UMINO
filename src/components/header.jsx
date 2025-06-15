import logo from "../assets/Logo.png";
const Header = () => {
  return (
    <header className="font-sans ">
      <div className="flex justify-between px-10 lg:px-10 py-1.5 font-medium">
        <div className="lg:flex hidden text-[12px] lg:text-[13px] gap-2">
          <p>+222-1800-2628</p>
          <p className="underline">blueskytechcompany@gmail.com</p>
        </div>

        <div className="text-[12px] lg:text-[13px] lg:block hidden">
          <p className="text-[#555555]">
            Sign up for 10% off your first order:{" "}
            <a href="" className="text-black">
              Sign Up
            </a>
          </p>
        </div>

        <div className="flex justify-between lg:justify-between lg:gap-3 text-[12px] lg:text-[13px] lg:w-auto w-[100%]">
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
      </div>

      <div className="flex items-center justify-between  px-[40px] py-3 border-y border-[#EBEBEB] ">
        <img className="w-[70px]" src={logo} alt="" />

        <div className="text-[13px] ml-18 uppercase gap-4 font-bold lg:flex hidden">
          <select className="">
            <option value="">Home</option>
            <option value="">Home</option>
            <option value="">Home</option>
          </select>
          <select className="">
            <option value="">Shop</option>
            <option value="">Shop</option>
            <option value="">Shop</option>
          </select>
          <select className="">
            <option value="">Product</option>
            <option value="">Product</option>
            <option value="">Product</option>
          </select>
          <select className="">
            <option value="">Page</option>
            <option value="">Page</option>
            <option value="">Page</option>
          </select>
          <select className="">
            <option value="">Blog</option>
            <option value="">Blog</option>
            <option value="">Blog</option>
          </select>

          <p>Buy Umino!</p>
        </div>

        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          

          <div className="absolute right-[68px] bg-[#9C6D3A] w-[20px] h-[20px] flex justify-center items-center rounded-[50%]">
            <p className="text-[10px] text-white">0</p>
          </div>

          <div className="absolute  right-[30px] ml-[-50px] bg-[#9C6D3A] w-[20px] h-[20px] flex justify-center items-center rounded-[50%]">
            <p className="text-[10px] text-white">0</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
