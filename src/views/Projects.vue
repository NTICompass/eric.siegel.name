<script setup>
const projects = [
    {
        name: 'AT&T Unix PC',
        title: 'Never-before opened Unix PC from 1985',
        data: [
            [
                'One of my favorite systems in my vintage computer collection is the AT&T Unix PC (also called the PC 7300).',
                'When I got it, this system was still in its original box, with all its original manuals and software.',
            ],
            [
                'I had to set up the machine from scratch, including formatting the hard drive and installing the Unix operating system.',
                'Being a Linux user, I was easily able to navigate the Unix system using familiar commands.',
            ],
        ],
        link: {
            href: 'https://generic.computers.pictures/projects/unix_pc',
            text: 'Read more at my website',
        },
        icon: ['fas', 'computer'],
    },
    {
        name: 'Eric.Siegel.Name',
        title: 'This website',
        subtitle: 'Vue.js',
        data: [
            [
                'In my job at OvationCXM, we mostly used Ext JS, but we were slowly moving to use Vue.js.',
                'While working there, I was able to take some time to learn Vue.js.',
            ],
            [
                'As part of that learning process, I created this website.',
                'It was created with',
                {
                    tag: 'code',
                    text: 'npm create vue@latest',
                },
                'and uses Bootstrap for the UI elements.',
            ],
        ],
        link: {
            href: 'https://github.com/NTICompass/eric.siegel.name',
            text: 'GitHub Repo',
        },
        icon: ['fab', 'github'],
    },
    {
        name: 'Zoho Calendar',
        title: 'Zoho Calendar API Library',
        subtitle: 'PHP',
        data: [
            [
                'In the app I developed for Acosta, and continued supporting at IREM, we allowed people to schedule appointments for real estate appraisals.',
                'These appointments could sync to a users calendar via an API.',
                'Originally, our users all used Google Calendar and that was easy to integrate with their API library.',
            ],
            [
                'Some of our users moved over to using Zoho Calendar, so I had to add in support to sync with that.',
                "Zoho didn't have their own API library that I could use, and their API docs weren't the best.",
                'So, I had to create my own library to interact and sync with Zoho Calendar.',
            ],
            [
                "This library was originally used internally, but with permission, I've released it for anyone to use.",
            ],
        ],
        link: {
            href: 'https://github.com/NTICompass/ZohoCalendar',
            text: 'GitHub Repo',
        },
        icon: ['fab', 'github'],
    },
];
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2">
        <div v-for="project in projects" :key="project.name" class="col mb-4">
            <div class="card">
                <div class="card-header">
                    {{ project.name }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {{ project.title }}
                    </h5>
                    <h6 v-if="project.subtitle" class="card-subtitle mb-2 text-body-secondary">
                        {{ project.subtitle }}
                    </h6>
                    <p v-for="data in project.data" :key="data" class="card-text">
                        <component :is="text.tag ? text.tag : 'span'" v-for="(text, index) in data" :key="index">
                            {{ text.text ? (text.text + ' ') : (text + "\n") }}
                        </component>
                    </p>
                    <p v-if="project.link && project.icon" class="card-text">
                        <FontAwesomeIcon :icon="project.icon" />
                        &nbsp;
                        <a :href="project.link.href" target="_blank" class="card-link">
                            {{ project.link.text }}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
