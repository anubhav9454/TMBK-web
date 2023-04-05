<template>
  <div id="page-wrapper"> 
    <div>      
      <div id="google_translate_element"></div>

      <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en',
            includedLanguages: 'fr,en',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            multilanguagePage: true}, 'google_translate_element');
        } 
      </script>
      
      <style>
        .goog-te-combo {
          padding: 1px 10px;
          border-radius: 20px;
        }

        #google_translate_element{
          position: absolute;
          top : 1px;
          right : 2px;          
        }

        
      </style>
      
    </div>

    <!-- Header -->
          <div id="header-wrapper">
            <header id="header" class="container">

              <!-- Logo -->
                <div id="logo">
                  <h1><nuxt-link to="/">TMBK</nuxt-link></h1>
                  <span>TMBK @ Business</span>
                </div>

              <!-- Nav -->
                <nav id="nav">
                  <ul>

                    <li v-for="(p, key) in pages" :key="key" :class="check_current(p.name)?'current':''" @click="current_page(p.name)" > 
                    <nuxt-link :to="p.link">                        
                      {{ p.name }} 
                    </nuxt-link>
                    </li>

                    <li>Translate</li>                     
                    
                  </ul>
                </nav>

            </header>
          </div>
          <div id="gb-widget-341" style="bottom: 21px; right: 40px; opacity: 1; transition: opacity 0.5s ease 0s; box-sizing: border-box; position: fixed !important; z-index: 16000160 !important; direction: ltr;">
            <div>
              <div class="q8c6tt-2 jxPOhn">
                <a href="https://wa.me/919024343890" target="_blank" color="#4dc247" id="" class="q8c6tt-0 jlzTty" 
                style="--darkreader-inline-color:#ffffee;" data-darkreader-inline-color="">
                  <svg viewBox="0 0 32 32" style="width: 100%; height: 50px; fill: black; stroke: none; --darkreader-inline-fill:#ffffff; --darkreader-inline-stroke:none;" 
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  data-darkreader-inline-fill="" data-darkreader-inline-stroke="">  
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

  </div>
</template>
<script>
import ToggleSwitchVue from './ToggleSwitch.vue';

  export default {
    components: {
      ToggleSwitchVue
    },
    data(){
        return {
            pages: this.$store.state.fix.menu,
            language: 'en',
        }
    },
    methods:{
      current_page(page){
        this.$store.commit('fix/set_current_page', page);
      },
      check_current(page){
        return this.$store.state.fix.current_page == page
      },
      handleChange(newLanguage) {
      this.language = newLanguage;
      console.log(this.language)
      this.$store.commit('fix/set_current_lang', newLanguage);
      }
    },
    // computed:{
    //   message() {
    //   return this.language === 'fr'
    //     ? 'Bonjour, comment ça va?'
    //     : 'Hello, how are you?';
    // },
    // },
  }
  </script>
  