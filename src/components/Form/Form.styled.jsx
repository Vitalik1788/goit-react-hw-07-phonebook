import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const NameFormLabel = styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`

export const FormNameInput = styled.input`
  display: block;
  padding-left: 10px;
  max-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
  border-radius: 15px;
  border-color: blue;
`;

export const NumberFormLabel =  styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`
export const FormNumberInput = styled.input`
  display: block;
  padding-left: 10px;
  max-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
  border-radius: 15px;
  border-color: blue;
`;

export const FormSubmitBtn = styled.button`
  display: block;
  padding: 10px 15px;
  width: max-content;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 16px;
`