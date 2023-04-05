<template>
  <div>
    <!-- Main -->
    <div id="main-wrapper">
      <div class="container">
        <div class="row gtr-200">
          <div class="col-4 col-12-medium">
            <!-- Sidebar -->
            <div id="sidebar">
              <section class="widget thumbnails">
                <h3>Gallery</h3>
                <div class="grid">
                  <img class="image fit" src="images/detail.png" />
                  <!-- <div class="row gtr-50">
													<div class="col-6"><a href="#" class="image fit"><img src="/images/pic01.jpg" alt="" /></a></div>
													<div class="col-6"><a href="#" class="image fit"><img src="/images/pic02.jpg" alt="" /></a></div>
                                                    <div class="col-6"><a href="#" class="image fit"><img src="/images/pic03.jpg" alt="" /></a></div>
                                                    <div class="col-6"><a href="#" class="image fit"><img src="/images/pic04.jpg" alt="" /></a></div>                                                    
												</div> -->
                </div>
                <a href="#" class="button icon fa-file-alt">More</a>
              </section>
            </div>
          </div>
          <div class="col-8 col-12-medium imp-medium">
            <!-- Content -->
            <div id="content">
              <section class="last">
                <h2>About us</h2>
                <p>
                  <!-- <b>TMBK BUSINESS Sarl</b> is a company under Congolese law based in the city of Lubumbashi, in the province of Haut-Katanga in the Democratic Republic of Congo since 2017.
                                                    This company (TMBK BUSINESS) offers services (divided into branches) in several areas including: travel facilitation, construction, rental of construction equipment, drilling of filter wells, supply of goods and equipment and sales of services, placement service .
                                                    Our experience in these areas produces quality work with great satisfaction. -->
                  {{ about_us }}
                </p>
                <a href="#" class="button icon solid fa-arrow-circle-right"
                  >Continue Reading</a
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
