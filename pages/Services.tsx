import React from 'react';
import { PRICING_TIERS, PROCESS_STEPS } from '../constants';
import { Check, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
         <div className="container mx-auto px-6 text-center">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">Our Service</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">합리적인 가격, 최고의 퀄리티</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            기획부터 촬영, 디자인까지 필요한 만큼 선택하세요.<br/>
            불필요한 비용은 빼고 핵심만 담았습니다.
          </p>
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="container mx-auto px-6 -mt-16 pb-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 flex flex-col relative ${
                tier.recommended 
                  ? 'border-2 border-amber-500 shadow-xl scale-105 z-10' 
                  : 'border border-gray-200 shadow-lg mt-4 lg:mt-8'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  BEST CHOICE
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{tier.description}</p>
              <div className="text-3xl font-extrabold text-gray-900 mb-8">
                {tier.price}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                    <Check size={18} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                  tier.recommended
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                상담 신청하기
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">작업 프로세스</h2>
            <p className="text-gray-600">체계적인 시스템으로 빠르고 정확하게 작업합니다.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                  {/* Icon Bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center z-10 shadow-sm group-hover:border-amber-100 group-hover:scale-110 transition-all">
                     <step.Icon size={20} className="text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  
                  {/* Left Side Content */}
                  <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                     <span className="text-amber-500 font-bold text-sm block mb-1">STEP {step.step}</span>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Right Side Spacer (or Content for alternate layout) */}
                  <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-gray-600 mb-6">아직 어떤 패키지가 맞을지 고민되시나요?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 underline underline-offset-4">
          <MessageSquare size={20}/>
          전문가와 1:1 상담하기
        </Link>
      </div>
    </div>
  );
};

export default Services;
