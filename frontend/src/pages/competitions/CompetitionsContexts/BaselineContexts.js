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
      <div className="mb-12 m-auto mt-20">
        <div className="mb-12 text-2xl">곧 공개됩니다.</div>
      </div>
    </>
  );
}

export default BaselineContexts;
