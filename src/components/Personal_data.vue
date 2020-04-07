<template>
  <v-card>
    <v-container fluid>
      <v-form ref="form" v-model="valid">
        <v-row align="center">
          <v-col cols="2" md="1.5">
            <v-select
              v-model="datain.nt"
              :rules="rules.nt"
              :items="['นาย','นาง','นางสาว']"
              label="คำนำหน้า(TH)"
              dense
              solo
            ></v-select>
          </v-col>
          <v-col cols="5" md="3">
            <v-text-field
              v-model="datain.namet"
              :rules="rules.xnamet"
              label="ชื่อ / (TH)"
              hint="ระบุเป็นภาษาไทย"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="5" md="3">
            <v-text-field
              v-model="datain.surnamet"
              label="นามสกุล / (TH)"
              hint="ระบุเป็นภาษาไทย"
              :rules="rules.xnamet"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อเล่น / (TH)" hint="ระบุเป็นภาษาไทย" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2" md="1.5">
            <v-select :items="['Mr.','Mrs.','Miss']" label="คำนำหน้า(EN)" dense solo></v-select>
          </v-col>
          <v-col cols="5" md="3">
            <v-text-field label="Name / (EN)" hint="ระบุเป็นภาษาอังกฤษ" dense outlined></v-text-field>
          </v-col>
          <v-col cols="5" md="3">
            <v-text-field label="Surname / (EN)" hint="ระบุเป็นภาษาอังกฤษ" dense outlined></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field label="Nickname / (EN)" hint="ระบุเป็นภาษาอังกฤษ" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            วันเกิด
            <br />Date of brith
          </v-subheader>
          <v-col cols="0" md="2">
            <v-text-field label="DD/MM/YYYY" hint="DD/MM/YYYY" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            เพศ
            <br />Sex
          </v-subheader>
          <v-col cols="2" md="1">
            <v-select :items="['Male','Female']" label="Male/Female" dense solo></v-select>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="อายุ/Age" hint="Age" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สัญชาติ
            <br />Nationality
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สัญชาติ/Nationality" hint="Nationality" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            เชื้อชาติ
            <br />Race
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="เชื้อชาติ/Race" hint="Race" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ศาสนา
            <br />Religion
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ศาสนา/Religion" hint="Religion" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ส่วนสูง
            <br />Height
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="ระบุ.." hint="Height" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            น้ำหนัก
            <br />Weight
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="ระบุ.." hint="Weight" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            กรุ๊ปเลือด
            <br />Blood Group
          </v-subheader>
          <v-col cols="2" md="1">
            <v-select :items="['A','B','O','AB']" label dense solo></v-select>
          </v-col>
        </v-row>
        <v-chip class="ma-2">ที่อยู่ปัจจุบัน/ Pressent</v-chip>
        <v-row>
          <v-subheader>
            บ้านเลขที่
            <br />House number
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="บ้านเลขที่" hint="House number" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            หมู่บ้าน/อาคาร
            <br />Village/building
          </v-subheader>
          <v-col cols="3" md="3">
            <v-text-field label="หมู่บ้าน/อาคาร" hint="Village/building" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ซอย
            <br />Alley
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ซอย" hint="Alley" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ถนน
            <br />Street
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ถนน" hint="Street" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            แขวง/ตำบล
            <br />District
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="แขวง/ตำบล" hint="District" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            เขต/อำเภอ
            <br />county
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="เขต/อำเภอ" hint="county" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            จังหวัด
            <br />county
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="จังหวัด" hint="county" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            รหัสไปรษณีย์
            <br />Postal code
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="เขต/อำเภอ" hint="Postal code" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" md="3">
            <v-radio-group row>
              <v-radio label="บ้านตนเอง/Own house " dense outlined></v-radio>
              <v-radio label="ห้องเช่า/Rented room" dense outlined></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            Telephone
            <br />โทรศัพท์บ้าน
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="02 .." dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            Mobile
            <br />มือถือ
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="+(66).." dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            Email
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="example@gmail.com" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            Facebook
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label dense outlined></v-text-field>
          </v-col>
        </v-row>

        <v-chip class="ma-2">ที่อยู่ตามทะเบียนบ้าน/ Permanent address</v-chip>
        <v-row>
          <v-subheader>
            บ้านเลขที่
            <br />House number
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="บ้านเลขที่" hint="House number" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            หมู่บ้าน/อาคาร
            <br />Village/building
          </v-subheader>
          <v-col cols="3" md="3">
            <v-text-field label="หมู่บ้าน/อาคาร" hint="Village/building" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ซอย
            <br />Alley
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ซอย" hint="Alley" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ถนน
            <br />Street
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ถนน" hint="Street" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            แขวง/ตำบล
            <br />District
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="แขวง/ตำบล" hint="District" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            เขต/อำเภอ
            <br />county
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="เขต/อำเภอ" hint="county" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            จังหวัด
            <br />county
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="จังหวัด" hint="county" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            รหัสไปรษณีย์
            <br />Postal code
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="เขต/อำเภอ" hint="Postal code" dense outlined></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-chip class="ma-2">การอุปสมบท/ Ordination</v-chip>
          <v-radio-group row>
            <v-radio label="ไม่เคย/ No" dense outlined></v-radio>
            <v-radio label="บวชเรียนแล้ว-ชื่อวัดและที่ตั้ง/ (Yes / where)" dense outlined></v-radio>
          </v-radio-group>

          <v-col cols="3" md="3">
            <v-text-field label="ระบุรายละเอียด" hint="Details" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-2">สถานภาพการสมรส/ Marital status</v-chip>
          <v-radio-group row>
            <v-radio label="โสด/ Single" dense outlined></v-radio>
            <v-radio label="หย้า/ Divorced" dense outlined></v-radio>
            <v-radio label="หม้าย/ Widowed" dense outlined></v-radio>
            <v-radio label="สมรสจดทะเบียน/ Civil marriage" dense outlined></v-radio>
            <v-radio label="สมรสไม่จดทะเบียน/ Common-law marriage" dense outlined></v-radio>
          </v-radio-group>
        </v-row>
        <v-chip class="ma-2">ข้อมูลของคู่สมรสและบุตร / Family information</v-chip>
        <v-row>
          <v-col cols="2" md="1.5">
            <v-select :items="['นาย','นาง']" label="คำนำหน้า" dense solo></v-select>
          </v-col>
          <v-col cols="7" md="3">
            <v-text-field label="ชื่อ / (TH)" hint="ระบุเป็นภาษาไทย" dense outlined></v-text-field>
          </v-col>
          <v-col cols="5" md="3">
            <v-text-field label="นามสกุล / (TH)" hint="ระบุเป็นภาษาไทย" dense outlined></v-text-field>
          </v-col>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="Age" dense outlined></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field label="อำชีพ/ตำแหน่ง" hint="Occupation / Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            สถำนที่ทำงาน
            <br />Office address
          </v-subheader>
          <v-col cols="2" md="3">
            <v-text-field label="สถานที่ทำงาน" hint dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            โทรศัพท์
            <br />Telephone
          </v-subheader>
          <v-col cols="2" md="3">
            <v-text-field label="+66 .." hint dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-2">จำนวนบุตร / Number of children</v-chip>
          <v-col cols="2" md="2">
            <v-select :items="['1','2','3','4','5']" label="จำนวนบุตร" dense solo></v-select>
          </v-col>
        </v-row>
        <v-chip
          class="ma-2"
        >ประวัติทางครอบครัว (ประวัติของบิดา / มารดา / พี่น้องทุกคน) / Family background</v-chip>
        <br />
        <v-chip class="ma-2">ควำมสัมพันธ์/ Relation</v-chip>
        <v-row>
          <v-subheader>
            บิดา
            <br />Father
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            มารดา
            <br />Father
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            พี่น้องลำดับที่1
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            พี่น้องลำดับที่2
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            พี่น้องลำดับที่3
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            พี่น้องลำดับที่4
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            พี่น้องลำดับที่5
            <br />
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ชื่อ/นามสกุล" hint="Name" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            อายุ
            <br />Age
          </v-subheader>
          <v-col cols="1" md="1">
            <v-text-field label="อายุ" hint="ระบุเป็นตัวเลข" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            สถานที่ทำงาน/โทรศัพท์
            <br />Company/Telephone
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="สถานที่ทำงาน/โทรศัพท์" hint="Company/Telephone" dense outlined></v-text-field>
          </v-col>
          <v-subheader>
            ตำแหน่ง/อำชีพ
            <br />Position
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field label="ตำแหน่ง/อำชีพ" hint="Position" dense outlined></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <v-row>
        <v-btn color="primary" :disabled="!valid" @click="save()">Continue</v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["thisid"],
  data() {
    return {
      data: null,
      valid: false,
      rules: {
        nt: [v => !!v || "Item is required"],
        xnamet: [
          v => !!v || "Name is required",
          v => (v && v.length >= 5) || "Name must be more than 5 characters",
          v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
        ]
      },
      datain: {
        nt: "",
        namet: "",
        surnamet: ""
      }
    };
  },
  methods: {
    async init() {},
    async save() {
      let urldata = process.env.VUE_APP_DATA;
      // console.log(urldata + "/" + this.thisid);
      let res = await axios({
        method: "get",
        url: urldata + "/" + this.thisid
      });
      this.data = res.data;
      this.$parent.$parent.$parent.e6 = 2;
      let obj = Object.assign(this.data, this.datain);
      res = await axios({
        method: "put",
        url: urldata + "/" + this.thisid,
        data: obj
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>