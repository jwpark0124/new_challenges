import React from 'react';
import styled from 'styled-components';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function BaselineContexts({ BaselineContexts }) {
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  const lt = '<';
  const gt = '>';
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 text-base md:text-xl lg:text-2xl font-bold pb-3">
            베이스라인
          </div>
          <StyledUl className="mb-2">
            <Styledli className="list-inside  mb-1">
              아래의 링크를 클릭하면 베이스라인 코드의 구글드라이브 주소로
              연결됩니다.
              <Styledli className="list-inside list-disc mb-1">
                <a
                  className="underline text-blue-500 "
                  href="https://colab.research.google.com/drive/1AmDiMOZkfGVOckb7pZs40PVqQTHWAw_C?usp=sharing
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  링크
                </a>
              </Styledli>
            </Styledli>
          </StyledUl>
        </div>
        <hr />
        <ContextBottom />
      </div>
    </>
  );
}

export default BaselineContexts;
