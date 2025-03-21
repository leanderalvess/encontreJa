<template>
    <div class="d-flex justify-content-between align-items-center">
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 0 }">
                    <button class="page-link" @click="changePage(currentPage - 1)">Anterior</button>
                </li>

                <li v-for="page in displayedPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                    <button v-if="page !== '...'" class="page-link" @click="changePage(page)">{{ page + 1 }}</button>
                    <span v-else class="page-link disabled">...</span>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages - 1 }">
                    <button class="page-link" @click="changePage(currentPage + 1)">Próximo</button>
                </li>
            </ul>
        </nav>

        <div class="d-flex align-items-center gap-2">
            <label for="itemsPerPage">Itens por página:</label>
            <select v-model="itemsPerPage" @change="updateItemsPerPage" class="form-select w-auto">
                <option v-for="option in pageSizeOptions" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
        </div>


    </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from "vue";

const props = defineProps<{ totalPages: number; currentPage: number; itemsPerPage: number }>();
const emit = defineEmits(["changePage", "changeItemsPerPage"]);

const pageSizeOptions = [12, 20, 50];
const itemsPerPage = ref<number>(props.itemsPerPage);

const changePage = (page: number) => {
    if (page >= 0 && page < props.totalPages) {
        emit("changePage", page);
    }
};

const updateItemsPerPage = () => {
    emit("changeItemsPerPage", itemsPerPage.value);
};

const displayedPages = computed(() => {
    const pages: (number | "...")[] = [];
    const lastPage = props.totalPages - 1;
    const current = props.currentPage;

    if (props.totalPages <= 5) {
        return Array.from({ length: props.totalPages }, (_, i) => i);
    }

    pages.push(0);

    if (current > 2) {
        pages.push("...");
    }

    const start = Math.max(1, current - 1);
    const end = Math.min(lastPage - 1, current + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (current < lastPage - 2) {
        pages.push("...");
    }

    pages.push(lastPage);

    return pages;
});
</script>

<style scoped>
.pagination {
    display: flex;
    flex-wrap: wrap;
}

.page-link {
    cursor: pointer;
}

.page-link.disabled {
    pointer-events: none;
    opacity: 0.5;
}

.d-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
</style>
