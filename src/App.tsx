import { For, createResource } from "solid-js";
import { Card, Tag, Loading } from "./components";
import { NewIcon, TopIcon, HotIcon } from "./icons";
import { getList, } from "./server";
import type { PostItem } from './server'

const tags = [
  {
    label: "全部",
    id: 2,
    icon: NewIcon,
  },
  {
    label: "24小时榜",
    id: 4,
    icon: TopIcon,
  },
  {
    label: "精华",
    id: 3,
    icon: HotIcon,
  },
];

const App = () => {
  const [list, { refetch }] = createResource<PostItem[]>(
    (source, { value, refetching }) => {
      return getList(184, typeof refetching !== 'number' ? 2 : refetching , 1)
    }
  );

  return (
    <>
      <header class="fixed w-full shadow-md bg-gray-100">
        <div class="flex space-x-3 text-[0.9rem] p-5">
          <For each={tags}>
            {(tag) => (
              <Tag
                label={tag.label}
                onClick={() => refetch(tag.id)}
                icon={tag.icon}
              />
            )}
          </For>
        </div>
      </header>
      <div class=" w-full h-full space-y-3 px-5 py-10 pt-[90px]">
        <div class=" w-full h-full space-y-5">
          { list.loading && <Loading />}
          <For each={list()} fallback={<Loading />}>
            {(post: PostItem) => (
              <Card
                title={post.title}
                user={post.user_name}
                time={post.time}
                replys={post.replys}
              />
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default App;
