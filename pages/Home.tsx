import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '../constants';

const chartData = [
  { name: '기존', sales: 100 },
  { name: 'dts 리뉴얼 후', sales: 300 },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://loremflickr.com/1600/900/webdesign,studio" 
            alt="Studio Background" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-sm font-bold mb-6 animate-fade-in-up">
            이커머스 매출 증대 솔루션
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 animate-fade-in-up delay-100">
            디자인만 바꿨는데<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              매출 300% 상승?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            dts는 단순한 디자인이 아닌 '팔리는 논리'를 설계합니다.<br className="hidden md:block"/>
            고객을 설득하는 강력한 상세페이지, 지금 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              내 상세페이지 무료 진단받기 <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-full hover:bg-gray-800 transition-all"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              좋은 제품인데 왜 안 팔릴까요?
            </h2>
            <p className="text-gray-600 text-lg">
              고객은 3초 안에 이탈합니다. <br/>
              화려하기만 한 디자인으로는 고객의 지갑을 열 수 없습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "이탈률 증가", desc: "후킹 포인트가 없어 고객이 초반에 나갑니다." },
              { icon: TrendingUp, title: "전환율 저조", desc: "신뢰감을 주지 못해 장바구니 담기가 안 됩니다." },
              { icon: BarChart3, title: "광고비 낭비", desc: "유입은 시켰지만 구매로 이어지지 않습니다." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Data Visualization */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-amber-500 font-bold mb-2 block">dts Solution</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                기획이 디자인을<br/>
                압도합니다.
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                dts는 철저한 시장 조사와 경쟁사 분석을 통해 <br/>
                '살 수밖에 없는 이유'를 만듭니다. <br/>
                예쁜 그림이 아닌, 매출 데이터로 증명합니다.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "경쟁사 완벽 분석 및 차별화 포인트 도출",
                  "구매 욕구를 자극하는 심리적 트리거 설계",
                  "모바일 가독성을 고려한 최적의 UI/UX"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-amber-500" size={20} />
                    <span className="text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-amber-500 font-bold hover:text-amber-400 inline-flex items-center gap-1 border-b border-amber-500 pb-1">
                프로세스 자세히 보기 <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-center text-gray-300">평균 매출 성장률</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="name" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      cursor={{fill: 'transparent'}}
                    />
                    <Bar dataKey="sales" fill="#F59E0B" radius={[4, 4, 0, 0]} barSize={60} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">* 자사 클라이언트 리뉴얼 3개월 후 평균 데이터</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-500 font-bold mb-2 block">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">성공 사례</h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
              더 많은 사례 보기 <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-sm border border-gray-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {item.increase}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-1">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-600 font-medium border border-gray-300 px-6 py-3 rounded-full">
              더 많은 사례 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">클라이언트 리얼 후기</h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="text-amber-500">★</div>
                   ))}
                 </div>
                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{t.content}"</p>
                 <div className="border-t border-gray-100 pt-4">
                   <p className="font-bold text-gray-900">{t.client}</p>
                   <p className="text-sm text-gray-500">{t.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-amber-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            지금도 매출을 놓치고 계신가요?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            망설이는 시간에도 경쟁사는 치고 나갑니다. <br/>
            전문가의 진단을 받고 매출 상승의 기회를 잡으세요.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
