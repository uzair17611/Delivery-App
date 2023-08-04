import searchIcon from "../../assets/searchIcon.svg";
import map from "../../assets/RidersTracking/map.png";
const RidersTracking = () => {
  return (
    <div>
      <h3 className="font-semibold xl:text-[40px]  mb-4 ml-1 lg:text-3xl tracking-[-2%] leading-[48px] flex flex-col">
        Riders tracking
      </h3>
      <div className="rounded-lg lg:w-[72vw]  h-[75vh] py-4 bg-white shadow-lg">
        <div className="flex flex-row gap-3 xl:gap-5 ml-4">
          <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
          <div className="font-semibold text-xl leading-8 py-1">Riders</div>

          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                <img src={searchIcon} alt="search icon" />
              </div>
              <input
                type="search"
                className="block focus:outline-none p-3 pl-10  font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                placeholder="Search rider"
                required
              />
            </div>
          </form>
        </div>

        <img
          className=" rounded-xl border-2 border-solid border-[#CDCDCD] mt-2 mx-auto w-[calc(100%-5rem)] h-[calc(100%-5rem)]"
          style={{ objectFit: "cover" }}
          src={map}
          alt="map"
        />
      </div>
    </div>
  );
};

export default RidersTracking;
