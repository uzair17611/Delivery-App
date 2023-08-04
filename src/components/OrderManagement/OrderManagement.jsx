/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import ordersIcon from "../../assets/ordersIcon.svg";
import upArrowIcon from "../../assets/uparrow.svg";
import downArrowIcon from "../../assets/arrowdown.svg";
import rightArrowIcon from "../../assets/rightarrow.svg";
import homeIcon from "../../assets/homeIcon.svg";
const OrderManagement = ({ activeStatus, dropDown }) => {
  return (
    <ul className="space-y-1 lg:ml-3 xl:ml-4">
      <li>
        <a
          href="#"
          className="flex items-center p-2 lg:w-[23vw] xl:w-[23vw] text-base lg:text-sm xl:text-lg rounded-lg  hover:bg-[#EFEFEF]"
        >
          <img
            src={homeIcon}
            alt="logo"
            className="lg:w-4 lg:h-4 xl:w-5 xl:h-5"
          />
          <span className="ml-3 text-[#6F767E] font-semibold">Home</span>
        </a>
      </li>
      <li>
        <Link
          to="/AllOrders"
          href="#"
          className="flex items-center p-2 m-0 lg:w-[23vw] text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF] relative"
          onClick={() => dropDown("order management")}
        >
          <img
            src={ordersIcon}
            alt="logo"
            className="w-5 lg:w-5 h-5 lg:h-5 xl:w-6 xl:h-6"
          />
          <span className="ml-3 text-[#6F767E] font-semibold xl:text-lg">
            Orders Management
          </span>
          {activeStatus === "order management" ? (
            <img
              className="ml-16 absolute right-4 "
              src={upArrowIcon}
              alt="dropdown icon"
            />
          ) : (
            <img
              className="ml-16 absolute right-4"
              src={downArrowIcon}
              alt="dropdown icon"
            />
          )}
        </Link>
        {activeStatus === "order management" ? (
          <div>
            <ul className="ml-4 lg:h-40 xl:h-44">
              <li className="xl:w-[30vw]">
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-6 relative"></span>{" "}
                <Link
                  to="/neworder"
                  className="relative top-1 xl:w-[19vw] lg:w-[20vw] lg:inline-block xl:inline-block focus:font-semibold text-sm xl:text-lg focus:bg-[#EFEFEF] focus:shadow p-3 lg:p-2 xl:p-2 pl-1  rounded-xl -translate-x-1"
                >
                  All Orders
                  <img
                    className="inline-block ml-36 xl:ml-0 xl:absolute xl:right-1 lg:absolute lg:right-3 lg:ml-[95px]"
                    src={rightArrowIcon}
                    alt="rightarrow icon"
                  />
                </Link>
              </li>
              <li className="xl:w-[30vw]">
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-6 "></span>{" "}
                <Link
                  to="/orderTracking"
                  className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 xl:p-2 pl-1 rounded-xl relative -top-5 focus:shadow text-sm xl:text-lg xl:w-[19vw] xl:inline-block lg:w-[20vw] lg:inline-block lg:p-2 -translate-x-1"
                >
                  Orders Tracking{" "}
                  <span className="lg:ml-[53px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1 xl:absolute xl:right-4 xl:my-1 lg:absolute lg:right-3">
                    8
                  </span>
                </Link>
              </li>
              <li className="relative -top-14 xl:w-[30vw]">
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-20"></span>{" "}
                <Link
                  to="/ridersTracking"
                  className=" focus:bg-[#EFEFEF] focus:font-semibold p-3 xl:p-2 pl-1 rounded-xl focus:shadow text-sm xl:text-lg xl:w-[19vw] xl:inline-block relative lg:w-[20vw] lg:inline-block lg:p-2 -translate-x-1"
                >
                  Riders Tracking{" "}
                  <span className="lg:ml-[53px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#B5E4CA] text-[#1A1D1F]  last:mr-0 mr-1 xl:absolute xl:right-4 xl:my-1 lg:absolute lg:right-3 ">
                    8
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </li>
    </ul>
  );
};

export default OrderManagement;
