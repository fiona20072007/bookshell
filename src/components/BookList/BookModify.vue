<template>
  <div class="patchBtn">
    <button @click="patchBookDetail">確認修改</button>
  </div>
  <div :class="[sendStatus ? activeClass : noAlert]"><img class="successImg" src="../../assets/success.jpg"/>修改成功</div>
  <div :class="[failStatus ? errorClass : noAlert]"><img class="failImg" src="../../assets/fail.png"/>修改失敗</div>
  <div :class="[noModifyStatus ? noModifyClass : noAlert]"><img class="failImg" src="../../assets/fail.png"/>請修改數值</div>
</template>

<script>

import {patchData} from "../../util"
import {getBookProfileUrl} from "../../constants"

export default {
  props: ["bookNewPrice", "bookNewCount"],
  data() {
    return {
      sendStatus: false,
      failStatus: false,
      noModifyStatus: false,
      activeClass: 'successAlert',
      noAlert: 'noAlert',
      errorClass: 'errorAlert',
      noModifyClass: 'noModifyAlert'
    }
  },
  methods: {
    patchBookDetail() {
      if (!this.bookNewPrice && !this.bookNewCount) {
        this.noModifyStatus = true;
        window.setTimeout(() => {
          this.noModifyStatus = false
        }, 1000)
        return
      }
      const patchId = this.$route.params.bookId

      let patchObj = {
        id: patchId,
      }
      this.bookNewPrice ? patchObj["price"] = this.bookNewPrice : null;
      this.bookNewCount ? patchObj["count"] = this.bookNewCount : null;

      patchData(getBookProfileUrl + patchId, patchObj)
          .then(() => {
            this.sendStatus = true;
            window.setTimeout(() => {
              this.sendStatus = false
            }, 1000)
          })
          .catch(function () {
            this.failStatus = true;
            window.setTimeout(() => {
              this.failStatus = false
            }, 1000)
          })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/bookmodify";
</style>