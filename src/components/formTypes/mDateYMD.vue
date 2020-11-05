<template>
  <el-form-item :label="item.label" :label-width="item.width || labelWidth">
    <el-date-picker
      value-format="yyyy-MM-dd"
      v-model="item.values"
      type="daterange"
      range-separator="至"
      class="date_range"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="onChange()"
    ></el-date-picker>
  </el-form-item>
</template>
<script>
export default {
  data() {
    return { labelWidth: "96px" };
  },
  props: ["item", "lastData"],
  methods: {
    onChange() {
      this.item.formatData(this.item.values);
    },
  },
};
</script>
