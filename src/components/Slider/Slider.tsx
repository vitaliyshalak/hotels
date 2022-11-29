import React, { Children, useState, useMemo } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav } from './SliderNav';

import type { SliderPropsInterface } from './types';

import './styles.scss';

export const Slider = ({ children, itemsToShow = 1 }: SliderPropsInterface): JSX.Element => {
  const [swiper, setSwiper] = useState<any>(null);

  const canSlide = useMemo(() => children.length > 1, [children.length]);

  return (
    <div className="slider">
      <Swiper
        modules={[Navigation]}
        slidesPerView={itemsToShow}
        className="slider__swipe"
        navigation={{
          nextEl: '.slider__nav--forward',
          prevEl: '.slider__nav--backward'
        }}
        loop={canSlide}
        onSwiper={setSwiper}
      >
        <SliderNav
          type="backward" onClick={() => swiper.slidePrev()}
          isVisible={canSlide}
        />
        {Children.toArray(children).map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
        <SliderNav
          onClick={() => swiper.slideNext()}
          isVisible={canSlide}
        />
      </Swiper>
    </div>
  );
};
