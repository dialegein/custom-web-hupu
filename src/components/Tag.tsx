import { Component, JSX } from "solid-js";

type TagProps = {
  label: string
  icon: () => JSX.Element 
  onClick: () => void
};

export const Tag: Component<TagProps> = (props) => {
  return (
    <div
      class="flex items-center rounded-3xl px-4 py-1 bg-blue-900 text-white"
      onClick={props.onClick}
    >
      {props.icon}
      <span class="ml-1">{props.label}</span>
    </div>
  );
};

export default Tag;
