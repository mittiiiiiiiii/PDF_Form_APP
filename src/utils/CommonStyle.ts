import styled from 'styled-components';
import { Checkbox } from "@mui/material";

export const Checkboxs = styled(Checkbox)`
  height: 1px;
  width: 1px;
  transform: scale(0.5);
`

export const TextBox = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    position: absolute;
`;

export const SendButton = styled.button`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;