<template>

</template>

<script>

export default {
  name: "Logout",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>
