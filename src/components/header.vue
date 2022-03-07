<template>
    <v-container class="px-0">
        <v-row>
            <v-col cols="12" sm="6" class="px-10">
                <v-img src="/logo.png" class="ml-sm-0 mx-auto" width="200" contain></v-img>
            </v-col>
           <v-col cols="12" sm="6" class="d-flex justify-sm-end justify-center pt-sm-8">
               <v-btn class="btn-admin" to="/Admin" v-if="$route.matched[0].name!=='Admin'">Admin</v-btn>
               <v-btn class="btn-admin" to="/" v-if="$route.name!=='Home'">Ir a página principal</v-btn>
           </v-col>
        </v-row>
    </v-container>
</template>
<script>
 export default {
  name: "headerbar",
 };
</script>
