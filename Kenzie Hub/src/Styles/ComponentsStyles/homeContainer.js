import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);

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

  .without-content {
    display: none;
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

    .without-content {
      display: flex;
      flex-direction: column;
      gap: 23px;
      width: 800px;
      padding: 0 12px;
      margin-top: 37px;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
