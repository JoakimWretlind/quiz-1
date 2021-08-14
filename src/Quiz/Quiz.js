import React, { useState } from 'react';
import {
    QuizSection,
    QuizHeader,
    QuizContainer,
    ShowScore,
    QuestionSection,
    ScoreSection,
    QuestionCount,
    QuestionText,
    AnswerSection,
    Button
} from './QuizStyling';

export default function App() {
    const questions = [
        {
            id: "js001",
            questionText: "Which of the following is not JavaScript Data Types?",
            answerOptions: [
                { answerText: "Undefined", isCorrect: false },
                { answerText: "Number", isCorrect: false },
                { answerText: "Boolean", isCorrect: false },
                { answerText: "Float", isCorrect: true }
            ]
        },
        {
            id: "js002",
            questionText: "Which company developed JavaScript?",
            answerOptions: [
                { answerText: "Netscape", isCorrect: true },
                { answerText: "Bell Labs", isCorrect: false },
                { answerText: "Sun Microsystems", isCorrect: false },
                { answerText: "IBM", isCorrect: false }
            ]
        },
        {
            id: "js003",
            questionText: "Inside which HTML element do we put the JavaScript?",
            answerOptions: [
                { answerText: "<script>", isCorrect: true },
                { answerText: "<head>", isCorrect: false },
                { answerText: "<meta>", isCorrect: false },
                { answerText: "<style>", isCorrect: false }
            ]
        },
        {
            id: "js004",
            questionText: "Which of the following is correct about features of JavaScript?",
            answerOptions: [
                { answerText: "It can not handle dates and time.", isCorrect: false },
                { answerText: "JavaScript is a object-based scripting language.", isCorrect: true },
                { answerText: "JavaScript is not interpreter based scripting language.", isCorrect: false },
                { answerText: "All of the above", isCorrect: false }
            ]
        },
        {
            id: "js005",
            questionText: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
            answerOptions: [
                { answerText: 'document.getElement (“letsfindcourse").innerHTML = "I am a letsfindcourse";', isCorrect: false },
                { answerText: 'document.getElementById (“letsfindcourse").innerHTML = "I am a letsfindcourse";', isCorrect: true },
                { answerText: 'document.getId (“letsfindcourse") = "I am a letsfindcourse";', isCorrect: false },
                { answerText: 'document.getElementById (“letsfindcourse").innerHTML = I am a letsfindcourse;', isCorrect: false }
            ]
        },
        {
            id: "js006",
            questionText: 'Which of the following is the correct syntax to display "Letsfindcourse" in an alert box using JavaScript?',
            answerOptions: [
                { answerText: 'alert-box("Letsfindcourse");', isCorrect: false },
                { answerText: 'confirm("Letsfindcourse");', isCorrect: false },
                { answerText: 'msgbox("Letsfindcourse");', isCorrect: false },
                { answerText: 'alert("Letsfindcourse");', isCorrect: true }
            ]
        },
        {
            id: "js007",
            questionText: 'What is the correct syntax for referring to an external script called "LFC.js"?',
            answerOptions: [
                { answerText: '<script src="LFC.js">', isCorrect: true },
                { answerText: '<script source="LFC.js">', isCorrect: false },
                { answerText: '<script ref="LFC.js">', isCorrect: false },
                { answerText: '<script type="LFC.js">', isCorrect: false }
            ]
        },
        {
            id: "js008",
            questionText: 'Which of the following is not Javascript frameworks or libraries?',
            answerOptions: [
                { answerText: 'Polymer', isCorrect: false },
                { answerText: 'Meteor', isCorrect: false },
                { answerText: 'Cassandra', isCorrect: true },
                { answerText: 'jQuery', isCorrect: false }
            ]
        },
        {
            id: "js009",
            questionText: "What will be the output of the below code ? console.log(typeof ('5' + 5))",
            answerOptions: [
                { answerText: 'number', isCorrect: false },
                { answerText: 'string', isCorrect: true },
                { answerText: 'object', isCorrect: false },
                { answerText: 'null', isCorrect: false }
            ]
        },
        {
            id: "js010",
            questionText: 'What will be the output of the below code ? var package; console.log("Package: " + package)console.log("Amount: " + amount);',
            answerOptions: [
                { answerText: 'Package: null; Amount: null;', isCorrect: false },
                { answerText: 'Package: undefined; Amount: undefined;', isCorrect: false },
                { answerText: 'Package: null; An ReferenceError is thrown saying amount is not defined;', isCorrect: false },
                { answerText: 'Package: undefined; An ReferenceError is thrown saying amount is not defined;', isCorrect: true }
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handeButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            // alert("true")
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }

    }

    return (
        <QuizSection>
            <QuizHeader>Quiz</QuizHeader>
            <QuizContainer>
                {showScore ? (
                    <ScoreSection>You scored {score} out of {questions.length}</ScoreSection>
                ) : (
                    <>
                        <QuestionSection>
                            <QuestionCount>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </QuestionCount>
                            <QuestionText>{questions[currentQuestion].questionText}</QuestionText>
                        </QuestionSection>
                        <AnswerSection>
                            {questions[currentQuestion].answerOptions.map((answerOption) =>
                                <Button onClick={() => handeButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</Button >
                            )}
                        </AnswerSection>
                    </>
                )}
            </QuizContainer>
        </QuizSection>
    );
}