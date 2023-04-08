<template>
    <div class="root">
    <div class="carousel">
        <div class="controls">
        <button v-on:click="previousSlide">Previous</button>
        </div>
      <div class="slide" v-for="(image, index) in images" :key="index" v-bind:class="{ active: index === currentIndex }">
        <img v-bind:src="image" alt="Image" class="carousel-image">
      </div>
      <div class="controls">
        <button v-on:click="nextSlide">Next</button>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: this.$store.state.fix.gallery,
        currentIndex: 0
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
    methods: {
      previousSlide() {
        if (this.currentIndex === 0) {
          this.currentIndex = this.images.length - 1;
        } else {
          this.currentIndex--;
        }
      },
      nextSlide() {
        if (this.currentIndex === this.images.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }
    }
  };
  </script>
  
  <style>
  .root{
    height: 500px;
    width: 500px;
    
  }
  .carousel {
    position: relative;
    height: 100%;
    width:100%;
    overflow: hidden;
  }
  .carousel-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  .slide.active {
    opacity: 1;
  }
  .controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>
  