import styled from '@emotion/styled';

export const Form = styled.form`
    width: 350px;
    margin-right: auto;
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #d4d4d4;  
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    color: #333232;
`;

export const Input = styled.input`
    padding: 6px 10px;
    padding-left: 30px;
    border: 1px solid rgba(33,33,33,0.2);
    box-sizing: border-box;
    border-radius: 4px;
    display: inline-block;

    cursor: pointer;

  &:focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button`
    border: transparent;
    cursor: pointer;
    background: #2196f3;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.875em;
    color: #ffffff;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  `;