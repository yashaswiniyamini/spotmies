"use client";
import React from "react";
import Wrapper from "./reusableComponent/wrapper";
import Carousel from "react-multi-carousel";
import { testimonials } from "@/constants";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 70,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <Wrapper title={"What our client say's about us"} className="bg-bg2">
      <div className="flex flex-wrap w-[100%] items-center justify-center"></div>
      <Carousel responsive={responsive} partialVisible={true}>
        {testimonials.map((testimonial, index) =>
          testimonialCard({ ...testimonial, key: index })
        )}
      </Carousel>
    </Wrapper>
  );
  function testimonialCard({ text, image, name, position, when, key }) {
    return (
      <div
        key={key}
        className="bg-bg2 flex flex-col justify-between w-[80vw] min-h-[300px] max-h-[350px] md:max-h-[350px] md:min-h-[300px] md:w-[500px] gradient-05 rounded-2xl m-2 md:p-6 p-4 shadow-sm border border-bg1"
      >
        {/* <div className="flex flex-col h-full justify-between"> */}
        <p className="text-primary2 opacity-80 text-md  md:text-xl  text-justify text-ellipsis">
          "{text}"
        </p>

        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-row mt-[10px]">
            <img
              src={image}
              alt=""
              className="w-[35px] h-[35px] md:w-[60px] md:h-[60px] object-cover rounded-full"
            />
            <div className="flex flex-col ml-1 md:ml-4">
              <p className="text-primary2 font-bold text-md md:text-xl">
                {name}
              </p>
              <p className="text-primary2 opacity-70 text-xs md:text-md">
                {position}
              </p>
            </div>
          </div>
          <p className="text-primary2 opacity-50 text-[9px] md:text-xs">
            {when}
          </p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
