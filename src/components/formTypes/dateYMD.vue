<template>
  <el-form-item :label="item.label" :label-width="item.width || labelWidth">
    <el-date-picker value-format="yyyy-MM-dd"
      v-model="item.values"
      type="date"
      :placeholder="item.placeholder"
      >
    </el-date-picker>
  </el-form-item>
  
</template>
<script>
export default {
  data() {
    return {
      labelWidth:"96px"
    }
  },
  props:['item']
}
</script>

