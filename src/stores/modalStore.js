import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const status = ref(false)

  /**
   * Opens the modal.
   */
  function open() {
    status.value = true 
  }

  /**
   * Closes the modal.
   */
  function close() {
    status.value = false 
  }

  /**
   * Toggle status of the modal.
   */
  function toggle() {
    status.value = !status.value
  }

  return { status, open, close, toggle }
})