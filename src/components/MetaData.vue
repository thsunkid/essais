<template>
  <div class="link" data-cy="meta-data">
    <p class="mb-5 text-secondary">
      <a
        class="link__vue font-weight-bold text-decoration-none"
        target="_blank"
        rel="noopener"
      >
        </a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "MetaData"
};
</script>

<style lang="scss" scoped>
.link {
  &__vue {
    color: #4fc08d;
    &:hover {
      color: #0d9155;
    }
  }
  &__yandex {
    color: #e61400;
    &:hover {
      color: #9e1104;
    }
  }
  &__responsivevoice {
    color: #f37548;
    &:hover {
      color: #f74809;
    }
  }
}
</style>
