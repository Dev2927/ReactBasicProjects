import "./App.css";
import Questions from "./Questions";

function App() {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 3,
      title: "When can I get it?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
  ];

  return (
    <>
      <div>
        <h1>Accordian</h1>
        <div>
          {questions.map((question) => (
            <Questions key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
