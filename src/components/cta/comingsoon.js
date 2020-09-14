import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Footer from "components/footers/footers.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../headers/light.js";

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
    `,
  ];

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
export default ({
  formAction = "https://www.flexyform.com/f/f782f80218d6a07565f2b0e4e2d18bb35d201010",
  formMethod = "post",
  submitButtonText = "Know Status",
}) => {
  return (
    <>
      <AnimationRevealPage>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Developers are fetching<span tw="text-primary-500"> Data.</span>
            </Heading>
            <Paragraph>
              Developing a good work ethic is key. Apply yourself at whatever you do, whether you're a janitor or taking your first summer job because that work ethic will be reflected in everything you do in life.
            </Paragraph>
            <Form action={formAction} method={formMethod}>
            <Input type="email" name="email" placeholder="Your Email Address" />
              <SubmitButton type="submit" css={highlightGradientsCss}>{submitButtonText}</SubmitButton>
            </Form>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <Footer />
      </Container>
      </AnimationRevealPage>
    </>
  );
};
