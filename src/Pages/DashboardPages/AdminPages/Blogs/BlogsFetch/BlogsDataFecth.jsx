import React from "react";

const Blogs = [
  {
    id: "1",
    date: "August 28, 2023",
    timeRead: "3 min read",
    title: "Meta Platform Plans Release of Free Software",
    description:
      "The parent company of Facebook, Meta Platforms, is introducing software to help developers build modern solutions for the future.",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    date: "September 10, 2023",
    timeRead: "5 min read",
    title: "New AI Models Revolutionizing Tech Industry",
    description:
      "AI models are transforming the way tech companies handle data and innovate new products for the global market.",
    imgSrc: "https://via.placeholder.com/150",
  },
  // More Blogs...
];

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const BlogsDataFecth = () => {
  return (
    <div className="w-full mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Blogs</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time to Read</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {Blogs.map((article) => (
              <tr key={article.id}>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={article.imgSrc} alt={article.title} />
                    </div>
                  </div>
                </td>
                <td>{article.title}</td>
                <td>{truncateDescription(article.description, 10)}</td>
                <td>{article.date}</td>
                <td>{article.timeRead}</td>
                <td>
                  <button className="btn btn-sm btn-primary mr-2">Edit</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsDataFecth;
