<template>
  <el-form-item :label="item.label" :label-width="item.width || labelWidth">
    <el-cascader
      clearable
      v-model="item.values"
      :options="item.data"
      class="cascader_data"
      :placeholder="`请选择` + item.label"
      :props="item.props"
      @change="onChange()"
    ></el-cascader>
  </el-form-item>
</template>
<script>
export default {
  
  data() {
    return {
      labelWidth: "96px"
    }
  },
  props: ["item"],
  methods:{
    onChange(){                     
      console.log(this.item.values);
    }
  }
}
</script>
