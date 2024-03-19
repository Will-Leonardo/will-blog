<script setup lang="ts"></script>

<template>
  <div class="will-badge">
    <slot></slot>
    <Transition name="will-zoo-in-center">
      <sup
        v-show="!hidden && (content || isDot)"
        :class="['will-badge__content']"
        v-text="content"
      >
      </sup>
    </Transition>
  </div>
</template>
<style scoped></style>
