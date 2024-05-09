<script setup lang="ts">
import { reactive, ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { TwTab, TwButton, useToast, TwAccordion, TwFeather } from "vue3-tailwind";


const horizontalTab = ref();
const tabs = ref([
  {
    name: "Extract",
    ref: "tab1",
  },
  {
    name: "Transform",
    ref: "tab2",
  },
  {
    name: "Load",
    ref: "tab3",
  },
]);
const currentTab = ref("tab1");


const { toObject } = useVueFlow()
const { copy } = useClipboard()
const { toast } = useToast()
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



const extract = [
  {
    ref: "example1",
  },
  {
    ref: "example2",
  },
];

const elements = ref([
  {
    id: '1',
    position: { x: 50, y: 50 },
    label: 'Node 1',
  }
]);

onMounted(() => {
  elements.value.push({
    id: '2',
    label: 'Node 2',
    position: { x: 150, y: 50 },
  })
})

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab;
  horizontalTab.value.changeTab(currentTab.value);
};

function handleOnDragStart(event: DragEvent, nodeType: any) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}

function handleOnDragOver(event: DragEvent) {
  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-1/4 flex justify-start">
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
        <template #tab1>
          <table class="table-fixed w-full">
            <tbody>
            <tr v-for="(operator, idx) in 16" :key="operator">
              <div
                class="mb-3 cursor-grab w-full rounded-md bg-white p-3 shadow-md"
                :draggable="true"
                @dragstart="handleOnDragStart($event, 'LLM')"
              >
                <div class="flex items-center justify-between">
                  <h3 class="flex items-center gap-x-1">
                    LLM
                  </h3>
                </div>
              </div>
            </tr>
            </tbody>
          </table>
        </template>

        <template #tab2>
          <table class="table-fixed">
            <tbody>
            <tr v-for="(operator, idx) in 16" :key="operator">
              <td> {{ idx }}</td>
            </tr>
            </tbody>
          </table>
        </template>

        <template #tab3>
          <table class="table-fixed">
            <tbody>
            <tr v-for="(operator, idx) in 16" :key="operator">
              <td> {{ idx }}</td>
            </tr>
            </tbody>
          </table>
        </template>
      </TwTab>

      <!--    <div style="float: left; width: 15%; height: 100%;">-->
      <!--      <workflow-detail :nodeId="nodeId" :dagId="workflowId"-->
      <!--                       :currentNode="nodeAttributes" :currentNodeOrigin="nodeAttributesOrigin"-->
      <!--                       @saveJson="saveJson" @saveFiles="saveFiles">-->
      <!--        ></workflow-detail>-->
      <!--    </div>-->
    </div>

    <div class="w-3/4 flex" @drop="handleOnDrop" @dragover="handleOnDragOver">
      <VueFlow v-model="elements"/>
    </div>
  </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>
