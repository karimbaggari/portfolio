import React from 'react'
import AVTR1 from '../../assets/me.png';
import { Pagination } from 'swiper';
import {Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonials.css';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>

        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one"/>
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>lorem ipsum </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one"/>
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>lorem ipsum </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one"/>
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>lorem ipsum </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one"/>
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>lorem ipsum </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials;