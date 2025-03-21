<template>
    <div class="card mt-3">
        <img :src="photo" class="card-img-top person-photo" alt="Foto da Pessoa">
        <div class="card-body">
            <h5 class="card-title">{{ person.name }} | {{ person.age }}</h5>
            <p class="card-text">Desaparecido desde: {{ getDate(person.missingDate) }}
            </p>
            <p class="card-text">Local: {{ person.missingLocal }}</p>
            <router-link :to="'/details/' + person.id" class="btn btn-primary">Detalhes</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { getPhoto } from "../helper/photos";
import type { Person } from "../interfaces/api";

const props = defineProps<{ person: Person }>();
const photo = ref<string>();

const searchPhoto = async () => {
    photo.value = await getPhoto(props.person.urlPhoto ?? undefined)
};

const getDate = (data: string) => {
    return data ? new Date(data).toLocaleDateString("pt-BR") : "Não informado";
}

onMounted(searchPhoto);

</script>

<style scoped>
.person-photo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: block;
    margin: 10px auto;
    border-radius: 50%;
}
</style>