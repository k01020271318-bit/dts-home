import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Food', 'Beauty', 'Living', 'Tech'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Portfolio</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            dts가 만들어낸 압도적인 성과.<br/>
            다양한 카테고리의 성공 사례를 확인해보세요.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group block h-full">
              <div className="relative overflow-hidden rounded-2xl mb-5 shadow-sm border border-gray-100">
                <div className="aspect-[4/3] bg-gray-200">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="text-white border border-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                     상세 보기 <ArrowUpRight size={18}/>
                   </button>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.category}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-amber-600 font-bold text-sm bg-amber-50 px-2 py-1 rounded">
                   {item.increase}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            해당 카테고리의 포트폴리오가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
