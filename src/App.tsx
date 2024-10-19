'use client';

import Form_Image from '../public/PlanOfStart-up_page-0001.jpg'
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Checkboxs, TextBox,SendButton } from './utils/CommonStyle';

function App() {
  const [text, setText]=useState<string>('');

  const handleSend = async ()=>{
    try {
      const res = await axios.get<{response: string}>('http://localhost:8080/',{
        params: { question: text },
      });
      setText(res.data.response);
      console.log('API Response:', res.data.response);
    } catch (error){
      console.error('Error calling API:', error);
    }
  };

  return (
      <BackgroundContainer>
        <MotiveTextBox placeholder="創業の動機を箇条書きで入力" value={text} onChange={(e) => setText(e.target.value)} />
        <MotiveSendButton onClick={handleSend}>送信</MotiveSendButton>
        <HistoryTextBox placeholder="経営者の略歴を入力"></HistoryTextBox>
        <Checkbox_1 />;
      </BackgroundContainer>
  )
}

export default App

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Form_Image});
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat
`;

const MotiveTextBox = styled(TextBox)`
  height: 53px;
  width: 550px;
  position: absolute;
  top: 105px;
  left: 250px;
`;

const MotiveSendButton = styled(SendButton)`
  position: absolute;
  top: 115px;
  left: 805px;
`;

const HistoryTextBox = styled(TextBox)`
  height: 85px;
  width: 465px;
  top: 190px;
  left: 335px;
`;

const Checkbox_1 = styled(Checkboxs)`
  top: -195px;
  left: -505px;
`