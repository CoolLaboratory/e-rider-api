<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{date}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    date: '...'
  }),
  components: {
    HelloWorld
  },
  async mounted() {
    const res = await fetch('api/date')

    if(res.ok) this.date = await res.text()

    console.log(this.$auth.currentUser)
  }
}
</script>
