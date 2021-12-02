import React from 'react';
import styled from 'styled-components';
import kqcimg from '../../../assets/koreanQnAChallenges.png';
import datastructure from '../../../../src/assets/datastructure.png';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function DatasetContexts({ DatasetContexts }) {
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  const lt = '<';
  const gt = '>';
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 text-base md:text-xl lg:text-2xl font-bold">
            데이터 구조
          </div>
          <img
            className="w-4/5 md:w-1/2 justify-center ml-12"
            src={datastructure}
            alt=""
          />

          <StyledUl className="mb-2">
            <Styledli className="list-inside list-disc">
              dataset 폴더 다운로드:
              <p>
                <a
                  className="font-bold	text-blue-600 underline"
                  href="https://drive.google.com/file/d/1_zsNhwaUz4vc_PDF00EmQX2PkgAJWR1g/view?usp=sharing 
                "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drive.google.com/file/d/1_zsNhwaUz4vc_PDF00EmQX2PkgAJWR1g/view?usp=sharing
                </a>
              </p>
            </Styledli>
            <Styledli className="list-inside list-disc">
              model_cifar.pt 및 model_cifar_resnet152.pt 다운로드:
              <p>
                <a
                  className="font-bold	text-blue-600 underline"
                  href="https://drive.google.com/file/d/1_y2q8VWSeIplgkc4jrTCO2XX210ZridV/view?usp=sharing  
                "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drive.google.com/file/d/1_y2q8VWSeIplgkc4jrTCO2XX210ZridV/view?usp=sharing
                </a>
              </p>
            </Styledli>
          </StyledUl>
          <hr />
          <div className="mt-6  text-base md:text-xl lg:text-2xl font-bold mb-4">
            데이터셋 설명
          </div>
          <StyledUl className="mb-4">
            <Styledli className="list-inside list-disc">
              {' '}
              각각의 이미지는 5개 중 하나의 class로 분류될 수 있음
            </Styledli>
            <Styledli className="list-inside list-disc">
              각 분류는 아래와 같음
            </Styledli>

            <Styledli className="list-inside list-disc">데이터 예시</Styledli>
            <pre>
              {`{
  "0" : "느타리_세균갈색무늬병",
  "1" : "느타리_푸른곰팡이병",
  "2" : "느타리_세균성검은썩음병",
  "3" : "팽이_푸른곰팡이병",
  "4" : "팽이_흰곰팡이병"
}
`}
            </pre>
          </StyledUl>

          <hr />
          <ContextBottom />
        </div>
      </div>
    </>
  );
}

export default DatasetContexts;
