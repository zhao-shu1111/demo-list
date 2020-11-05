<template>
  <el-form-item :label="item.label" >
    <el-cascader clearable  collapse-tags :props="{ value: 'value', label: 'name',multiple: true}"
    v-model="item.values"
    :options="item.data"
    ></el-cascader>
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

