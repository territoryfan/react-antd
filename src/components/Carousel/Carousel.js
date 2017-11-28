import React from 'react';
import { Carousel } from 'antd-mobile';
import "./Carousel.less";
import banner0 from "./../../static/images/banner/banner0.jpg";
import banner1 from "./../../static/images/banner/banner1.jpg";
import banner2 from "./../../static/images/banner/banner2.jpg";
export default class CarouselPiao extends React.Component {
  render() {
    return (
        <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <a href="http://localhost:3000/"><img src={banner0} alt=""/></a>
          <a href="http://localhost:3000/"><img src={banner1} alt=""/></a>
          <a href="http://localhost:3000/"><img src={banner2} alt=""/></a>
        </Carousel>
    );
  }
}
