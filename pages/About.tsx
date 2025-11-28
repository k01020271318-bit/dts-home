import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro Hero */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="https://loremflickr.com/1600/900/team,office" alt="Team" className="w-full h-full object-cover opacity-20 grayscale" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Design that <br/>
            <span className="text-amber-500">Sells.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            dts는 '보기 좋은 디자인'을 넘어 '팔리는 디자인'을 연구합니다.<br/>
            우리는 디자이너이기 전에 마케터입니다.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why dts?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                수많은 디자인 스튜디오 중<br/>
                왜 dts여야 할까요?
              </p>
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-12">
              <div>
                <Quote className="text-amber-100 fill-current mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">숫자로 증명합니다</h3>
                <p className="text-gray-600 leading-relaxed">
                  디자인의 목적은 결국 매출 상승입니다. 우리는 감에 의존하지 않고, 데이터와 논리에 기반하여 디자인합니다. 
                  클라이언트의 성공이 곧 우리의 포트폴리오라는 마음으로 임합니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">끊임없는 시장 분석</h3>
                <p className="text-gray-600 leading-relaxed">
                  트렌드는 매일 변합니다. 어제 먹혔던 방식이 오늘은 통하지 않을 수 있습니다.
                  dts 팀은 매주 이커머스 트렌드를 분석하고, 가장 효과적인 소구점을 찾아냅니다.
                </p>
              </div>

              <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">협업의 가치</h3>
                 <p className="text-gray-600 leading-relaxed">
                   단순한 외주 업체가 아닌 파트너로서 함께 고민합니다. 
                   제품에 대한 대표님의 애정을 누구보다 잘 이해하고, 그것을 시각언어로 번역하는 것이 우리의 역할입니다.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Area (Simple Logo Grid Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-2xl font-bold text-gray-900 mb-10">함께 성장하는 파트너들</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
             {[1,2,3,4,5,6,7,8].map((i) => (
               <div key={i} className="h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-300">
                 PARTNER LOGO
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
