/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import ridersIcon from "../../assets/RiderManagementIcons/main.svg";
import addIcon from "../../assets/RiderManagementIcons/addIcon.svg";
import upArrowIcon from "../../assets/uparrow.svg";
import downArrowIcon from "../../assets/arrowdown.svg";
import rightArrowIcon from "../../assets/rightarrow.svg";
const RidersManagement = ({ activeStatus, dropDown }) => {
  return (
    <ul className="space-y-2 lg:ml-3 xl:ml-4">
      <li>
        <Link
          to="/AllRiders"
          href="#"
          className="flex items-center p-2 m-0 text-base lg:w-[23vw] xl:w-[23vw] lg:text-sm rounded-lg  hover:bg-[#EFEFEF] relative"
          onClick={() => dropDown("riders management")}
        >
          <img
            src={ridersIcon}
            alt="logo"
            className="lg:w-5 lg:h-5 xl:w-6 xl:h-6"
          />
          <span className="ml-3 text-[#6F767E] font-semibold xl:text-lg">
            Riders
          </span>
          <div className="flex flex-row lg:ml-[90px] xl:absolute xl:right-4 lg:absolute lg:right-4">
            {" "}
            <img
              className="lg:ml-3 lg:w-5 lg:h-5 xl:w-5 xl:h-5"
              src={addIcon}
              alt="addIcon"
            />
            {activeStatus === "riders management" ? (
              <button>
                {" "}
                <img
                  className="lg:ml-3"
                  src={upArrowIcon}
                  alt="dropdown icon"
                />
              </button>
            ) : (
              <img
                className="lg:ml-3"
                src={downArrowIcon}
                alt="dropdown icon"
              />
            )}
          </div>
        </Link>
        {activeStatus === "riders management" ? (
          <div>
            <ul className="ml-4 h-[260px] xl:w-[40vw]">
              <li>
                <div className="flex flex-row">
                  <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-6 "></span>{" "}
                  <Link
                    to="/AllRiders"
                    className=" focus:font-semibold focus:bg-[#EFEFEF] focus:shadow p-3 xl:p-[7px] h-10 pl-1 xl:w-[20vw] lg:w-[20vw] xl:inline-block   rounded-xl text-sm xl:text-lg relative"
                  >
                    All Riders
                    <img
                      className="inline-block lg:-mt-1 xl:-mt-0 xl:absolute xl:right-0 lg:absolute lg:right-2"
                      src={rightArrowIcon}
                      alt="rightarrow icon"
                    />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-8 "></span>{" "}
                  <Link
                    to="/orderTracking"
                    className=" focus:bg-[#EFEFEF] xl:w-[20vw] xl:inline-block focus:font-semibold p-3 xl:p-[7px] h-10 pl-1 rounded-xl mt-3 focus:shadow text-sm xl:text-lg relative lg:w-[20vw]"
                  >
                    Users{" "}
                    <span className="ml-[165px] lg:ml-[120px] text-xs font-semibold inline-block py-1 lg:-mt-1 xl:-mt-0 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1 xl:ml-0 xl:absolute xl:right-2 lg:absolute lg:right-2">
                      8
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  {" "}
                  <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-10 "></span>{" "}
                  <Link
                    to="/teams"
                    className=" focus:bg-[#EFEFEF] xl:w-[20vw] lg:w-[20vw] xl:inline-block focus:font-semibold p-3 xl:p-[7px] h-10 pl-1 rounded-xl focus:shadow xl:text-lg text-sm"
                  >
                    Teams{" "}
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-[51px] "></span>{" "}
                  <Link
                    to="/orderTracking"
                    className=" focus:bg-[#EFEFEF] xl:w-[20vw] xl:inline-block focus:font-semibold p-3 xl:p-[7px] h-10 pl-1 rounded-xl focus:shadow xl:text-lg text-sm relative -top-2 lg:w-[20vw]"
                  >
                    Geofences{" "}
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-[64px] "></span>{" "}
                  <Link
                    to="/orderTracking"
                    className=" focus:bg-[#EFEFEF] xl:w-[20vw] xl:inline-block focus:font-semibold p-3 xl:p-[7px] h-10 pl-1 rounded-xl relative -top-[25px] focus:shadow xl:text-lg text-sm lg:w-[20vw]"
                  >
                    Compensation
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </li>
    </ul>
  );
};

export default RidersManagement;
