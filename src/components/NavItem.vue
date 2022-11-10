<script lang="ts" setup>
// prettier doesn't work if vue component contains block <style> without block <script>
</script>

<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.nav-item {
  user-select: none;

  :slotted(a) {
    display: block;
    padding: 4px 16px;
    border-radius: 5px;
    transition: color 250ms, background-color 250ms;

    &:hover,
    &:active {
      background-color: #e5e7eb;
    }

    &.router-link-active {
      color: #1d4ed8;
      background-color: #bfdbfe;
    }

    &.router-link-active {
      pointer-events: none;
    }
  }
}
</style>
