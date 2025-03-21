<template>
    <div class="container mt-4">
        <h1 class="text-primary">Enviar novas informações</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label class="form-label">Localização:</label>
                <input v-model="location" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Descrição:</label>
                <textarea v-model="description" class="form-control" required></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Envio de imagem:</label>
                <input type="file" @change="handleFileUpload" class="form-control" />
            </div>
            <button class="btn btn-success" type="submit">Enviar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import type { ReportRequest } from "../interfaces/api";
import { submitReport } from "../services/api";

const route = useRoute();
const location = ref<string>("");
const description = ref<string>("");
const photo = ref<File | null>(null);

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) photo.value = input.files[0];
};

const handleSubmit = async () => {
    const report: ReportRequest = {
        personId: Number(route.params.id),
        description: description.value,
        location: location.value,
        image: photo.value || undefined,
    };

    await submitReport(report);
    alert("Informação enviada com sucesso. Muito obrigado!");
};
</script>
