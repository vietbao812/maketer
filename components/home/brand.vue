<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
};

const modules = [Autoplay, Pagination];
</script>

<template>
  <section class="px-[15px] xl:px-[100px] py-[60px] overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :breakpoints="{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }"
      class="slide-main-service"
    >
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Huawei.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Apple.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Honda.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/TikTok.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Tencent.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Huawei.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Apple.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Honda.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/TikTok.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sm:w-4/5 mx-auto">
          <img
            src="~/assets/img/Tencent.png"
            alt=""
            class="cursor-pointer mx-auto lg:mx-0"
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>


<style lang="scss">
.slide-main-service {
  .swiper-wrapper {
    align-items: center;
  }
}
</style>