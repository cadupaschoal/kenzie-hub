import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  padding-bottom: 30px;

  .logout-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 17px 11px 0 13px;
    max-width: 800px;

    a {
      padding: 1.5px 16.24px;
    }
  }

  .border {
    width: 100%;
    margin-top: 24px;
    border-top: solid 1px var(--color-grey-3);
    border-bottom: solid 1px var(--color-grey-3);
    .welcome-container {
      width: 100%;
      padding: 35px 12px;

      h1 {
        font-size: 18px;
        margin-bottom: 10px;
      }

      p {
        color: var(--color-grey-1);
      }
    }
  }

  .add__tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 22px 0;
    padding: 0px 14px 0px 12px;
    width: 100%;
    max-width: 800px;

    button {
      width: 32px;
      height: 32px;
      font-size: 24px;
    }

    h2 {
      font-weight: 600;
    }
  }

  .techs__container {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    padding: 22px 8.5px;
    background-color: var(--color-grey-3);
    border-radius: 4px;

    .none {
      align-self: center;
    }

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }

    .tech__card {
      border-radius: 4px;
      display: flex;
      height: 50px;
      padding: 0 14px 0 12px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      background-color: var(--color-grey-4);
      cursor: pointer;
      font-size: 14px;

      :hover {
        background-color: var(--color-grey-2);
        transition: 0.3s;
      }

      h2 {
        color: var(--color-grey-0);
      }

      p {
        color: var(--color-grey-1);
      }
    }
  }

  @media (min-width: 800px) {
    .border {
      .welcome-container {
        width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .techs__container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 800px;
      padding: 23px 26px 24px 22px;

      .none {
        font-size: 16px;
      }
    }
  }
`;
