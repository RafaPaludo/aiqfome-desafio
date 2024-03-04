import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const status = ref(false)

  function open(params) {
    status.value = true 
  }

  function close(params) {
    status.value = false 
  }

  function toggle(params) {
    status.value = !status.value
  }

  return { status, open, close, toggle }
})