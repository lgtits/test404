<template>
  <div class="q-mt-lg">
    <div class="q-pl-lg q-mb-lg">
      <router-link to="/">index</router-link>
    </div>
    <div class="q-pl-lg q-mb-lg">
      <router-link to="/demo">demo</router-link>
    </div>
    <div class="q-pl-lg q-mb-lg"><router-link to="/faq">faq</router-link></div>
    <div class="q-pl-lg q-mb-lg">
      <a
        target="_blank"
        href="https://lgtits.github.io/test404/products/products.html"
        >products</a
      >
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup></script>
