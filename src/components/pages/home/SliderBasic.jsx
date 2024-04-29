import React from 'react'
import Slider from "react-slick";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Link } from 'react-router-dom';


const SliderBasic = () => {
    
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", right: 0, zIndex: 10 }}
            onClick={onClick}>
            <PiCaretRightBold />
          </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", left: 0, zIndex: 10 }}
            onClick={onClick}>
            <PiCaretLeftBold />
          </div>
        );
      }
    
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      return (
        <Slider {...settings}>
            <div className='flex'>
                <div>
                <Link to="#" className='border-black rounded-md py-1 px-2 bg-black text-white font-semibold'>All</Link>
                </div>

                <div>
                <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Music</Link>
                </div>

                <div>
                    <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Playlists</Link>
                </div>

                <div>
                    <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Korean dramas</Link>
                </div>

                <div>
                      <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Jennie Kim</Link>
                </div>

                <div>
                     <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>J-Pop</Link>
                </div>

                <div>
                    <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Gaming</Link>
                </div>

                <div>
                    <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Live</Link>
                </div>

                <div>
                <Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Variety shows</Link>
                </div>
          </div>
    
    
    
         
    
        </Slider>
     
      );
    }

export default SliderBasic
