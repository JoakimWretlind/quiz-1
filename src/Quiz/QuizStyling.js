import styled from 'styled-components';

export const QuizSection = styled.section`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(-7deg, #971132, #47001c);
`;

export const QuizContainer = styled.article`
  height: 100%;
  width: 100%;
  max-width: 90rem;
  background: radial-gradient(#971132, #690826);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 .2rem .4rem rgba(71, 0, 28,1),
  0 -.2rem .4rem rgba(255,255,255,.3);
`;

export const QuizHeader = styled.h1`
  font-family: 'CinzelD';
  color: #ffffff;
  text-align: center;
  padding: 7rem 0 5rem;
  font-size: clamp(3rem, 10vw, 6rem);
  letter-spacing: 1rem;
`;

export const ShowScore = styled.h4`
`;

export const QuestionSection = styled.article`
  
`;

export const ScoreSection = styled.div`
  color: #ffffff;
  font-size: 3rem;
  padding: 3rem;
  text-align: center;
  letter-spacing: .3rem;  
  text-shadow: 0 -.2rem .3rem rgba(0,0,0,0.4);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`;

export const QuestionCount = styled.div`
  color: #ffffff;
  padding: 1rem 2rem;
  line-height: 1.4;
  font-size: 1.4rem;
  letter-spacing: .1rem;
`;

export const QuestionText = styled.p`
  color: #ffffff;
  padding: 1rem 2rem;
  line-height: 1.4;
  font-size: 2rem;
  letter-spacing: .1rem;
`;
export const AnswerSection = styled.div`  
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  @media screen and (min-width: 767px){
    grid-template-columns: repeat(2, 1fr);
  }
  
`;

export const Button = styled.button`
  background: radial-gradient(#971132, #47001c);
  font-family: 'CocoLight';
  color: #ffffff;
  letter-spacing: .1rem;
  font-size: 1.6rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  outline: none;
  border: .2rem solid #ffffff;
  margin: .5rem;
  border-radius: .8rem;
  cursor: pointer;
  line-height: 1.4;
  box-shadow: 0 .3rem .6rem rgba(0,0,0,.4);
  transition: none.25s ease-out;
  &:hover {
    background: radial-gradient(#a82c4b, #47001c);
    box-shadow: 0 .1rem .2rem rgba(0,0,0,.4);
  }
`;