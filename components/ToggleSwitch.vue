<template>
  <div class="container">
    English
    <div class="toggle-switch" @click="toggleLanguage">
      <div :class="['toggle-switch__slider', { 'toggle-switch__slider--on': on }]">
      </div>
    </div>
    French
  </div>
</template>
  
  <script>
  export default {
    props: {
      lang_select:{
        type:String,
        default: 'en'
      }
    },
    data() {
      return {
        on: false,
        language: this.lang_select,
      };
    },

    methods: {
      toggleLanguage() {
      this.on = !this.on
      this.language = this.language === 'en' ? 'fr' : 'en';
      this.$emit('change',this.language)
    },
    },
  };
  </script>
  
  <style>
  .container{
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }
  
  .toggle-switch__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 24px;
    transition: 0.4s;
  }
  
  .toggle-switch__slider::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
  
  
  
  .toggle-switch__slider--on::before {
    transform: translateX(16px);
  }
  </style>
  