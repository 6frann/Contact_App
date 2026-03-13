<script setup lang="ts">
import ContactsList from '@/components/ContactsList.vue';
import { ref, computed } from 'vue'
import { useContactsStore } from '@/stores/contacts';

const contactsStore=useContactsStore();

const search = ref('')
const filteredContacts = computed(() => {
  return contactsStore.contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
    <!-- Main Content -->
    <main class="container mx-auto px-4 mt-6 flex-grow">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Contact List Section -->
        <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
          <h2 class="text-xl mb-4 flex justify-between">
            <span class="font-semibold">Contacts</span>
            <span class="text-sm">{{ filteredContacts.length }} item(s)</span>
          </h2>
          <div class="flex items-center mb-4">
            <input
              v-model="search"
              type="text"
              placeholder="Search contacts..."
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ContactsList :contacts="filteredContacts"/>
        </section>
      </div>
    </main>
</template>