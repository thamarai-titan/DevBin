'use client';

import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import { useState } from "react";
import { tools } from "@/lib/data/tools";
import { getMiddlewareRouteMatcher } from "next/dist/shared/lib/router/utils/middleware-route-matcher";
import { div, filter } from "motion/react-client";
import { ToolCard } from "@/components/ToolCard";
import { TrendingSection } from "@/components/TrendingTools";
import { CategoriesSection } from "@/components/CategoriesSection";
import { Footer } from "@/components/Footer";

export default function Home() {

  const [searchQuery,setSerachQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTools = tools.filter((tool) => {
    const matchedSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

    return matchedSearch && matchesCategory
    
  })

  return (
    <main className="w-full">

      <Navbar />
      <HeroSection />
      <SearchFilter 
      searchQuery={searchQuery}
      onSearchChange={setSerachQuery}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      />
      <section className="py-20 bg-(--color-bg)">
        <div className="max-w-7xl mx-auto px-6">
        {filteredTools.length > 0 ? (
          <>
          <div className="mb-8">
            <p className="text-(--color-muted)">
              Showing {filteredTools.length} tool{filteredTools.length !== 1 ? 's':''}
              {searchQuery && `for  "${searchQuery}"`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool,index)=>(
              <ToolCard key={tool.id} tool={tool} index={index}/>
            ))}
          </div>
          </>
        ):(
          <div className="text-center px-20">
              <p className="text-2xl mb-4">
                No tools Found
              </p>
          </div>
        )}
        </div>
      </section>
        <TrendingSection/>
        <CategoriesSection/>
        <Footer/>
    </main>
  );
}
