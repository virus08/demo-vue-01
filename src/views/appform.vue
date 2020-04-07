<template>
  <div>
    <div class="Contianner">
      <div style="text-align:center;">
        <h2>บริษัทวีเอสที อีซีเอส (ประเทศไทย) จำกัด</h2>
        <h2>VST ECS (Thailand) Co., Ltd.</h2>
        <br />
        <p style="font-size:8pt;">
          275 ซอยลาดพร้าว 101 (วัดบึงทองหลาง) แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพฯ 10310
          <br />275 Soi Lat Phrao 101 (Wat Bung Thonglang), Khlong Chao Khun Sing, Wang Thonglang, Bangkok 10310, Thailand
          <br />โทร.0-2032-9999 แฟกซ์ 0-2032-9989
        </p>
      </div>
      <div>
        <table class="Type1" style="height:3.5cm;" cellpadding="0" cellspacing="0">
          <tr>
            <td class="Type1">
              <v-row>
                <v-col cols="3">วันที่/ Date</v-col>
                <v-col cols="4">
                  <input class="txt" type="text" style="width:10cm" value="27/3/2563" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">ตำแหน่ง/ Position</v-col>
                <v-col cols="4">
                  <input
                    class="txt"
                    type="text"
                    style="width:10cm"
                    value="Business Development (Sale IT Product)"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">วันที่เริ่มงาน/ Starting Date</v-col>
                <v-col cols="4">
                  <input class="txt" type="text" style="width:10cm" value="01/04/2563" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">ทราบข่าวการสมัครจาก</v-col>
                <v-col cols="4">
                  <input class="txt" type="text" style="width:10cm" value="เว็บไซต์" />
                </v-col>
              </v-row>
            </td>
            <td class="Type1" align="center" style="width:3.5cm;">
             
            </td>
          </tr>
        </table>
      </div>
      <div>
        <p style="text-decoration:underline;">ประวัติส่วนบุคคล / Personnel Data</p>
        <v-row>
          <v-col cols="1">ชื่อ - สกุล</v-col>
          <v-col cols="8">
            <input align="left" class="txt" type="text" style="width:11.5cm" :value="data.nt+' '+data.namet+' '+data.surnamet" />
          </v-col>
          <v-col cols="1">ชื่อเล่น</v-col>
          <v-col cols="2">
            <input align="left" class="txt" type="text" style="width:3cm" value="Jo" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">Name - Surname</v-col>
          <v-col cols="10">
            <input align="left" class="txt" type="text" style="width:14.5cm" :value="data.ne+' '+data.namee+' '+data.surnamee" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">วันเกิด/ Birth Date</v-col>
          <v-col cols="7">
            <input class="txt" type="text" style="width:9.5cm" value="1 มกราคม 2504" />
          </v-col>
          <v-col cols="1">อายุ</v-col>
          <v-col cols="2">
            <input class="txt" type="text" style="width:2.4cm;padding-left:40px;" value="59" /> ปี
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">สถานที่เกิด/ Place of birth</v-col>
          <v-col cols="7">
            <input class="txt" type="text" style="width:10cm" value />
          </v-col>
          <v-col cols="1">เพศ</v-col>
          <v-col cols="1">
            <input class="txt" type="text" style="width:1.5cm" value="ชาย" />
          </v-col>
        </v-row>
        <br />
        <table class="Type1" cellpadding="0" cellspacing="0">
          <tr>
            <th class="Type1">
              สัญชาติ
              <br />Nationality
            </th>
            <th class="Type1">
              เชื้อชาติ
              <br />Race
            </th>
            <th class="Type1">
              ศาสนา
              <br />Religion
            </th>
            <th class="Type1">
              ส่วนสูง
              <br />Height
            </th>
            <th class="Type1">
              น้ำหนัก
              <br />Weight
            </th>
          </tr>
          <tr align="center">
            <td class="Type1">
              <input class="txt" type="text" style="width:1cm" value="ไทย" />
            </td>
            <td class="Type1">
              <input class="txt" type="text" style="width:1cm" value="ไทย" />
            </td>
            <td class="Type1">
              <input class="txt" type="text" style="width:2cm" value />
            </td>
            <td class="Type1">
              <input class="txt" type="text" style="width:1cm" value="180" /> cm.
            </td>
            <td class="Type1">
              <input class="txt" type="text" style="width:1cm" value="80" /> kg.
            </td>
          </tr>
        </table>
        <br />
        <v-row>
          <v-col cols="3">
            ที่อยู่ปัจจุบัน
            <br />Present Address
          </v-col>
          <v-col cols="9">
            <input class="txt" type="text" style="width:11.5cm" value="VST ECS" />
            <br />
            <input class="txt" type="text" style="width:11.5cm" value />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">Telephone</v-col>
          <v-col cols="2">
            <input class="txt" type="text" style="width:2cm" value="0839239741" />
          </v-col>
          <v-col cols="1">Mobile</v-col>
          <v-col cols="3">
            <input class="txt" type="text" style="width:3.5cm" value="0839239741" />
          </v-col>
          <v-col cols="1">E-mail</v-col>
          <v-col cols="3">
            <input class="txt" type="text" style="width:4cm" value="Panuruk@vstecs.co.th" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            ที่อยู่ตามทะเบียนบ้าน
            <br />Permanent Address
          </v-col>
          <v-col cols="5">
            <input class="txt" type="text" style="width:6cm" value />
            <br />
            <input class="txt" type="text" style="width:6cm" value />
          </v-col>
          <v-col cols="1" style="padding-right:10px;">
            <br />Telephone
          </v-col>
          <v-col cols="2">
            <br />
            <input class="txt" type="text" style="width:4cm;padding-left:10px;" value />
          </v-col>
          <v-row>
            <v-col cols="3">
              สถานที่ทำงานปัจจุบัน
              <br />Office Address
            </v-col>
            <v-col cols="9">
              <input class="txt" type="text" style="width:11.5cm" value />
              <br />
              <input class="txt" type="text" style="width:11.5cm" value />
            </v-col>
            <v-row>
              <v-col cols="2">Telephone</v-col>
              <v-col cols="3">
                <input class="txt" type="text" style="width:3.5cm" value />
              </v-col>
              <v-col cols="1">Extension</v-col>
              <v-col cols="1">
                <input class="txt" type="text" style="width:1cm" value />
              </v-col>
              <v-col cols="4">สถานภาพการสมรส Marital Status</v-col>
              <v-col cols="1">
                <input class="txt" type="text" style="width:1.7cm" value="โสด" />
              </v-col>
            </v-row>
          </v-row>
        </v-row>
      </div>

      <div>
        <br />
        <p style="text-decoration:underline;">ข้อมูลของคู่สมรสและบุตร / Family Information</p>
       <v-row>
           <v-col cols="3">
              ชื่อ-สกุล คู่สมรส
              <br />Name of spouse
           </v-col>
           <v-col cols="6">
              <input class="txt" type="text" style="width:7cm" value />
           </v-col>
            <v-col cols="1">บุตร</v-col>
            <v-col cols="2">
              <input class="txt" type="text" style="width:1cm" value /> คน
            </v-col>
       </v-row>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:2.5cm;">
              สถานที่ทำงาน
              <br />Office Address
            </td>
            <td>
              <input class="txt" type="text" style="width:14cm" value />
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:2.5cm;">
              โทรศัพท์
              <br />Telephone
            </td>
            <td>
              <input class="txt" type="text" style="width:3.5cm" value />
            </td>
            <td style="width:2.0cm; text-align:center;">
              อาชีพ
              <br />Occupation
            </td>
            <td>
              <input class="txt" type="text" style="width:3.25cm" value />
            </td>
            <td style="width:2.0cm; text-align:center;">
              ตำแหน่ง
              <br />Position
            </td>
            <td>
              <input class="txt" type="text" style="width:3.25cm" value />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     props: ["data"],
};
</script>
<style scoped>
html {
  width: 100%;
  height: 100%;
  padding: 1cm;
  margin: 1cm;
}
body {
  background-color: #ffffff;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 9pt;
  width: 100%;
  height: 100%;
  padding: 0cm;
  margin: 0cm;
}
p {
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
  padding: 0cm;
}
div {
  margin: 0cm;
  padding: 0.1cm;
  width: 98%;
}
div.Contianner {
  background-color: #ffffff;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
  margin: 0.5cm;
  padding: 0.5cm;
  width: 19.5cm;
  height: 26.6cm;
}
input.txt {
  border-bottom: dotted 1px #000000;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 9pt;
  padding-left: 5px;
  text-align: left;
}
h1 {
  font-size: 12pt;
  line-height: 0.3cm;
}
table {
  width: 100%;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}
td {
  padding-top: 0.2cm;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}
th {
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}

table.Type1 {
  border-right: solid 1px #000000;
  border-bottom: solid 1px #000000;
  border-top-style: none;
  border-left-style: none;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}
td.Type1 {
  border-left: solid 1px #000000;
  border-top: solid 1px #000000;
  border-bottom-style: none;
  border-right-style: none;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}
th.Type1 {
  border-left: solid 1px #000000;
  border-top: solid 1px #000000;
  border-bottom-style: none;
  border-right-style: none;
  font-family: Tahoma, Garamond, "Times New Roman";
  color: #000000;
  font-size: 8pt;
}
</style>