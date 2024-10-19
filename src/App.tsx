import Form_Image from '../public/PlanOfStart-up_page-0001.jpg'
import styled from 'styled-components';

function App() {
  return (
    <>
      <Image src={Form_Image} className="logo react" alt="React logo" />
    </>
  )
}

export default App

const Image = styled.img`
  width: 95vw;
  height: 95vh;
  object-fit: contain;
`