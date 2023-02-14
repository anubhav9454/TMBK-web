<template>
    <div>
      <Menu />
      <main>
        <nuxt />
      </main>
      <Footer />
    </div>
  </template>
  
<script>
import Menu from '~/components/Menu.vue'

export default {
components: {
    Menu,
},
}
</script>
  