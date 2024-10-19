'use client';

import Form_Image from '../public/Plan_PDF.jpg'
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Checkboxs, TextBox,SendButton } from './utils/CommonStyle';

function App() {
  const [motiveText, setMotiveText] = useState<string>('');
  const [historyText, setHistoryText] = useState<string>('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleSend = async (text: string, setText: (value: string) => void) => {
    try {
      const res = await axios.get<{ response: string }>('http://localhost:8080/gpt', {
        params: { question: text },
      });
      setText(res.data.response);
      console.log('API Response:', res.data.response);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  const handlePrint = async () => {
    const data = {
      motive: motiveText,
      history: historyText,
      checked1: checked1,
      checked2: checked2,
      checked3: checked3,
    };

    try {
      const res = await axios.post('http://localhost:8080/print', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Print API Response:', res.data);
    } catch (error) {
      console.error('Error calling Print API:', error);
    }
  };

  const handleCheckboxChange = (setChecked: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setChecked(prev => !prev);
  }

  return (
      <BackgroundContainer>
        <PrintButton onClick={handlePrint}>プリント</PrintButton>
        <MotiveTextBox placeholder="創業の動機を箇条書きで入力" value={motiveText} onChange={(e) => setMotiveText(e.target.value)}/>
        <MotiveSendButton onClick={() => handleSend(motiveText, setMotiveText)}>送信</MotiveSendButton>
        <HistoryTextBox placeholder="経営者の略歴を入力" value={historyText} onChange={(e) => setHistoryText(e.target.value)}></HistoryTextBox>
        <HistorySendButton onClick={() => handleSend(historyText, setHistoryText)}>送信</HistorySendButton>
        <Experience_Checkbox>
          <Checkbox_1 checked={checked1} onChange={handleCheckboxChange(setChecked1)}/>
          <Checkbox_2 checked={checked2} onChange={handleCheckboxChange(setChecked2)}/>
          <Checkbox_3 checked={checked3} onChange={handleCheckboxChange(setChecked3)}/>
        </Experience_Checkbox>
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

const PrintButton = styled(SendButton)`
  position: absolute;
  top: 30px;
  left: 450px;
`

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

const HistorySendButton = styled(SendButton)`
  position: absolute;
  top: 220px;
  left: 805px;
`;

const Experience_Checkbox=styled.div`
`;

const Checkbox_1 = styled(Checkboxs)`
  top: -194px;
  left: -488px;
`;

const Checkbox_2 = styled(Checkboxs)`
  top: -180px;
  left: -506px;
`;

const Checkbox_3 = styled(Checkboxs)`
  top: -166px;
  left: -524px;
`;