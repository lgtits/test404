<template>
  <div class="flex flex-center">
    <h1>Faq</h1>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

onMounted(async () => {
  async function test() {
    let response = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
      mode: "cors",
    });
    let text = await response.text();
    console.log(text);
  }
  await test();
});
</script>
