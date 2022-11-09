<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { TableColumn } from "element-ui";
console.log(TableColumn);

const tableData = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
];
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <TableColumn prop="address" label="地址">
      <HelloWorld />
    </TableColumn>
  </el-table>
</template>

<style scoped></style>
