<script setup>
let showMenuMobile = ref(false);
function showMenu() {
  showMenuMobile.value = !showMenuMobile.value;
  console.log(showMenuMobile.value);
}
</script>

<template>
  <header
    class="flex items-center justify-between py-30 px-[15px] xl:px-100 sticky top-0 z-40 bg-white"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="~/assets/img/logo.png" alt="" />
      </NuxtLink>
    </div>
    <div
      class="cursor-pointer block lg:hidden w-[40px] border border-primary rounded p-2 z-30 relative header-bar"
      :class="{ showMenuMobile: showMenuMobile }"
      @click="showMenu()"
    >
      <img class="w-full icon-bar" src="~/assets/img/bar.png" />
      <img class="w-full icon-close" src="~/assets/img/close.png" />
    </div>
    <div
      class="header-nav z-20 hidden lg:flex flex-grow justify-between"
      :class="{ show: showMenuMobile }"
    >
      <div
        class="w-full header-nav-inner flex items-center justify-start lg:justify-between flex-col lg:flex-row pt-100 lg:pt-0"
      >
        <div class="flex items-center flex-col lg:flex-row">
          <ul
            class="flex flex-col lg:flex-row ml-10 mr-9 mb-3 lg:mb-0 gap-x-9 text-lg font-medium"
          >
            <li class="mb-3 lg:mb-0 text-center active">
              <NuxtLink
                class="hover:text-primary transition ease-in duration-200"
                to="/"
              >
                Home
              </NuxtLink>
            </li>
            <li class="mb-3 lg:mb-0 text-center">
              <NuxtLink
                class="hover:text-primary transition ease-in duration-200"
                to="/job"
              >
                Job
              </NuxtLink>
            </li>
            <li class="mb-3 lg:mb-0 text-center">
              <NuxtLink
                class="hover:text-primary transition ease-in duration-200"
                to="/hiring"
              >
                Hiring
              </NuxtLink>
            </li>
            <li class="mb-3 lg:mb-0 text-center">
              <NuxtLink
                class="hover:text-primary transition ease-in duration-200"
                to="/about"
              >
                About
              </NuxtLink>
            </li>
          </ul>
          <div class="relative mb-3 lg:mb-0">
            <span
              class="absolute top-0 left-0 w-50 h-full flex items-center justify-center pl-3 cursor-pointer"
              ><img src="~/assets/img/search.png" alt=""
            /></span>
            <input
              type="text"
              placeholder="Find marketer"
              class="h-50 w-200 block border border-grayPrimary rounded-100 pl-50 pr-3 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"
            />
          </div>
        </div>
        <div class="flex items-center flex-col lg:flex-row">
          <NuxtLink
            to="/login"
            class="bg-primary hover:bg-green-700 rounded-[100px] h-[50px] text-white w-[200px] lg:w-[140px] flex items-center justify-center font-semibold mb-3 lg:mb-0"
          >
            Login
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="bg-white border-2 border-primary hover:bg-primary hover:text-white rounded-[100px] h-[50px] text-primary w-[200px] lg:w-[140px] flex items-center justify-center font-semibold ml-0 lg:ml-[14px]"
          >
            Register
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>



<style lang="scss">
.header-bar {
  &.showMenuMobile {
    position: fixed;
    top: 30px;
    right: 15px;
    .icon-close {
      display: block;
    }
    .icon-bar {
      display: none;
    }
  }
  .icon-close {
    display: none;
  }
}
.header-nav {
  li.active {
    a {
      color: #00a650;
    }
  }
}
@media (max-width: 1024px) {
  header {
    box-shadow: 0px 7px 20px -18px #111;
  }
  .header-nav {
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    .header-nav-inner {
      transition: all 2s ease;
      transform: translateY(-100%);
    }
    &.show {
      min-height: 100vh;
      display: flex;
      .header-nav-inner {
        transform: translateY(0);
        transition: all 3s ease;
      }
    }
  }
}
</style>