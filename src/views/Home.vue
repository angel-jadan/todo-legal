<template>
  <main>
    <px-app-bar />
    <div class="container">
      <h1>Welcome</h1>
    </div>
  </main>
</template>

<script>
import PxAppBar from "@/components/PxAppBar.vue";

export default {
  name: "home",
  components: {
    PxAppBar,
  },
};
</script>
