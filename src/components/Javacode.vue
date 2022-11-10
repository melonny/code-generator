<template>
  <div class="javacode-layout">
    <el-container>
      <el-aside width="12%">
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
        <el-row>
          <el-col :span="22">
            <el-input
              style="top: 5%; font-size:20px"
              v-model="input"
              placeholder="Please input variable type + operation, eg.arraylist+new "
            />
          </el-col>
          <el-col :span="2">
            <el-button :icon="Search" circle size="large" @click="inputTranslator"/>
          </el-col>
        </el-row>
        <h1 style="font-size: 50px">我是真的无语排版排了一天😂</h1>
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

function inputTranslator(){
  console.log(input.value);
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