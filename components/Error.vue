<template>
  <div class="notification is-danger" style="color:red;">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["message"],
};
</script>
