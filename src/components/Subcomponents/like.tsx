import { useState } from "react";


export default function HeartIcon() {
  const [liked, setLiked] = useState(false);
  return (
    <div className={`h-9 w-9`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`h-9 w-9 ${
          liked
            ? "text-red-600 stroke-2 stroke-red-600"
            : "stroke-2 stroke-black fill-none scale-95"
        } transition duration-150 ease-in-out cursor-pointer`}
        onClick={() => setLiked(!liked)}
      >
        <path
          fillRule="evenodd"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
