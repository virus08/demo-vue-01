<template>
  <v-card>
    <v-container fluid>
      <v-subheader>
        <p class="font-weight-black">1). อะไรที่ทำให้คุณอยากเปลี่ยนงานใหม่</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">2). อะไรที่ทำให้คุณสนใจมาสมัครงานที่นี่</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">3). คุณคิดว่าตัวคุณเหมาะสมกับตำแหน่งที่คุณสมัครอย่างไรบ้าง</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p
          class="font-weight-black"
        >4). ในการทำงานที่ผ่านมาคุณได้ตั้งเป้าหมายในการทำงานหรือไม่ และประสบความสำเร็จตามเป้าหมายมากน้อยเพียงใด</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">5). อธิบายความหมายของ “คิดบวกเชิงสร้างสรรค์” ในความคิดของคุณ</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">6). อธิบายความหมายของ “จริงใจในสิ่งที่ทำ” ในความคิดของคุณ</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">7). อธิบายความหมายของ “ทำงานอย่างมืออาชีพ” ในความคิดของคุณ</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">8). อธิบายความหมายของ “เป็นเจ้าของร่วมกัน” ในความคิดของคุณ</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">9). อธิบายความหมายของ “รวมพลังเป็นหนึ่งเดียว” ในความคิดของคุณ</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">10).ผลงานใดที่ทำให้คุณภาคภูมิใจมากที่สุด</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">11). หากคุณเลือกได้คุณอยากมีหัวหน้าแบบใด</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">12). หากคุณเลือกได้คุณอยากได้ลูกน้องแบบใด</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p
          class="font-weight-black"
        >13). เมื่อคุณประสบปัญหาในการทำงาน (หรือชีวิต) มากที่สุด จนรู้สึกท้อถอย คุณมีวิธีการแก้ไขสถานการณ์นั้นอย่างไร</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-subheader>
        <p class="font-weight-black">14). คุณคิดว่าอยากจะพัฒนาตนเองในเรื่องใดมากที่สุด เพราะอะไร</p>
      </v-subheader>
      <v-col cols="2" md="10">
        <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
      </v-col>
      <v-chip class="ma-2">English Writing</v-chip>
      <v-subheader>
        <p
          class="font-weight-black"
        >Please choose 1 topic for paragraph writing about 100 words or 10 sentences</p>
      </v-subheader>
      <v-subheader>
        <p class="font-weight-black">1). My life in next 5 years</p>
      </v-subheader>
      <v-subheader>
        <p class="font-weight-black">2). If I could turn back time</p>
      </v-subheader>
      <v-subheader>
        <p class="font-weight-black">3). My dream boss</p>
      </v-subheader>
      <p class="font-weight-medium"></p>
      <v-col cols="2" md="10">
        <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
      </v-col>
 </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      e6: 1
    };
  }
};
</script>