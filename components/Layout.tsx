import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-extrabold tracking-tighter text-gray-900 z-50">
            dts<span className="text-amber-500">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-amber-600 ${
                    isActive ? 'text-amber-600' : 'text-gray-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-1"
            >
              무료 진단하기 <ArrowUpRight size={16} />
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-2xl font-bold ${
                  isActive ? 'text-amber-500' : 'text-gray-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
             to="/contact"
             className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          >
             무료 진단하기
          </NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-extrabold text-white mb-4">dts.</h2>
              <p className="max-w-xs text-sm leading-relaxed mb-6">
                우리는 예쁜 디자인보다<br/>
                팔리는 디자인을 만듭니다.<br/>
                매출 상승을 위한 전략적 파트너.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/portfolio" className="hover:text-amber-500 transition">포트폴리오</NavLink></li>
                <li><NavLink to="/services" className="hover:text-amber-500 transition">서비스 안내</NavLink></li>
                <li><NavLink to="/about" className="hover:text-amber-500 transition">스튜디오 소개</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>02-1234-5678</li>
                <li>contact@dts-studio.com</li>
                <li>서울시 강남구 테헤란로 123 dts빌딩 4층</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} dts Studio. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">개인정보처리방침</a>
              <a href="#" className="hover:text-white">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
