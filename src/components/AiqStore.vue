<template>
  <div class="store">
    <AiqStoreInfo :store="data.store" />

    <AiqProduct :mainProduct="data.mainProduct" />
    
    <div v-for="(value, key) in data.complementary">
      <!-- Counter -->
      <div
        class="group"
        v-if="value.type === 'counter'"
      >
        <AiqGroupHeader :label="value.label" />
        <div class="group__content">
          <AiqGroupCounter
            v-for="product in value.products"
            :product="product"
            :key="product.sku"
          />
        </div>
      </div>

      <!-- Radio -->
      <AiqGroupRadio v-if="value.type === 'radio'" :products="value.products" :label="value.label" />

      <!-- Checkbox -->
      <div 
        class="group"
        v-if="value.type === 'checkbox'"
      >
        <AiqGroupHeader :label="value.label" />
        <div class="group__content">
          <AiqGroupCheckbox
            v-for="product in value.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <AiqTextArea />
  </div>
</template>

<script setup>
import AiqTextArea from '@/ui/AiqTextArea.vue'
import AiqStoreInfo from "@/components/AiqStoreInfo.vue"
import AiqProduct from "@/components/AiqProduct.vue"
import AiqGroupCheckbox from "@/components/AiqGroupCheckbox.vue"
import AiqGroupRadio from "@/components/AiqGroupRadio.vue"
import AiqGroupCounter from "@/components/AiqGroupCounter.vue"
import AiqGroupHeader from '@/components/AiqGroupHeader.vue'

const props = defineProps({
  data: Object
})
</script>

<style lang="scss">
.store {
  padding: 2.4rem 0;
}

.group {
  padding: 2.4rem;
  border-bottom: .4rem solid #EEF0F5;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 7.5rem;
    row-gap: 3.5rem;
  }

  &__input {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    gap: .8rem;
    align-items: center;

    input {
      &[type="radio"],
      &[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      &:checked + label .checkmark {
        border: none;
        background-color: var(--color-icon);
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .group {
    padding-left: 0;
    padding-right: 0;
    
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    }
  }
}
</style>