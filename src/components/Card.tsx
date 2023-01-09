import { Component } from "solid-js";

type CardProps = {
  title: string;
  user: string;
  time: string;
  replys: number;
  onClick: () => void;
};

export const Card: Component<CardProps> = (props) => {
  return (
    <div class="p-3 rounded-md bg-blue-100 shadow-md space-y-2" onClick={props.onClick}>
      <div class=" flex text-[0.8rem] justify-between  text-gray-500 space-x-3 ">
        <span>{props.user}</span>
        <span>
          回复{props.replys}&nbsp;&nbsp;&nbsp;{props.time}
        </span>
      </div>
      <h3 class="text-[0.9rem] text-gray-700 font-bold">{props.title}</h3>
    </div>
  );
};

export default Card
