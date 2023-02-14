<template>
    <!-- <div class="bg-slate-200 p-10">
    <div class=" flex items-center justify-between">
      <div class="flex px-2 items-center justify-around">
        <div class="bg-rose-500 font-semibold text-5xl text-white font-serif px-2 rounded-lg">TMBK</div>
        <div class="font-bold">TMBK@Business</div>
      </div>
      <div class="flex gap-8">
        <div class="text-slate-800 hover:underline font-semibold" v-for="(p, key) in pages" :key="key">
            <nuxt-link :to="p.link">{{ p.name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div> -->
  <div id="page-wrapper"> 
    <!-- Header -->
          <div id="header-wrapper">
            <header id="header" class="container">

              <!-- Logo -->
                <div id="logo">
                  <h1><a href="index.html">TMBK</a></h1>
                  <span>TMBK @ Business</span>
                </div>

              <!-- Nav -->
                <nav id="nav">
                  <ul>
                    <li class="current"><a href="index.html">Welcome</a></li>
                    <!-- <li>
                      <a href="#">Dropdown</a>
                      <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Magna phasellus</a></li>
                        <li>
                          <a href="#">Phasellus consequat</a>
                          <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Phasellus consequat</a></li>
                            <li><a href="#">Magna phasellus</a></li>
                            <li><a href="#">Etiam dolore nisl</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Veroeros feugiat</a></li>
                      </ul>
                    </li>
                    <li><a href="left-sidebar.html">Left Sidebar</a></li>
                    <li><a href="right-sidebar.html">Right Sidebar</a></li>
                    <li><a href="no-sidebar.html">No Sidebar</a></li> -->

                    <li v-for="(p, key) in pages" :key="key" > 
                    <nuxt-link :to="p.link">                        
                      {{ p.name }} 
                    </nuxt-link>
                    </li>                      

                    
                  </ul>
                </nav>

            </header>
          </div>
</div>
  </template>
  <script>
  export default {
    data(){
        return {
            pages: this.$store.state.fix.menu,
        }
    }
  }
  </script>
  