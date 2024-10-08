import { useState } from "react";
import './Join.css';

interface JoinQuizModalProps {
  onJoin: (participantName: string) => void;
  onClose: () => void;
}

const Join = ({ onJoin, onClose }: JoinQuizModalProps) => {
  const [participantName, setParticipantName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (participantName) {
      onJoin(participantName);
      setParticipantName("");
      onClose();
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="join-quiz-form">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
          <button type="submit">Join</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Join;
