<template>
  <div>

  </div>
</template>

<script>

import {Notify} from 'quasar'

let notify = null
let success = null
export default {

  openNotify() {
    notify = Notify.create({

      color:'primary',
      spinner: true,
      message: 'Por favor aguarde...',
      timeout: 0
    })
  },
  openSuccess(message) {
    success = Notify.create({

      color:'green',
      spinner: false,

      message: message,
      timeout: 3000
    })
  },
  closeNotify(){
    notify()
  },
  closeSuccess(){
    success()
  }

}
</script>
