import React from "react";

export default function Loading() {
  return (
    <>
      <section className="wrapper bg-white pb-10 flex flex-col">
        <div className="flex items-center gap-6 my-6">
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-quater">
            <div className="h-full w-full animate-pulse bg-gray-200" />
          </div>
          <div className="h-8 w-40 rounded-md animate-pulse bg-gray-200" />
        </div>

        <div className="my-4 flex gap-4 justify-between items-center">
          <div className="space-y-2 w-full max-w-2xl">
            <div className="h-4 w-11/12 rounded-md animate-pulse bg-gray-200" />
            <div className="h-4 w-8/12 rounded-md animate-pulse bg-gray-200" />
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-40 rounded-md animate-pulse bg-gray-200" />
            <div className="h-10 w-28 rounded-md animate-pulse bg-gray-200" />
          </div>
        </div>
      </section>

      <section className="wrapper py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <article
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
              <div className="h-full w-full animate-pulse bg-gray-200" />
            </div>
            <div className="h-4 w-3/4 rounded-md animate-pulse bg-gray-200 mb-2" />
            <div className="h-3 w-1/2 rounded-md animate-pulse bg-gray-200" />
            <div className="h-6 w-20 mt-3 rounded-full animate-pulse bg-gray-200" />
          </article>
        ))}
      </section>
    </>
  );
}
