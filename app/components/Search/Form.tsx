import { Form } from "@remix-run/react";
import React from "react";
import { decodeSlug } from "~/utils/slug";

export const SearchForm = ({ q }: { q: string }) => {
  const [query, setQuery] = React.useState(decodeSlug(q));

  return (
    <Form method="post" className="w-full  max-w-2xl">
      <div className="w-full dark:bg-[#242424]  border flex flex-row justify-between items-center dark:border-gray-600 rounded-full p-2">
        <input
          className="px-2 py-2 w-full resize-none bg-transparent focus-within:outline-none sm:text-sm focus:ring-0 focus-visible:ring-0 ring-0 dark:ring-0 border-0 dark:text-gray-100"
          required
          name="query"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button className="inline-flex items-center rounded-full border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles h-6 w-6"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
          </button>
        </div>
      </div>
    </Form>
  );
};
