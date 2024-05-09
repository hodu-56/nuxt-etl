/////////////////////////
/// 공통 기능 구현 로직 ///
/////////////////////////
export const updateMode: globalThis.Ref<boolean> = ref(false);
export const saveResultPopupModal: globalThis.Ref<boolean> = ref(false);
export const saveResultPopupIcon: globalThis.Ref<string> = ref("check_circle");
export const saveResultPopupTitle: globalThis.Ref<string> = ref("");
export const saveResultPopupMessage: globalThis.Ref<string> = ref("");

/**
 * 워크플로우 데이터 로딩
 */
export const onJobsDataLoad = async (requestDagId: string) => {

  let dagInfoStr: any = sessionStorage.getItem("dagInfo");
  if (dagInfoStr) {
    let dagInfoJson: any = JSON.parse(dagInfoStr);

    dagSetting.value.dag_id = dagInfoJson?.dag_id;
    dagSetting.value.schedule = dagInfoJson?.schedule_interval?.value;
    dagSetting.value.start_date = dagInfoJson?.start_date?.split("T")[0];
    let tags: any = dagInfoJson?.tags;
    for (let key in tags) {
      dagSetting.value.tags.push(tags[key].name);
    }
    workflowData.value = dagInfoJson?.workflow;
  }
}

///////////////////////////////
/// 카테고리 탭 기능 구현 로직 ///
///////////////////////////////
export const DEFAULT_INFOMATION: string = "기본정보";
export const WORKFLOW: string = "워크플로우";
export const CODE: string = "코드";
export const tabSelected: globalThis.Ref<number> = ref(0);
export const tabCategory: object[] = [
  {icon: "home", title: "기본정보"},
  {icon: "home", title: "워크플로우"},
  {icon: "home", title: "코드"}
]

////////////////////////////////
/// 기본 정보 탭 기능 구현 로직 ///
////////////////////////////////
export interface Dag {
  dag_id: string,
  schedule: string,
  start_date: string,
  tags: any
}

export const dagSetting: globalThis.Ref<Dag> = ref({
  "dag_id": "",
  "schedule": "",
  "start_date": "",
  "tags": []
});

export const resetDagSetting = () => {
  dagSetting.value = {
    "dag_id": "",
    "schedule": "",
    "start_date": "",
    "tags": []
  }
}

export const workflowData: any = ref([]);
