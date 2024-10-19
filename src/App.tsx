'use client';

import Form_Image from '../public/PlanOfStart-up_page-0001.jpg'
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

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
          <TextBox placeholder="創業の動機を箇条書きで入力" value={text} onChange={(e) => setText(e.target.value)} />
      <SendButton onClick={handleSend}>送信</SendButton>
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

const TextBox = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 53px;
  width: 550px;
  box-sizing: border-box;
  position: absolute;
  top: 105px;
  left: 250px;
`;

const SendButton = styled.button`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  top: 115px;
  left: 805px;
`