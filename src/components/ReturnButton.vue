<template>
    <button class="back-button" @click="goBack">
      <i class="bi bi-arrow-left"></i> Voltar
    </button>
  </template>

  <script setup lang="ts">
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  </script>

  <style scoped>
  .back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .back-button:hover {
    background-color: #0056b3;
  }
  </style>
