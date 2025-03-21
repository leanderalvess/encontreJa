<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img src="/src/assets/icone.png" class="photo-icon" alt="Foto da Pessoa">
                <img src="/src/assets/logo.png" class="photo-logo" alt="Foto da Pessoa">
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.photo-icon {
    max-width: 50px;
    height: auto;
    margin-right: 10px;
    border-radius: 1px;
}

.photo-logo {
    max-width: 250px;
    height: auto;
    border-radius: 1px;
}
</style>