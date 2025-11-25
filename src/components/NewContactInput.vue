<script setup>
  import { reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useContactsStore } from "@/stores/contacts.js";

  const contactsStore = useContactsStore();
  const router = useRouter();
  const query = router.currentRoute.value.query;
  const newContactInput = reactive({id: null, name: " ", email: " ", number: " "});

const add = () => {
    if (newContactInput.id) {
    contactsStore.updateOneById({ ...newContactInput});
  } else {
    newContactInput.id = Date.now();
    contactsStore.addOne({...newContactInput });
  }
    newContactInput.id = null;
    newContactInput.name = null;
    newContactInput.email = null;
    newContactInput.number = null;
    router.push("/");
  };
  
onMounted(() => {
  if (query.id) {
    const contactToEdit = contactsStore.getContactById(Number(query.id));
    if (contactToEdit) {
      newContactInput.id = contactToEdit.id;
      newContactInput.name = contactToEdit.name;
      newContactInput.email = contactToEdit.email;
      newContactInput.number = contactToEdit.number;
    }
  }
});
  

</script>

<template>
  
    <form id="contact-form" class="space-y-4" @submit.prevent="add">
            <div>
              <label for="name" class="block text-sm font-medium">Name</label>
              <input
                v-model="newContactInput.name"
                type="text"
                id="name"
                placeholder="John Doe"
                class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium">Email</label>
              <input
                v-model="newContactInput.email"
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium">Phone</label>
              <input
                v-model="newContactInput.number"
                type="tel"
                id="phone"
                placeholder="+123 456 789"
                class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <button
              type="submit"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"  
            >
              Save Contact
            </button>
          </form>
</template>