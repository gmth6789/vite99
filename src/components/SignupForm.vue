<template>

  <fome @submit.prevent="signUp">
  <h2>Sign Up</h2>
  <input type="text" placeholder="Username" required v-model="username">
  <input type="email" placeholder="email" required v-model="email">
  <input type="password" placeholder="password" required v-model="password">
  <button>Sign Up</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      console.log('Username:',this.username)
      console.log('Email:',   this.email)
      console.log('Password:',this.password)
    }
  }
}
</script>