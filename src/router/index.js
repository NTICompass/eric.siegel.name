import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/Home.vue';
import WorkView from '../views/Work.vue';
import ProjectsView from '../views/Projects.vue';
import EducationView from '../views/Education.vue';
import ContactView from '../views/Contact.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/work',
            name: 'work',
            component: WorkView,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView,
        },
        {
            path: '/education',
            name: 'education',
            component: EducationView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
    ],
});

export default router;
