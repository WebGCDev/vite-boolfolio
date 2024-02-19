import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectsDetails from './pages/ProjectsDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsList,
    },
    {
      path: '/about',
      name: 'project',
      component: AppAbout,
    },
    {
      path: '/project/:slug',
      name: 'details',
      component: ProjectsDetails,
    },
  ],
});
export default router;
