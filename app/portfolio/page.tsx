'use client';

import * as util from '@/app/util/index';
import Link from 'next/link';
import { CodeBlock } from 'react-code-blocks';
import { Email } from '../icon/email';
import { Github } from '../icon/github';
import { LinkTo } from '../icon/link';
import { Pen } from '../icon/pen';
import { MelhoStack, OnuiiStack } from '../resume/list';
import * as code from './codeblocks';

const Portfolio = () => {
  return (
    <div className="w-full max-w-5xl border-white mx-auto my-10">
      <p className="text-3xl font-bold mt-3 mb-3">
        프론트엔드 엔지니어 윤기쁨의 포트폴리오
      </p>
      <div className="flex gap-10">
        {/* <p className="text-normal leading-5 text-sm">
          <br />웹 퍼블리셔로 스타트업에서 개발 커리어를 시작한 웹 프론트엔드
          개발자입니다. React 및 Next.js 를 이용한 Javascript, Typescript 언어
          개발에 익숙하지만 언제나 새로운 기술에 대한 욕심을 가지고 있습니다.
          개발 중 직면한 문제를 간과하지 않고 시간을 들여서라도 반드시 해결책을
          내어 마무리합니다. 이 과정에서 습득한 새로운 지식이나 문제 해결 방식을
          기록하고, 새로이 적용할 수 있는 방법을 끊임없이 고민합니다. 보다
          효율적이고 유연한 컴포넌트에 대해 꾸준히 탐구하며 여러 번 시행착오를
          거치더라도 능동적으로 해답을 강구합니다.
        </p> */}
        <div className="w-full">
          <p className="text-main font-bold py-1">Contact Info</p>
          <div className="flex gap-1.5 justify-between">
            <div
              onClick={util.SendEmail}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Email />
              <span className="text-normal">givvemeee@gmail.com</span>
            </div>
            <div
              onClick={util.Github}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Github />
              <span className="text-normal">https://github.com/givvemee</span>
            </div>
            <div
              onClick={util.Medium}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Pen />
              <span className="text-normal">https://medium.com/@givvemeee</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-main text-3xl font-bold mb-5">Work Experience</p>
        <div>
          <div className="flex gap-24 items-center">
            <p className="text-lg font-bold">
              (주)오누이랩 (설탭) <br />
              <span className="text-normal">(2022. 03 ~ 2023.11)</span>
            </p>
            <div>
              <p>개발팀, 프론트엔드 개발자</p>
              <div>
                <p className="text-normal py-2 text-sm">
                  설탭 랜딩 페이지 개발, 신규 상품 런칭 등을 포함한 설탭 웹
                  서비스 유지 보수 및 개발 전반에 참여하였습니다.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {OnuiiStack.map((stack, idx) => (
                    <button key={idx} className="bg-sub px-2 rounded">
                      <span className="text-sm text-main">{stack}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                신규 상품 입시 설계 리포트 런칭
              </p>
            </div>
            <div>
              <p className="mt-2">내용 </p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  중고등 성적 및 대학 입결 입시 데이터를 기반으로 기준 데이터
                  구조를 수립, 학생이 입력한 성적 데이터를 기준 데이터에
                  반환시키고 리포트 형태로 생성할 수 있는 시스템을 개발
                </li>
              </ul>
              <p className=" mt-2">개발</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-7">
                <li>
                  기본 학력 정보 입력 페이지 개발
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      기획자와 협업하여 유저로부터 제공 받아야 할 정보의 컬럼을
                      나눠 가독성 있게 구성하고, 이를 바탕으로 백엔드와 사전에
                      Graphql Schema 를 구성
                    </li>
                    <li>
                      react-select 라이브러리를 차용하여 재학 고교, 희망 입학
                      대학, 성적 등 필수 정보를 Input 으로 입력 받음
                    </li>
                  </ul>
                </li>
                <li>
                  입시 성향 탐색을 위한 설문 조사 페이지 개발
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      Typescript 와 Graphql Codegen 을 도입하여 쿼리와
                      뮤테이션의 타입 안정성을 향상
                    </li>
                    <li>
                      DB 에서 30개의 무작위 문항을 받아와 두 개의 파트로 나누고,
                      각 파트에 해당하는 문항은 sort method 를 이용하여 순서대로
                      정렬하여 화면에 페인팅
                    </li>
                    <li>
                      응답값은 문항 넘버 (key) - 응답값 (value) 쌍 유형의 배열로
                      관리함. 제출 전 해당 배열의 length 를 파악하여 value 가
                      입력되지 않은 key 를 반환해 입력을 독려하는 토스트 노출,
                      전부 입력이 되었다면 mutation 통신으로 전송
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">리팩토링 및 트러블 슈팅</p>
              <div className="flex justify-between gap-5">
                <div className="w-1/2">
                  <ul className="list-disc list-inside pl-4 text-sm leading-7">
                    <li>
                      제출 완료 시 안내 문구 노출에 필요한 모달이 생성될 때,
                      모달 뒤 화면이 스크롤되는 이슈 발생 (코드 블럭 1)
                    </li>
                    <li>
                      react-select 사용 과정에 있어 공식 문서 참고 후{' '}
                      <Link
                        href={
                          'https://github.com/JedWatson/react-select/pull/5627'
                        }
                        target={'_blank'}
                        className="underline"
                      >
                        <div className="inline-flex items-center gap-1 underline text-main">
                          <LinkTo />
                          <span>오픈 소스 기여</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      30개의 무작위 문항을 받아오는 응답값이 nullable 한 배열
                      타입으로 내려오는 현상 발생.
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          200 ok 상황이라면 배열을 리턴 받는 과정에서 null 일 수
                          없도록 유틸리티 타입 추가 (코드 블럭 2)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="text-sm flex flex-col gap-2 w-1/2">
                  <CodeBlock
                    text={code.codeBlock1}
                    language="jsx"
                    showLineNumbers={false}
                    wrapLongLines={true}
                  />
                  <CodeBlock
                    text={code.codeBlock2}
                    language="jsx"
                    showLineNumbers={false}
                    wrapLongLines={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                신규 상품 설탭북스 백오피스 구축
              </p>
            </div>
            <div>
              <p className="mt-2">내용</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  설탭북스 교재 환불과 배송 관리, 정산 데이터 시각화 시스템
                  백오피스 구축
                </li>
              </ul>
              <p className="mt-2">개발</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-7">
                <li>
                  설탭북스 결제건과 정산 전반 관리를 위한 도메인 생성과 프로젝트
                  초기 설정{' '}
                </li>
                <li>
                  여러 페이지에서 사용될 Button, Input, Modal, Table, Loading
                  등을 공통 컴포넌트로 작성하여 재사용
                  {/* <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>해당 컴포넌트 storybook 작성</li>
                  </ul> */}
                </li>
                <li>
                  결제 및 환불, 배송지 변경을 위한 페이지 작성
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      원본 데이터, 필터로 가공된 데이터, 검색으로 선별된
                      데이터를 효율적으로 관리하기 위해 TableData 변수를 지정한
                      뒤, 전역 상태로 관리할 수 있도록 스토어에 저장. 사용자의
                      니즈를 input 으로 받아 해당 값을 query 의 variables 에
                      담고, 응답으로 받은 데이터를 setTableData 로, 필요 시마다
                      교체할 수 있도록 코드 작성.{' '}
                    </li>
                    <li>
                      사용자가 Input 을 입력 - 확인 버튼 클릭 - 데이터 페인팅
                      과정에서 확인 버튼을 클릭하는 대신에 `useEffect` 내 의존성
                      배열에 값을 관리할 수 있는 변수들을 넣어 입력 이후
                      즉각적으로 데이터를 확인할 수 있도록 코드 구성
                    </li>
                  </ul>
                </li>
                <li>
                  정산 데이터 페인팅과 출력 페이지 작성
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      tanstack/react-table 라이브러리를 사용하여 건별 정산, 월별
                      정산, 정산 요약 등 세분화된 공통으로 사용할 수 있는 테이블
                      작성{' '}
                    </li>
                    <li>
                      각 정산 데이터를 월별로 확인할 수 있도록 달력과 날짜
                      핸들러 함수, 데이터 엑셀 추출을 위한 함수를 작성하여
                      유틸리티 파일로 관리{' '}
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">리팩토링 및 트러블 슈팅</p>
              <div className="flex justify-between gap-5">
                <div className="w-1/2">
                  <ul className="list-disc list-inside pl-4 text-sm leading-7">
                    <li>
                      데이터 송수신 시 에러 핸들링을 위해 백엔드와 협업하여
                      에러를 코드로 분류함.
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          클라이언트에서도 활용할 수 있도록 apollo 구성 내부에
                          switch case 구문을 추가하여 사용자로 하여금 에러
                          내용과 코드를 확인함으로써 유지 보수성을 높임
                        </li>
                      </ul>
                    </li>

                    <li>
                      최신 결제 데이터가 GraphQL 캐시 상의 이유로 상단에
                      올라오지 않던 문제 발생
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          GraphQL query 내 fetchPolicy: &quot;no-cache&quot;,
                          구문을 추가하여 데이터는 항상 최신의 것을 유지할 수
                          있도록 해결{' '}
                          <Link
                            href={
                              'https://medium.com/@givvemeee/cache-in-graphql-c84adb1e5ba0'
                            }
                            target={'_blank'}
                            className="underline"
                          >
                            <div className="inline-flex items-center gap-1 underline text-main">
                              <LinkTo />
                              <span>블로그 링크</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="text-sm flex flex-col gap-2 w-1/2">
                  <CodeBlock
                    text={code.codeBlock3}
                    language="jsx"
                    showLineNumbers={false}
                    wrapLongLines={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                결제, 정산 어드민 백오피스 신규 구축
              </p>
            </div>
            <div>
              <p className=" mt-2">내용</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  기존 과외 상품의 결제 서버 이전에 따라 새로운 도메인을 이용한
                  어드민 구축
                </li>
              </ul>
              <p className=" mt-2">개발</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  결제 데이터 테이블 구현과 결제 상세 페이지 개발 및 환불 기능
                  추가
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      기존에 작성해 두었던 공통 컴포넌트를 활용하여 UI 개발
                      기간을 스프린트 절반으로 단축{' '}
                    </li>
                    <li>
                      내부 사용자가 기록할 금액, 환불 사유, 메모 등에 오차가
                      없도록 매 input 에 유효한 값이 들어갈 수 있도록 validation
                      함수 작성{' '}
                    </li>
                  </ul>
                </li>

                <li>가상계좌 발급대기 연관 인증 번호 발송 및 취소 기능 개발</li>
                <li>일부 페이지 Next 13 버전으로 마이그레이션 </li>
              </ul>
              <p className=" mt-2">리팩토링 및 트러블 슈팅</p>
              <div className="flex justify-between gap-5">
                <div className="w-1/2">
                  <ul className="list-disc list-inside pl-4 text-sm leading-6">
                    <li>
                      GraphQL mutaion 통신 직후 업데이트 된 해당 값을 페인팅
                      하기 위해 query 를 호출하고, 이 과정에서 불필요하게
                      일어나는 화면 새로고침 개선
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          mutation 에 보내는 값이 query 의 특정 key의 value 인
                          점을 활용하여 optimisticResponse 를 추가. 블로그 링크
                          참고{' '}
                        </li>
                      </ul>
                    </li>
                    <li>
                      stitches 를 Next 13 버전에 맞게 구성하는 과정에서 처음
                      렌더 시 스타일이 로드되지 않거나 hydration 에러가 발생하던
                      이슈
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          공식 문서를 참고하여 useServerInsertedHTML 로 style
                          tag 를 래핑한 뒤 layout 에 적용{' '}
                          <Link
                            href={
                              'https://medium.com/@givvemeee/fixing-hydration-error-of-style-with-stitches-css-to-next-13-3096f618605c'
                            }
                            target={'_blank'}
                          >
                            <div className="inline-flex items-center gap-1 underline text-main">
                              <LinkTo />
                              <span>블로그 링크</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      각 페이지에서 사용되는 기본 데이터 호출 최적화
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          페이지 내부에서 매번 데이터를 호출하는 함수를 작성하는
                          대신 useDataQuery.ts 형식의 파일로 작성하여 함수만
                          호출할 수 있도록 개선.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="text-sm flex flex-col gap-2 w-1/2">
                  <CodeBlock
                    text={code.codeBlock4}
                    language="jsx"
                    showLineNumbers={false}
                    wrapLongLines={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                기타 사내 제품 개선
              </p>
            </div>
            <div>
              <p className="underline py-1 font-bold">
                seoltab.com 웹 랜딩 페이지 개발 및 유지 보수{' '}
              </p>
              <div>
                <p className="mt-2">내용</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>
                    ejs 로 되어 있던 페이지를 React, Next 마이그레이션 진행 및
                    유지 보수
                  </li>
                </ul>
                <p className="mt-2">개발</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>
                    각종 이벤트, 프로모션, 홈쇼핑 등 페이지 제작 및 과외 상품
                    판매 개발
                    <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                      <li>
                        과목, 수강 개월, 유형 등을 선택, 조합하는 플로우를
                        switch case 를 사용하여 개발
                      </li>
                    </ul>
                  </li>
                  <li>
                    리스크 써치 후 라이브러리, 프레임워크 버전 업데이트
                    <ul className="list-disc list-inside pl-4 text-sm leading-6">
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>React 및 Next 버전 업데이트와 최적화 진행</li>
                      </ul>
                    </ul>
                  </li>
                  <li>
                    유지 보수 고려와 에러 핸들링을 용이하게 하기 위해 Javascript
                    코드를 Typescript 로 전환
                  </li>
                  <li>
                    신규 프레임워크와 버전 호환이 안 되는 라이브러리가 특정되는
                    이슈 발생
                    <ul className="list-disc list-inside pl-4 text-sm leading-6">
                      <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                        <li>
                          커스텀 폭이 넓은 라이브러리로 교체 및 스프린트를
                          설정하여 코드 리팩토링
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <p className="underline py-1 font-bold">
                코드 작성 안정화 구축 및 배포 환경 개선
              </p>
              <div>
                <p className="mt-2">내용</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>
                    스터디를 기반으로 프론트엔드 파트 내부에서 코드 역량을
                    강화하기 위한 사이드 프로젝트 진행
                  </li>
                </ul>
                <p className="mt-2">개발</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>
                    내부에서 발생하는 오류를 최소화하기 위해 기본적인 렌더
                    테스트부터 e2e 테스트 코드를 작성
                  </li>
                  <li>
                    AWS 를 이용하여 배포하던 시스템에서 비용 단축 및 테스트
                    플로우 확립을 위하여 Vercel CI/CD 를 사용할 수 있도록 시스템
                    변환
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <p className="underline py-1 font-bold">
                업무에 필요한 기술 고민 및 아이데이션과 프론트엔드 파트 내 업무
                규약 확립, 코드 관리 도입
              </p>
              <div>
                <p className="mt-2">내용</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>코드 작성 방식 통일화를 위한 업무 규약 확립</li>
                </ul>
                <p className="mt-2">개발</p>
                <ul className="list-disc list-inside pl-4 text-sm leading-6">
                  <li>
                    모든 레포에 동일하게 사용될 수 있는 tsconfig rule 세팅과
                    패키지로 구성하여 관리하는 eslint config 개발
                  </li>
                  <li>
                    클라이언트에서 사용하는 통신의 에러 바운더리 관리 등을 확립
                  </li>
                  <li>
                    각각의 레포지토리에서 관리되던 코드들의 유지 보수와 여러
                    의존성 패키지들의 버저닝 관리를 용이하게 하기 위해 micro
                    frontend architecture 를 착안하여 boilerplate 개념의 템플릿
                    레포지토리를 도입
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex gap-24 items-center">
            <p className="text-lg font-bold">
              (주)멜호 <br />
              <span className="text-normal">(2021. 02 ~ 2022.02)</span>
            </p>
            <div>
              <p>개발팀, 웹 퍼블리셔</p>
              <div>
                <p className="text-normal py-2 text-sm">
                  자사 판매 사이트 UI 개발 및 유지 보수, 백오피스 웹 개발 전반에
                  참여하였습니다.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {MelhoStack.map((stack, idx) => (
                    <button key={idx} className="bg-sub px-2 rounded">
                      <span className="text-sm text-main">{stack}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                소매, 잡화 판매 쇼핑몰 웹 페이지 UI 개발
              </p>
            </div>
            <div>
              <p className="mt-2">내용</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  기존 Wix로 호스팅되던 페이지에서 자사 쇼핑몰 사이트 구축
                </li>
              </ul>
              <p className="mt-2">개발</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-6">
                <li>
                  기획 및 백엔드 협업으로 메뉴 구조와 화면 아이데이션 및
                  스토리보드 작성
                </li>
                <li>
                  쇼핑몰 사이트 전반에 걸쳐 화면 개발
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      PC, Tablet, Mobile 등 다양한 환경에서 유저가 접근할 수
                      있음을 고려하여 반응형으로 페이지들을 구성
                    </li>
                    <li>
                      css 구성 요소들을 작은 단위로 생성하고, 이를 class name
                      으로 재사용할 수 있도록 모듈화 도입{' '}
                    </li>
                  </ul>
                </li>
                <li>
                  슬라이드 배너, 드롭다운 유저 인터랙션 개발과 유저 친화적인
                  화면 구성
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      바닐라 자바스크립트와 css를 이용하여 배너, 메뉴 드롭다운,
                      이미지 resizer 등을 구현.
                    </li>
                    <li>
                      페이지 전역에 걸친 라디오 버튼을 생성하여 각각 한국어,
                      영어, 프랑스어 사이에 유동적인 전환이 일어날 수 있도록
                      다국어 지원 적용
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">리팩토링 및 트러블 슈팅</p>
              <div className="flex">
                <ul className="list-disc list-inside pl-4 text-sm leading-7">
                  <li>
                    형식 없이 산발적으로 일어나는 소통 발생
                    <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                      <li>
                        기존에 전무하던 Git 형상 관리와 스크럼 형식의 데일리
                        미팅 도입
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-sub my-3">
              <p className="text-normal py-0.5 pl-2 font-bold mb-2">
                상품, 배송 관련 백오피스 사이트 구축
              </p>
            </div>
            <div>
              <p className="mt-2">내용</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-7">
                <li>
                  잡화 소매 판매 상품 관리와 배송 등을 위한 어드민 사이트 유지
                  보수 및 개선
                </li>
              </ul>
              <p className="mt-2">개발</p>
              <ul className="list-disc list-inside pl-4 text-sm leading-7">
                <li>
                  axios 통신을 이용한 어드민 로그인 기능 유지 보수{' '}
                  <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                    <li>
                      일반 계정 생성 후 곧장 로그인이 되던 구조에서 어드민과
                      논어드민 사용자를 구분하기 위해 이메일 아이디 인풋 값을
                      판별하여 통과시키는 로그인 가드 구현
                    </li>
                  </ul>
                </li>
                <li>백엔드와 협업하여 데이터 구조와 클라이언트 뷰 확립</li>
              </ul>
              <p className="mt-2">리팩토링 및 트러블 슈팅</p>
              <div className="flex">
                <ul className="list-disc list-inside pl-4 text-sm leading-7">
                  <li>
                    jQuery 와 함께 구성한 css 애니메이션의 속도 저하가 관찰되는
                    이슈 발생
                    <ul className="pl-4 list-[square] list-inside text-normal leading-6">
                      <li>
                        바닐라 자바스크립트로 전반 교체 및 일부 페이지는 React
                        로 신규 개발하여 마이그레이션 진행
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-40">
        <p className="text-main text-3xl font-bold mb-5">Toy Project</p>
        <div className="flex gap-12">
          <div className="flex flex-col ">
            <div className="w-56">
              <p className="font-bold text-xl">HangBook</p>
              <div className="py-3 flex flex-wrap gap-1">
                {HangbookStack.map((stack, idx) => (
                  <button key={idx} className="bg-sub px-2 rounded">
                    <span className="text-sm text-main">{stack}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {HangbookLink.map((link) => (
                  <Link key={link.id} href={`${link.link}`}>
                    <p className="underline">{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <p className="underline py-1">지속적인 리팩토링</p>
              <ul className="list-disc list-inside pl-4 text-sm text-normal leading-6">
                <li>
                  웹 애플리케이션에 새 기술을 도입하거나, 코드 방식을 바꿔서
                  써보는 등의 리팩토링을 지속하였습니다.
                </li>
                <li>
                  기존 create-react-app 과 props 로만 관리하던 상태들을
                  create-next-app 및 전역 상태 관리 라이브러리를 사용하여
                  재구성하였습니다.{' '}
                </li>
                <li>
                  이 과정에서 순수 CRA 로는 해결하기 어려웠던 CORS 와 props
                  drilling 같은 문제들을 개선하였고, typescript 를 적용함에 따라
                  코드의 에러 빈도를 줄일 수 있었습니다.
                </li>
                <li>
                  새로운 라이브러리나 버전 업데이트가 있다면 이를 이용하여 코드
                  구조를 개선해나가고, 해당 프로젝트에 적용함으로써 실용성을
                  높일 수 있었습니다.{' '}
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <p className="underline py-1 ">
                Aladin 에서 제공하는 open source api 활용
              </p>
              <ul className="list-disc list-inside pl-4 text-sm text-normal leading-6">
                <li>
                  서점 알라딘에서 공식적으로 제공하는 api 를 활용하여 베스트
                  셀러 조회 및 책 검색 기능을 구현하였습니다.
                </li>
                <li>
                  베스트셀러의 경우에는 단순히 api 를 가지고 오는 것에서 그치지
                  않고 모달 창을 이용하여 상세 정보를 조회할 수 있도록
                  만들었습니다.
                </li>
                <li>
                  키워드를 쿼리로 넣고, input 에 일치하는 키워드가 입력되면
                  해당되는 책의 리스트를 불러올 수 있도록 제작하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-10">
          <div className="flex flex-col ">
            <div className="w-56">
              <p className="font-bold text-xl">Chat</p>
              <div className="py-3 flex flex-wrap gap-1">
                {ChatStack.map((stack, idx) => (
                  <button key={idx} className="bg-sub px-2 rounded">
                    <span className="text-sm text-main">{stack}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {ChatLink.map((link) => (
                  <Link key={link.id} href={`${link.link}`}>
                    <p className="underline">{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <p className="underline py-1">
                Next13 의 App dir 구조로 코드 구성 및 vercel 을 이용하여 배포
              </p>
              <ul className="list-disc list-inside pl-4 text-sm text-normal leading-6">
                <li>
                  Next 에서 사용되는 기술을 넓게 다뤄보고자 시작한 프로젝트로
                  App directory 구조를 채택하고, 공식 문서를 참고하여 새로 바뀐
                  router 등의 코드를 사용하였습니다.
                </li>
                <li>
                  사내에서 사용되던 배포 시스템인 vercel 을 조금 더 친숙하게
                  사용하기 위해 개인 프로젝트에 접목하여 환경 변수, secret key
                  등을 설정하여 이해도를 높였습니다.
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <p className="underline py-1">
                Next 의 내장 Api 인스턴스 외 다양한 기술을 사용하여 실시간 웹
                채팅 구현
              </p>
              <ul className="list-disc list-inside pl-4 text-sm text-normal leading-6">
                <li>
                  next-auth 를 사용하여 Provider 를 구성하고, 이를 이용하여 소셜
                  로그인을 구현하였습니다.
                </li>
                <li>
                  실시간 채팅을 위해 필요한 Api (가입, 유저, 대화 목록 등) 를
                  Next 내장 api 를 이용하여 개발하고, mongodb 와 prisma 를
                  활용하여 javascript 기반의 쿼리 언어를 통해 CRUD 처리, mongoDB
                  compass GUI를 사용하여 데이터에 손쉽게 접근하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
