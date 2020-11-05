<template>
  <div class="query_form">
    <el-form :inline="true" size="small">
      <template v-for="(item, $index) in formData">
        <component :key="$index" :is="item.type" :item="item" :lastData="lastData"></component>
      </template>
      <div class="btn-container">
        <el-form-item>
          <el-button size="small" @click="reset">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="search">查询</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import inputText from "./formTypes/inputText"
import selectDefault from "./formTypes/selectDefault"
import MSelect from "./formTypes/MSelect"
import dateYMD from "./formTypes/dateYMD"
import mDateYMD from "./formTypes/mDateYMD"
import cascader from "./formTypes/cascader"
import MCascader from "./formTypes/MCascader"
import mouthDateYM from "./formTypes/mouthDateYM"
import mMouthDateYM from "./formTypes/mMouthDateYM"

export default {
  components: {
    inputText,
    selectDefault,
    MSelect,
    dateYMD,
    mDateYMD,
    cascader,
    MCascader,
    mouthDateYM,
    mMouthDateYM
  },
  props: {
    formData: {
      type: Array,
      default: () => []
    },
    //最后接收的数值
    lastData:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {}
  },
  methods: {
    reset() {
      this.$emit("reset")
    },
    search() {
      this.$emit("search")
    }
  }
}
</script>
<style lang="less" scoped>
.query_form {
  margin: 7px 0 0 7px;
  /deep/.el-form-item {
    .el-form-item__content {
      .date_range,
      .select_default,
      .input_text,
      .cascader_data {
        width: 220px;
      }
    }
  }
  .btn-container{
    height: 35px;
  }
}
</style>
