<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <nav class="col-2">
                <NavBar />
            </nav>
            <div class="col-md-auto">
                <RouterView />
            </div>
        </div>
    </div>
</template>
