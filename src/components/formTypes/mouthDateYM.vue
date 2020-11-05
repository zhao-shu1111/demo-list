<template>
  <el-form-item :label="item.label" >
    <el-date-picker value-format="yyyy-MM"
      v-model="item.values[0]"
      type="month"
      >
    </el-date-picker>
  </el-form-item>
  
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props:['item']
}
</script>

