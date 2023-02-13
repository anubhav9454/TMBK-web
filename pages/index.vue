<template>
  <div class="bg-slate-200 p-10">
    <nuxt-link to="/aboutUs">About Us</nuxt-link>
    <div class=" flex items-center justify-between">
      <div class="flex px-2 items-center justify-around">
        <div class="bg-rose-500 font-semibold text-5xl text-white font-serif px-2 rounded-lg">TMBK</div>
        <div class="font-bold">TMBK@Business</div>
      </div>
      <div class="flex gap-8">
        <div class="">
          Welcome
        </div>
        <div class="">
          Dropdown
        </div>
        <div class="">
          Left Sidebar
        </div>
        <div class="">
          Right Sidebar
        </div>
        <div class="">
          No Sidebar
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
