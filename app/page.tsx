import { posts } from "@/data/imgData";
import { post } from "@/types/type";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-center w-full font-bold text-2xl p-2 bg-gray-50">
        Custom P
      </h1>
      <section className="w-full p-6 grow flex gap-3 justify-center">
        {posts.map((p: post) => {
          return (
            <div
              className="h-88 w-88 p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              key={p.id}
            >
              <div className="text-sm font-bold text-indigo-500 mb-2">
                Post : {p.id}
              </div>

              <div className="text-xl font-extrabold text-gray-800 leading-snug mb-3">
                {p.title}
              </div>

              <div className="text-base text-gray-600 line-clamp-3">
                {p.body}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50">
                <a
                  href={`/posts/${p.id}`}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Read Full Post &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
