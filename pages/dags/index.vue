<script setup lang="ts">
useHead({
  title: 'Workflow'
})
import { ref } from "vue";
import { TwTab, TwButton } from "vue3-tailwind";

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

const router = useRouter();
const jobsMoveLink = (dagId: string) => {
  let url = dagId ? "/dags/detail?dagId=" + dagId : "/dags/detail";
  router.push(url);
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      DAG 목록
    </h1>
    <hr class="my-2 border dark:border-gray-700" />

    <div class="flex justify-end">
      <TwButton class="m-1 px-4" v-on:click="onJobsLoad()">목록 업데이트</TwButton>
      <TwButton class="m-1 px-4" v-on:click="jobsMoveLink('')">등록</TwButton>
    </div>

    <div style="color:red">*DAG 목록으로 변경 필요</div>
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
