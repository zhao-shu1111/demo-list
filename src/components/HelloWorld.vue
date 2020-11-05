<template>
  <div class="hello" ref="div1">
   <el-button  ref="div2">按钮1</el-button>
   <el-button>按钮2</el-button>
   <el-button>按钮3</el-button>
   <el-button>按钮4</el-button>
   <div ref="child-div">  
     <el-button v-for="(label , index) in list" :key="index" ref="aa">{{label}}</el-button>
   </div>
   <queryForm :formData="formData" @search="getSearchData" @reset="reset(formData)" :lastData="lastData" />
   
  </div>
</template>

<script>
import queryForm from "./queryForm";
import headinfo from "./js/contractHead";
export default {
  mixins:[headinfo],
  name: 'HelloWorld', 
  props: {
    msg: String,
  
  },
  components:{queryForm},
  data(){
    return{
      list:["sss" , "fff" , "ddd"],
    }
  },
  mounted(){
    console.log(this.$refs["aa"])
  
  },
  methods:{
    getSearchData(){

    },
    reset(data){
      console.log(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
