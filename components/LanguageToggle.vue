<template>
    <div class="language-toggle">
      
    </div>
  </template>
  
  <script>
  import ToggleSwitch from './ToggleSwitch.vue';
  
  export default {
    components: {
      ToggleSwitch,
    },
    data() {
      return {
        isFrench: false,
        selectedLanguage: 'en',
      };
    },
    methods:{
      handleChange(value){
        console.log("changed as -->", value)
      }
    },
    watch: {
      selectedLanguage(newLanguage) {
        this.$emit('languageChanged', newLanguage);
      },
      isFrench(newVal) {
        if (newVal) {
          this.selectedLanguage = 'fr';
        }
      },
    },
  };
  </script>
  
  <style>
  .language-toggle {
    display: flex;
    align-items: center;
  }
  </style>
  