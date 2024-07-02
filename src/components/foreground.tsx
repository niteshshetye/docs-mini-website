import { useRef } from "react";
import { Card } from "./card";

const data = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente.",
    filesize: ".9mb",
    close: true,
    isTag: true,
    tag: {
      title: "Download now!",
      bgColor: "bg-green-600",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente.",
    filesize: ".9mb",
    close: false,
    isTag: false,
    tag: {
      title: "Download now!",
      bgColor: "bg-blue-600",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente.",
    filesize: ".9mb",
    close: false,
    isTag: true,
    tag: {
      title: "Download now!",
      bgColor: "bg-green-600",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente.",
    filesize: ".9mb",
    close: true,
    isTag: false,
    tag: {
      title: "Download now!",
      bgColor: "bg-blue-600",
    },
  },
];

export const Foreground = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={parentRef}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((card, index) => (
        <Card key={index} referance={parentRef} card={card} />
      ))}
    </div>
  );
};
