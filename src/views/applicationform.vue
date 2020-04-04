<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Personal data
      <small>ประวัติส่วนบุคคล</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <Personaldata :thisid="thisid" />
      <v-divider />
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Education background
      <small>ประวัติการศึกษา</small>
    </v-stepper-step>
    <v-stepper-content step="2">
      <Education />
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      Employment Record
      <small>ประวัติการทำงาน</small>
    </v-stepper-step>
    <v-stepper-content step="3">
      <EmploymentRecord />
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      คำถามจากบริษัท VSTECS
      <small>กรุณาตอบคำถามตามความคิดเห็นอย่างตรงไปตรงมาที่สุด</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <POPSU />
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import Personaldata from "@/components/Personal_data.vue";
import Education from "@/components/Education.vue";
import EmploymentRecord from "@/components/Employment_Record.vue";
import POPSU from "@/components/popsu.vue";
export default {
  components: {
    Personaldata,
    Education,
    EmploymentRecord,
    POPSU
  },
  data() {
    return {
      e6: 1,
      thisid: null
    };
  },
  methods: {
    async init() {
      let urldata = process.env.VUE_APP_DATA
      let res = await axios({
        method: "post",
        url: urldata,
        data:{}
      });
      this.thisid=res.data.id
    }
  },
  mounted() {
    this.init();
  }
};
</script>