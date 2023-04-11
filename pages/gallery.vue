
<template>
    <div class="carousel">
      <div class="carousel-item" v-for="(item, index) in items" :key="index" :class="{active: index === activeIndex}">
        <img :src="item" class="carousel-image" height="500" alt="/images/pic01.jpg">
      </div>
      <button class="carousel-prev" @click="prevItem"><span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
        
        </span>
    </button>
      <button class="carousel-next" @click="nextItem"><span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
        </span>
    </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: this.$store.state.fix.gallery,
        activeIndex: 0,
        intervalId: null,
      };
    },
    mounted() {
      this.startAutoChange();
    },
    methods: {
      startAutoChange() {
        this.intervalId = setInterval(() => {
          this.nextItem();
        }, 2000); // change image every 3 seconds
      },
      stopAutoChange() {
        clearInterval(this.intervalId);
      },
      nextItem() {
        this.activeIndex = this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1;
      },
      prevItem() {
        this.activeIndex = this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
      },
    },
    beforeDestroy() {
      this.stopAutoChange();
    },
  };
  </script>
  
  <style>
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
    overflow: hidden;
  }
  
  .carousel-image {
  object-fit: contain;
  width: 100%;
  height: 500px;
}

  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-prev,
  .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: #fff;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    cursor: pointer;
  }
  
  .carousel-prev {
    left: 20px;
  }
  
  .carousel-next {
    right: 20px;
  }
  </style>
