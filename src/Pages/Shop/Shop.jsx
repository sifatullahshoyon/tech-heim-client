import React, { useState } from "react";
import NavigationBreadcrumb from "../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import Laptop from "../../assets/monitor.png";
import camera from "../../assets/camera.png";
import watch from "../../assets/watch-status.png";
import tab from "../../assets/tab.png";
import mobile from "../../assets/mobile.png";
import game from "../../assets/game.png";
import devices from "../../assets/devices.png";
import data from "../../assets/data.png";
import headphones from "../../assets/headphones.png";
import close from "../../assets/close.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Shop = () => {
  //  filter  state
  const [brand, setBrand] = useState(false);
  const [color, setColor] = useState(false);
  const [ram, setRam] = useState(false);
  const [drive, setDrive] = useState(false);
  const [gpu, setGpu] = useState(false);
  const [processor, setProcessor] = useState(false);
  const [screen, setScreen] = useState(false);

  // selected  filter options  state
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRamSizes, setSelectedRamSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDriveSizes, setSelectedDriveSizes] = useState([]);
  const [selectedGpuBrands, setSelectedGpuBrands] = useState([]);
  const [selectedProcessor, setSelectedProcessor] = useState([]);
  const [selectedScreenSize, setSelectedScreenSize] = useState([]);

  //   filter option select function
  const handleBrandChange = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName) ? prev.filter((name) => name !== brandName) : [...prev, brandName]
    );
  };
  const handleRamChange = (ramSize) => {
    setSelectedRamSizes((prev) =>
      prev.includes(ramSize) ? prev.filter((name) => name !== ramSize) : [...prev, ramSize]
    );
  };

  const handleColorChange = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((name) => name !== colorName) : [...prev, colorName]
    );
  };
  const handleDriveChange = (driveSize) => {
    setSelectedDriveSizes((prev) =>
      prev.includes(driveSize) ? prev.filter((name) => name !== driveSize) : [...prev, driveSize]
    );
  };
  const handleGpuChange = (gpuBrand) => {
    setSelectedGpuBrands((prev) =>
      prev.includes(gpuBrand) ? prev.filter((name) => name !== gpuBrand) : [...prev, gpuBrand]
    );
  };
  const handleProcessorChange = (processorType) => {
    setSelectedProcessor((prev) =>
      prev.includes(processorType)
        ? prev.filter((name) => name !== processorType)
        : [...prev, processorType]
    );
  };
  const handleScreenChange = (screenSize) => {
    setSelectedScreenSize((prev) =>
      prev.includes(screenSize) ? prev.filter((name) => name !== screenSize) : [...prev, screenSize]
    );
  };

  //   clear all filter option function

  const handleClearAll = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedDriveSizes([]);
    setSelectedGpuBrands([]);
    setSelectedProcessor([]);
    setSelectedRamSizes([]);
    setSelectedScreenSize([]);
    setBrand(false);
    setColor(false);
    setDrive(false);
    setGpu(false);
    setProcessor(false);
    setRam(false);
    setScreen(false);
  };

  return (
    <div className="container mx-auto">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      {/* Tab button start  */}
      <div className="flex justify-center items-center mb-[56px]">
        <div className="grid grid-cols-9 gap-[10px] ">
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50 " src={Laptop} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ">
              Laptop
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={camera} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ">
              camera
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={watch} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ">
              watch
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={tab} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ">
              tab
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full  hover:opacity-50" src={mobile} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center  uppercase">
              mobile
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={game} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase">
              game
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={devices} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase">
              devices
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={data} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase">
              data
            </p>
          </div>
          <div className="cursor-pointer px-[15px] py-[8px]">
            <div className="w-[48px] h-[48px] mx-auto ">
              <img className="w-full h-full hover:opacity-50" src={headphones} alt="" />
            </div>
            <p className="text-[#444444] text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase">
              headphones
            </p>
          </div>
        </div>
      </div>
      {/* Tab button end  */}
      {/* Filter review box start  */}
      <div className="mb-[40px]">
        <div className="flex">
          {selectedBrands
            .concat(selectedColors)
            .concat(selectedRamSizes)
            .concat(selectedDriveSizes)
            .concat(selectedGpuBrands)
            .concat(selectedProcessor)
            .concat(selectedScreenSize)
            .map((filter) => (
              <div
                key={filter}
                className="flex justify-between items-center w-[133px] h-[40px] rounded-[8px] border-[1px] border-solid border-black px-[10px] py-[8px] mr-[8px]"
              >
                <p>{filter}</p>
                <button
                  onClick={() => {
                    setSelectedBrands((prev) => prev.filter((name) => name !== filter));
                    setSelectedColors((prev) => prev.filter((name) => name !== filter));
                    setSelectedRamSizes((prev) => prev.filter((name) => name !== filter));
                    setSelectedDriveSizes((prev) => prev.filter((name) => name !== filter));
                    setSelectedGpuBrands((prev) => prev.filter((name) => name !== filter));
                    setSelectedProcessor((prev) => prev.filter((name) => name !== filter));
                    setSelectedScreenSize((prev) => prev.filter((name) => name !== filter));
                  }}
                >
                  <img className="w-[24px] h-[24px]" src={close} alt="close" />
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Filter review box end */}
      {/* filter and Product start div */}
      <div className="flex ">
        <div className="w-1/4  mr-[24px] px-[16px]">
          <div className="flex justify-between items-center ">
            <p className="text-[24px] font-medium">Filters</p>
            <button
              onClick={() => handleClearAll()}
              className="text-[16px] text-[#0C68F4]  font-normal"
            >
              Clear All
            </button>
          </div>

          {/* Filter with Brand */}
          <div>
            <button
              onClick={() => setBrand(!brand)}
              className="text-[20px] font-light w-full border-b-[1px] border-t-[1px]"
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>Brand</p>
                {brand ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                brand ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["Asus", "Acer", "Apple", "Dell"].map((brandName) => (
                  <div key={brandName} className="form-control">
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {brandName} <span className="text-[14px] text-[#B4B4B4]">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedBrands.includes(brandName)}
                        onChange={() => handleBrandChange(brandName)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter with Color */}
          <div>
            <button
              onClick={() => setColor(!color)}
              className="text-[20px] font-light w-full border-b-[1px]"
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>Color</p>
                {color ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                color ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["Red", "Blue", "Silver", "White"].map((colorName) => (
                  <div key={colorName} className="form-control">
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {colorName} <span className="text-[14px] text-[#B4B4B4]">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedColors.includes(colorName)}
                        onChange={() => handleColorChange(colorName)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter with RAM start */}
          <div className=" ">
            <button
              onClick={() => setRam(!ram)}
              className="text-[20px] font-light w-full border-b-[1px] "
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>RAM</p>
                {ram ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                ram ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["32 GB", "16 GB", "12 GB", "8 GB"].map((ramSize) => (
                  <div className="form-control" key={ramSize}>
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {ramSize} <span className="text-[14px] text-[#B4B4B4] fon">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedRamSizes.includes(ramSize)}
                        onChange={() => handleRamChange(ramSize)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter with RAM end */}

          {/* filter with Drive Size start */}
          <div className=" ">
            <button
              onClick={() => setDrive(!drive)}
              className="text-[20px] font-light w-full border-b-[1px] "
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>Drive Size</p>
                {drive ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                drive ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["512 GB", "256 GB", "128 GB", "64 GB"].map((driveSize) => (
                  <div className="form-control" key={driveSize}>
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {driveSize} <span className="text-[14px] text-[#B4B4B4] fon">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedDriveSizes.includes(driveSize)}
                        onChange={() => handleDriveChange(driveSize)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter with Drive Size end */}

          {/* filter with GPU Brand start */}
          <div className=" ">
            <button
              onClick={() => setGpu(!gpu)}
              className="text-[20px] font-light w-full border-b-[1px] "
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>GPU Brand</p>
                {gpu ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                gpu ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["NVIDIA", "Intel", "AMD", "Apple"].map((gpuBrand) => (
                  <div className="form-control" key={gpuBrand}>
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {gpuBrand} <span className="text-[14px] text-[#B4B4B4] fon">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedGpuBrands.includes(gpuBrand)}
                        onChange={() => handleGpuChange(gpuBrand)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter with GPU Brand end */}

          {/* filter with Processor start */}
          <div className=" ">
            <button
              onClick={() => setProcessor(!processor)}
              className="text-[20px] font-light w-full border-b-[1px] "
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>Processor</p>
                {processor ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                processor ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {["Intel Core i5", "Intel Core i7", "Intel Core i9", "AMD Ryzen 9"].map(
                  (processorType) => (
                    <div className="form-control" key={processorType}>
                      <label className="label cursor-pointer px-[20px]">
                        <p className="label-text text-[20px] font-light">
                          {processorType}{" "}
                          <span className="text-[14px] text-[#B4B4B4] fon">(183)</span>
                        </p>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedProcessor.includes(processorType)}
                          onChange={() => handleProcessorChange(processorType)}
                        />
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* filter with Processor end */}

          {/* filter with Screen Size start */}
          <div className=" ">
            <button
              onClick={() => setScreen(!screen)}
              className="text-[20px] font-light w-full border-b-[1px] "
            >
              <div className="flex justify-between items-center w-full py-[16px]">
                <p>Screen Size</p>
                {screen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                screen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >
              <div>
                {['13" - 13.9"', '14" - 14.9"', '15" - 15.9"', '16" - 16.9"'].map((screenSize) => (
                  <div className="form-control" key={screenSize}>
                    <label className="label cursor-pointer px-[20px]">
                      <p className="label-text text-[20px] font-light">
                        {screenSize} <span className="text-[14px] text-[#B4B4B4] fon">(183)</span>
                      </p>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedScreenSize.includes(screenSize)}
                        onChange={() => handleScreenChange(screenSize)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter with Screen Size end */}
        </div>
        <div className="w-3/4 ">
          <p>p</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
