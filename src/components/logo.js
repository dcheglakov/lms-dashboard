import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Logo = styled.button`
  ${tw`text-gray-800 px-4 py-2 font-medium font-mono bg-teal-400 inline-block rounded-full hocus:text-teal-300 hocus:bg-gray-800`}
`;

const Animation = styled.span`
  @keyframes blink {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate; 
`;


function SiteLogo() {
  return (
    <Logo as="a" href="/" title="SkillCrucial_">learnSmth<Animation>_</Animation></Logo>
  );
}

export default SiteLogo;