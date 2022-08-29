<template>

  <v-app-bar class="px-10" height="75">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-img class="ma-2" max-height="35" max-width="35" src="../static/logo.png"></v-img>
    <v-toolbar-title class="text-h6">Course Pro</v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- <v-row align="center" justify="space-around"> -->

    <v-btn depressed class="font-weight-medium text-caption mx-2">
      Normal
    </v-btn>

    <v-btn  elevation="5" color="#00C853" class="font-italic text-caption mx-2 white--text">
      Primary
    </v-btn>
    <!-- </v-row> -->
  </v-app-bar>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
