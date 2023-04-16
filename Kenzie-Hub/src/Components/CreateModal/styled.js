import styled from 'styled-components';

export const StyledCreateModal = styled.div.attrs({
  role: 'dialog',
})`
  position: absolute;
  font-family: 'Inter', sans-serif;
  top: 150px;
  z-index: 2;
  width: 95%;
  max-width: 370px;
  height: fit-content;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: var(--color-grey-3);
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);

  form {
    padding: 20px 14px 25px 18px;

    input,
    select {
      width: 100%;
      margin: 18px 0 16px 0;
      border-radius: 4px;
    }

    select {
      cursor: pointer;
    }

    button {
      width: 100%;
      height: 38.5px;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      color: var(--color-negative);
      font-weight: 600;
      margin-bottom: 10px;
      align-self: flex-start;
    }
  }

  .register {
    /* border: solid 2px red; */

    display: flex;
    height: 40px;
    background-color: var(--color-grey-2);
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    h2 {
      font-size: 12px;
    }

    button {
      width: 9px;
      height: 20px;
      border: none;
      outline: none;
      background-color: transparent;
      font-family: 'Nunito', sans-serif;
      font-size: 13px;
      color: var(--color-grey-1);
    }
  }

  @media (min-width: 800px) {
    form {
      input,
      select {
        margin: 22px 0px 26px 0;
        height: 48px;
        font-size: 16px;
      }

      button {
        height: 48px;
        font-size: 16px;
      }
    }
  }
`;
