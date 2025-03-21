<template>
    <div class="container mt-4">
        <h1 class="text-primary">
            {{ person?.name }}
        </h1>
        <div class="card">
            <img :src="photo" class="person-detail-photo" alt="Foto da Pessoa">
            <div class="card-body">
                <p class="text-muted">Nome: {{ person?.name }}</p>
                <p class="text-muted">Idade: {{ person?.age }}</p>
                <p class="text-muted">Sexo: {{ person?.sex }}</p>
                <p class="text-muted">Local: {{ person?.missingLocal }}</p>
                <p class="text-muted">Desaparecido desde: {{ getDate(person?.missingDate) }}</p>
                <p class="fw-bold" :class="person?.alive ? 'text-success' : 'text-danger'">
                    Status: {{ person?.alive ? "Vivo" : "Morto" }}
                </p>

                <router-link :to="'/report/' + person?.id" class="btn btn-warning">
                    Enviar informações
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getPhoto } from "../helper/photos";
import type { Person } from "../interfaces/api";
import { fetchPersonById } from "../services/api";

const route = useRoute();
const person = ref<Person | null>(null);
const photo = ref<string>();

const fetchPerson = async () => {
    person.value = await fetchPersonById(Number(route.params.id));
    photo.value = await getPhoto(person.value.urlPhoto ?? undefined)
};


const getDate = (data?: string) => {
    return data ? new Date(data).toLocaleDateString("pt-BR") : "Não informado";
};


onMounted(fetchPerson);
</script>

<style scoped>
.person-detail-photo {
    max-width: 200px;
    height: auto;
    display: block;
    margin: 10px auto;
    border-radius: 10px;
}
</style>