<script setup lang="ts">
import { TwDatatableClient, TwButton } from "vue3-tailwind";
import { onMounted, ref } from "vue";
const data = ref({
  column: [
    {
      label: "Brand",
      field: "brand",
      width: "400px",
      sortable: true,
    },
    {
      label: "Category",
      field: "category",
      width: "400px",
      sortable: true,
    },
    {
      label: "Description",
      field: "description",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

const data2 = ref({
  column: [
    {
      label: "username",
      field: "username",
      width: "400px",
      sortable: true,
    },
    {
      label: "email",
      field: "email",
      width: "400px",
      sortable: true,
    },
    {
      label: "roles",
      field: "roles",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

const datatableHook = (arg: any) => {
  arg();
};

onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      data.value.data = json.products;
      console.log(data.value.data)
    });
  fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        data2.value.data = json.result.users;
        console.log(data2.value.data)
      });
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Datatable Clientside</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <TwDatatableClient
      class="!dark:text-gray-200"
      v-model:search="data2.search"
      v-model:limit="data2.limit"
      v-model:selected="data2.selected"
      v-model:sort-by="data2.sortBy"
      v-model:sort-type="data2.sortType"
      :column="data2.column"
      :data="data2.data"
      :setting="data2.setting"
      @datatable:column-hook="datatableHook"
    >
      <template #row="{ column, data }">
        <template v-if="column.field === 'username'">
          {{ data.username }}
        </template>
        <template v-if="column.field === 'email'">
          {{ data.email }}
        </template>
        <template v-if="column.field === 'roles'">
          {{ data.roles }}
        </template>
        <template v-if="column.field === 'action'">
          <div class="flex gap-2 justify-center">
            <TwButton variant="primary" class="border border-gray-900">
              Edit
            </TwButton>
            <TwButton variant="danger"> Delete </TwButton>
          </div>
        </template>
      </template>
    </TwDatatableClient>
    <hr class="my-2 dark:border-gray-700" />
    <div>
      <div class="flex gap-2">
        <div class="w-32">Selected Data</div>
        <div>: {{ data.selected }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order By</div>
        <div>: {{ data.sortBy }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order Type</div>
        <div>: {{ data.sortType }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Search</div>
        <div>: {{ data.search }}</div>
      </div>
    </div>
  </div>
</template>
