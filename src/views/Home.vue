<template>
  <v-container>
    <v-row class="py-lg-10 justify-center">
      <v-col cols="12" sm="6" lg="5" class="py-2">
        <v-select
          :items="getCategoryList"
          label="Genero"
          outlined
          item-text="nameCategory"
          item-value="nameCategory"
          v-model="category"
          @change="getByCategory()"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" lg="5" class="py-2">
        <v-select
          :items="getTypeMediaList"
          label="Tipo"
          outlined
          item-text="name"
          item-value="name"
          v-model="type"
          @change="getByType()"
        ></v-select>
      </v-col>
    </v-row>
    <v-row v-if="mediaList <= 0">
      <h2 class="text-lg-h4 text-sm-h5 text-h6 px-10">
        No hay contenido de esta categoría o tipo por el momento. Este al pendiente, pronto habrá más.!
      </h2>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(media, index) in mediaList"
        :key="index"
      >
        <v-card class="mx-auto my-12 elevation-3 rounded-xl" max-width="374">
          <v-img height="250" src="/image.jpeg"></v-img>

          <v-row class="ma-0">
            <v-col cols="6">
              <v-card-title>{{ media.nameMedia }}</v-card-title>
            </v-col>
            <v-col cols="6">
              <v-card-actions class="ml-auto">
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="ml-auto btn-first" v-bind="attrs" v-on="on">
                      Ver Detalles
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark>Descripción</v-toolbar>
                      <v-card-text>
                        <div class="text-h4 pa-12">
                          {{ media.nameMedia }}
                        </div>
                        <p class="text-h6 px-12">
                          {{ media.descriptionMedia }}
                        </p>
                        <p class="text-h6 px-12">
                          Género: {{ media.category.nameCategory }}
                        </p>
                        <p class="text-h6 px-12">
                          Tipo: {{ media.typeMedia.name }}
                        </p>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      mediaList:[],
      category: "",
      type: "",
    }
  },
  created() {
    this.fetchCategory();
    this.fetchMedia();
    this.fetchTypeMedia();
    this.mediaList = this.getMediaList;
  },
  computed: {
    ...mapGetters("category", ["getCategoryList"]),
    ...mapGetters("media", ["getMediaList"]),
    ...mapGetters("typeMedia", ["getTypeMediaList"]),
  },
  methods: {
    ...mapActions("category", ["fetchCategory"]),
    ...mapActions("media", ["fetchMedia"]),
    ...mapActions("typeMedia", ["fetchTypeMedia"]),
    getByCategory() {
      this.mediaList = this.getMediaList.filter((m)=>m.category.nameCategory === this.category)
    },
    getByType() {
      this.mediaList = this.getMediaList.filter((m)=>m.typeMedia.name === this.type)
    }
  },
  watch: {
    inmediate: true,
    getMediaList(val){
      this.mediaList = val;
    }
  }
};
</script>
