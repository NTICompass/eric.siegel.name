<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <nav class="col-md-2 col-sm-3">
                <NavBar />
            </nav>
            <div class="col-md-10 col-sm-9">
                <RouterView />
            </div>
        </div>
    </div>
</template>
