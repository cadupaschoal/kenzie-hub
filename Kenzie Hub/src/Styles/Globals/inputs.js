import { createGlobalStyle } from 'styled-components';

export const GlobalInputs = createGlobalStyle`
  input{
    outline: none;
    border: 1px solid var(--color-grey-2);
    background-color: var(--color-grey-2);
    padding: 10px 0 10px 16px;
    ::placeholder{
      color: var(--color-grey-1);
    }

    :focus{
      border: var(--color-grey-0);
      ::placeholder{
        color: var(--color-grey-0);
      }
    }
  }


`;
