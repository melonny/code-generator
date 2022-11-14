<template>
  <div class="javacode-layout">
    <el-container>
      <el-aside width="20%">
        <el-menu default-active="1" class="el-menu-vertical">
          <el-menu-item index="1">
            <span>📐Data Operation</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span>🎶Logic Operation</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>🥤Want More</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>

        <el-input v-model="input" type="textarea" :autosize="{ minRows: 5, maxRows: 9 }"
          placeholder="original language">
        </el-input>

        <el-select size="small" style="top:45px" v-model="value" placeholder="Select one language">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="info" circle size="small" style="top:45px" color="#626aef" @click="inputTranslator"></el-button>
        <el-select size="small" style="top:45px" v-model="value_2" placeholder="Select one language">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

        <el-input v-model="object" style="top:100px" type="textarea" :autosize="{ minRows: 5, maxRows: 9 }"
          placeholder="object language"></el-input>

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const input = ref("");
const object = ref("");
const value = ref('');
const value_2 = ref('');
const options = [
  {
    value: 'Option_Java',
    label: 'Java',
  },
  {
    value: 'Option_Python',
    label: 'Python',
  },
  {
    value: 'Option_C#',
    label: 'C#',
  },
];

function inputTranslator() {
  console.log(value);
  console.log(value_2);
  if(value.value == value_2.value){
    object.value = input.value;
  }
  else{
    object.value = "translate";
  }
}

</script>

<style>
.javacode-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  top: 5%;
}

span {
  font-size: 20px;
}
</style>