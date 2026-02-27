import React from "react";

const Category = () => {
  return (
    <section className="my-8">
      <div className="flex items-center gap-2 mb-4 font-semibold">
        ☰ Kategori
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 h-10 rounded" />
        ))}
      </div>
    </section>
  );
};

export default Category;
