 <template>
  <v-card>
    <v-container fluid>
      <v-chip class="ma-2">อันดับที่ 1/ No.1</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-ที่อยู่บริษัท
              <br />Name-
              <br />Address Employer
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ประเภทธุรกิจ
              <br />Type of Business
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ระยะเวลา
              <br />Period
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือนล่าสุด
              <br />Salary
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินได้พิเศษ
              <br />Special Income
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าพาหนะ/ Travelling expenses " placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าโทรศัพท์/ Mobile" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าคอมมิชชัน/ Commission" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="อื่นๆ/ Other" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ตำแหน่งงานสุดท้าย
              <br />Last Position
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              หน้าที่ความรับผิดชอบ
              <br />Type of Work
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-สกุล ผู้บังคับบัญชา
              <br />Name of Chief
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">โทรศัพท์ของผู้บังคับบัญชา/Chief's Phone</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              สาเหตุที่ลาออก
              <br />Reason for Leaving
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-chip class="ma-2">อันดับที่ 2/ No.2</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-ที่อยู่บริษัท
              <br />Name-
              <br />Address Employer
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ประเภทธุรกิจ
              <br />Type of Business
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ระยะเวลา
              <br />Period
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือนล่าสุด
              <br />Salary
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินได้พิเศษ
              <br />Special Income
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าพาหนะ/ Travelling expenses " placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าโทรศัพท์/ Mobile" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าคอมมิชชัน/ Commission" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="อื่นๆ/ Other" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ตำแหน่งงานสุดท้าย
              <br />Last Position
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              หน้าที่ความรับผิดชอบ
              <br />Type of Work
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-สกุล ผู้บังคับบัญชา
              <br />Name of Chief
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">โทรศัพท์ของผู้บังคับบัญชา/Chief's Phone</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              สาเหตุที่ลาออก
              <br />Reason for Leaving
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-chip class="ma-2">อันดับที่ 3/ No.3</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-ที่อยู่บริษัท
              <br />Name-
              <br />Address Employer
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ประเภทธุรกิจ
              <br />Type of Business
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ระยะเวลา
              <br />Period
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือนล่าสุด
              <br />Salary
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินได้พิเศษ
              <br />Special Income
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าพาหนะ/ Travelling expenses " placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าโทรศัพท์/ Mobile" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าคอมมิชชัน/ Commission" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="อื่นๆ/ Other" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ตำแหน่งงานสุดท้าย
              <br />Last Position
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              หน้าที่ความรับผิดชอบ
              <br />Type of Work
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-สกุล ผู้บังคับบัญชา
              <br />Name of Chief
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">โทรศัพท์ของผู้บังคับบัญชา/Chief's Phone</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              สาเหตุที่ลาออก
              <br />Reason for Leaving
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-chip class="ma-2">อันดับที่ 4/ No.4</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-ที่อยู่บริษัท
              <br />Name-
              <br />Address Employer
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ประเภทธุรกิจ
              <br />Type of Business
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ระยะเวลา
              <br />Period
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือนล่าสุด
              <br />Salary
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              เงินได้พิเศษ
              <br />Special Income
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าพาหนะ/ Travelling expenses " placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าโทรศัพท์/ Mobile" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="ค่าคอมมิชชัน/ Commission" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field label="อื่นๆ/ Other" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ตำแหน่งงานสุดท้าย
              <br />Last Position
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              หน้าที่ความรับผิดชอบ
              <br />Type of Work
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-สกุล ผู้บังคับบัญชา
              <br />Name of Chief
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">โทรศัพท์ของผู้บังคับบัญชา/Chief's Phone</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              สาเหตุที่ลาออก
              <br />Reason for Leaving
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-8-5" label="Details" hint="Details"></v-textarea>
        </v-col>
      </v-row>
      <v-chip class="ma-2">ประวัติการฝึกอบรม-สัมมนา / Training Course - Seminar</v-chip>
      <v-row>
        <v-col cols="1">
          <v-chip class="ma-2">ลำดับที่ 1</v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ชื่อสถาบัน/Institute</p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">หัวข้อการฝึกอบรม/Course</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ระยะเวลา/ Period</p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-chip class="ma-2">ลำดับที่ 2</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ชื่อสถาบัน/Institute</p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">หัวข้อการฝึกอบรม/Course</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ระยะเวลา/ Period</p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-chip class="ma-2">ลำดับที่ 3</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ชื่อสถาบัน/Institute</p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">หัวข้อการฝึกอบรม/Course</p>
        </v-subheader>
        <v-col cols="2" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ระยะเวลา/ Period</p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="เริ่ม/Since" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="ถึง/Until" placeholder="Details" dense outlined></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="รวม/Total" placeholder="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-chip
        class="ma-2"
      >บุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน / Person to Contact in Case of Emergency</v-chip>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">
              ชื่อ-สกุล
              <br />Name-Surname
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">ความสัมพันธ์/Relation</p>
        </v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ที่อยู่/Address</p>
          </v-subheader>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">โทรศัพท์/Telephone</p>
        </v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">ที่ทำงำน/Office</p>
          </v-subheader>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">
            ตำแหน่ง
            <br />Position
          </p>
        </v-subheader>
        <v-col cols="2" md="2">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">
            โทรศัพท์
            <br />Telephone
          </p>
        </v-subheader>
        <v-col cols="2" md="2">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-chip class="ma-2">ข้อมูลเพิ่มเติม / Miscellaneous</v-chip>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              คุณเคยต้องโทษทางอาญาหรือไม่
              <br />Do you have any criminal or civil record?
            </p>
          </v-subheader>
        </v-col>
        <v-radio-group row>
          <v-radio label="ไม่เคย/ No " dense outlined></v-radio>
          <v-radio label="เคย/ Yes" dense outlined></v-radio>
        </v-radio-group>
        <v-subheader>ระบุ/Explain</v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              คุณเคยสมัครงานหรือทำงานกับบริษัทมาก่อนหรือไม่
              <br />Have you ever applied to this company?
            </p>
          </v-subheader>
        </v-col>
        <v-radio-group row>
          <v-radio label="ไม่เคย/ No " dense outlined></v-radio>
          <v-radio label="เคย/ Yes" dense outlined></v-radio>
        </v-radio-group>
        <v-subheader>ระบุ/Explain</v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              คุณเคยป่วยหนักหรือเป็นโรคติดต่อร้ายแรงหรือไม่
              <br />Have you ever been seriously ill or contracted with contagious disease?
            </p>
          </v-subheader>
        </v-col>
        <v-radio-group row>
          <v-radio label="ไม่เคย/ No " dense outlined></v-radio>
          <v-radio label="เคย/ Yes" dense outlined></v-radio>
        </v-radio-group>
        <v-subheader>ระบุ/Explain</v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              บริษัทสามารถพูดคุยกับนายจ้างเดิมของคุณได้หรือไม่
              <br />Can we contact your past employer?
            </p>
          </v-subheader>
        </v-col>
        <v-radio-group row>
          <v-radio label="ได้/ Yes" dense outlined></v-radio>
          <v-radio label="ไม่ได้/ No" dense outlined></v-radio>
        </v-radio-group>
        <v-subheader>เพราะ/ Because</v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              บุคคลในบริษัทที่คุณรู้จัก
              <br />Relatives or friends working in this company
            </p>
          </v-subheader>
        </v-col>
        <v-radio-group row>
          <v-radio label="มี/ Yes" dense outlined></v-radio>
          <v-radio label="ไม่มี/ No" dense outlined></v-radio>
        </v-radio-group>
        <v-subheader>ชื่อ/ Name</v-subheader>
        <v-col cols="3" md="3">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">
              ข้อความเพิ่มเติมอื่น ๆ ที่ประสงค์จะแจ้งให้ทราบ
              <br />Additional information
            </p>
          </v-subheader>
        </v-col>
        <v-col cols="5" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader>
            <p class="font-weight-black">เงินเดือนที่ต้องการ/Salary Expectation</p>
          </v-subheader>
        </v-col>
        <v-col cols="5" md="5">
          <v-text-field label="Details" hint="Details" dense outlined></v-text-field>
        </v-col>
      </v-row>
        </v-container>
  </v-card>
</template>