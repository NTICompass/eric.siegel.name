<script setup>
const links = [
    {
        name: 'gen/Eric Computers',
        link: 'https://generic.computers.pictures',
        icon: ['fas', 'computer'],
    },
    {
        name: 'GitHub',
        link: 'https://github.com/nticompass',
        icon: ['fab', 'github'],
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/nticompass',
        icon: ['fab', 'linkedin'],
    },
    {
        name: 'Stack Overflow',
        link: 'https://stackoverflow.com/users/206403/gen-eric',
        icon: ['fab', 'stack-overflow'],
    },
    {
        name: 'YouTube',
        link: 'https://youtube.com/@nticompass',
        icon: ['fab', 'youtube'],
    },
];
</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <dl>
                <dt>
                    <FontAwesomeIcon :icon="['fas', 'envelope']" />
                    Email
                </dt>
                <dd>
                    <a href="mailto:eric@siegel.name">
                        eric@siegel.name
                    </a>
                </dd>
            </dl>
        </li>
        <li class="list-group-item">
            <dl v-for="link in links" :key="link.name">
                <dt>
                    <FontAwesomeIcon :icon="link.icon" />
                    {{ link.name }}
                </dt>
                <dd>
                    <a :href="link.link" target="_blank">
                        {{ link.link }}
                    </a>
                </dd>
            </dl>
        </li>
    </ul>
</template>
