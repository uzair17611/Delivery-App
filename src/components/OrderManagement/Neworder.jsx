import TextArea from "..//utilities/TextArea";
import leftArrowIcon from "../../assets/leftarrow.svg";
import subtractIcon from "../../assets/subtract.svg";
import newCustomerBtn from "../../assets/newCustomerBtn.svg";
import locationIcon from "../../assets/location.svg";
import newTag from "../../assets/newtag.svg";
import preview from "../../assets/preview.svg";
import myImage from "../../assets/my.jpg";
import doubleTick from "../../assets/doubleTick.svg";
import threeDots from "../../assets/threeDots.svg";
const Neworder = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <h3 className="font-semibold lg:text-3xl xl:text-[40px] mb-4 ml-1 tracking-[-2%] leading-[48px]">
            New Order
          </h3>
          <div className="flex flex-row lg:w-[96%] xl:h-full xl:w-[100%] overflow-hidden">
            <div className=" w-[610px] lg:w-[42vw] rounded-lg p-6 gap-6 flex flex-col h-[860px]  bg-[#FCFCFC]">
              <div className="flex flex-row relative">
                <div className="w-4 h-8 rounded inline-block bg-[#B5E4CA]"></div>
                <p className="xl:w-60 lg:w-40 lg:my-1 font-semibold xl:text-xl lg:text-base leading-8  ml-3">
                  {" "}
                  Name & description
                </p>

                <button className="ml-[254px] absolute right-1 xl:px-8 lg:px-0 xl:w-24 lg:w-20 lg:h-8 xl:h-10 border-2 border-[#EFEFEF] bg-[#FCFCFC] rounded-lg flex flex-row justify-center">
                  <img
                    className="my-[7px] lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                    src={leftArrowIcon}
                    alt="leftArrowIcon"
                  />{" "}
                  <span className="my-auto font-semibold xl:text-lg lg:ml-2">
                    Back
                  </span>
                </button>
              </div>

              <div className="flex flex-row">
                <p className="font-semibold text-sm xl:text-base text-gray-800">
                  Order title
                </p>
                <img
                  className="ml-1 lg:ml-1"
                  src={subtractIcon}
                  alt="subtract icon"
                />
                <p className="box-border font-semibold xl:text-xs lg:text-[9px] lg:tracking-wider lg:h-4 xl:h-6 ml-1 xl:px-2  xl:py-1 lg:pb-[2px] pl-[8px] pr-[8px] lg:px-1 lg:mt-1 bg-[#272B30] text-[#F4F4F4] rounded">
                  Maximum 100 characters. No HTML or emoji allowed
                </p>
              </div>

              <input
                type="text"
                className="-translate-y-4 p-3 w-[560px] lg:w-[99%] rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
              />

              <div className="flex flex-row mt-1 ">
                <p className="not-italic font-semibold xl:text-base text-sm leading-6 text-gray-800">
                  Description
                </p>
                <img className="ml-1" src={subtractIcon} alt="subtract icon" />
              </div>
              <TextArea />

              <div className="flex flex-row -translate-y-6">
                <p className=" not-italic font-semibold text-sm leading-6 text-gray-800 ">
                  Select Customer
                </p>
                <img className="ml-1" src={subtractIcon} alt="subtract icon" />
              </div>

              <div className="mt-0 font-semibold relative -top-10">
                <select className="w-full p-3 text-gray-700  bg-white border-[2px] border-solid border-gray-200 transition ease-in-out rounded-xl  focus:text-gray-700 focus:bg-white focus:border-[#2a85ff59] focus:outline-none">
                  <option>Jhon Doe</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <button className="w-40 relative -top-[52px]">
                <img src={newCustomerBtn} alt="add customer" />
              </button>

              <p className="text-[#6F767E] text-xs font-bold relative -top-12">
                Pickup Location
              </p>

              <div className="flex flex-row relative -top-16 w-[610px] lg:w-[200%]">
                <img
                  className=" z-10 p-3  m-1 relative rounded-l-xl -top-[2px] bg-[#F4F4F4]"
                  src={locationIcon}
                  alt="location icon"
                />
                <input
                  type="text"
                  className="lg:w-[50%] relative -left-[50px]  px-12 w-full rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
                />
              </div>
              <p className="text-[#6F767E] text-xs font-bold relative -top-16">
                Drop off
              </p>

              <div className="flex flex-row relative -top-16 xl:-top-20 w-[610px] lg:w-[200%]">
                <img
                  className=" z-10 p-3  m-1 relative rounded-l-xl -top-[2px] bg-[#F4F4F4]"
                  src={locationIcon}
                  alt="location icon"
                />
                <input
                  type="text"
                  className="lg:w-[50%] relative -left-[50px]  px-12 w-full rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
                />
              </div>
            </div>

            <div className=" flex flex-col gap-3 w-[310px] lg:w-[28vw] ml-2 h-[363px]  rounded-lg p-6  bg-[rgb(252,252,252)]">
              <div className="flex flex-row">
                <img src={newTag} alt="tag " />
                <p className="w-60 font-semibold text-xl lg:text-base lg:my-2  ml-3">
                  {" "}
                  Preview
                </p>
                <img src={preview} alt="preview icon" />
              </div>
              <p className="w-60 font-semibold text-xl lg:text-base ">
                {" "}
                Tower Burger
              </p>
              <p className="font-normal">Order description goes here...</p>
              <p className="text-[#1A1D1F] text-sm font-medium">Pickup</p>
              <p className="font-normal text-xs relative -top-2">
                1 Church Rd, Lough Common, Lusk, Co. Dublin, K45 WF90, Ireland
              </p>

              <p className="text-[#1A1D1F] text-sm font-medium ">Dropoff</p>
              <p className="font-normal text-xs relative -top-2">
                1 Church Rd, Lough Common, Lusk, Co. Dublin, K45 WF90, Ireland
              </p>

              <div className="flex flex-row ">
                <img
                  src={myImage}
                  alt="avatar"
                  className="rounded-full w-10 "
                />
                <p className="font-medium text-[15px] text-[#6F767E] relative top-2 ml-3">
                  by
                </p>
                <p className="font-semibold text-[15px] text-[#1A1D1F] relative top-2 ml-3">
                  Kundi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
          }}
          className="w-[1014px] relative xl:-left-[28px]  lg:-left-[13px] lg:w-[110%] xl:w-[110%] h-[80px] bg-[#FCFCFC] mt-20 flex flex-row"
        >
          <img className="" src={doubleTick} alt="Double tick" />
          <p className="text-[#1A1D1F] text-sm font-medium">Last saved</p>
          <p className="text-[#1A1D1F] text-sm font-semibold">
            Oct 4,2021 - 23:22
          </p>
          <div className=" flex flex-row gap-2 absolute right-14">
            {" "}
            <button className="px-[20px] py-3 border-2 border-[#EFEFEF] bg-[#FCFCFC] rounded-lg">
              <span className=" font-bold text-[15px]">Save Draft</span>
            </button>
            <button
              type="button"
              className=" px-[20px] py-3 rounded-xl bg-[#2A85FF] text-white hover:bg-blue-700 hover:shadow-lg   focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span className=" font-bold text-[15px]">Publish Now</span>
            </button>
            <button>
              <img src={threeDots} alt="threeDots" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Neworder;
