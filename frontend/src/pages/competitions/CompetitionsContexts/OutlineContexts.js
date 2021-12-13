import React, { useEffect } from 'react';
// import useAxios from 'axios-hooks';
// import Testlist from './testlist';
import styled from 'styled-components';
import submit from '../../../../src/assets/해커톤_참가신청서.hwp';
import aiposter from '../../../../src/assets/AI_challenges_poster.jpg';
import submitJsonTest from '../../../../src/assets/pred.json.zip';

import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function OutlineContexts({ OutlineContexts }) {
  // const { title, explanation } = OutlineContexts;
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;

  return (
    <>
      {/* {temp.data} */}
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 mx-4 text-base md:text-xl lg:text-2xl font-bold">
            {' '}
            버섯 해커톤 웹페이지 공지사항(2021년 12월 13일)
          </div>
          <div className="mt-2 mx-4 text-base">
            <p> 1. 참가접수기간 및 행사기간 연장 (~12월 20일까지)</p>
            <p>
              {' '}
              2. 데이터셋 오기재 수정사항: ("2" : "느타리_세균성검은썩음병")은
              "팽이_세균성검은썩음병" 입니다
            </p>

            <p>
              3. 평가데이터셋 수정 후 업로드: 기존 파일에 오류가 있었습니다.
              아래
              <span className="ml-2 underline font-semibold">제출방법</span>의
              "첨부파일"을 새로 다운로드 받아서 제출해주세요{' '}
            </p>
          </div>
          <div className="mt-6 mx-4 text-base md:text-xl lg:text-2xl font-bold">
            2021 스마트팜 통합 데이터(버섯-병충해 이미지 분류 태스크) 인공지능
            <p className="font-normal">
              학습용 데이터 구축사업, 스마트팜 통합 데이터(버섯) 과제
            </p>
            {/* {title} */}
          </div>
          <div className="mt-2 ml-4 text-base opacity-60">
            {/* {explanation} */}
          </div>
          <img className="mt-6 mx-auto w-3/6 " src={aiposter} alt="" />
          <div className="mt-8 mx-4">
            <p className="mb-2 text-lg font-bold">대회 주제 및 목표</p>{' '}
            <StyledUl className="pb-3">
              <Styledli className="list-inside mt-4 list-disc">
                {' '}
                주제 : 2021 스마트팜 통합데이터(버섯): 버섯-병충해 이미지 분류
                태스크
              </Styledli>
              <Styledli className="list-inside list-disc">
                목표 : 주어진 이미지(버섯)로부터 버섯의 종류(느타리버섯,
                팽이버섯)를 분류하고, 각 버섯의 병충해를 예측하는 문제입니다.
              </Styledli>
              <p className="ml-4"> - 느타리: 세균갈색무늬병/푸른곰팡이병</p>
              <p className="ml-4">
                {' '}
                - 팽이: 세균성검은썩음병/푸른곰팡이병/흰곰팡이병
              </p>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">제출 방법</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                <a className="text-blue-700 underline" href={submitJsonTest}>
                  첨부파일
                </a>
                의 형식을 참고하여 리더보드에 제출
              </Styledli>

              <Styledli className="list-inside list-disc">
                파일명은 (팀이름).json 의 형식으로 제출
              </Styledli>

              <p className="ml-4"> - 예: teddysum.json</p>

              <Styledli className="list-inside list-disc">데이터 예시</Styledli>
              <pre>
                {`{
    "10_19_20211119160500116.jpg": 3,
    "10_17_20211123094840217.jpg": 3,
    "10_15_20211119093847212.jpg": 2,
    "10_14_20211119093626172.jpg": 3,
    "10_18_20211119094535128.jpg": 1,
    "10_16_20211123094616099.jpg": 4,
    "10_13_20211122043639108.jpg": 3,
    "10_16_20211119094105200.jpg": 0,
    "10_14_20211123044650224.jpg": 0,
    "10_19_20211119160500193.jpg": 3,
    "10_16_20211123094616022.jpg": 0,
    "10_14_20211122043900237.jpg": 2,
...
}`}
              </pre>
              <Styledli className="list-inside list-disc">
                각 이미지파일명을 key로, 그리고 각 문제에 대해 예측된
                정답(integer)을 value로 갖는 JSON 파일을 제출함
              </Styledli>
              <Styledli className="list-inside list-disc mb-4">
                예) 이미지파일이 10_19_20211119160500116.jpg 인 경우, label
                3으로 예측하였음 (느타리_세균갈색무늬병)
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">제출시 유의사항</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                참가 신청서에 기재한 “팀 이름”을 파일명으로 하여 제출하여야
                리더보드에 반영됨
              </Styledli>
              <Styledli className="list-inside list-disc mb-4">
                예를들어, 참가팀 이름이 “참가팀” 이라면, 제출 파일명은
                “참가팀.json”으로 제출함 주어진 이미지에 대해 5개의 label 중
                하나를 선택하는 문제로, 평가지표에는 F1 score (macro)가
                활용됩니다.
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">주최/주관/운영</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                주최 : 과학기술정보통신부, 한국지능정보사회진흥원
              </Styledli>
              <Styledli className="list-inside list-disc">
                주관 : (주)유클리드소프트, (주)MHSOFT, 농촌진흥청
                국립원예특작과학원
              </Styledli>
              <Styledli className="list-inside list-disc mb-4">
                운영 : 테디썸
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">참가 대상</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                데이터 및 인공지능 개발에 관심이 있는 모든 개인 및 팀
              </Styledli>
              <Styledli className="list-inside list-disc">
                팀으로 참가하는 경우 4인 이하로 구성
              </Styledli>
              <Styledli className="list-inside list-disc mb-4">
                14세 이상 참가 가능
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 pb-3 text-lg font-bold">
              기간 및 일정 (UTC+ 9(한국) 기준)
            </p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                참가신청(대회기간 중 상시접수) : 공고 후 ~ 2021.12.15
              </Styledli>
              <Styledli className="list-inside list-disc">
                대회기간 : 2021.11.30 ~ 2021.12.15
              </Styledli>
              <Styledli className="list-inside list-disc mb-4">
                ※ 대회의 원활한 진행을 위해 상세일정은 변경될 수 있음.
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">상금 및 시상규모</p>
            <StyledUl>
              <Styledli className="list-inside list-disc mb-4">
                1위(최우수상) : 상금 300만원 (1팀){' '}
              </Styledli>
            </StyledUl>
            <hr />{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc mt-3 ">
                <a
                  className="text-blue-900"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScE5qIEeZY4wz92mYhtltx8gXO0xA_5-r0tLPZRFi5071twKw/viewform?vc=0&c=0&w=1&flr=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  접수 링크
                </a>
              </Styledli>

              <Styledli className="list-inside list-disc">
                <a
                  className="text-blue-900"
                  href=" https://.labelon.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  상세 대회 정보
                </a>
              </Styledli>
              <Styledli className="list-inside list-disc">
                yisoo.yoon@teddysum.ai
              </Styledli>
            </StyledUl>
            <ContextBottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default OutlineContexts;
