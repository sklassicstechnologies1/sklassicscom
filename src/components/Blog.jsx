import React from 'react';

const Blog = () => {
  return (
    <div className="pt-[260px] max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Main Blog Content */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-medium mb-2">
          The Fascinating World of Data Science: An In-Depth Look
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          by Sklassics Edutech | Jul 1, 2024 | Uncategorized
        </p>
        <p className="text-base text-gray-800 leading-relaxed">
          In the digital age, data is often hailed as the new oil. Just as oil transformed industries in the
          20th century, data is revolutionizing the 21st century by driving innovation, enhancing decision-making,
          and providing deep insights into complex problems. At the heart...
        </p>
      </div>

      {/* Sidebar */}
      <aside className="space-y-8">
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-full border px-3 py-2 rounded-l-md"
          />
          <button className="mt-2 bg-gray-300 px-4 py-2 text-black rounded-md">
            Search
          </button>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Recent Posts</h2>
          <ul className="text-blue-700 underline text-sm">
            <li className="break-words">
              The Fascinating<br />
              World of Data Science:<br />
              An In-Depth Look
            </li>
          </ul>
        </div>

        {/* Recent Comments */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Recent Comments</h2>
          <p className="text-sm text-gray-500">No comments to show.</p>
        </div>
      </aside>
    </div>
  );
};

export default Blog;
