<template>
  <div>

  </div>
</template>

<script>

import {Notify} from 'quasar'

let notify = null
export default {

  openNotify(message, timeout=0) {
    notify = Notify.create({
      type:'negative',

      message: message,
      timeout: timeout
    })
  },
  closeNotify(){
    notify()
  }
}
</script>
