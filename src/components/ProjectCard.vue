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
      <a href="#" class="btn btn-info">MOSTRA ALTRE INFO</a>
    </div>
  </div>
</template>
<style scoped></style>
