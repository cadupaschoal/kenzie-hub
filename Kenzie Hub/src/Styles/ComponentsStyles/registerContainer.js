import styled from 'styled-components';

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  overflow-y: auto;

  .logout-box {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 48px 0 40px 0;
    max-width: 370px;

    .button-grey {
      height: 40px;
      padding: 4.5px 26px;
    }
  }

  .form__box {
    width: 95%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-3);
    border-radius: 3px;
    padding: 0 14px 0 18px;
    max-width: 370px;
    margin-bottom: 45px;

    .title-1 {
      margin-top: 33px;
    }

    .headline {
      color: var(--color-grey-1);
      margin: 18px 0 23px 0;
      font-weight: 600;
    }

    form {
      width: 100%;

      button {
        width: 100%;
        padding: 10px 0;
        margin-bottom: 28px;
      }
      input {
        width: 100%;
        height: 48px;
        border-radius: 3px;
        margin: 18px 0 21px 0;
        font-size: 16px;
        font-weight: 400;
        ::placeholder {
          font-size: 16px;
          font-weight: 400;
        }
      }

      select {
        width: 100%;
        height: 48px;
        border-radius: 3px;
        margin: 18px 0 21px 0;
        color: var(--color-grey-1);
        font-size: 16px;
        font-weight: 400;
        text-justify: center;
        :focus {
          color: var(--color-grey-0);
        }
      }

      p {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-negative);
        font-weight: 600;
        margin-bottom: 10px;
      }

      .password-input {
        position: relative;
        margin: 22px 0 24px 0;
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
    }
  }

  @media (min-width: 900px) {
    justify-content: flex-start;

    .logout-box {
      margin: 58px 0 48.5px 0;
    }

    .form__box {
      margin-bottom: 90px;
      .title-1 {
        margin-top: 42px;
      }

      .headline {
        margin: 22px 0 28.5px 0;
      }

      form {
        input {
          margin: 22px 0 27px 0;
        }
      }
    }
  }
`;
