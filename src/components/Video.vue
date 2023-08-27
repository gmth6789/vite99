<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        source: {
          src: '/static/video/',
          type: 'video/mp4'
        },
        options: {
          controls: false,
          autoplay: true,
          muted: false,
          disabled: true,
          playsinline: true,
          loop: true
        }
      });

      return { ...toRefs(state) };
    }
  };
</script>
