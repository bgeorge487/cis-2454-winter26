import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <MainTextBody />
      <QuizForm />
    </>
  );
}

function MainTextBody() {
  <>
    <h1>Hello! Welcome to the D&D Quiz</h1>
    <p>
      My name is Brian and I'm a student in OCC's CIS 2454 O1546 Winter 2026
      section. <br />
      I'd love to talk about my adventures in trying to form a D&D group, which
      is something I've been wanting to try for a long while. <br />A group of
      my friends are just one shy of having a full adventuring party. I'm trying
      to convince my buddy Ro to be a Fighter or a Barbarian, since that seems
      to suit their personality the best. Ed, a suave and debonair gent in real
      life is just...meant to be a Bard. He's very supportive, can't fight
      because he doesn't want to ruin his hair, and...<i>absolutely</i> shares
      the stereotypical tempermant of a Bard. <br />
      Meanwhile, I want to be a caster! I've always played them whenever they're
      available in any video game or other interactive media that I can get my
      hands on. I'm torn between the Sorcerer and a Wizard. Though...being a
      Warlock does have its upsides if you find the right patron. 🤔
    </p>
  </>;
}

function QuizForm() {
    const [answer, setAnswer] = useState('');

    function handleAnswerChange(e) {
        setAnswer(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();      
        if (answer === 'C') { 
            return <h2>Great Job!</h2>;
         } else {
            return alert('Try Again :(');
         }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                What class did I suggest Ro would be best suited for?
            </p>

            <ul style={{ listStyleType: "upper-alpha" }}>
                <li>Drow Ravager</li>
                <li>High Elf Scholar</li>
                <li>Barbarian</li>
                <li>Goblin Sorcerer</li>
            </ul>
            <input 
                type="text" 
                name="user-answer" 
                id="result" 
                value={answer} 
                onChange={handleAnswerChange} 
                placeholder="Enter A, B, C, or D"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
