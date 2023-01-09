import { createEffect, createResource } from "solid-js";
import { goList, store } from "../store";
import { getDetail } from "../server";
import { DetailDataFormat } from "../server";
import { Loading } from "../components";

export const DetailPage = () => {
  const [detail] = createResource<DetailDataFormat>(
    (source, { value, refetching }) => {
      return getDetail(store.postId);
    }
  );
  createEffect(() => {
    console.log(detail());
  });
  return (
    <div class="px-5 py-10 h-screen over">
      <div class=" fixed top-3" onClick={goList}>返回</div>
      {detail.loading && <Loading />}
      <h1 class=" font-bold text-lg mb-5">{detail()?.title}</h1>
      <div innerHTML={detail()?.format?.htmlV3}></div>
    </div>
  );
};

export default DetailPage;
