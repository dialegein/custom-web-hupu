import { createSignal, Switch, Match, Show } from "solid-js";
import { ListPage, DetailPage } from "./pages";
import { store } from "./store";

const App = () => {
  return (
    <>
      <div
        class="w-full h-full"
        classList={{
          hidden: store.route === "detail",
        }}
      >
        <ListPage />
      </div>
      <Show when={store.route === "detail"}>
        <DetailPage />
      </Show>
    </>
  );
};

export default App;
