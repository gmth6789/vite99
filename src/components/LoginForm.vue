<template>

  <fome @submit.prevent="login">
  <h2>Log In</h2>
  <input type="email" placeholder="Email" required v-model="email">
  <input type="password" placeholder="Password" required v-model="password">
  <button>Log in</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Email:',   this.email)
      console.log('Password:',this.password)
    }
  }
}
</script>