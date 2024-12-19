import React from "react";
import { Calendar } from "lucide-react";
import { blogData } from "../rawData";
const Blog = () => {
  return (
    <main className="mx-auto max-w-7xl  px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="uppercase md:text-4xl text-2xl font-bold md:mb-10 mb-6 text-center text-[#eb0000]">
        our latest blogs
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:!h-[75vh] !h-auto">
        {blogData.map((item, i) => (
          <div
            className={`relative overflow-hidden rounded-xl ${
              item.isLarge ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className="group relative h-full">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <span
                  className={`inline-block second text-[#efefef] rounded ${item.btnColor} px-3 py-1 !text-sm font-semibold`}
                >
                  {item.category}
                </span>
                <h3
                  className={`mt-2 
                !text-base
                   font-bold leading-tight`}
                >
                  {item.title}
                </h3>
                <div className="mt-2 second flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span className="!text-sm text-[#dcdcdc]">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <hr className="w-[1px] h-4 bg-gray-300 mr-2" />
                    <img
                      src={item.b_user}
                      alt="user"
                      className="w-6 h-6 rounded-full"
                    />

                    <span className="!text-sm">{item.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
