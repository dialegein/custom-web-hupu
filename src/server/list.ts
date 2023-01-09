import { api, staticQuerys } from ".";
import type { Response } from '.'

export type PostItem = {
  fid: number
  is_gif: number
  replys: number
  user_name: string
  cover_height: number
  title: string
  type: number
  tid: number
  light_replys: number
  puid: number
  cover_width: number
  image_count: number
  zoneId: number
  recommends: number
  time: string
  topic_list_imgs: any[]
  contentType: number
}

export const getList = (topicId: number, tagId: number, page: number) => {
  return api
    .get("topics/getTopicThreads", {
      searchParams: {
        ...staticQuerys,
        topic_id: topicId,
        tab_type: tagId,
        page: page,
      },
    })
    .json<
      Response<{
        list: PostItem[];
      }>
    >()
    .then((res) => res.data.list);
};
