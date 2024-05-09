<script setup lang="ts">
import {
  TwForm,
  TwButton,
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
  TwTextarea,
} from "vue3-tailwind";
import { useFormExample } from "@/store/formExample";
import { ref } from "vue";

import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { dagSetting }from "@/assets/pages/jobs/detail/elements";

const formExample = useFormExample();

const dateValue = ref([]);
const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM',
})


const updateMode: globalThis.Ref<boolean> = ref(false);
const tagValue: globalThis.Ref<string> = ref("");
const addTag = (e: any) => {
  if (e.keyCode === 13 && tagValue) {
    dagSetting.value.tags.push(tagValue.value);
    tagValue.value = "";
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <TwForm
        :name="formExample.formName"
        class="m-1 grid grid-cols-12 gap-2 bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg p-5 shadow"
        :class="{
          'tw-shake': formExample.isError,
        }"
        :rules="formExample.formRules"
        @submit=""
        :custom-field-name="{
          inputExample: 'Input',
          inputExample2: 'Input',
          textAreaExample: 'Text Area',
        }"
      >

        <div class="col-span-12">
          <TwInput
            label="DAG명"
            name="inputExample"
            v-model="formExample.formData.inputExample"
            placeholder="Input Field"
            type="text"
            class="rounded-md"
          />
<!--          <CustomErrorMessage name="inputExample" />-->
        </div>

        <div class="col-span-12">
          <label for="disabled-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">스케줄</label>
          <TwButton variant="primary" class="m-1 px-4">
            None
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @once
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @hourly
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @daily
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @weekly
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @monthly
          </TwButton>
          <TwButton variant="primary" class="m-1 px-4">
            @yearly
          </TwButton>
        </div>
        <div class="col-span-12">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="minute">
                분
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="minute" type="text" placeholder="*">
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="hour">
                시
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="hour" type="text" placeholder="*">
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="day">
                일
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="day" type="text" placeholder="*">
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="month">
                월
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="month" type="text" placeholder="*">
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="day-of-the-week">
                요일
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="day-of-the-week" type="text" placeholder="*">
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <label for="start-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">시작일</label>
          <vue-tailwind-datepicker id="start-date" v-model="dateValue" :formatter="formatter" as-single/>
        </div>

        <div class="col-span-12">
          <TwInput
            label="태그"
            name="inputExample2"
            v-model="tagValue"
            placeholder="Input Field"
            type="text"
            v-on:keydown="addTag($event)"
            class="rounded-md"
          />
<!--          <CustomErrorMessage name="inputExample" />-->
        </div>

        <div class="col-span-12">
          <input class="m-1 px-4 items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold text-white"
               v-for="(tagName, idx) in dagSetting.tags" :key="idx" v-model="dagSetting.tags[idx]" disabled>
        </div>

      </TwForm>
    </div>
  </div>
</template>
