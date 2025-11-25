import { reactive, watch} from "vue";
import { defineStore } from "pinia";



export const useContactsStore = defineStore("contacts", () => {
  const contacts = reactive(JSON.parse(localStorage.getItem("contacts")) || []);

  const deleteOneById = (id) => {
    contacts.splice(
         contacts.findIndex((item) => item.id == id),
          1
      );
  };

  const getContactById = (id) => {
    return contacts.find((contact) => contact.id === id);
  };

  const addOne = (contact) => {
    contacts.unshift(contact);
  };


  const updateOneById = (updatedContact) => {
    const index = contacts.findIndex(contact => contact.id === updatedContact.id); 
    if (index !== -1) {
      contacts[index] = updatedContact;
    }
  };

  watch(
    contacts,
    (newValue) => {
      localStorage.setItem("contacts", JSON.stringify(newValue));
    },
    { deep: true } 
  );

  return { contacts, deleteOneById, addOne,updateOneById, getContactById };
});



// localStorage.contacts = JSON.stringify([
//   { id: 1, name: "Francis", email: "franciss@gmail.com", number: "045645432" },
//   { id: 2, name: "sergio", email: "sergio@gmail.com", number: "048665439"  },
// ]);