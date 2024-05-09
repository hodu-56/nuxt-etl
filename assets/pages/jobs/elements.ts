// import { DatatableColumn, DatatableData, TwButton, TwDatatableServer } from "vue3-tailwind";
//
// export const appConfig = useAppConfig();
//
// /////////////////////////
// /// 공통 기능 구현 로직 ///
// /////////////////////////
// export const loadingAlert = ref(false);
//
// export const alert = ref(false);
// export const alertColor = ref("");
// export const alertMessage: globalThis.Ref<string> = ref("");
//
// export const deleteAlert: globalThis.Ref<boolean> = ref(false);
// export const deleteDagId: globalThis.Ref<string> = ref("");
// export const deleteMessage: globalThis.Ref<string> = ref("");
//
// export const refreshFailAlert: globalThis.Ref<boolean> = ref(false);
// export const refreshFailAlertMessage: globalThis.Ref<string> = ref("이미 데이터를 업데이트 중이므로, 업데이트가 완료된 후 다시 요청해주세요.");
//
//
// ///////////////////////////////
// /// 카테고리 탭 기능 구현 로직 ///
// ///////////////////////////////
// export const tabSelected: globalThis.Ref<number> = ref(0);
// export const tabCategory: object[] = [
//   {icon: "home", title: "All"},
//   {icon: "home", title: "ACTIVATE"},
//   {icon: "home", title: "DEACTIVATE"}
// ]
//
// ////////////////////////////////
// /// 데이터테이블 기능 구현 로직 ///
// ////////////////////////////////
// export const COLUMNS_KEYS: string[] = ["active", "name", "scheduler", "latest", "state", "run", "owner", "created_at", "updated_at"];
// export const COLUMNS_NAMES: string[] = ["활성화", "이름", "실행일정", "최종실행일시", "실행상태", "실행", "소유자", "생성시각", "수정시각"];
// export const columns: object[] = [
//   {key: COLUMNS_KEYS[0], label: COLUMNS_NAMES[0], width: "5%", sortable: true},
//   {key: COLUMNS_KEYS[1], label: COLUMNS_NAMES[1], width: "22%", sortable: true},
//   {key: COLUMNS_KEYS[2], label: COLUMNS_NAMES[2], width: "10%", sortable: false},
//   {key: COLUMNS_KEYS[3], label: COLUMNS_NAMES[3], width: "12%", sortable: false},
//   {key: COLUMNS_KEYS[4], label: COLUMNS_NAMES[4], width: "5%", sortable: true},
//   {key: COLUMNS_KEYS[5], label: COLUMNS_NAMES[5], width: "5%", sortable: false},
//   {key: COLUMNS_KEYS[6], label: COLUMNS_NAMES[6], width: "8%", sortable: true},
//   {key: COLUMNS_KEYS[7], label: COLUMNS_NAMES[7], width: "14%", sortable: true},
//   {key: COLUMNS_KEYS[8], label: COLUMNS_NAMES[8], width: "14%", sortable: true}
// ];
// export const datas: globalThis.Ref<DatatableData[]> = ref([]);
// export const dataLoading: globalThis.Ref<boolean> = ref(false);
// export const filterKeyword: globalThis.Ref<string> = ref("");
// export const filteredCount: globalThis.Ref<number> = ref(0);
// export const pageSize: number = 10;
// export const currentPage: globalThis.Ref<number> = ref(1);
//
// /**
//  * 데이터 테이블이 몇 페이지까지 존재하는지 계산
//  */
// export const calcPageView = () => {
//   return Math.ceil(filteredCount.value / pageSize);
// }
//
// /**
//  * 데이터 테이블에 출력할 데이터 로딩
//  */
// export const onJobsLoad = async () => {
//   if (dataLoading.value) {
//     refreshFailAlert.value = true;
//     return;
//   }
//
//   datas.value = [];
//   dataLoading.value = true;
//
//   let jobs: any = await restAPI.get('/jobs');
//   if (jobs.code !== "R000012") {
//     console.error(jobs.message);
//   }
//
//   let result: any = jobs.result;
//   let dags: [] = result;
//
//   // 테이블 초기화
//   datas.value = [];
//   for (let idx in dags) {
//     let dagInfo = dags[idx];
//
//     let dagId: string = dagInfo["dag_id"];
//     let owner = dagInfo["owners"] ? dagInfo["owners"] : "";
//     let runState = dagInfo["state"];
//     let scheduleInterval = dagInfo["schedule_interval"] ? dagInfo["schedule_interval"]["value"] : "";
//     let lastParsedTime = dagInfo["last_parsed_time"] ? dagInfo["last_parsed_time"] : "";
//     let isActive = dagInfo["is_paused"];
//     let createdAt = dagInfo["created_at"];
//     let updatedAt = dagInfo["updated_at"];
//
//     let rowData: any = {};
//     rowData[COLUMNS_KEYS[0]] = !isActive ? "Activate" : "Deactivate";
//     rowData[COLUMNS_KEYS[1]] = dagId;
//     rowData[COLUMNS_KEYS[2]] = scheduleInterval;
//     rowData[COLUMNS_KEYS[3]] = new Date(lastParsedTime).toLocaleString();
//     rowData[COLUMNS_KEYS[4]] = runState;
//     rowData[COLUMNS_KEYS[5]] = dagId;
//     rowData[COLUMNS_KEYS[6]] = owner;
//     rowData[COLUMNS_KEYS[7]] = createdAt ? new Date(createdAt).toLocaleString() : '-';
//     rowData[COLUMNS_KEYS[8]] = updatedAt ? new Date(updatedAt).toLocaleString() : '-';
//     datas.value.push(rowData);
//   }
//   console.log(datas);
//   sessionStorage.setItem("jobsInfo", JSON.stringify(datas.value));
//   dataLoading.value = false;
// }
