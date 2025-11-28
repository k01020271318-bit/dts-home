import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다!');
    // In a real app, send to backend here
    setFormData({ company: '', name: '', phone: '', email: '', budget: '', message: '' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">성공적인 비즈니스의 시작, dts가 함께합니다.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트 문의하기</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">회사/브랜드명</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="dts corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">담당자 성함</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">예산 범위</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">선택해주세요</option>
                  <option value="50-100">50만원 ~ 100만원</option>
                  <option value="100-300">100만원 ~ 300만원</option>
                  <option value="300-500">300만원 ~ 500만원</option>
                  <option value="500+">500만원 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 (제품 종류, 현재 상황 등)</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="판매하고자 하는 제품과 고민되는 점을 자유롭게 적어주세요."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                무료 진단 및 견적 요청
              </button>
            </form>
          </div>

          {/* Info & FAQ */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-100">
               <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>
               <ul className="space-y-4 text-gray-600">
                 <li className="flex items-center gap-3">
                   <Phone size={20} className="text-amber-500" />
                   <span>02-1234-5678 (평일 10:00 - 18:00)</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Mail size={20} className="text-amber-500" />
                   <span>contact@dts-studio.com</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <MapPin size={20} className="text-amber-500 mt-1" />
                   <span>서울시 강남구 테헤란로 123 dts빌딩 4층</span>
                 </li>
               </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-gray-800">{item.question}</span>
                    {openFaqIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
