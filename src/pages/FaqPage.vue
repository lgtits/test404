<template>
  <div class="flex flex-center">
    <h1>Faq</h1>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

onMounted(async () => {
  async function getCloudflareJSON() {
    let data = await fetch("https://one.one.one.one/cdn-cgi/trace").then(
      (res) => res.text()
    );
    let arr = data
      .trim()
      .split("\n")
      .map((e) => e.split("="));
    return Object.fromEntries(arr);
  }

  await getCloudflareJSON().then(console.log);
});
</script>
