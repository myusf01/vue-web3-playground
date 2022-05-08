<template>
  <div v-if="isDrizzleInitialized" id="app">
    <h1>Sign the Guestbook</h1>
    <drizzle-contract-form
      contractName="Guestbook"
      method="signBook"
      :placeholders="['Name']"
    />
    <h2>Guests:</h2>
    <ul v-if="getNames">
      <li v-for="(name, i) in getNames" :key="i">{{ utils.toUtf8(name) }}</li>
    </ul>
  </div>
  <div v-else>Loading application...</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
    ...mapGetters('contracts', ['getContractData']),
    getNames() {
      let data = this.getContractData({
        contract: 'Guestbook',
        method: 'getNames'
      })
      if (data === 'loading') return false
      return data
    },
    utils() {
      return this.drizzleInstance.web3.utils
    }
  },
  created() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
      contractName: 'Guestbook',
      method: 'getNames',
      methodArgs: []
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
