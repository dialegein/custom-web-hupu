import { createStore } from "solid-js/store";

type StoreType = {
  route: "list" | "detail";
  postId: number | null
};
const [store, setStore] = createStore<StoreType>({
  route: "list",
  postId: null 
});

function goDetail(postId: number) {
  setStore({
    route: 'detail',
    postId: postId
  })
}

function goList() {
  setStore({
    route: 'list',
  })
}



export {
  store,
  setStore,
  goDetail,
  goList
}
