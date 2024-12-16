import React from "react";
import { Star } from "lucide-react";

export function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={`${
            index < rating ? "fill-[#eb0000] text-[#eb0000]" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
