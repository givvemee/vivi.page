export const OnuiiProject = [
  {
    id: 1,
    name: '마이그레이션 및 유지 보수',
    desc: 'ejs 를 React + Next.js 로 마이그레이션 후 prod 레벨 배포 및 Typescript 로 유지 보수. 시즌 상품 및 프로모션 페이지 작성. Rest api 를 이용한 통신 보수 개발.',
  },
  {
    id: 2,
    name: '입시 설계 리포트 신규 도메인 구축',
    desc: '전반적인 도메인 초기 설정 구축. GraphQL Apollo 과 Codegen 을 도입하여 통신 기능 구현. react-select 라이브러리를 커스텀하여 사용자 친화적인 UI 구축.',
  },
  {
    id: 3,
    name: '설탭 북스 결제, 환불 정산 어드민 신규 도메인 구축 및 개발',
    desc: '도메인 초기 설정 구축. 통신 에러 핸들링 위해 에러 규약 구축 및 코드 적용. 스프린트 주기 내 다양한 재사용 UI 와 함수 작성하여 결제, 환불, 배송지 변경 등 기능 개발.',
  },
  {
    id: 4,
    name: 'MFA를 차용한 bolierplate 작성 및 Mono repo 도입',
    desc: '파트 내 도메인에 공통으로 적용되는 라이브러리의 버저닝 관리 및 eslint 패키지화, 문서화를 위한 PR template, Issue template, 리드미 등 작성. Mono Repo 리스크 서치 및 tool 비교 후 Turbo Repo 기반으로 Git submodules 를 접목하여 도입.',
  },
  {
    id: 5,
    name: '결제, 정산 어드민 백오피스 신규 구축',
    desc: 'tanstack/react-table 을 이용하여 테이블 전반 구현, 페이지 프린트 혹은 hydration 처리 등 재사용이 가능한 공통 함수 작성, 데이터 호출 구조를 변경하여 코드 리팩토링. 결제 및 환불, 가상계좌 발급 인증번호 취소 등의 기능 구현',
  },
];
export const OnuiiStack = [
  'React',
  'Next',
  'Typescript',
  'Zustand',
  'Redux',
  'Stitches',
  'Rest api',
  'GraphQL',
  'Vercel',
];

export const MelhoProject = [
  {
    id: 1,
    name: '소매 잡화 사이트 UI 개발',
    desc: '기획과 협업하여 대략적인 메뉴 구조와 화면 아이데이션. 화면설계서 작성.',
  },
  {
    id: 2,
    name: '재사용을 위한 모듈 단위의 UI 컴포넌트 구축',
    desc: 'Javascript 와 jQuery 를 활용한 슬라이드, 드롭다운 등의 애니메이션 구현. 한/영/프 사이의 다국적 언어 전환 기능 구현',
  },
  {
    id: 4,
    name: '프론트엔드 개발 환경 구성 및 인터페이스 개선',
    desc: '기존 jQuery 로 핸들링 하던 애니메이션은 모두 바닐라 자바스크립트로 교체하여 성능 개선. React 도입을 위한 도메인 기반 작업 및 환경 설정.',
  },
  {
    id: 3,
    name: '어드민 사이트 퍼블리싱',
    desc: '결제, 배송 백오피스 페이지 구축 및 UI 개발. 협업으로 데이터 구조를 논의하고 클라이언트 뷰 확립',
  },
];

export const MelhoStack = [
  'HTML',
  'CSS',
  'Scss',
  'Javascript',
  'jQuery',
  'Bootstrap',
];
