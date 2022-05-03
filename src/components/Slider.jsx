import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({ start }) => {
    // console.log("iiiiiiiiiiiiii", start)

    return (
        <Carousel fade>
            {
                start.map((item , i) => (
                    <Carousel.Item  key={i}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                        {/* {console.log("KKKKKKKKKK", item)} */}
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}


export default Slider