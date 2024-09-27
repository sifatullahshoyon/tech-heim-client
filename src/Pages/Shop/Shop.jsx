import NavigationBreadcrumb from "../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import Laptop from "../../assets/monitor.png";
import camera from "../../assets/camera.png";
import watch from "../../assets/watch-status.png";
import tab from "../../assets/tab.png";
import mobile from "../../assets/mobile.png";
import game from "../../assets/game.png";

import headphones from "../../assets/headphones.png";
import close from "../../assets/close.png";
import { useEffect, useState } from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";

import ProductCard from "../../Components/ProductCard/ProductCard";
import Advertising from "../../Components/Advertising/Advertising";
import Progress from "../../Components/Shared/Progress/Progress";

import useAxiosPublic from "../../Components/Hooks/useAxiosPublic/useAxiosPublic";

const Shop = () => {
  //  Tab state
  const [activeTab, setActiveTab] = useState("Laptop");
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

  // get all   product details and make an API call

  const [products, setProducts] = useState([]);

  
  const axiosPublic = useAxiosPublic();

  // tab category filter state
  const [productsLaptop, setProductsLaptop] = useState([]);
  const [productsCamera, setProductsCamera] = useState([]);
  const [productsWatch, setProductsWatch] = useState([]);
  const [productsTab, setProductsTab] = useState([]);
  const [productsMobile, setProductsMobile] = useState([]);
  const [productsGame, setProductsGame] = useState([]);

  const [productsHeadphone, setProductsHeadphone] = useState([]);

  // Use Set to store unique brand names,color,ram,driveSize,gpuBrand,processor,screenSize for laptop
  const uniqueBrandsForLaptop = [...new Set(productsLaptop?.map((item) => item?.brand))];
  const uniqueColorsForLaptop = [...new Set(productsLaptop?.map((item) => item?.color))];
  const uniqueRamsForLaptop = [...new Set(productsLaptop?.map((item) => item?.ram))];
  const uniqueDriveSizeForLaptop = [...new Set(productsLaptop?.map((item) => item?.driveSize))];
  const uniqueGpuBrandForLaptop = [...new Set(productsLaptop?.map((item) => item?.gpuBrand))];
  const uniqueProcessorForLaptop = [...new Set(productsLaptop?.map((item) => item?.processor))];
  const uniqueScreenSizeForLaptop = [...new Set(productsLaptop?.map((item) => item?.screenSize))];

  // Use Set to store unique brand names,color,ram,driveSize,gpuBrand,processor,screenSize for Camera
  const uniqueBrandsForCamera = [...new Set(productsCamera?.map((item) => item?.brand))];
  const uniqueColorsForCamera = [...new Set(productsCamera?.map((item) => item?.color))];
  const uniqueRamsForCamera = [...new Set(productsCamera?.map((item) => item?.ram))];
  const uniqueDriveSizeForCamera = [...new Set(productsCamera?.map((item) => item?.driveSize))];
  const uniqueGpuBrandForCamera = [...new Set(productsCamera?.map((item) => item?.gpuBrand))];
  const uniqueProcessorForCamera = [...new Set(productsCamera?.map((item) => item?.processor))];
  const uniqueScreenSizeForCamera = [...new Set(productsCamera?.map((item) => item?.screenSize))];

  // Use Set to store unique brand names,color,ram,driveSize,gpuBrand,processor,screenSize for Watch
  const uniqueBrandsForWatch = [...new Set(productsWatch?.map((item) => item?.brand))];
  const uniqueColorsForWatch = [...new Set(productsWatch?.map((item) => item?.color))];
  const uniqueRamsForWatch = [...new Set(productsWatch?.map((item) => item?.ram))];
  const uniqueDriveSizeForWatch = [...new Set(productsWatch?.map((item) => item?.driveSize))];
  const uniqueGpuBrandForWatch = [...new Set(productsWatch?.map((item) => item?.gpuBrand))];
  const uniqueProcessorForWatch = [...new Set(productsWatch?.map((item) => item?.processor))];
  const uniqueScreenSizeForWatch = [...new Set(productsWatch?.map((item) => item?.screenSize))];

  // Function to fetch all products and update state initial call
  const fetchProducts = async () => {
    try {
      const response = await axiosPublic.get("/products/all");
      const data = response.data;

      setProducts(data);
      setProductsLaptop(data.filter((cat) => cat.category === "Laptop"));
      setProductsCamera(data.filter((cat) => cat.category === "Camera"));
      setProductsWatch(data.filter((cat) => cat.category === "Watch"));
      setProductsTab(data.filter((cat) => cat.category === "Tab"));
      setProductsMobile(data.filter((cat) => cat.category === "Mobile"));
      setProductsGame(data.filter((cat) => cat.category === "Game"));

      setProductsHeadphone(data.filter((cat) => cat.category === "Headphone"));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

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

      <div className="flex justify-center items-center mb-[56px] ">
        <div className="flex gap-[10px] overflow-x-auto flex-nowrap sm:grid sm:grid-cols-9 scrollbar-hide">
          <button
            onClick={() => {
              handleClearAll();
              setActiveTab("Laptop");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Laptop" ? "active" : ""
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={Laptop} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Laptop" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Laptop
            </p>
          </button>

          <button
            onClick={() => {
              handleClearAll();
              setActiveTab("Camera");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Camera" ? "active underline text-[#0C68F4]" : "text-[#444444]"
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={camera} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Camera" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Camera
            </p>
          </button>

          <button
            onClick={() => {
              handleClearAll();
              setActiveTab("Watch");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Watch" ? "active underline" : ""
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={watch} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Watch" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Watch
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab("Watch");
              setActiveTab("Tab");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Tab" ? "active underline text-[#0C68F4]" : "text-[#444444]"
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={tab} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Tab" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Tab
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab("Mobile");
              setActiveTab("Watch");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Mobile" ? "active underline text-[#0C68F4]" : "text-[#444444]"
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={mobile} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Mobile" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Mobile
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab("Game");
              setActiveTab("Watch");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Game" ? "active underline text-[#0C68F4]" : "text-[#444444]"
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={game} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Game" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Game
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab("Headphones");
              setActiveTab("Watch");
            }}
            className={`cursor-pointer px-[15px] py-[8px] ${
              activeTab === "Headphones" ? "active underline text-[#0C68F4]" : "text-[#444444]"
            }`}
          >
            <div className="w-[48px] h-[48px] mx-auto">
              <img className="w-full h-full hover:opacity-50" src={headphones} alt="" />
            </div>
            <p
              className={`text-[20px] font-light mt-[16px] text-center hover:text-[#0C68F4] uppercase ${
                activeTab === "Headphones" ? "active underline text-[#0C68F4]" : "text-[#444444]"
              }`}
            >
              Headphones
            </p>
          </button>
        </div>
      </div>

      {/* Tab button end  */}
      {/* Filter review box start  */}
      <div className="mb-[40px] px-[8px]">
        <div className="flex flex-wrap gap-[8px]">
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
                className="flex justify-between items-center w-[100px] sm:w-[100px] md:w-[200px] h-[40px] rounded-[8px] border-[1px] border-solid border-black px-[10px] py-[8px]"
              >
                <p className="text-sm truncate uppercase">{filter}</p>
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
                  <img className="w-[16px] h-[16px]" src={close} alt="close" />
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Filter review box end */}

      {/* filter and Product start div */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 p-4 lg:p-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg lg:text-xl font-medium">Filters</p>
              <button
                onClick={() => handleClearAll()}
                className="text-sm lg:text-base text-blue-600"
              >
                Clear All
              </button>
            </div>
            {/* Laptop filter sidebar */}
            {activeTab === "Laptop" && (
              <div>
                {/* Filter with Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setBrand(!brand)}
                    className="text-lg lg:text-xl font-light w-full border-b border-t"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueBrandsForLaptop?.map((brandName) => (
                        <div key={brandName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{brandName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
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
                <div className="mb-4">
                  <button
                    onClick={() => setColor(!color)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueColorsForLaptop?.map((colorName) => (
                        <div key={colorName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{colorName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedColors.includes(colorName)}
                              onChange={() => handleColorChange(colorName)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with RAM */}
                <div className="mb-4">
                  <button
                    onClick={() => setRam(!ram)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueRamsForLaptop?.map((ramSize) => (
                        <div className="form-control mb-2" key={ramSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{ramSize} GB</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedRamSizes.includes(ramSize)}
                              onChange={() => handleRamChange(ramSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Drive Size */}
                <div className="mb-4">
                  <button
                    onClick={() => setDrive(!drive)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueDriveSizeForLaptop?.map((driveSize) => (
                        <div className="form-control mb-2" key={driveSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {driveSize} GB
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedDriveSizes.includes(driveSize)}
                              onChange={() => handleDriveChange(driveSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with GPU Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setGpu(!gpu)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueGpuBrandForLaptop?.map((gpuBrand) => (
                        <div className="form-control mb-2" key={gpuBrand}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{gpuBrand}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedGpuBrands.includes(gpuBrand)}
                              onChange={() => handleGpuChange(gpuBrand)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Processor */}
                <div className="mb-4">
                  <button
                    onClick={() => setProcessor(!processor)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueProcessorForLaptop?.map((processorType) => (
                        <div className="form-control mb-2" key={processorType}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {processorType}
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedProcessor.includes(processorType)}
                              onChange={() => handleProcessorChange(processorType)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* filter with Processor end */}

                {/* filter with Screen Size start */}
                <div className=" ">
                  <button
                    onClick={() => setScreen(!screen)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueScreenSizeForLaptop?.map((screenSize) => (
                        <div className="form-control" key={screenSize}>
                          <label className="label cursor-pointer px-[20px]">
                            <p className="label-text text-[20px] font-light">{screenSize} </p>
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
            )}
            {/* Watch filter sidebar */}
            {activeTab === "Watch" && (
              <div>
                {/* Filter with Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setBrand(!brand)}
                    className="text-lg lg:text-xl font-light w-full border-b border-t"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueBrandsForWatch?.map((brandName) => (
                        <div key={brandName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{brandName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
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
                <div className="mb-4">
                  <button
                    onClick={() => setColor(!color)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueColorsForWatch?.map((colorName) => (
                        <div key={colorName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{colorName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedColors.includes(colorName)}
                              onChange={() => handleColorChange(colorName)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with RAM */}
                <div className="mb-4">
                  <button
                    onClick={() => setRam(!ram)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueRamsForWatch?.map((ramSize) => (
                        <div className="form-control mb-2" key={ramSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{ramSize} GB</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedRamSizes.includes(ramSize)}
                              onChange={() => handleRamChange(ramSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Drive Size */}
                <div className="mb-4">
                  <button
                    onClick={() => setDrive(!drive)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueDriveSizeForWatch?.map((driveSize) => (
                        <div className="form-control mb-2" key={driveSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {driveSize} GB
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedDriveSizes.includes(driveSize)}
                              onChange={() => handleDriveChange(driveSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with GPU Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setGpu(!gpu)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueGpuBrandForWatch?.map((gpuBrand) => (
                        <div className="form-control mb-2" key={gpuBrand}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{gpuBrand}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedGpuBrands.includes(gpuBrand)}
                              onChange={() => handleGpuChange(gpuBrand)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Processor */}
                <div className="mb-4">
                  <button
                    onClick={() => setProcessor(!processor)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueProcessorForWatch?.map((processorType) => (
                        <div className="form-control mb-2" key={processorType}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {processorType}
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedProcessor.includes(processorType)}
                              onChange={() => handleProcessorChange(processorType)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* filter with Processor end */}

                {/* filter with Screen Size start */}
                <div className=" ">
                  <button
                    onClick={() => setScreen(!screen)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueScreenSizeForWatch?.map((screenSize) => (
                        <div className="form-control" key={screenSize}>
                          <label className="label cursor-pointer px-[20px]">
                            <p className="label-text text-[20px] font-light">{screenSize} </p>
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
            )}
            {/* Camera filter sidebar */}
            {activeTab === "Camera" && (
              <div>
                {/* Filter with Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setBrand(!brand)}
                    className="text-lg lg:text-xl font-light w-full border-b border-t"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueBrandsForCamera?.map((brandName) => (
                        <div key={brandName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{brandName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
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
                <div className="mb-4">
                  <button
                    onClick={() => setColor(!color)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueColorsForCamera?.map((colorName) => (
                        <div key={colorName} className="form-control mb-2">
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{colorName}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedColors.includes(colorName)}
                              onChange={() => handleColorChange(colorName)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with RAM */}
                <div className="mb-4">
                  <button
                    onClick={() => setRam(!ram)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueRamsForCamera?.map((ramSize) => (
                        <div className="form-control mb-2" key={ramSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{ramSize} GB</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedRamSizes.includes(ramSize)}
                              onChange={() => handleRamChange(ramSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Drive Size */}
                <div className="mb-4">
                  <button
                    onClick={() => setDrive(!drive)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueDriveSizeForCamera?.map((driveSize) => (
                        <div className="form-control mb-2" key={driveSize}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {driveSize} GB
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedDriveSizes.includes(driveSize)}
                              onChange={() => handleDriveChange(driveSize)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with GPU Brand */}
                <div className="mb-4">
                  <button
                    onClick={() => setGpu(!gpu)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueGpuBrandForCamera?.map((gpuBrand) => (
                        <div className="form-control mb-2" key={gpuBrand}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">{gpuBrand}</p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedGpuBrands.includes(gpuBrand)}
                              onChange={() => handleGpuChange(gpuBrand)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter with Processor */}
                <div className="mb-4">
                  <button
                    onClick={() => setProcessor(!processor)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueProcessorForCamera?.map((processorType) => (
                        <div className="form-control mb-2" key={processorType}>
                          <label className="label cursor-pointer flex items-center">
                            <p className="label-text text-lg lg:text-xl uppercase">
                              {processorType}
                            </p>
                            <input
                              type="checkbox"
                              className="checkbox ml-2"
                              checked={selectedProcessor.includes(processorType)}
                              onChange={() => handleProcessorChange(processorType)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* filter with Processor end */}

                {/* filter with Screen Size start */}
                <div className=" ">
                  <button
                    onClick={() => setScreen(!screen)}
                    className="text-lg lg:text-xl font-light w-full border-b"
                  >
                    <div className="flex justify-between items-center py-2 lg:py-3">
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
                      {uniqueScreenSizeForCamera?.map((screenSize) => (
                        <div className="form-control" key={screenSize}>
                          <label className="label cursor-pointer px-[20px]">
                            <p className="label-text text-[20px] font-light">{screenSize} </p>
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
            )}
          </div>
        </div>
        {/* product grid  div start*/}
        <div className="w-full lg:w-3/4 p-4 lg:p-6">
          {/* sort start */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end mb-4">
            <select className="select select-bordered select-sm w-[200px] max-w-xs ">
              <option disabled selected>
                Sort BY
              </option>
              <option>Price: ascending </option>
              <option>Price: descending </option>
            </select>
          </div>
          {/* sort end */}

          {/*showing product  start */}
          {activeTab === "Laptop" && (
            <div className="mt-8 md:mt-10 lg:mt-12">
              {productsLaptop?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                  {productsLaptop?.map((pc, i) => (
                    <ProductCard key={i} pc={pc} />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-32">
                  <p className="text-center text-gray-500 text-base md:text-lg lg:text-xl">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab == "Camera" && (
            <div className="mt-[30px]">
              {productsCamera?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsCamera?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab == "Watch" && (
            <div className="mt-[30px]">
              {productsWatch?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsWatch?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab == "Tab" && (
            <div className="mt-[30px]">
              {productsTab?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsTab?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab == "Mobile" && (
            <div className="mt-[30px]">
              {productsMobile?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsMobile?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab == "Game" && (
            <div className="mt-[30px]">
              {productsGame?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsGame?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab == "Headphones" && (
            <div className="mt-[30px]">
              {productsHeadphone?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productsHeadphone?.map((pc, i) => (
                    <ProductCard key={i} pc={pc}></ProductCard>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <p className="text-center text-[30px] font-bold text-gray-500">
                    No products available
                  </p>
                </div>
              )}
            </div>
          )}
          {/*showing product end */}

          {/* product pagination start */}
          <div className="flex justify-center mt-[20px]">
            <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
            </div>
          </div>
          {/* product pagination end */}

          {/* Advertising start */}
          <Advertising></Advertising>
          {/* Advertising end */}
        </div>
      </div>
      {/* filter and Product end div */}
      <Progress></Progress>
    </div>
  );
};

export default Shop;
