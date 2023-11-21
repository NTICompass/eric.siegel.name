<script setup>
const jobs = [
    {
        name: 'OvationCXM, DBA of Boomtown Network Inc.',
        dates: 'May 2017 - November 2023',
        image: '/logos/OvationCXM.jpg',
        imageAlt: 'OvationCXM',
        items: [
            'Worked with a team on ExtJS app used by multiple clients, including Key Bank',
            'Updated Knowledge Base with ADA compliance for clients, such as Bank of America',
            'Optimized MySQL database with new indexes and foreign keys',
        ],
    },
    {
        name: 'IREM Solutions Inc.',
        dates: 'December 2015 - April 2017',
        image: '/logos/IREMSolutions.jpg',
        imageAlt: 'IREM Solutions',
        items: [
            'Migrated web application and database to Amazon Web Services (AWS)',
            'Optimized web application using Memcached to cache MySQL queries',
        ],
    },
    {
        name: 'Acosta Valuation Solutions Inc.',
        dates: 'June 2010 - November 2015',
        image: '/logos/Acosta.jpg',
        imageAlt: 'Acosta',
        items: [
            'Responsible for the full stack including RHEL, Apache, PHP, MySQL, JavaScript and HTML/CSS',
            'Designed front-ends using the Bootstrap framework',
            'Developed libraries and back-end code using PHP and the CodeIgniter framework',
            'Troubleshot issues in Internet Explorer as well as Firefox and Chrome',
        ],
    },
];
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2">
        <div v-for="job in jobs.reverse()" :key="job.name" class="col mb-4">
            <div class="card">
                <img :src="job.image" class="card-img-top" :alt="job.imageAlt">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ job.name }}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        {{ job.dates }}
                    </h6>
                    <ul class="list-group list-group-flush card-text">
                        <li v-for="item in job.items" :key="item" class="list-group-item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
