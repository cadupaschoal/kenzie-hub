import { createGlobalStyle } from 'styled-components';

export const GlobalInputs = createGlobalStyle`
  input, select{
    outline: none;
    border: 1px solid var(--color-grey-2);
    background-color: var(--color-grey-2);
    padding: 10px 0 10px 16px;
    color: var(--color-grey-0);
    ::placeholder{
      color: var(--color-grey-1);
    }

    :focus{
      border:1px solid var(--color-grey-0);
      border-radius: 3px;
      ::placeholder{
        color: var(--color-grey-0);
      }
    }
  }

    input:-webkit-autofill{
    -webkit-box-shadow: 0 0 0 1000px var(--color-grey-2) inset !important;
    -webkit-text-fill-color:  var(--color-grey-0)  !important;
  }


`;
