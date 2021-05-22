<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"

export default {
  components: { Navbar },
  data () {
    return {}
  },
}
</script>
