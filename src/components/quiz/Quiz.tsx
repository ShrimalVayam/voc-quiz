import { useState } from "react";
import Join from "../joinModal/Join";
import { useQuiz } from "./useQuiz";
import { Participant } from "../../utils/common.type";
import "./Quiz.css";

const Quiz = () => {
  const [participants, handleJoinQuiz] = useQuiz();
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <>
      <h1>Test Your Vocabulary Skills!</h1>
      <button className="button" onClick={() => setJoinModalOpen(true)}>JOIN QUIZ</button>
      
      {isJoinModalOpen && (
        <Join onJoin={handleJoinQuiz} onClose={() => setJoinModalOpen(false)} />
      )}

      <div className="active-users-container">
        <h2>Active participants</h2>
        <table className="active-users-table">
          <thead>
            <tr>
              <th>Quiz ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant: Participant) => (
              <tr key={participant.id} className="user-row">
                <td>{participant.id}</td>
                <td>{participant.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Quiz;
