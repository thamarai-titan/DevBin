'use client';
import { Search } from "lucide-react"
import { categories } from "@/lib/data/tools"
import { SearchFilterbarProps } from "@/types"

const SearchFilter = ({
  searchQuery,
  onCategoryChange,
  selectedCategory,
  onSearchChange
}: SearchFilterbarProps) => {
  return <>
    <section className='w-full bg-[#0d0b0f]/95 backdrop-blur-2xl'>
      <div className='max-w-7xl mx-auto p-6'>
        {/* search input */}
        <div className='border border-(--color-muted) flex items-center rounded p-2 text-[#e8e8e8]'>
          <Search size={20}
            className="mr-2"
          />
          <input type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="text-white placeholder-[#e8e8e8] w-full outline-none"
            placeholder="Search here!"
          />
        </div>
        {/* category chips */}
        <div className="flex gap-3 overflow-x-auto py-4">
          {categories.map((category) => (
            <button key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`text-[#e8e8e8] px-4 py-2 rounded-full whitespace-nowrap border border-(--color-muted) ${selectedCategory === category.id} ? 'bg-white text-black' : ''`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>

  </>
}

export default SearchFilter
