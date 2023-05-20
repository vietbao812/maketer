<script setup>
let jobOpen = reactive([
  {
    id: 0,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
  {
    id: 1,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
  {
    id: 2,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
  {
    id: 3,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
  {
    id: 4,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
  {
    id: 5,
    title: "Senior Marketing Design",
    typeWork: "Remote work",
    salary: "$1000 - $2000",
    desc: "We are looking for talented marketing design to scale our business to worldwide country",
    skills: ["Digital", "Business", "Marketing"],
  },
]);
</script>

<template>
  <section class="px-[15px] xl:px-[100px] bg-grayFA pt-[100px] pb-[45px]">
    <div class="mx-auto sm:max-w-[614px] text-center">
      <h2 class="text-3xl md:text-5xl leading-none font-medium mb-6">
        2000+ Job Openings
      </h2>
      <p class="text-lg text-grayB6 leading-[30px] mb-[38px]">
        Explore thousand of marketing job opportunities and find your dream
        company with our comprehensive marketing job search platform
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-8 mb-8"
    >
      <div
        class="group bg-white rounded-[16px] pt-[30px] sm:pt-[37px] pb-[30px] sm:pb-[33px] px-[15px] sm:px-[28px] cursor-pointer"
        style="box-shadow: 0px 1.86301px 7.45205px rgba(0, 0, 0, 0.04)"
        v-for="job in jobOpen"
        :key="job"
      >
        <div class="mb-[13px] max-w-[33.78px]">
          <img src="~/assets/img/google2.png" alt="" />
        </div>
        <h3
          class="group-hover:text-primary text-black font-medium leading-[22px] mb-2"
        >
          {{ job.title }}
        </h3>
        <div
          class="text-xs text-grayDO flex items-center mb-[15px] leading-none"
        >
          <span class="">{{ job.typeWork }}</span>
          <span
            class="mx-[11px] inline-block w-[4.66px] h-[4.66px] rounded-full bg-grayD9"
          ></span>
          <span>{{ job.salary }}</span>
        </div>
        <p class="text-sm text-grayDO mb-[15px] leading-[15px]">
          {{ job.desc }}
        </p>
        <div class="flex items-center flex-wrap gap-[16.44px]">
          <div
            class="bg-grayFA text-xs py-[4.45px] leading-none px-[16.77px] font-medium text-grayDO rounded-[14px] border border-grayFA hover:border-primary hover:text-primary"
            v-for="skill in job.skills"
            :key="skill"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="style-button w-[124px] h-[50px] font-semibold rounded-100">
        Load more
      </button>
    </div>
  </section>
</template>


<style>
</style>