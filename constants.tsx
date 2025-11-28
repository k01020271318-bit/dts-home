import { Search, PenTool, Camera, Layout, FileText, Send } from 'lucide-react';
import { NavItem, PortfolioItem, PricingTier, ServiceProcess, FaqItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '포트폴리오', path: '/portfolio' },
  { label: '서비스 안내', path: '/services' },
  { label: '스튜디오 소개', path: '/about' },
  { label: '제작 문의', path: '/contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: '퓨어 더마 코스메틱',
    category: 'Beauty',
    imageUrl: 'https://loremflickr.com/800/600/cosmetics,skincare',
    description: '임상 실험 결과를 강조한 신뢰도 중심의 상세페이지',
    increase: '전환율 3.5% 달성'
  },
  {
    id: 2,
    title: '프레시 밀키트',
    category: 'Food',
    imageUrl: 'https://loremflickr.com/800/600/food,steak',
    description: '식욕을 자극하는 시즐감 중심의 비주얼 디렉팅',
    increase: '매출 180% 상승'
  },
  {
    id: 3,
    title: '스마트 홈 공기청정기',
    category: 'Tech',
    imageUrl: 'https://loremflickr.com/800/600/tech,purifier',
    description: '복잡한 기능을 직관적인 인포그래픽으로 시각화',
    increase: '와디즈 펀딩 5억 달성'
  },
  {
    id: 4,
    title: '모던 리빙 소파',
    category: 'Living',
    imageUrl: 'https://loremflickr.com/800/600/furniture,sofa',
    description: '라이프스타일을 제안하는 감성적인 무드 연출',
    increase: '체류시간 2배 증가'
  },
  {
    id: 5,
    title: '오가닉 펫 푸드',
    category: 'Food',
    imageUrl: 'https://loremflickr.com/800/600/dog,food',
    description: '반려인의 마음을 움직이는 카피라이팅 전략',
    increase: '재구매율 상승'
  },
  {
    id: 6,
    title: '데일리 비타민',
    category: 'Food',
    imageUrl: 'https://loremflickr.com/800/600/pills,vitamin',
    description: '하루 한 알의 간편함을 강조한 미니멀 디자인',
    increase: '신규 회원 300% 증가'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: '스탠다드 (Standard)',
    price: '550,000원~',
    description: '이미지/문구가 준비된 경우, 깔끔하게 디자인만 필요한 분들께 추천',
    features: [
      'PC/Mobile 최적화 디자인',
      '기본 보정 및 합성',
      '세로 길이 15,000px 내외',
      '수정 2회 무료',
      '작업 기간 3~4일'
    ]
  },
  {
    name: '디럭스 (Deluxe)',
    price: '1,200,000원~',
    description: '기획부터 디자인까지, 전문가의 손길로 설득력을 높이고 싶은 분',
    recommended: true,
    features: [
      '경쟁사 분석 및 기획안 작성',
      '전문 카피라이팅',
      '고퀄리티 디자인 및 합성',
      'GIF(움짤) 3컷 포함',
      '세로 길이 30,000px 내외',
      '수정 3회 무료',
      '작업 기간 7~10일'
    ]
  },
  {
    name: '프리미엄 (Premium)',
    price: '2,500,000원~',
    description: '촬영부터 기획, 디자인까지 올인원. 압도적인 퀄리티를 원하는 분',
    features: [
      '스튜디오 제품 촬영 포함',
      '프리미엄 기획 및 스토리텔링',
      '최상급 디자인 및 아트워크',
      'GIF/짧은 영상 삽입',
      '길이 제한 없음',
      '우선 작업 (Fast Track)',
      '마케팅 소재(배너) 3종 제공'
    ]
  }
];

export const PROCESS_STEPS: ServiceProcess[] = [
  {
    step: '01',
    title: '시장 조사 및 분석',
    description: '경쟁사 분석과 타겟 고객의 니즈를 파악하여 판매 전략을 수립합니다.',
    Icon: Search
  },
  {
    step: '02',
    title: '기획 및 카피라이팅',
    description: '고객의 구매 심리를 자극하는 후킹 메시지와 논리적인 흐름을 설계합니다.',
    Icon: PenTool
  },
  {
    step: '03',
    title: '촬영 (옵션)',
    description: '기획 의도에 맞는 톤앤매너로 제품의 매력을 극대화하는 촬영을 진행합니다.',
    Icon: Camera
  },
  {
    step: '04',
    title: '디자인 제작',
    description: '시각적 위계와 가독성을 고려하여 브랜드 아이덴티티를 담은 디자인을 완성합니다.',
    Icon: Layout
  },
  {
    step: '05',
    title: '최종 납품',
    description: '피드백 반영 후 최종 원본 파일과 가이드라인을 전달해 드립니다.',
    Icon: FileText
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '기획안이 없어도 의뢰가 가능한가요?',
    answer: '네, 가능합니다. dts의 "디럭스" 또는 "프리미엄" 패키지를 이용하시면 제품 정보만으로도 경쟁사 분석부터 상세 기획, 카피라이팅까지 모두 진행해 드립니다.'
  },
  {
    question: '작업 기간은 얼마나 걸리나요?',
    answer: '스탠다드형은 자료 전달 후 영업일 기준 3~4일, 기획이 포함된 디럭스/프리미엄형은 7~14일 정도 소요됩니다. 스케줄에 따라 급행 작업도 가능하니 문의해 주세요.'
  },
  {
    question: '촬영도 함께 진행할 수 있나요?',
    answer: '네, dts는 자체 스튜디오를 운영하고 있어 제품 촬영부터 연출 컷, GIF 촬영까지 원스톱으로 진행 가능합니다. 프리미엄 패키지에 포함되어 있으며, 별도 추가도 가능합니다.'
  },
  {
    question: '수정은 몇 회까지 가능한가요?',
    answer: '각 패키지별로 기본 수정 횟수(2~3회)가 제공됩니다. 기획 단계에서의 수정은 횟수 제한이 없으며, 디자인 완료 후 텍스트나 간단한 배치 수정은 유연하게 도와드리고 있습니다.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    client: '네이처 스킨',
    content: '상세페이지 리뉴얼 후 전환율이 1.2%에서 4.5%로 뛰었습니다. 디자인이 예쁜 걸 넘어 왜 사야 하는지 설득하는 힘이 있네요.',
    role: '마케팅 팀장 김OO'
  },
  {
    id: 2,
    client: '데일리 쿡',
    content: '기획부터 막막했는데 dts에서 경쟁사 분석까지 완벽하게 해주셔서 놀랐습니다. 덕분에 와디즈 펀딩 대성공했습니다!',
    role: '대표 이OO'
  }
];
