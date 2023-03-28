<template>
    <div class="language-toggle">
      <toggle-switch v-model="isFrench" />
      <select v-model="selectedLanguage" :disabled="isFrench">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
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
  