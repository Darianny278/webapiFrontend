<template>
  <v-app>
    <headerbar></headerbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import headerbar from "./components/header.vue"
export default {
  name: "App",
  components: {
    headerbar,
  },
  data: () => ({
    //
  }),
};
</script>
