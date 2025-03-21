<template>
    <div class="container mt-4">
        <h1 class="text-primary">
            Desaparecidos
        </h1>

        <SearchFilter @search="applySearchFilters" />

        <div class="row">
            <div class="col-md-4 mb-4" v-for="person in persons" :key="person.id">
                <PersonCard :person="person" />
            </div>
        </div>

        <Pagination
            :totalPages="totalPages"
            :currentPage="currentPage"
            :itemsPerPage="itemsPerPage"
            @changePage="changePage"
            @changeItemsPerPage="updateItemsPerPage"
        />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Pagination from "../components/Pagination.vue";
import PersonCard from "../components/PersonCard.vue";
import SearchFilter from "../components/SearchFilter.vue";
import type { Person } from "../interfaces/api";
import { fetchPersons, fetchPersonsFiltered } from "../services/api";

const persons = ref<Person[]>([]);
const totalPages = ref<number>(1);
const currentPage = ref<number>(0);
const itemsPerPage = ref<number>(12);
const activeFilters = ref({});

const fetchData = async () => {
    let data;
    if (Object.keys(activeFilters.value).length > 0) {
        data = await fetchPersonsFiltered(activeFilters.value, currentPage.value, itemsPerPage.value);
    } else {
        data = await fetchPersons(currentPage.value, itemsPerPage.value);
    }

    persons.value = data.content;
    totalPages.value = data.totalPages;
};

const changePage = (page: number) => {
    if (page >= 0 && page < totalPages.value) {
        currentPage.value = page;
        fetchData();
    }
};

const updateItemsPerPage = (newItemsPerPage: number) => {
    itemsPerPage.value = newItemsPerPage;
    currentPage.value = 0;
    fetchData();
};

const applySearchFilters = (filters: any) => {
    activeFilters.value = filters;
    currentPage.value = 0;
    fetchData();
};

onMounted(fetchData);
</script>