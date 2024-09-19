import React from "react";
import headphone from "../../../../../assets/headphone.png";
const BlogProductDetails = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        5 Things You Probably Didn’t Know About Headphones
      </h2>
      <div className="my-2">
        <span>By Geaorge larens on March , 28 , 2023</span>
      </div>
      <div>
        <img
          src={headphone}
          className="max-w-[808px] max-h-[414px] object-cover mb-6"
          alt=""
        />

        {/* details */}
        <div>
          <p className="my-4">
            Headphones have become an integral part of our daily lives, allowing
            us to enjoy music, podcasts, and calls with convenience and privacy.
            While most of us are familiar with their basic functions, there are
            several intriguing facts about headphones that might surprise you.
            In this article, we'll delve into eight things you probably didn't
            know about headphones, shedding light on their history, technology,
            and unique features.
          </p>

          <ol type="1" className="list-decimal list-inside">
            <li className="font-semibold">Stereo Sound Perception</li>
            <span className="my-2">
              Ever wondered how headphones manage to create a three-dimensional
              sound experience? This phenomenon is called binaural perception,
              which utilizes the slight time differences it takes for sound to
              reach each ear, thus tricking the brain into perceiving depth and
              direction in audio
            </span>

            <li className="font-semibold">Noise-Canceling Magic</li>
            <span className="my-2">
              Noise-canceling headphones use a sophisticated technology that
              analyzes external sounds and emits an "anti-noise" signal to
              counteract them. This process results in the suppression of
              unwanted background noise, offering a peaceful listening
              experience even in bustling environments.
            </span>
            <li className="font-semibold">Bone Conduction Technology</li>
            <span className="my-2">
              Some headphones, particularly designed for sports and outdoor
              activities, employ bone conduction technology. Instead of covering
              or inserting into the ears, these headphones sit on your
              cheekbones and transmit sound vibrations through your bones
              directly to the inner ear, leaving your ears open to hear ambient
              sounds.
            </span>
            <li className="font-semibold">Virtual Surround Sound</li>
            <span className="my-2">
              High-end headphones offer virtual surround sound, which simulates
              a multi-speaker setup for a cinema-like experience. This is
              achieved by using advanced algorithms to manipulate audio signals,
              creating the illusion that sound is coming from various
              directions.
            </span>
            <li className="font-semibold">Wired vs. Wireless</li>
            <span className="my-2">
              While wireless headphones are incredibly convenient, wired
              headphones can still offer superior audio quality due to the lack
              of data compression and transmission loss associated with wireless
              technology.
            </span>
          </ol>
        </div>

        <div className="flex items-center justify-end my-4">
          <span className="flex items-center gap-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 22.75H9.5C4.07 22.75 1.75 20.43 1.75 15V9C1.75 3.57 4.07 1.25 9.5 1.25H11.5C11.91 1.25 12.25 1.59 12.25 2C12.25 2.41 11.91 2.75 11.5 2.75H9.5C4.89 2.75 3.25 4.39 3.25 9V15C3.25 19.61 4.89 21.25 9.5 21.25H15.5C20.11 21.25 21.75 19.61 21.75 15V13C21.75 12.59 22.09 12.25 22.5 12.25C22.91 12.25 23.25 12.59 23.25 13V15C23.25 20.43 20.93 22.75 15.5 22.75Z"
                fill="#0C0C0C"
              />
              <path
                d="M9.00032 17.6901C8.39032 17.6901 7.83032 17.4701 7.42032 17.0701C6.93032 16.5801 6.72032 15.8701 6.83032 15.1201L7.26032 12.1101C7.34032 11.5301 7.72032 10.7801 8.13032 10.3701L16.0103 2.49006C18.0003 0.500059 20.0203 0.500059 22.0103 2.49006C23.1003 3.58006 23.5903 4.69006 23.4903 5.80006C23.4003 6.70006 22.9203 7.58006 22.0103 8.48006L14.1303 16.3601C13.7203 16.7701 12.9703 17.1501 12.3903 17.2301L9.38032 17.6601C9.25032 17.6901 9.12032 17.6901 9.00032 17.6901ZM17.0703 3.55006L9.19032 11.4301C9.00032 11.6201 8.78032 12.0601 8.74032 12.3201L8.31032 15.3301C8.27032 15.6201 8.33032 15.8601 8.48032 16.0101C8.63032 16.1601 8.87032 16.2201 9.16032 16.1801L12.1703 15.7501C12.4303 15.7101 12.8803 15.4901 13.0603 15.3001L20.9403 7.42006C21.5903 6.77006 21.9303 6.19006 21.9803 5.65006C22.0403 5.00006 21.7003 4.31006 20.9403 3.54006C19.3403 1.94006 18.2403 2.39006 17.0703 3.55006Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.3496 9.83003C20.2796 9.83003 20.2096 9.82003 20.1496 9.80003C17.5196 9.06003 15.4296 6.97003 14.6896 4.34003C14.5796 3.94003 14.8096 3.53003 15.2096 3.41003C15.6096 3.30003 16.0196 3.53003 16.1296 3.93003C16.7296 6.06003 18.4196 7.75003 20.5496 8.35003C20.9496 8.46003 21.1796 8.88003 21.0696 9.28003C20.9796 9.62003 20.6796 9.83003 20.3496 9.83003Z"
                fill="#0C0C0C"
              />
            </svg>
            <span>3 Comment</span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7804 22.1H12.9804C12.4204 22.1 11.2004 21.93 10.5504 21.28L7.52035 18.94L8.44035 17.75L11.5404 20.15C11.7904 20.39 12.4204 20.59 12.9804 20.59H16.7804C17.6804 20.59 18.6504 19.87 18.8504 19.06L21.2704 11.71C21.4304 11.27 21.4004 10.87 21.1904 10.58C20.9704 10.27 20.5704 10.09 20.0804 10.09H16.0804C15.5604 10.09 15.0804 9.86999 14.7504 9.48999C14.4104 9.09999 14.2604 8.57999 14.3404 8.03999L14.8404 4.82999C14.9604 4.26999 14.5804 3.63999 14.0404 3.45999C13.5504 3.27999 12.9204 3.53999 12.7004 3.85999L8.60035 9.95999L7.36035 9.12999L11.4604 3.02999C12.0904 2.08999 13.4704 1.63999 14.5504 2.04999C15.8004 2.45999 16.6004 3.83999 16.3204 5.11999L15.8304 8.26999C15.8204 8.33999 15.8204 8.43999 15.8904 8.51999C15.9404 8.56999 16.0104 8.59999 16.0904 8.59999H20.0904C21.0704 8.59999 21.9204 9.00999 22.4204 9.71999C22.9104 10.41 23.0104 11.32 22.6904 12.2L20.3004 19.48C19.9304 20.93 18.3904 22.1 16.7804 22.1Z"
                fill="#0C0C0C"
              />
              <path
                d="M5.87988 20.9999H4.87988C3.02988 20.9999 2.12988 20.1299 2.12988 18.3499V8.5499C2.12988 6.7699 3.02988 5.8999 4.87988 5.8999H5.87988C7.72988 5.8999 8.62988 6.7699 8.62988 8.5499V18.3499C8.62988 20.1299 7.72988 20.9999 5.87988 20.9999ZM4.87988 7.3999C3.78988 7.3999 3.62988 7.6599 3.62988 8.5499V18.3499C3.62988 19.2399 3.78988 19.4999 4.87988 19.4999H5.87988C6.96988 19.4999 7.12988 19.2399 7.12988 18.3499V8.5499C7.12988 7.6599 6.96988 7.3999 5.87988 7.3999H4.87988Z"
                fill="#0C0C0C"
              />
            </svg>

            <span>3 Likes</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogProductDetails;
