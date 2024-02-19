<script>
export default {
  name: 'Header',
};
</script>
<template>
  <header class="bg-info">
    <div class="container d-flex justify-content-between py-2">
      <div>
        <h1 class="text-center">HEADER</h1>
      </div>
      <div>
        <ul class="list-unstyled d-flex gap-2">
          <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
          <li><router-link :to="{ name: 'project' }">ABOUT</router-link></li>
          <li>
            <router-link :to="{ name: 'projects' }">PROJECTS LIST</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
