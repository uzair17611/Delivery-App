import searchIcon from "../../assets/searchIcon.svg";
import subtractIcon from "../../assets/subtract.svg";
import loadmore from "../../assets/RiderManagementIcons/loadmore.svg";
import myImage from "../../assets/my.jpg";
import rightArrowIcon from "../../assets/rightarrow.svg";
import { Link } from "react-router-dom";
const Teams = () => {
  return (
    <div>
      <h3 className="font-semibold xl:text-[40px] text-3xl mb-4 ml-1 tracking-[-2%] leading-[48px] flex flex-col">
        Teams management
      </h3>
      <div className="rounded-lg lg:w-[72vw] h-[440px] py-4 bg-white shadow-lg">
        <div className="flex flex-row gap-3 ml-4">
          <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
          <div className="font-semibold text-xl leading-8 py-1">Teams</div>

          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={searchIcon} alt="search icon" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block focus:outline-none p-3 pl-10  font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                placeholder="Search by name or username"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex flex-row gap-4 m-5">
          <div className="lg:w-[40vw]">
            <div className="flex flex-row gap-2">
              <p className="font-semibold xl:text-base text-sm leading-6 text-gray-800">
                Teams
              </p>
              <img className="ml-1" src={subtractIcon} alt="subtract icon" />
            </div>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <td className="w-12">
                    <p className="font-medium text-xs text-[#6F767E]">S. No.</p>
                  </td>
                  <td>
                    <p className="font-medium text-xs text-[#6F767E]">Name</p>
                  </td>
                  <td>
                    <p className="font-medium text-xs lg:ml-8 text-[#6F767E]">
                      Slug
                    </p>
                  </td>
                  <td>
                    <p className="font-medium text-xs text-[#6F767E]">
                      Geo Fence
                    </p>
                  </td>
                  <td className="">
                    <p className="font-medium text-xs text-[#6F767E] ">
                      Strength
                    </p>
                  </td>
                </tr>
              </thead>
            </table>
            <hr className="lg:w-[38vw] mt-5 bg-[#EFEFEF] h-[1px]" />
            <table className="w-full table-fixed">
              <tbody>
                <tr>
                  <td className="xl:w-12 lg:w-8">
                    <p className="font-medium text-xs text-[#6F767E] py-10">
                      1
                    </p>
                  </td>
                  <td>
                    <p className="font-bold text-sm text-[#1A1D1F]">
                      Green Street
                    </p>
                  </td>
                  <td>
                    <p className="bg-[#B5E4CA] font-semibold rounded-md text-sm p-2 w-28 text-center">
                      green-street
                    </p>
                  </td>
                  <td>
                    <p className="font-semibold lg:ml-[3vw] xl:ml-0 text-sm text-[#6F767E]">
                      Green Street
                    </p>
                  </td>
                  <td className="">
                    <p className="font-semibold text-sm text-[#6F767E]">43</p>
                  </td>
                </tr>
                <tr className="mt-12">
                  <td className="w-12">
                    <p className="font-medium text-xs text-[#6F767E]">1</p>
                  </td>
                  <td>
                    <p className="font-bold text-sm text-[#1A1D1F]">
                      Green Street
                    </p>
                  </td>
                  <td>
                    <p className="bg-[#B5E4CA] font-semibold rounded-md text-sm p-2 w-28 text-center">
                      green-street
                    </p>
                  </td>
                  <td>
                    <p className="font-semibold lg:ml-[3vw] xl:ml-0 text-sm text-[#6F767E]">
                      Green Street
                    </p>
                  </td>
                  <td className="">
                    <p className="font-semibold text-sm text-[#6F767E]">43</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="mt-10 ml-[30%]">
              <img src={loadmore} alt="load more" />
            </button>
          </div>
          <div className="flex flex-col lg:w-[28vw]">
            <p className="font-semibold text-sm text-[#6F767E]">
              Green Street Riders
            </p>
            <hr className="w-[290px] mt-6 bg-[#EFEFEF] h-[1px] lg:w-[28vw]" />

            <Link className="mt-5 p-3 flex flex-row text-xs font-medium leading-5 text-blue-900 hover:bg-[#EFEFEF] focus:bg-[#EFEFEF] rounded-xl">
              <img src={myImage} alt="avatar" className="rounded-full w-10 " />
              <div className=" ml-3 flex flex-col">
                <p className="font-bold text-base text-[#1A1D1F]">Israr Khan</p>
                <p className="text-[#9A9FA5] font-semibold text-[13px]">
                  @username
                </p>
              </div>
            </Link>

            <Link className="mt-5 flex flex-row text-xs font-medium leading-5 text-blue-900 hover:bg-[#EFEFEF] focus:bg-[#EFEFEF] p-3 rounded-xl">
              <img src={myImage} alt="avatar" className="rounded-full w-10 " />
              <div className=" ml-3 flex flex-col">
                <p className="font-bold text-base text-[#1A1D1F]">Israr Khan</p>
                <p className="text-[#9A9FA5] font-semibold text-[13px]">
                  @username
                </p>
              </div>
              <img
                className=" ml-36 lg:ml-0 absolute right-8 my-3"
                src={rightArrowIcon}
                alt="rightarrow icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
