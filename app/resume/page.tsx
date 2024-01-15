'use client';

import * as util from '@/app/util/index';
import Link from 'next/link';
import { Github } from '../icon/github';
import { Lightbulb } from '../icon/ligbtbulb';
import { LinkedIn } from '../icon/linkedIn';
import { Pen } from '../icon/pen';
import { MelhoProject, MelhoStack, OnuiiProject, OnuiiStack } from './list';

const Resume = () => {
  const openPortfolio = () => {
    window.open('https://vivi-page.vercel.app/portfolio', '_blank');
  };

  return (
    <div className="w-full max-w-4xl border-white mx-auto my-10">
      <p className="text-4xl font-bold mt-3 mb-3">Gibbeum Yoon</p>
      <p className="mb-3">Web Frontend Developer</p>

      <div className="mt-10">
        <p className=" text-main font-bold mb-3">
          끊임없는 호기심, 역동적인 소통, 무결한 신뢰를 추구하는 엔지니어입니다.
        </p>
        <p className="text-normal text-sm leading-6">
          새로운 기술과 트렌드를 지속적으로 탐색합니다. 호기심은 지식과 경험을
          쌓는 데 큰 역할을 한다고 믿습니다. 더불어 코드 작성에 앞선 로직 설계와
          효율적인 솔루션을 찾는 것을 즐기며, 이를 통해 더 나은 사용자 경험을
          제공하고자 노력합니다.
        </p>
        <p className="text-normal text-sm leading-6 mt-2">
          나의 지식을 공유하고 동료들과 소통하는 것을 중요하게 생각합니다.
          모르는 것을 함께 고민하고 해결책을 찾아가는 과정에서 팀원들과의
          긍정적인 소통이 협업의 핵심이라고 믿습니다. 이를 통해 더 나은 결과물을
          창출합니다.
        </p>
        <p className="text-normal text-sm leading-6 mt-2">
          동료들이 신뢰하는 개발자가 되는 것을 큰 가치로 여깁니다. 열정과
          책임감을 가지고 업무에 참여하며, 열린 마음으로 피드백을 수용하여
          성장에 밑거름으로 삼고자 합니다. 신뢰를 기반으로 한 팀 내 협력을 통해
          더 나은 프로젝트 결과물을 만들어내기를 기대합니다.
        </p>
      </div>

      <div className="mt-14">
        <p className="text-main text-2xl font-bold mb-5">Contact me</p>
        <div className="flex justify-between">
          <div onClick={util.SendEmail} className="cursor-pointer">
            <p className="mb-1">
              Email{' '}
              <span className="font-normal text-normal pl-3">
                givvemeee@gmail.com
              </span>
            </p>
          </div>
          <div onClick={util.PhoneCall} className="cursor-pointer">
            <p className="mb-1">
              Phone{' '}
              <span className="font-normal text-normal pl-3">
                010-7348-0714
              </span>
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-5 grid-cols-4">
          <div
            className="bg-sub py-5 px-4 rounded-sm cursor-pointer font-bold flex items-center gap-4"
            onClick={openPortfolio}
          >
            <Lightbulb />
            <span className="text-main text-sm">Portfolio</span>
          </div>
          <div
            className="bg-grey py-5 px-4 rounded-sm cursor-pointer font-bold flex items-center gap-4 text-main"
            onClick={util.Github}
          >
            <Github />
            <span className="text-sm">Github</span>
          </div>
          <div
            className="bg-grey py-5 px-4 rounded-sm cursor-pointer font-bold flex items-center gap-4 text-main"
            onClick={util.Medium}
          >
            <Pen />
            <span className="text-sm">Medium</span>
          </div>
          <div
            className="bg-grey py-5 px-4 rounded-sm cursor-pointer font-bold flex items-center gap-4 text-main"
            onClick={util.LinkendIn}
          >
            <LinkedIn />
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="bg-grey my-16 h-px" />
      <div className="mt-14">
        <p className="text-main text-2xl font-bold mb-5">Work Experience</p>
        <div>
          <div className="grid grid-flow-col gap-2">
            <div className="w-60">
              <p className="text-xl font-bold">(주)오누이랩</p>
              <p className="text-normal font-bold">2022. 03 - 2023. 11</p>
              <p className="text-normal leading-5 text-sm pr-6 py-1">
                <Link href="https://www.seoltab.com" className="underline">
                  설탭
                </Link>{' '}
                웹 내 신규 상품 런칭 등 유저와 밀접한 페이지를 개발하였습니다.{' '}
                <br />
                프론트엔드 파트 내 생산성 향상을 위해 패키지, 코드 규약을
                개선하였습니다. <br /> 이후에는 내부 운영을 위한 어드민 페이지
                개발을 단독 진행하였습니다.{' '}
              </p>
              <div className="mt-3">
                <p className="text-main font-bold mb-2">Tech Stack</p>
                <div className="flex gap-2 flex-wrap">
                  {OnuiiStack.map((stack, idx) => (
                    <button key={idx} className="bg-sub px-2 rounded">
                      <span className="text-sm text-main">{stack}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-main font-bold mb-2">
                개발팀, 프론트엔드 개발자
              </p>
              <div className="mt-3">
                <p className="text-main font-bold mb-2">Project</p>
                <ul className="list-disc list-inside text-sm">
                  {OnuiiProject.map((project) => (
                    <li key={project.id}>
                      <p className="inline leading-7 font-bold">
                        {project.name}
                        <br />
                      </p>
                      {project.desc.map((item) => (
                        <p
                          className="text-normal text-sm px-4 py-1"
                          key={item.id}
                        >
                          {item.text}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-flow-col gap-2">
            <div className="w-60">
              <p className="text-xl font-bold">(주)멜호</p>
              <p className="text-normal font-bold">2021. 02 - 2022. 02</p>
              <p className="text-normal leading-5 text-sm pr-6 py-1">
                Wix 기반으로 운영되던 사내 상품몰을 자사 사이트로 새롭게
                이전하였습니다. <br />
                효율적인 소통을 위해 스크럼 문화를 정착시키고, 웹 접근성을
                고려하여 반응형으로 UI 를 개발하였습니다. <br />
                이후 런칭 결제 및 배송 백오피스 사이트를 신설하여 UI 구축,
                데이터 페인팅에 기여하였습니다.
              </p>
              <div className="mt-3">
                <p className="text-main mt-3 font-bold mb-2">Tech Stack</p>
                <div className="flex gap-2 flex-wrap">
                  {MelhoStack.map((stack, idx) => (
                    <button key={idx} className="bg-sub px-2 rounded">
                      <span className="text-sm text-main">{stack}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="min-w-full">
              <p className="text-main font-bold mb-2">개발팀, 웹 퍼블리셔</p>
              <div className="mt-3">
                <p className="text-main font-bold mb-2">Project</p>
                <ul className="list-disc list-inside text-sm">
                  {MelhoProject.map((project) => (
                    <li key={project.id}>
                      <p className="inline leading-7 font-bold">
                        {project.name}
                        <br />
                      </p>
                      {project.desc.map((item) => (
                        <p
                          className="text-normal text-sm px-4 py-1"
                          key={item.id}
                        >
                          {item.text}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey my-16 h-px" />
      <div className="mt-14">
        <p className="text-main text-2xl font-bold mb-5">Skills</p>
        <div className="mb-7">
          <div>
            <div className="bg-sub">
              <p className="py-0.5 pl-2 font-bold mb-2 text-normal">
                Code Philosophy
              </p>
            </div>
            <span className="text-normal text-sm">
              항상 정답인 선지가 있을 거라 생각하지 않습니다. 최적의 코드는
              종합적인 상황을 고려하여 결정되며, 항상 코드를 분석하고 탐구하여
              적절한 판단을 내리려 노력합니다. 협업을 위한 직관적 네이밍과
              깔끔한 코드를 지향하며, 디테일에서부터 실패할 수 있는 시나리오까지
              항상 고려하여 에러의 가능성을 최소화하고자 합니다.
            </span>
          </div>
        </div>
        <div className="mb-7">
          <div>
            <div className="bg-sub">
              <p className="py-0.5 pl-2 font-bold mb-2 text-normal">
                React & Next.js Mastery
              </p>
            </div>
            <span className="text-normal text-sm">
              React와 Next.js는 자주 사용하는 기술이며, 문제에 부딪히면 공식
              문서를 선행으로 참고합니다. 최선의 코드를 먼저 구현하고 이후에는
              고민하며 최적화 작업을 즐기고 있습니다. 코드를 기능, 상태, 타입
              등으로 모듈화하여 재사용성을 극대화하며, 트렌드를 주시적으로
              쫓아가고 새로운 기능들을 적용해보는 것을 즐깁니다.
            </span>
          </div>
        </div>
        <div className="mb-7">
          <div>
            <div className="bg-sub">
              <p className="py-0.5 pl-2 font-bold mb-2 text-normal">
                Typescript Proficiency
              </p>
            </div>
            <span className="text-normal text-sm">
              Javascript 경험이 풍부하며, Typescript 생태계에 적응하기 위해
              노력하고 있습니다. 타입 에러를 최소화하기 위해 type narrowing,
              type guard를 활용하며, any-script를 피하고자 합니다.
            </span>
          </div>
        </div>
        <div className="mb-7">
          <div>
            <div className="bg-sub">
              <p className="py-0.5 pl-2 font-bold mb-2 text-normal">
                Effective Communication
              </p>
            </div>
            <span className="text-normal text-sm">
              회의 이외에도 동료와 코드에 관련된 대화를 나누는 것을 좋아합니다.
              내가 작성한 로직을 다른 사람이라면 어떻게 작성하는지 항상 궁금해
              하고, 이로 인사이트를 얻어 코드를 유지하거나 보완하는 데에
              할애하는 시간을 소중히 여깁니다.
            </span>
            <br />
            <span className="text-normal text-sm">
              모든 대화는 각자의 논리와 경험을 공유하는 기회라고 생각하며, 적은
              커뮤니케이션보다는 많은 커뮤니케이션이 항상 도움이 된다고
              믿습니다.
            </span>
          </div>
        </div>
        <div className="mb-7">
          <div>
            <div className="bg-sub">
              <p className="py-0.5 pl-2 font-bold mb-2 text-normal">
                Web Expertise
              </p>
            </div>
            <span className="text-normal text-sm">
              유저 입장에서 보여지는 것, 판단할 수 있는 것에 대한 생각을
              끊임없이 하며 최적의 인터랙션에 대해 고민합니다. PC와 모바일 간의
              차이를 이해하고, 다양한 브라우저에서의 호환성을 고려하여 코드를
              작성하며, 프로덕션 레벨의 사이트를 지속적으로 확인하고 개선점을
              찾아내기 위해 노력합니다.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-grey my-16 h-px" />
      <div className="mt-16">
        <p className="text-main text-2xl font-bold mb-5">Education</p>
        <div>
          <div className="grid grid-cols-2 mb-5">
            <div className="">
              <p className="text-normal">2022.03 - Now</p>
            </div>
            <div>
              <p className="mb-2 font-bold">
                방송통신대학교{' '}
                <span className="font-normal"> 컴퓨터과학과</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <p className="text-normal">2014.03 - 2020.02</p>
            </div>
            <div className="w-full">
              <p className="font-bold mb-2">
                동덕여자대학교 <span className="font-normal">독일어과</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
