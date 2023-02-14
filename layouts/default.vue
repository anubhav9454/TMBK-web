<template>
    <div>
      <Menu />
      <main>
        <nuxt />
      </main>
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
  