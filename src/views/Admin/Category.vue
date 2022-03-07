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
            <v-toolbar color="primary" dark>Nuevo Género</v-toolbar>
            <v-card-text>
              <div class="text-h4 py-12">
                <v-text-field
                  label="Nuevo"
                  outlined
                  v-model="categoryNew.nameCategory"
                ></v-text-field>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="add(categoryNew)">Crear</v-btn>
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
            <th class="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in getCategoryList" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.nameCategory }}</td>
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
                          {{ category.nameCategory }}
                        </div>
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
                      @click="setId(category)"
                    >
                      <v-icon> {{ icons.mdiPencil }}</v-icon>
                    </v-btn>
                  </template>
                  <template>
                    <v-card>
                      <v-toolbar color="primary" dark
                        >Actualizar Género</v-toolbar
                      >
                      <v-card-text>
                        <div class="text-h5 pt-12 pb-5">
                          Nombre Actual: {{ category.nameCategory }}
                        </div>
                        <div class="text-h4 pb-12">
                          <v-text-field
                            label="Nuevo"
                            outlined
                            v-model="categoryNew.nameCategory"
                          ></v-text-field>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="update(categoryNew)"
                          >Actualizar</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

                <div class="mx-2"></div>
                <v-btn color="primary" @click="remove(category.id)">
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
      v-for="category in getCategoryList"
      :key="category.id"
    >
      <v-col>
        <v-row class="ma-0">
          <p>Id: {{ category.id }}</p>
        </v-row>
        <v-row class="ma-0">
          <p>Nombre: {{ category.nameCategory }}</p>
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
                      {{ category.nameCategory }}
                    </div>
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
                  @click="setId(category)"
                >
                  <v-icon> {{ icons.mdiPencil }}</v-icon>
                </v-btn>
              </template>
              <template>
                <v-card>
                  <v-toolbar color="primary" dark>Actualizar Género</v-toolbar>
                  <v-card-text>
                    <div class="text-h5 pt-12 pb-5">
                      Nombre Actual: {{ category.nameCategory }}
                    </div>
                    <div class="text-h4 pb-12">
                      <v-text-field
                        label="Nuevo"
                        outlined
                        v-model="categoryNew.nameCategory"
                      ></v-text-field>
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="update(categoryNew)">Actualizar</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <div class="mx-2"></div>
            <v-btn color="primary" @click="remove(category.id)">
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
  name: "Category",
  components: {},
  created() {
    this.fetchCategory();
  },
  data: () => ({
    icons: {
      mdiPencil,
      mdiDelete,
      mdiBookOpen,
      mdiPlus,
    },
    categoryNew: {
      id: 5,
      nameCategory: "",
    },
  }),
  computed: {
    ...mapGetters("category", ["getCategoryList"]),
  },
  methods: {
    ...mapActions("category", [
      "fetchCategory",
      "updateCategoryData",
      "removeCategory",
      "createCategory",
    ]),
    setId(category) {
      this.categoryNew = category;
    },
    add(category) {
      this.createCategory(category);
      this.$router.go();
    },
    update(category) {
      this.updateCategoryData(category);
      this.$router.go();
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
          title: "Eliminar Genero",
          text: "Seguro que quiere eliminar este Genero?",
          confirmButtonText: "Aceptar",
        })
        .then((result) => {
          if (result.value) {
            this.removeCategory(id);
            this.$router.go();
          }
        });
    },
  },
};
</script>
