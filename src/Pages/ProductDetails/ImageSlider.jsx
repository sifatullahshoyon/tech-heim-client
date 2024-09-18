import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import laptop1 from '../../assets/Photos/Product-Details/laptop1.png'
import frame1 from '../../assets/Photos/Product-Details/Frame 1.png'
import frame2 from '../../assets/Photos/Product-Details/Frame 2.png'
import frame3 from '../../assets/Photos/Product-Details/Frame 3.png'
import frame4 from '../../assets/Photos/Product-Details/Frame 4.png'
import frame5 from '../../assets/Photos/Product-Details/Frame 5.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageSlider = () => {
    return (
        <Carousel>
            <div>
                <img src={laptop1} />
            </div>
            <div>
                <img src={frame1} />
            </div>
            <div>
                <img src={frame2} />
            </div>
            <div>
                <img src={frame3} />
            </div>
            <div>
                <img src={frame4} />
            </div>
            <div>
                <img src={frame5} />
            </div>

        </Carousel>
    );
};

export default ImageSlider;