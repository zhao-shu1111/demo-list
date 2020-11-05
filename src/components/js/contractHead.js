/* eslint-disable no-unused-vars */

/*
 * @Author       : 马腾飞
 * @Date         : 2020-11-02 14:09:44
 * @LastEditTime : 2020-11-02 17:32:03
 * @FilePath     : /yy-mono/projects/queqiao/src/views/contract/js/contractHead.js
 */
export default {
  data() {
    const globalArea = this.globalArea;
    const clueTransType = [
      {
        value: 1,
        name: "静默转化"
      },
      {
        value: 2,
        name: "销售转化"
      }
    ];
    const fuStatus = [
      {
        value: 99,
        name: "未支付"
      },
      {
        value: 0,
        name: "待分配"
      },
      {
        value: 1,
        name: "跟进中"
      },
      {
        value: 10,
        name: "已生效"
      }
    ];
    return {
      lastData: {},
      formData: [
        {
          type: "inputText",
          label: "合同编号",
          values: "", //默认值
          selectData: "contractNumber",
          formatData: value => (this.lastData.contractNumber = value + 2)
        },
        {
          type: "inputText",
          label: "合同编号",
          values: "", //默认值
          selectData: "contractStatusList",
          formatData: value => (this.lastData.contractStatusList = value + "__list")
        },
        {
          type: "mDateYMD",
          label: "创建时间",
          values: [], //默认值
          selectData: "createTime",
          formatData: value => {
            this.lastData.createTimeStart = value[0] || "";
            this.lastData.createTimeEnd = value[1] || "";
            console.log(this.lastData);
          }
        }
      ]

      // formData: [
      //   {
      //     type: "inputText",
      //     label: "合同编号",
      //     values: "", //默认值
      //     selectData: "contractNumber",
      //     formatData(value){
      //       console.log("run it " + value);
      //       this.lastData.contractNumber = value + 2;
      //     }
      //   },
      //   {
      //     type: "inputText",
      //     label: "合同状态",
      //     values: [], //默认值
      //     selectData: "contractStatusList",
      //     formatData(value){
      //       console.log("run it " + value);
      //       this.lastData.contractNumber = value + 2;
      //     }
      //   },
      //   {
      //     type: "cascader",
      //     label: "订单区域",
      //     values: [], //默认值
      //     data: globalArea,
      //     props: {
      //       value: "sysAreaId",
      //       label: "sysAreaName"
      //     },
      //     selectData: "areaCodeList"
      //   },
      //   {
      //     type: "selectDefault",
      //     label: "渠道订单编号",
      //     values: "", //默认值
      //     data: [],
      //     selectData: "orderThirdNumber"
      //   },
      //   {
      //     type: "selectDefault",
      //     label: "订单内容",
      //     values: "", //默认值
      //     data: [],
      //     selectData: "contractContent"
      //   },
      //   {
      //     type: "inputText",
      //     label: "联系方式",
      //     values: "", //默认值
      //     selectData: "contractContactsPhone"
      //   },
      //   {
      //     type: "创建人id",
      //     label: "联系方式",
      //     values: [], //默认值
      //     selectData: "createUserIds"
      //   },
      //   {
      //     type: "mDateYMD",
      //     label: "创建时间",
      //     values: [], //默认值
      //     selectData: "createTimeBegin-createTimeEnd"
      //   },
      //   {
      //     type: "mDateYMD",
      //     label: "分配时间",
      //     values: [], //默认值
      //     selectData: "allocateTimeBegin-allocateTimeEnd"
      //   },
      //   {
      //     type: "mDateYMD",
      //     label: "退款时间",
      //     values: [], //默认值
      //     selectData: "refundTimeBegin-refundTimeEnd"
      //   },
      //   {
      //     type: "分配人id",
      //     label: "合同状态",
      //     values: [], //默认值
      //     data: fuStatus,
      //     selectData: "allocateUserIds"
      //   },
      //   {
      //     type: "selectDefault",
      //     label: "分配状态",
      //     data: clueTransType,
      //     values: [], //默认值
      //     selectData: "allocateStatusList"
      //   },
      //   {
      //     type: "selectDefault",
      //     label: "承接方",
      //     values: [], //默认值
      //     selectData: "groupIdList"
      //   },
      //   {
      //     type: "selectDefault",
      //     label: "服务商类型",
      //     values: 0, //默认值
      //     selectData: "serviceProviderType"
      //   }
      // ]
    };
  },
  created() {}
};
