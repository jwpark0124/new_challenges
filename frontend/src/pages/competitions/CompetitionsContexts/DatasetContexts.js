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
      <div className="mb-12 m-auto mt-20">
        <div className="mb-12 text-2xl">곧 공개됩니다.</div>
      </div>
    </>
  );
}

export default DatasetContexts;
