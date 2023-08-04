/* eslint-disable jsx-a11y/anchor-is-valid */
import searchIcon from "../../assets/searchIcon.svg";
import exportIcon from "../../assets/RiderManagementIcons/export.svg";
import myImage from "../../assets/my.jpg";

const AllRiders = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold xl:text-[40px] mb-4 ml-1 lg:text-3xl tracking-[-2%] leading-[48px]">
          Riders management
        </h3>
        <div className="align-middle rounded-tl-lg rounded-tr-lg  w-[948px] lg:w-[72vw] py-4 bg-white shadow-lg">
          <div className="flex flex-row gap-4 ml-4 relative">
            <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
            <div className="font-semibold text-xl leading-8 py-1">Orders</div>

            <form>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img src={searchIcon} alt="search icon" />
                </div>
                <input
                  type="search"
                  className="block focus:outline-none p-3 pl-10  font-bold text-xs lg:w-[25vw]  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                  placeholder="Search orders"
                  required
                />
              </div>
            </form>
            <div className="w-36 h-10 bg-[#EFEFEF] rounded-lg flex flex-row justify-center font-semibold text-sm text-[#2A85FF] lg:ml-0 absolute right-5 ">
              <img
                className="w-6 h-6 relative top-2 mr-1"
                src={exportIcon}
                alt="export all data as svg"
              />
              <button>Export CSV</button>
            </div>
          </div>
        </div>
        <div className="inline-block w-[948px] lg:w-[72vw] shadow rounded-b-lg   bg-white  pt-3 ">
          <table className="lg:w-[72vw]">
            <thead>
              <tr>
                <th className="p-4  text-left  border-b-2 border-gray-100  leading-4 text-[#6F767E] text-sm xl:text-base">
                  Id
                </th>
                <th className="w-[165px] border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  User
                </th>
                <th className="w-32 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  Phone Number
                </th>
                <th className="border-b-2 xl:w-24 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  Team
                </th>
                <th className="w-20 xl:w-32 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  Order Earnings
                </th>
                <th className="w-20 border-b-2 xl:w-24 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  Total Paid
                </th>
                <th className="w-20 border-b-2 xl:w-32 border-gray-100 text-left text-sm leading-4 text-[#6F767E] xl:text-base">
                  Final Balance
                </th>
                <th className="w-28 border-b-2 border-gray-100 text-left text-sm leading-4   text-[#6F767E] xl:text-base">
                  Vehicle Type
                </th>
                <th className="-translate-x-4 w-20 text-left   border-b-2 border-gray-100  text-sm leading-4 text-[#6F767E] pl-5 xl:text-base">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="w-[948px]">
                <td className="p-4 border-b-2 border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className=" py-4 border-b-2 border-gray-100">
                  <div className="flex flex-row text-xs font-medium leading-5 text-blue-900">
                    <img
                      src={myImage}
                      alt="avatar"
                      className="rounded-full w-10 "
                    />
                    <div className=" ml-3 flex flex-col">
                      <p className="font-bold text-base text-[#1A1D1F]">
                        Israr Khan
                      </p>
                      <p className="text-[#9A9FA5] font-semibold text-[13px]">
                        israr@gmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className=" py-4  border-b-2 text-blue-900 border-gray-100 text-xs leading-5 ">
                  <div className="text-[#83BF6E] w-[92px] text-center bg-[#EAFAE4] rounded">
                    +01232193218
                  </div>
                </td>
                <td className=" border-b-2  border-gray-100 text-sm leading-5">
                  <p className="bg-[#B5E4CA] w-16 font-semibold rounded-md text-center">
                    Lusk
                  </p>
                </td>
                <td className=" py-4  border-b-2 border-gray-100  text-xs leading-5 ">
                  <p className="bg-[#EFEFEF] font-semibold  w-12  rounded-md text-center">
                    $308.5
                  </p>
                </td>
                <td className="  border-b-2 border-gray-100 text-sm font-semibold text-[#6F767E] leading-5 text-center">
                  $100.0
                </td>
                <td className="  border-b-2 border-gray-100 text-sm font-semibold text-[#6F767E] leading-5">
                  $410.8
                </td>
                <td className="  border-b-2 border-gray-100 text-blue-900 text-xs leading-5">
                  <p className="text-[#1A1D1F] font-semibold text-sm text-center">
                    Bike
                  </p>
                </td>
                <td className="border-b-2 border-gray-100">
                  <div className="bg-[#EAFAE4] w-[59px] h-[24px] text-center rounded ">
                    <p className="text-[#83BF6E] font-semibold text-sm py-[2px]">
                      Active
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
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

export default AllRiders;
