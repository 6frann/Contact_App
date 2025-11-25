<script setup>

import { useContactsStore } from '@/stores/contacts';
import { useRouter } from 'vue-router';

const router = useRouter();
const contactsStore=useContactsStore();

const props = defineProps({
    contact: Object,
});


const updateOne = (id) => {
    router.push({ path: "/addForm", query: {id} });
}

</script>

<template>
    <li class="md:flex items-center justify-between py-4">
        <div class="pb-4 md:pb-0">
            <h3 class="text-lg font-semibold">{{contact.name}}</h3>
            <p class="text-gray-500">{{contact.email}}</p>
            <p class="text-gray-500">{{contact.number}}</p>
            </div>
            <div class="flex gap-2">
        <RouterLink to="/addForm">
            <button
                class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
                @click.prevent="updateOne(contact.id)"
            >
                Edit
            </button>
        </RouterLink>
            <button
                class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                @click.prevent="contactsStore.deleteOneById(contact.id)"
            >
                Delete
            </button>
            </div>
    </li>
</template>