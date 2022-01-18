import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

interface SubmitWrapperProps {
  isSubmitting: boolean;
}

export const Wrapper = styled(motion.div)`
  backface-visibility: hidden;
`;

export const Form = styled.form``;

export const SubmitWrapper = styled.button<SubmitWrapperProps>`
  margin-top: 35px;
  cursor: pointer;

  ${props =>
    props.isSubmitting &&
    css`
      cursor: not-allowed;
    `}
`;

export const Center = styled.span`
  display: flex;
  justify-content: center;
`;

export const ApiError = styled.p`
  background-color: ${sharedValues.colors.red};
  font-size: 14px;
  padding: 18px 20px;
  border-radius: 6px;
  margin-bottom: 40px;
  color: ${sharedValues.colors.white};
`;
