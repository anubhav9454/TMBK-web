<template>
  <div>
    <div id="main-wrapper">
      <div class="container">
        <div class="row gtr-200">
          <div class="col-4 col-12-medium">            
            <div id="sidebar">
              <section class="widget thumbnails">                
                <div class="grid">
                  <img class="image fit" src="images/detail.png" />                  
                </div>                
              </section>
            </div>
          </div>
          <div class="col-8 col-12-medium imp-medium">            
            <div id="content">
              <section class="last">
                <h2>About us</h2>
                <p>                  
                  {{ about_us }}
                </p>
                <nuxt-link to="about" class="button icon solid fa-arrow-circle-right"
                  >Continue Reading</nuxt-link
                >
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div id="footer-wrapper">
      <footer id="footer" class="container">
        <div class="row">
          <div class="col-3 col-6-medium col-12-small">
            <!-- Contact -->
            <section class="widget contact last">
              <h3>About TMBK@Business</h3>
              <ul>
                <li>
                  <a href="#" class="icon brands fa-twitter"
                    ><span class="label">Twitter</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-facebook-f"
                    ><span class="label">Facebook</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-instagram"
                    ><span class="label">Instagram</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-dribbble"
                    ><span class="label">Dribbble</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-pinterest"
                    ><span class="label">Pinterest</span></a
                  >
                </li>
              </ul>
              <p>
                236, Croisement des avenues des Usines et Kasavubu/ commune de
                Lubumbashi +243 99 314 48 90 <br />
                info@tmbkbusines.com <br />
              </p>
            </section>
          </div>
          
          <div class="col-3 col-6-medium col-12-small">
            <!-- Links -->
            <section class="widget links">
              <h3>Random Stuff</h3>
              <ul class="style2">
                <li><a href="#">Etiam feugiat condimentum</a></li>
                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                <li><a href="#">Felis varius pellentesque potenti</a></li>
                <li><a href="#">Nullam scelerisque blandit leo</a></li>
              </ul>
            </section>
          </div>

          <div class="col-6 col-6-medium col-12-small">
            <!-- Links -->
            <section class="widget links">
              <h3>Services</h3>
              <ul class="style2">
                <li>Hassle-free Congolese Passport Facilitation Services</li>
                <li>Book Your Air Tickets with Ease</li>
                <li>Easy and Convenient Hotel Booking Worldwide</li>
                <li>Hassle-free Visa Assistance for Your Travel Needs</li>
                <li>Accurate and Reliable Document Translation Services</li>
                <li>Seamless Enrollment Assistance for Studying Abroad</li>
              </ul>
            </section>
          </div>          
        </div>
      </footer>

      <div class="row">
        <div class="col-12">
          <div id="copyright">
            <ul class="menu">
              <li>&copy; TMBK. All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [{ src: "/translate.js" }],
    };
  },

  data() {
    return {
      lang: this.$store.state.fix.current_language,
      about_us:
        this.$store.state.fix.data.about_us_content[
          this.$store.state.fix.current_language
        ],
    };
  },
  computed: {
    get_lang() {
      return this.$store.state.fix.current_language;
    },
  },
  mounted() {
    this.$store.watch(
      (state) => state.fix.current_language,
      (newVal, oldVal) => {
        this.about_us = this.$store.state.fix.data.about_us_content[newVal];
      }
    );
  },

  methods: {
    check() {
      console.log(this.lang);
    },
  },
};
</script>
