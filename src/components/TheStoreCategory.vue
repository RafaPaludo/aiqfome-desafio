<template>
  <section class="category">
    <div class="category__title">
      <div class="category__text">
        <h3>{{ category.title }}</h3>
        <span>{{ category.subtitle }}</span>
      </div>
      <div
        v-if="category.required"
        class="badge category__badge">
        obrigatório
      </div>
    </div>

    <!-- Radio -->
    <div
     class="category__type"
     v-if="category.type === 'radio'" 
    >
      <TheCategoryRadio
        :required="category.required"
        :categoryType="category.options"
      />
    </div>

    <!-- Checkbox -->
    <!-- <div
     class="category__type"
     v-if="category.type === 'checkbox'" 
    > 
      <TheCategoryCheckbox
        :required="category.required"
        :categoryType="category.options"
      />
    </div> -->

    <!-- Counter -->
    <!-- <div
     class="category__type"
     v-if="category.type === 'counter'" 
    > 
      <TheCategoryCounter
        :required="category.required"
        :categoryType="category.options"
      />
    </div> -->
  </section>
</template>

<script setup>
import TheCategoryRadio from './TheCategoryRadio.vue'
import TheCategoryCheckbox from './TheCategoryCheckbox.vue'
import TheCategoryCounter from './TheCategoryCounter.vue'

const props = defineProps({
  category: Object,
  spec: Object
})
</script>

<style lang="scss">
.category {
  padding: 2.4rem 4.8rem 2.4rem;

  input {
    cursor: pointer;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
  }

  &__text {
    font-weight: 700;

    h3 {
      font-size: 1.6rem;
      color: #202326;
    }

    span {
      color: #6D6F73;
      font-size: 1.2rem;
    }
  }

  &__type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7.2rem;

    &--size {
      display: flex;
      gap: .8rem;
      flex-basis: 33%;
      flex-wrap: wrap;

      label {
        cursor: pointer;
        display: flex;
        flex: 1;
        justify-content: space-between;
      }
    }
  }

  &__prices {
    margin-left: auto;
  }

  &__price {
    color: #7B1FA2;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__price--old {
    color: #6D6F73;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: .4rem;
  }
}

.badge {
  cursor: default;
  background-color: #393A3C;
  color: #fff;
  padding: .6rem .8rem;
  border-radius: .4rem;
  font-weight: 700;
}
</style>