<template>
    <div class="bg-slate-200 p-10">
    <div class=" flex items-center justify-between">
      <div class="flex px-2 items-center justify-around">
        <div class="bg-rose-500 font-semibold text-5xl text-white font-serif px-2 rounded-lg">TMBK</div>
        <div class="font-bold">TMBK@Business</div>
      </div>
      <div class="flex gap-8">
        <div class="  " v-for="(p, key) in pages" :key="key">
            <nuxt-link :to="p">{{ pages }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </template>
  <<script>
  export default {
    data(){
        return {
            pages: this.$config.menu,
        }
    }
  }
  </script>
  