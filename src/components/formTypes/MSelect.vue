<template>
  <el-form-item :label="item.label" >
    <el-select clearable v-model="item.values" multiple filterable>
      <el-option v-for="(it,$index) in item.data" :key="$index" :label="it.name" :value="it.value"></el-option>
    </el-select>
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

