import { createGlobalStyle } from 'styled-components';

export const GlobalTypography = createGlobalStyle`
  
  
  .title-1,
  .title-2,
  .title-3{
    font-weight: 700;
    font-size: 16px;
  }

  .headline{
    font-weight: 400;
    font-size: 12px;
  }

  .headline__bold{
    font-weight: 700;
    font-size: 12px;
  }

  .headline__italic{
    font-weight: 400;
    font-size: 12px;
    font-style: italic;
  }
  
`;
