<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4" class="d-flex justify-center" >
              <v-btn class="btn-first" to="/Admin/Contenido"> Contenido </v-btn>  
            </v-col>
             <v-col cols="12" sm="4" class="d-flex justify-center" >
              <v-btn class="btn-first" to="/Admin/Genero"> Géneros </v-btn>  
            </v-col>
             <v-col cols="12" sm="4" class="d-flex justify-center" >
              <v-btn class="btn-first" to="/Admin/TipoMedia"> Tipo </v-btn>  
            </v-col>
       </v-row>
        <router-view></router-view>
    </v-container>
</template>
<script>
export default {
  name: "Admin"
}
</script>
