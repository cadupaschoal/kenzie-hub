import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);

  .form__box {
    background-color: var(--color-grey-3);
    height: fit-content;
    width: 95%;
    max-width: 370px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 34px 0px 23px 0;
    }

    .toRegister-box {
      width: 100%;
      padding: 0 18px;

      .headline {
        color: var(--color-grey-1);
        margin: 34px 0 22px 0;
        text-align: center;
        font-weight: 600;
      }

      .button-disabled {
        width: 100%;
        height: 38.5px;
        margin-bottom: 34px;
        padding: 10px 0;
      }
    }
  }

  form {
    width: 100%;
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input__box {
      width: 100%;

      input {
        width: 100%;
        height: 48px;
        margin: 17px 0 21px 0;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 400;
        ::placeholder {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    .password-input {
      position: relative;
      margin: 17px 0 21px 0;
      outline: none;
      border: 1px solid var(--color-grey-2);
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);

      :focus-within {
        border: 1px solid var(--color-grey-0);
        border-radius: 3px;
        ::placeholder {
          color: var(--color-grey-0);
        }
      }

      button {
        position: absolute;
        right: 18px;
        top: 7px;
        background-color: transparent;
        border: none;
        width: fit-content;
      }

      input {
        margin: 0;
        width: 95%;
        ::placeholder {
          color: var(--color-grey-1);
        }
        :focus {
          border: none;
        }
      }
    }

    button {
      width: 100%;
      height: 38.5px;
      padding: 10px 0;
    }
  }

  figure {
    margin: 80px 0 20px 0;
  }

  @media (min-width: 900px) {
    justify-content: center;

    figure {
      margin: 0 0 35px 0;
    }
    .form__box {
      h1 {
        margin: 42px 0px 28px 0;
      }
      .toRegister-box {
        .button-disabled {
          margin-bottom: 42px;
        }
      }
    }

    form {
      .password-input {
        margin: 22px 0 24px 0;
      }
    }
  }
`;
