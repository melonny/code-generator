<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="homepage">
    <el-container>
      <el-header>
        <nav>
          <RouterLink to="/code">🧁Home</RouterLink>
          <RouterLink to="/about">💎About</RouterLink>
        </nav>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.homepage {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
nav {
  top: 5%;
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
