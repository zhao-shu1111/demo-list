<template>
  <el-form-item :label="item.label" >
    <el-date-picker value-format="yyyy-MM"
      v-model="item.values"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
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

