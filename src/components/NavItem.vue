<script lang="ts" setup>
// prettier doesn't work if vue component contains block <style> without block <script>
</script>

<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.nav-item {
  user-select: none;

  > a {
    display: block;
    border-radius: 5px;
    transition: background-color 500ms ease;

    &:hover,
    &:active {
      background-color: #e5e7eb;
    }

    &.router-link-active {
      background-color: #c7d2fe;
    }

    &.router-link-active {
      pointer-events: none;
    }
  }
}
</style>
