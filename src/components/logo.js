import React from "react";
import styled from "@emotion/styled";
import { Cube } from "emotion-icons/ion-ios";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`flex-grow-0`}
`;

const Logo = styled.button`
  ${tw`text-teal-300 font-mono inline-block hocus:text-teal-500`}
  &:after {
    content: "_";
    animation-duration: 1s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
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
`;

function SiteLogo() {
  return (
    <LogoContainer>
      <Logo as="a" href="/" title="learnSmthg">
        <Cube size={24} />
        lrnSmthng
      </Logo>
    </LogoContainer>
  );
}

export default SiteLogo;
