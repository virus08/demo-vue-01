<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Employee Info</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title>User Profile</v-toolbar-title>
              </v-toolbar>
              <v-tabs>
                <v-tab>
                  <v-icon left>mdi-account</v-icon>Persornal info
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-lock</v-icon>Teb2
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-access-point</v-icon>Tab3
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>{{editedItem}}</p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>2</p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>3</p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.Name="{ item }">{{item.nt+' '+ item.namet+' ' + item.surnamet}}</template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon>
        <v-icon small class="mr-2" @click="printpdf(item)">mdi-file-pdf</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="printa" max-width="800px">
      <div ref="document">
        <fromview :data="editedItem" />
      </div>
      <v-row>
        <v-spacer />
        <v-btn color="primary" @click="exportToPDF">Print</v-btn>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
import fromview from "@/views/appform.vue";
import html2pdf from "html2pdf.js";

export default {
  components: {
    fromview
  },
  data: () => ({
    dialog: false,
    printa: false,
    headers: [
      {
        text: "Empolyee ID",
        value: "id"
      },
      { text: "Name", align: "start", value: "Name" },

      { text: "Position", value: "p_level" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      let dataurl = process.env.VUE_APP_DATA;
      // console.log(dataurl);
      let res = await axios({
        method: "get",
        url: dataurl
      });
      this.desserts = res.data;
    },
    async printpdf(item) {
      // this.editedIndex = this.desserts.indexOf(item);
      let dataurl = process.env.VUE_APP_DATA + "/" + item.id;
      // console.log(dataurl);
      let res = await axios({
        method: "get",
        url: dataurl
      });
      this.editedItem = res.data;
      this.printa = true;
    },
    exportToPDF() {
      html2pdf(this.$refs.document, {
        margin: 0,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 200, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      });
    },
    async editItem(item) {
      // this.editedIndex = this.desserts.indexOf(item);
      let dataurl = process.env.VUE_APP_DATA + "/" + item.id;
      // console.log(dataurl);
      let res = await axios({
        method: "get",
        url: dataurl
      });
      this.editedItem = res.data;
      this.dialog = true;
    },

    async deleteItem(item) {
      const index = this.desserts.indexOf(item);
      // console.log(item)
      let xurl = process.env.VUE_APP_DATA + "/" + item.id;
      confirm("Are you sure you want to delete this item?") &&
        (await axios({ method: "delete", url: xurl }));
      this.initialize();
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>