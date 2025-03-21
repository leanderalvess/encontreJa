<template>
    <div class="d-flex flex-wrap gap-2 mb-3 align-items-center">
      <input v-model="searchQuery" type="text" class="form-control w-25" placeholder="Buscar por nome..." @input="onSearch">

      <input v-model.number="minAge" type="number" class="form-control w-15" placeholder="Idade mínima">
      <input v-model.number="maxAge" type="number" class="form-control w-15" placeholder="Idade máxima">

      <select v-model="sex" class="form-select w-15">
        <option value="">Todos os sexos</option>
        <option value="MASCULINO">Masculino</option>
        <option value="FEMININO">Feminino</option>
      </select>

      <button class="btn btn-primary" @click="applyFilters">Filtrar</button>
      <button class="btn btn-secondary" @click="clearFilters">Limpar</button>
    </div>
  </template>

  <script setup lang="ts">
  import { defineEmits, ref } from "vue";

  const searchQuery = ref("");
  const minAge = ref<number | null>(null);
  const maxAge = ref<number | null>(null);
  const sex = ref<string>("");

  const emit = defineEmits(["search"]);

  const applyFilters = () => {
    emit("search", {
      name: searchQuery.value,
      minAge: minAge.value,
      maxAge: maxAge.value,
      sex: sex.value,
    });
  };

  const clearFilters = () => {
    searchQuery.value = "";
    minAge.value = null;
    maxAge.value = null;
    sex.value = "";
    applyFilters();
  };
  </script>
