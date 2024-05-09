<script setup lang="ts">
import { useVueFlow } from "@vue-flow/core";
import { ref } from "vue";
import { TwTab, TwButton, useToast } from "vue3-tailwind";

import defaultinfo from "@/pages/dags/detail/defaultinfo.vue"
import workflow from "@/pages/dags/detail/workflow.vue"
import codetab from "@/pages/dags/detail/code.vue"

const horizontalTab = ref();
const tabs = ref([
  {
    name: "기본정보",
    ref: "tab1",
  },
  {
    name: "워크플로우",
    ref: "tab2",
  },
  {
    name: "코드",
    ref: "tab3",
  },
]);
const currentTab = ref("tab1");

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab;
  horizontalTab.value.changeTab(currentTab.value);
};

const { copy } = useClipboard()
const { toast } = useToast()
const { toObject } = useVueFlow()
function handleClickGetData() {
  copy(JSON.stringify(toObject())).then(() => {
    toast({
      title: 'copied success'
    })
  })
}

function handleClickPublishBtn() {
  toast({
    title: 'Save Data',
    description: '1.valid data 2.fetch backend api to save result'
  })
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Dag 관리
    </h1>
    <hr class="my-2 border dark:border-gray-700" />

    <div class="flex justify-end">
      <TwButton class="m-1 px-4" size="sm" @click="handleClickGetData"> Get Data</TwButton>
      <TwButton class="m-1 px-4" size="sm" @click="handleClickPublishBtn"> Publish </TwButton>
    </div>

    <TwTab
      ref="horizontalTab"
      type="horizontal"
      position="bottom"
      :tabs="tabs"
      :current-tab="currentTab"
      nav-class="px-2 rounded-t gap-2 py-2"
      tab-class="p-2 text-gray-900 rounded"
      line-class="!bg-gray-700 rounded-t"
      tab-active-class="!font-bold"
      body-class="bg-white shadow border rounded-b"
      @after-move="handleAfterMove"
    >
      <template #tab1> <defaultinfo></defaultinfo> </template>
      <template #tab2> <workflow></workflow> </template>
      <template #tab3> <codetab></codetab> </template>
    </TwTab>
  </div>

</template>
