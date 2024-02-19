<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
  },
  computed: {
    projectContent() {
      return this.project.description?.substring(0, 200) + '...';
    },
  },
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ projectContent }}
      </p>
      <router-link
        class="text-decoration-none"
        :to="{ name: 'details', params: { slug: project.slug } }"
      >
        DETTAGLI
      </router-link>
    </div>
  </div>
</template>
<style scoped></style>
