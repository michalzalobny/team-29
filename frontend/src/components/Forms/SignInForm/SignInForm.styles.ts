import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

interface Input {
  isError: boolean;
}

interface Label {
  isFocused: boolean;
}

export const Wrapper = styled(motion.div)``;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const Input = styled.input<Input>`
  width: 100%;
  font-size: 16px;
  border-radius: 50px;
  padding: 14px 25px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);

  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 12px ${sharedValues.colors.brown};
  }

  ${(props) =>
    props.isError &&
    css`
      box-shadow: 0 0 12px ${sharedValues.colors.red};

      &:focus {
        box-shadow: 0 0 12px ${sharedValues.colors.red};
      }
    `}
`;

export const Label = styled.label<Label>`
  user-select: none;
  pointer-events: none;
  font-size: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1);
  left: 25px;
  transform-origin: left;

  transition: transform 0.3s;

  ${(props) =>
    props.isFocused &&
    css`
      transform: translateY(-270%) scale(0.85);
    `}
`;

export const SubmitWrapper = styled.button`
  cursor: pointer;
  margin-top: 35px;
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${sharedValues.colors.red};
  padding-top: 12px;
`;

export const Center = styled.span`
  display: flex;
  justify-content: center;
`;

export const InputsContainer = styled.div`
  padding: 35px 0;
  width: 80%;
  margin: 0 auto;
`;

export const ApiError = styled.p`
  background-color: ${sharedValues.colors.red};
  font-size: 14px;
  padding: 18px 20px;
  border-radius: 6px;
  margin-bottom: 40px;
  color: ${sharedValues.colors.white};
`;
