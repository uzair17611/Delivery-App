/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.svg";
import personIcon from "../../assets/person.svg";

const AllOrders = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold xl:text-[40px] lg:text-3xl mb-4 ml-1 tracking-[-2%] leading-[48px]">
          Orders management
        </h3>
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block lg:w-[98%] xl:py-4 lg:py-4 overflow-hidden bg-white shadow-lg">
          <div className="flex flex-row gap-3 ml-4">
            <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
            <div className="font-semibold text-xl leading-8 py-1">Orders</div>
            <form>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                  <img src={searchIcon} alt="search icon" />
                </div>
                <input
                  type="search"
                  className="block focus:outline-none p-3 pl-10 font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                  placeholder="Search orders"
                  required
                />
              </div>
            </form>
            <Link
              to="/neworder"
              type="button"
              className="lg:right-10 lg:absolute lg:w-32 lg:h-10 rounded-xl bg-[#2A85FF] text-white font-medium text-base leading-normal text-center shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="lg:text-[25px]">+</span> New order
            </Link>
          </div>
        </div>
        <div className="inline-block lg:w-[98%] shadow rounded-b-lg   bg-white  pt-3 ">
          <table className="lg:w-[95%] ml-4">
            <thead>
              <tr>
                <th className="relative xl:left-2 lg:left-1 border-b-2 border-gray-100   text-[#6F767E] lg:text-xs xl:text-sm">
                  Order Id
                </th>
                <th className="xl:px-6 xl:py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left xl:text-sm  text-[#6F767E] lg:text-xs">
                  Date
                </th>
                <th className="xl:px-6 xl:py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left xl:text-sm  text-[#6F767E] lg:text-xs">
                  Order Number
                </th>
                <th className="xl:px-6 xl:py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left xl:text-sm  text-[#6F767E] lg:text-xs">
                  Customer Name
                </th>
                <th className="xl:px-6 py-2 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left xl:text-sm  text-[#6F767E] lg:text-xs">
                  Phone Number
                </th>
                <th className="xl:px-6 xl:py-3 lg:pl-5 lg:py-1 border-b-2 border-gray-100 text-left xl:text-sm  text-[#6F767E] lg:text-xs">
                  Pickup Location
                </th>
                <th className=" border-b-2 border-gray-100 text-left xl:text-sm text-[#6F767E] lg:text-xs">
                  Drop Off Location
                </th>
                <th className=" border-b-2 border-gray-100 xl:text-sm text-[#6F767E] lg:text-xs">
                  Status
                </th>
                <th className="-translate-x-4 w-20 lg:w-0 border-b-2 border-gray-100  xl:text-sm text-[#6F767E] lg:text-xs">
                  Assign To
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="w-[948px]">
                <td className="xl:px-6 xl:py-4  lg:px-6 lg:py-4 border-b-2 border-gray-100">
                  <div className="flex items-center xl:text-sm leading-5 text-[#1A1D1F]">
                    #1
                  </div>
                </td>
                <td className="xl:py-4  border-b-2 border-gray-100">
                  <div className="text-xs font-medium leading-5 text-[#1A1D1F]">
                    02 Nov,2022
                  </div>
                </td>
                <td className="xl:px-6 xl:py-4  lg:px-6 lg:py-4 border-b-2 text-[#1A1D1F] border-gray-100 xl:text-sm leading-5">
                  1
                </td>
                <td className="xl:px-6 xl:py-4  lg:px-6 lg:py-4 border-b-2 text-[#1A1D1F] border-gray-100 xl:text-sm leading-5">
                  john
                </td>
                <td className=" xl:py-4  border-b-2 text-[#1A1D1F] border-gray-100 text-xs leading-5 ">
                  <div className="text-[#83BF6E] w-[92px] text-center bg-[#EAFAE4] rounded">
                    +01232193218
                  </div>
                </td>
                <td className="xl:px-6 xl:py-4  lg:px-6 lg:py-4 border-b-2 border-gray-100 text-[#1A1D1F] text-xs font-medium leading-5">
                  Deans
                </td>
                <td className="xl:px-6 text-xs font-medium xl:py-4   border-b-2 border-gray-100 leading-5">
                  islamia college peshawar pakistan
                </td>
                <td className="xl:px-6 xl:py-4  lg:px-6 lg:py-4 border-b-2 border-gray-100 text-[#1A1D1F] text-xs leading-5">
                  <div className="flex flex-nowrap gap-x-px">
                    <div className=" w-2 h-3  rounded-xl bg-red-500 mr-2 mt-1  "></div>
                    <div>unassigned</div>
                  </div>
                </td>
                <td className="border-b-2 border-gray-100">
                  <img
                    className="w-7 h-7 relative left-3 lg:left-0"
                    src={personIcon}
                    alt="personIcon"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4">
            <div></div>
            <div>
              <nav className="relative z-0 inline-flex shadow-sm">
                <div></div>
                <div></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
