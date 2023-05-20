<script setup>
let mainService = reactive([
  {
    default: 0,
    counter: 16,
    title: "+",
    subTitle: "Countries",
  },
  {
    default: 0,
    counter: 50,
    title: "k+",
    subTitle: "Active User",
  },
  {
    default: 0,
    counter: 10,
    title: "+",
    subTitle: "Top Companies",
  },
  {
    default: 0,
    counter: 10,
    title: "k+",
    subTitle: "Marketer Hired",
  },
]);

// thời gian chạy xong setInterval
let runTime = 1000;
// thời gian chạy 1 lần
let runPerTime = 50;
// tổng số lần chạy
let countRun = runTime / runPerTime;

mainService.forEach((service) => {
  let valuePerTime = service.counter / countRun;
  valuePerTime.toFixed(0);
  let a = 0;
  let b = 0;
  const intervalId = setInterval(() => {
    if (service.default < service.counter) {
      a += valuePerTime;
      b = a.toFixed(0);
      service.default = b;
      if (service.default >= service.counter) {
        service.default = Math.round(service.default);
      }
    }

    if (service.default === service.counter) {
      clearInterval(intervalId);
    }
  }, runPerTime);
});
</script>

<template>
  <section
    class="px-[15px] xl:px-[100px] flex flex-wrap lg:flex-nowrap gap-[21px]"
  >
    <div
      class="w-full lg:w-auto flex-grow flex p-4 sm:p-6 rounded-[30px] relative flex-wrap items-end overflow-hidden"
    >
      <div
        class="service-left-bg absolute top-0 left-0 w-[86%] xl:w-[90%] h-full bg-greenLight z-0 rounded-[30px]"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-2/5 h-full sm:h-4/5 bg-greenLight z-0 rounded-[30px]"
      ></div>
      <div
        class="w-[116px] absolute top-[61px] hidden sm:block left-[100%] sm:left-[400px] lg:left-[447px]"
      >
        <img src="~/assets/img/line.png" alt="" />
      </div>
      <div class="w-[129px] mr-auto sm:mr-7 z-10 ml-auto sm:ml-0">
        <img src="~/assets/img/left-service.png" alt="" />
      </div>
      <div class="absolute -top-28 -right-[80px] z-1">
        <img src="~assets/img/circle-left.png" class="hidden sm:block" />
      </div>
      <div class="z-10 mt-5 sm:mt-0 w-full sm:w-auto">
        <h2
          class="text-2xl text-blackPrimary font-semibold mb-6 leading-none text-center"
        >
          Main Services
        </h2>
        <div class="text-blackPrimary">
          <div class="flex items-center mb-4 text-sm font-medium leading-none">
            <span
              class="w-[26px] h-[26px] inline-block bg-second rounded-lg font-semibold text-center leading-[26px] mr-3 text-black"
              >1</span
            >
            Find marketer
          </div>
          <div class="flex items-center mb-4 text-sm font-medium leading-none">
            <span
              class="w-[26px] h-[26px] inline-block bg-second rounded-lg font-semibold text-center leading-[26px] mr-3 text-black"
              >2</span
            >
            Find marketing job
          </div>
          <div class="flex items-center text-sm font-medium leading-none">
            <span
              class="w-[26px] h-[26px] inline-block bg-second rounded-lg font-semibold text-center leading-[26px] mr-3 text-black"
              >3</span
            >
            Latest news digital marketing
          </div>
        </div>
      </div>
      <div
        class="mt-[31px] bg-blackPrimary w-full rounded-[20px] py-4 md:py-0 px-4 sm:px-[63px] flex items-center justify-between h-auto md:h-[104px] flex-wrap text-center md:text-left z-10"
      >
        <div
          v-for="service in mainService"
          :key="service"
          class="font-poppins mb-4 md:mb-0 w-full sm:w-2/4 md:w-1/4"
        >
          <div class="text-white font-bold text-[28px]">
            {{ service.default + service.title }}
          </div>
          <div class="text-xs text-white font-medium">
            {{ service.subTitle }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full min-h-[328px] sm:min-h-0 lg:w-[266px] relative rounded-[30px] p-7 mt-[80px] sm:mt-100 lg:mt-0"
      style="
        background: url(.png),
          radial-gradient(55.49% 55.49% at 50% 44.51%, #ffa238 0%, #ffd600 100%);
      "
    >
      <img
        src="~/assets/img/right-person-removebg.png"
        alt=""
        class="h-auto lg:h-full w-auto absolute bottom-0 right-0"
      />
      <img
        src="~/assets/img/circle-right.png"
        class="absolute -top-[25%] left-[14px]"
        alt=""
      />
      <div class="w-full h-full text-black pt-[77px] z-10 relative">
        <h3 class="font-semibold text-[32px]">10+ years</h3>
        <span class="">Maketer founded</span>
      </div>
    </div>
  </section>
</template>



<style lang="scss">
@media (width: 1280px) {
  .service-left-bg {
    width: 84%;
  }
}
</style>