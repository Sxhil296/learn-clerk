import React from "react";

type Props = {
  buttonLabel: string;
};

export default function Button({ buttonLabel }: Props) {
  return (
    <button className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]">
      {buttonLabel}
    </button>
  );
}
