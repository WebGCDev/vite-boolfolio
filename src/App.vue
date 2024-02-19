<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'Project Git',
  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000/',
      apiUrls: {
        projects: 'api/project',
      },
    };
  },
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
};
</script>
<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>
<style scoped></style>
