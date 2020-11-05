<template>
  <el-form-item :label="item.label" :label-width="item.width || labelWidth">
    <el-select clearable v-model="item.values" filterable :placeholder="`请选择`+item.label" class="select_default">
      <el-option v-for="(item, $index) in item.data" :key="$index" :label="item.name" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
</template>
<script>
export default {
  data() {
    return { labelWidth: "96px" }
  },
  props: ["item"]
}
</script>
