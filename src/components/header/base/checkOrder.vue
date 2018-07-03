<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './../dialog'
export default {
  components: {
    thisDialog: Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number] // orderId为String或Number类型
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      // 发送请求 检查订单
      this.$http.post('/api/checkOrder', {
        orderId: this.orderId
      },{emulateJSON : true})
      .then((res) => {
        //this.isShowSuccessDialog = true
        console.log(res.data.data)
        this.$emit('on-close-check-dialog')
      }, (err) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
      this.isShowSuccessDialog = true
      this.$emit('on-close-check-dialog')
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>


<style scoped>

</style>