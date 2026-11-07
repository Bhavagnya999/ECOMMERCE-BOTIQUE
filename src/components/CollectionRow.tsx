import React from 'react';
import { Link } from 'react-router-dom';
import { SareeIcon } from './LotusLogo';
import { CATEGORIES } from '../data/categories';

export const CollectionRow: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference: "— Explore Our Collections —" */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10 text-center">
          <span className="h-[1px] w-12 sm:w-20 md:w-32 bg-[#4A151E]/40" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#380C14] font-normal tracking-tight">
            Explore Our Collections
          </h2>
          <span className="h-[1px] w-12 sm:w-20 md:w-32 bg-[#4A151E]/40" />
        </div>

        {/* 8 Collection Cards matching reference image layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-4.5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/all-sarees?category=${category.id}`}
              className="group flex flex-col bg-[#F8F2E8] rounded-xl overflow-hidden border border-[#E6D5BD] hover:border-[#C89D42] shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Swatch / Drape Image with curved top corners */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6D5BD]/30">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Lower Card Area with Saree Icon & Title */}
              <div className="p-2.5 sm:p-3 flex flex-col items-center text-center justify-center flex-1 bg-gradient-to-b from-[#FAF6F0] to-[#F8F2E8]">
                {/* Traditional Saree Drape Icon matching reference */}
                <div className="text-[#782333] group-hover:text-[#4A151E] group-hover:scale-110 transition-all duration-200 mb-1">
                  <SareeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Category Name in Refined Serif */}
                <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#380C14] group-hover:text-[#782333] tracking-tight leading-tight">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
