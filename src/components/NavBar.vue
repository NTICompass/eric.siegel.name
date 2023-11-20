<script setup>
const links = {
    Home: 'home',
    'Work Experience': 'work',
    Projects: 'projects',
    Education: 'education',
    Contact: 'contact',
};
</script>

<template>
    <img src="/Eric.jpg" class="rounded-circle img-fluid" alt="Eric Siegel">

    <ul class="nav nav-underline flex-column">
        <li v-for="(link, name) in links" :key="link" class="nav-item">
            <RouterLink :to="{name: link}" class="nav-link" active-class="active">
                {{ name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
a.nav-link {
    text-align: right;
    width: 0;
    transition: width 250ms;
    white-space: nowrap;
}

a.nav-link.active {
    width: 100%;
}
</style>
