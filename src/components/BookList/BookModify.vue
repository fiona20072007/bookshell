<template>
  <div>
    <button @click="patchBookDetail">確認修改</button>
  </div>
</template>

<script>

import { patchData } from "../../util"
import {getBookProfileUrl} from "../../constants"

export default {
  props: ["bookNewPrice", "bookNewCount"],
  methods: {
    patchBookDetail() {
      if (!this.bookNewPrice && !this.bookNewCount){return}
      const patchId = this.$route.params.bookId

      let patchObj = {
        id: patchId,
      }
      this.bookNewPrice ? patchObj["price"] = this.bookNewPrice : null;
      this.bookNewCount ? patchObj["count"] = this.bookNewCount : null;

      patchData(getBookProfileUrl + patchId, patchObj)
          .then(response => {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    }
  }
}
</script>