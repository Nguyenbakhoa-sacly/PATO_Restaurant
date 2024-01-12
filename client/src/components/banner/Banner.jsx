import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className}
      style={{
        ...style,
        display: "block ", background: 'red'
      }}
      onClick={onClick}
    >
      NEXT
    </div>
  )
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className}
      style={{
        ...style,
        display: "block ", background: 'Orange'
      }}
      onClick={onClick}
    >
      BACK
    </div>
  )
};
const Banner = () => {
  const slider = React.useRef(null);
  const banner = [
    {
      id: 1,
      img: 'https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp'
    },
    {
      id: 2,
      img: 'https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp'
    },
    {
      id: 3,
      img: 'https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp'
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      {/* group-hover/edit: Làm hover */}
      <div className='w-full group/edit h-screen relative'>
        <div className='absolute w-full h-screen z-20 flex justify-center items-center'>
          <button
            onClick={() => slider?.current?.slickPrev()}
            className=' group-hover/edit:block hidden absolute left-0 btn btn-outline btn-error ml-6'>
            <FaAngleLeft className='w-5 h-5 text-slate-200' />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className=' group-hover/edit:block hidden absolute right-0 btn btn-outline btn-error mr-6'>
            <FaAngleRight className='w-5 h-5 text-slate-200' />
          </button>
        </div>
        <div className=' h-screen w-full z-10 absolute flex flex-col justify-center items-center '>
          <p className='text-3xl md:text-6xl text-white font-bold mb-8'>Welcome to</p>
          <p className='text-4xl md:text-8xl text-white font-bold mb-8'>PATO PLACE</p>
        </div>
        <Slider ref={slider} {...settings}
          className='overflow-hidden'
        >
          {
            banner?.map((item, index) => (
              <img
                className='w-full h-screen object-cover'
                key={index} src={item.img} />
            ))
          }
        </Slider>
      </div>
    </>
  )
}

export default Banner
