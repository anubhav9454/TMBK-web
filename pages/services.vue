<template>
  <!-- Container for the image gallery -->
<div class="container-service">

<!-- Full-width images with number text -->
    <div class="mySlides" v-for="(serv, ind) in service_list" :key="ind">
        <div class="numbertext">{{ ind + 1 }} / {{ service_list.length }}</div>
        <img :src="serv.img" style="object-fit: contain; " height="500" width="500"  >
    </div>

<!-- Next and previous buttons -->
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>

<!-- Image text -->
    <div class="caption-container">
    <p id="caption"></p>
    </div>

<!-- Thumbnail images -->
    <div class="row">
        <div class="column" v-for="(serv, ind) in service_list" :key="ind">
            <img class="demo cursor" :src="serv.img" style="width:100%" @click="currentSlide(ind+1)" >
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return{
            slideIndex: 1,
            service_list: this.$store.state.fix.services,
        }
    },
    mounted(){
        this.showSlides(this.slideIndex);
    },
    methods:{
// showSlides(slideIndex);

        // Next/previous controls
        plusSlides(n) {
        this.showSlides(this.slideIndex += n);
        },

            // Thumbnail image controls
            currentSlide(n) {
            this.showSlides(this.slideIndex = n);
            },

        showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "flex";
        dots[this.slideIndex-1].className += " active";
        captionText.innerHTML = this.service_list[this.slideIndex -1].name;
        }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.container-service {
  position: relative;
  
}

/* Hide the images by default */
.mySlides {
  display: none;
  /* min-width: 50vw;
  min-height: 500px; */
  max-height: 500px;
  justify-content: center;
  align-items: center;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  background-color: rgba(0, 0, 0, 0.8);
}

#caption{
    margin-bottom: 0!important;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 4px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row{
    justify-content: center;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>