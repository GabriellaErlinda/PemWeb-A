<template>
  <span class="text-gray-700 font-bold text-2xl">Create Menu</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Name</label>
      <div class="border-2 py-1 border-gray-400 rounded-md p-2">
        <input v-model="name">
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Category</label>
      <select v-model="inputCategory" class="border-2 py-1 border-gray-400 rounded-md">
        <option value="">Select a category</option>
        <option v-for="category in categories" :value="category.id" :key="category">
          {{ category.name }}
        </option>
      </select>
    </div>
  </div>
  <button
    @click="createMenu"
    class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Submit
  </button>
</template>

<script>
export default {
  emits: ["close-modal"],
  data() {
    return {
      name: "",
      inputCategory: "",
      categories: [],
    };
  },
  methods: {
    async createMenu() {
        try {
        const req = await fetch('http://localhost:3100/api/Menu', {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.name,
                Category: this.inputCategory,
            }),
        })
        const data = await req.json()
            if (data) {
            window.alert('Menu has been created successfully');
            window.location.reload();
            }
        } catch (err) {
        console.log(err)
        }
      },
      async getCategories() {
        await fetch('http://localhost:3100/api/Category')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.docs);
            this.categories = data.docs;
        })
        .catch((error) => {
            console.error(error)
        })
      }
    },
    mounted() {
        this.getCategories()
      document.title = "Create Menu"; 
    }
};
</script>
