import styled, { css } from 'styled-components';

import { sharedValues } from 'utils/sharedValues';

interface Input {
  isError: boolean;
}

interface Label {
  isFocused: boolean;
}

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;
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

export const InputError = styled.p`
  font-size: 14px;
  color: ${sharedValues.colors.red};
  padding-top: 12px;
`;
