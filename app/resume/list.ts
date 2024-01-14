export const OnuiiProject = [
  {
    id: 1,
    name: '마이그레이션 및 유지 보수',
    desc: [
      {
        id: 1,
        text: 'ejs 프로젝트를 Next.js 와 Typescript 로 마이그레이션하여 유지 보수성 향상에 기여',
      },
      {
        id: 2,
        text: '결제 통신을 위한 과외 상품 데이터 구조화 구축',
      },
      {
        id: 3,
        text: '버전 호환을 위한 라이브러리 및 프레임 워크 리스크 서치 후 교체, 업데이트',
      },
    ],
  },
  {
    id: 2,
    name: '입시 설계 리포트 런칭',
    desc: [
      {
        id: 1,
        text: '신규 프로젝트 런칭으로 기존 및 신규 고객 결제 전환률에 기여',
      },
      {
        id: 3,
        text: '학력 정보 입력 및 성향 조사 페이지 개발과 GraphQL을 통한 백과 클라이언트의 데이터 송수신 환경 구축',
      },
      {
        id: 2,
        text: '타입 안정성을 위해 GraphQL Apollo 도입 및 전파',
      },
      {
        id: 4,
        text: '기능 구현에 기반한 개발 서버 배포 주기를 얼라인하여 지속적인 버그 모니터링',
      },
    ],
  },
  {
    id: 3,
    name: '코드 작성 안정화 구축 및 배포 환경 개선',
    desc: [
      {
        id: 1,
        text: '생산성 향상을 위한 eslint 컨벤셔닝 및 패키지 배포 ',
      },
      {
        id: 2,
        text: 'MFA 정립 취지의 Pr, Issue, Read me 등 규격화된 문서 작성 및 bolierplate 구축',
      },
      {
        id: 3,
        text: 'Turbo Repo 와 Git submodules 를 차용한 Mono Repo 도입',
      },
    ],
  },
  {
    id: 4,
    name: '설탭 북스 정산 백오피스 구축',
    desc: [
      {
        id: 1,
        text: '도메인 신설 및 생산성을 위한 코드 컨벤셔닝 및 GraphQL 통신 에러 바운더리 정립, Vercel 배포 자동화 구축',
      },
      {
        id: 2,
        text: '달력, 멀티 셀렉트 등 재사용 가능한 컴포넌트 다수 작성과 storyboard 활용',
      },
      {
        id: 3,
        text: 'tanstack/react-table 신규 버전을 도입하여 확장성 있게 컴포넌트를 작성하여 추후 레거시 버전의 리팩토링 기반 설계',
      },
      {
        id: 4,
        text: '타입 안정성을 위한 리턴 타입 처리, 인자 타입 정비 등으로 런타임 오류 축소 및 배포 속도 향상에 기여',
      },
    ],
  },
  {
    id: 5,
    name: '설탭 결제 백오피스 신규 이전 개발',
    desc: [
      {
        id: 1,
        text: '기존 작성한 재사용 컴포넌트로 스프린트 절반 단축 및 리팩토링 진행',
      },
      {
        id: 2,
        text: '가독성과 유지보수를 위해 GraphQL 통신을 커스텀 훅으로 작성하는 로직 개선',
      },
      {
        id: 3,
        text: '직관적인 사용자 경험을 위해 다량의 데이터를 조회하는 과정에서  useEffect와 커스텀 훅을 활용하여 최소한의 상호작용으로 데이터 확인이 가능하도록 개발',
      },
    ],
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
    name: '소매 잡화 사이트 UI 구축, 개발',
    desc: [
      {
        id: 1,
        text: '전반적인 화면 아이데이션 및 스토리보드 작성',
      },
      {
        id: 2,
        text: '웹 접근성을 고려하여 프로덕트 전체를 반응형으로 구성 및 css 모듈화',
      },
      {
        id: 3,
        text: '바닐라 자바스크립트를 이용한 데이터 페칭으로 토글을 활용하여 한국어, 프랑스어, 영어 간의 다국어 지원 기능 개발',
      },
      {
        id: 4,
        text: '효율적인 의사 소통 및 효과적인 제품 구성을 위한 스크럼 형식의 데일리 미팅 정착',
      },
    ],
  },
  {
    id: 2,
    name: '프론트엔드 개발 환경 구성 및 인터페이스 개선',
    desc: [
      {
        id: 1,
        text: 'jQuery 로 핸들링하던 css 애니메이션의 속도 저하 관측으로 인해 바닐라 자바스크립트로 구조 변경',
      },
      {
        id: 2,
        text: 'CRA 도입을 위한 도메인 기반 작업 환경 구성',
      },
      {
        id: 3,
        text: '모듈로 작성된 css 전반에 걸쳐 리액트로 이전 및 재사용 가능한 컴포넌트 단위 개발 진행',
      },
    ],
  },

  {
    id: 3,
    name: '상품 관리와 배송을 위한 백오피스 사이트 구축',
    desc: [
      {
        id: 1,
        text: 'axios 통신을 활용한 로그인 가드 구현하여 사이트의 안정성을 강화',
      },
      {
        id: 2,
        text: 'React 도입, 데이터 페칭 기반 구축 및 클라이언트 뷰 작성',
      },
    ],
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
