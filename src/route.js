import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/blog',
      name: 'projects',
      component: ProjectsList,
    },
    {
      path: '/about',
      name: 'project',
      component: AppAbout,
    },
  ],
});
export default router;