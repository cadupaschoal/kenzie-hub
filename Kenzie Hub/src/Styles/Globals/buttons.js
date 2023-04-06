import { createGlobalStyle } from 'styled-components';

export const GlobalButtons = createGlobalStyle`
   button{
    display: inline-flex;
    justify-content: center;
    gap: 10px;
    }

    .button-primary{
        background-color: var(--color-primary);
        border: solid 1px var(--color-primary);
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        color: #FFFFFF;

        :hover{
            background-color: var(--color-primary-focus)
        }
    }

    .button-negative{
        background-color: var(--color-primary-negative);
        border: solid 1px var(--color-primary-negative);
        border-radius: 4px;
        font-size: 16px;        
        font-weight: 500;
        line-height: 26px;
        color: #FFFFFF;
    }

    .button-disabled{
        background-color: var(--color-grey-1);
        border: solid 1px var(--color-grey-1);
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        color: #FFFFFF;

        :hover{
            background-color: var(--color-grey-2)
        }
    }

    .button-grey{
        background-color: var(--color-grey-3);
        border: solid 1px var(--color-grey-3);
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: #FFFFFF;

        :hover{
            background-color: var(--color-grey-2)
        }
    }
    
`;
