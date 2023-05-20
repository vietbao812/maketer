<template>
  <section
    class="pt-[70px] px-[15px] xl:px-[100px] grid grid-cols-1 md:grid-cols-2 mb-[62px]"
  >
    <div class="flex flex-col lg:text-left animate-bounce-in">
      <h1
        class="font-semibold text-[32px] md:text-[48px] lg:text-[55px] text-primary text-center md:text-left"
      >
        Hire fast marketer person
        <span class="text-blackPrimary">with maketer.</span>
      </h1>
      <div
        class="flex items-center flex-wrap mt-[52px] justify-center md:justify-start"
      >
        <NuxtLink
          to="#"
          class="style-button-outline w-[160px] h-[50px] border-[3px] border-primary mr-0 sm:mr-6"
        >
          Getting Started
        </NuxtLink>
        <NuxtLink
          to="#"
          class="flex w-full sm:w-auto items-center justify-center text-black-primary mt-5 sm:mt-0 font-semibold cursor-pointer hover:text-primary explore"
        >
          <div class="mr-[11.5px]">Explore Now</div>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.43 0.929993L18.5 6.99999L12.43 13.07M1.5 6.99999L18.33 6.99999"
              stroke="#101010"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div class="lg:pl-44 mt-8 lg:mx-0 lg:mt-0 z-10 animate-bounce-in">
      <img src="~/assets/img/digital-agency.png" class="mx-auto" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.explore {
  &:hover {
    svg {
      path {
        stroke: #00a650;
      }
    }
  }
}
</style>