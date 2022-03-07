<template>
  <v-container class="py-lg-16 py-sm-10 py-8">
    <v-row justify="end">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">
            <v-icon>
              {{ icons.mdiPlus }}
            </v-icon>
          </v-btn>
        </template>
        <template>
          <v-card>
            <v-toolbar color="primary" dark>Nuevo Contenido</v-toolbar>
            <v-card-text>
              <div class="text-h4 pt-12">
                <v-text-field
                  label="Nombre"
                  outlined
                  v-model="mediaNew.nameMedia"
                ></v-text-field>
              </div>
              <div class="text-h4 py-2">
                <v-textarea
                  label="Descripción"
                  outlined
                  v-model="mediaNew.descriptionMedia"
                ></v-textarea>
              </div>
              <div class="text-h4 py-2">
                <v-select
                  :items="getCategoryList"
                  label="Genero"
                  outlined
                  item-text="nameCategory"
                  item-value="id"
                  v-model="mediaNew.categoryId"
            
                ></v-select>
              </div>
                <div class="text-h4 py-2">
                <v-select
                  :items="getTypeMediaList"
                  label="Tipo"
                  outlined
                  item-text="name"
                  item-value="id"
                  v-model="mediaNew.typeMediaId"
                ></v-select>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="add(mediaNew)">Crear</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
    <v-simple-table class="d-none d-sm-flex flex-column">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Género</th>
            <th class="text-left">Tipo</th>
            <th class="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="media in getMediaList" :key="media.id">
            <td>{{ media.id }}</td>
            <td>{{ media.nameMedia }}</td>
            <td>{{ media.category.nameCategory }}</td>
            <td>{{ media.typeMedia.name }}</td>
            <td>
              <v-row align="center" justify="center">
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                      <v-icon>
                        {{ icons.mdiBookOpen }}
                      </v-icon></v-btn
                    >
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

                <div class="mx-2"></div>
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                      @click="setId(media)"
                    >
                      <v-icon> {{ icons.mdiPencil }}</v-icon>
                    </v-btn>
                  </template>
                  <template>
                    <v-card>
                      <v-toolbar color="primary" dark
                        >Actualizar media</v-toolbar
                      >
                       <v-card-text>
              <div class="text-h4 pt-12">
                <v-text-field
                  label="Nombre"
                  outlined
                  v-model="mediaNew.nameMedia"
                ></v-text-field>
              </div>
              <div class="text-h4 py-2">
                <v-textarea
                  label="Descripción"
                  outlined
                  v-model="mediaNew.descriptionMedia"
                ></v-textarea>
              </div>
              <div class="text-h4 py-2">
                <v-select
                  :items="getCategoryList"
                  label="Genero"
                  outlined
                  item-text="nameCategory"
                  item-value="id"
                  v-model="mediaNew.categoryId"
            
                ></v-select>
              </div>
                <div class="text-h4 py-2">
                <v-select
                  :items="getTypeMediaList"
                  label="Tipo"
                  outlined
                  item-text="name"
                  item-value="id"
                  v-model="mediaNew.typeMediaId"
                ></v-select>
              </div>
            </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="update(mediaNew)"
                          >Actualizar</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

                <div class="mx-2"></div>
                <v-btn color="primary" @click="remove(media.id)">
                  <v-icon>
                    {{ icons.mdiDelete }}
                  </v-icon>
                </v-btn>
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      <v-row
      class="d-sm-none py-3 elevation-1"
     v-for="media in getMediaList" :key="media.id"
    >
      <v-col>
        <v-row class="ma-0">
          <p>Id: {{ media.id }}</p>
        </v-row>
        <v-row class="ma-0">
          <p>Nombre: {{ media.nameMedia }}</p>
        </v-row>
         <v-row class="ma-0">
          <p>Genero: {{ media.category.nameCategory}}</p>
        </v-row>
        <v-row class="ma-0">
          <p>Tipo: {{ media.typeMedia.name }}</p>
        </v-row>
        <v-row class="ma-0">
          <v-col cols="auto" class="px-0 ma-0"> Acciones: </v-col>
          <v-col>
            <v-row class="mx-0">
           <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                      <v-icon>
                        {{ icons.mdiBookOpen }}
                      </v-icon></v-btn
                    >
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

                <div class="mx-2"></div>
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                      @click="setId(media)"
                    >
                      <v-icon> {{ icons.mdiPencil }}</v-icon>
                    </v-btn>
                  </template>
                  <template>
                    <v-card>
                      <v-toolbar color="primary" dark
                        >Actualizar media</v-toolbar
                      >
                       <v-card-text>
              <div class="text-h4 pt-12">
                <v-text-field
                  label="Nombre"
                  outlined
                  v-model="mediaNew.nameMedia"
                ></v-text-field>
              </div>
              <div class="text-h4 py-2">
                <v-textarea
                  label="Descripción"
                  outlined
                  v-model="mediaNew.descriptionMedia"
                ></v-textarea>
              </div>
              <div class="text-h4 py-2">
                <v-select
                  :items="getCategoryList"
                  label="Genero"
                  outlined
                  item-text="nameCategory"
                  item-value="id"
                  v-model="mediaNew.categoryId"
            
                ></v-select>
              </div>
                <div class="text-h4 py-2">
                <v-select
                  :items="getTypeMediaList"
                  label="Tipo"
                  outlined
                  item-text="name"
                  item-value="id"
                  v-model="mediaNew.typeMediaId"
                ></v-select>
              </div>
            </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="update(mediaNew)"
                          >Actualizar</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

                <div class="mx-2"></div>
                <v-btn color="primary" @click="remove(media.id)">
                  <v-icon>
                    {{ icons.mdiDelete }}
                  </v-icon>
                </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mdiPencil, mdiDelete, mdiBookOpen, mdiPlus } from "@mdi/js";
import Swal from "sweetalert2";

export default {
  name: "media",
  components: {},
  created() {
    this.fetchMedia();
    this.fetchCategory();
    this.fetchTypeMedia();
  },
  data: () => ({
    icons: {
      mdiPencil,
      mdiDelete,
      mdiBookOpen,
      mdiPlus,
    },
    mediaNew: {
      id: 0,
      nameMedia: "",
      descriptionMedia: "",
      categoryId: 0,
      typeMediaId: 0,
    },
  }),
  computed: {
    ...mapGetters("media", ["getMediaList"]),
    ...mapGetters("category", ["getCategoryList"]),
    ...mapGetters("typeMedia", ["getTypeMediaList"]),
  },
  methods: {
    ...mapActions("media", [
      "fetchMedia",
      "updateMediaData",
      "removeMedia",
      "createMedia",
    ]),
    ...mapActions("category", ["fetchCategory"]),
    ...mapActions("typeMedia", ["fetchTypeMedia"]),
    setId(media) {

      this.mediaNew.id = media.id;
      this.mediaNew.nameMedia = media.nameMedia;
      this.mediaNew.descriptionMedia = media.descriptionMedia;
      this.mediaNew.categoryId = media.categoryId;
      this.mediaNew.typeMediaId = media.typeMediaId;
    },

    add(Media){
      this.createMedia(Media)
      this.$router.go();
    },
    update(Media){
      this.updateMediaData(Media).then(this.$router.go())
      
    },

    remove(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          container: "contact-message-modal",
          confirmButton:
            "btn-success v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default",
          title: "h6",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Eliminar Contenido",
          text: "Seguro que quiere eliminar este Contenido?",
          confirmButtonText: "Aceptar",
        })
        .then((result) => {
          if (result.value) {
            this.removeMedia(id);
            this.$router.go()
          }
        });
    },
    
  },
};
</script>
