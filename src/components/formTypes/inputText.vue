<!-- 
  type:"inputText", //类型
  label: "线索来源",
  values: "12345", //默认值
  disabled:"true"  //是否置灰
  -->
<template>
<!--:disabled="item.disabled 置灰 -->
  <el-form-item :label="item.label" :label-width="item.width || labelWidth">
    <el-input v-model="item.values" @change="onChange()" clearable :placeholder="`请输入`+ item.label" class="input_text"></el-input>
  </el-form-item>
</template>
<script>
export default {
  data() {
    return {
      labelWidth:"96px"
    }
  },
  props: ["item" , "lastData"],
  methods:{
      onChange(){
        console.log(this.lastData);
        this.item.formatData(this.item.values);
      }
  }
}
</script>
