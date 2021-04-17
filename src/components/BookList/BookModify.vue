<template>
  <div>
    <button @click="patchData">確認修改</button>
  </div>
</template>

<script>

import { patchData } from "../../util"

export default {
  props: ["bookNewPrice", "bookNewCount"],
  methods: {
    patchData() {
      if (!this.bookNewPrice && !this.bookNewCount){return}
      const patchId = this.$route.params.bookId

      let patchObj = {
        id: patchId,
      }
      this.bookNewPrice ? patchObj["price"] = this.bookNewPrice : null;
      this.bookNewCount ? patchObj["count"] = this.bookNewCount : null;

      patchData('https://fe-interview-api.unnotech.com/profile/' + patchId, patchObj)
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