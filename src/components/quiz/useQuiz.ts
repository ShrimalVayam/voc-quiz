import { useEffect, useState } from "react";
import { Participant } from "../../utils/common.type";
import { oldParticipants } from "../../api/oldParticipants";
import { newParticipants } from "../../api/newParticipants";
import { useSnackbar } from "notistack";

export const useQuiz = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    setParticipants(oldParticipants);
  }, []);

  const handleJoinQuiz = (participantName: string) => {
    const newId =
      newParticipants.length > 0
        ? parseInt(newParticipants[newParticipants.length - 1].id) + 1
        : parseInt(oldParticipants[oldParticipants.length - 1].id) + 1;

    const newJoinee: Participant = {
      id: newId.toString(),
      name: participantName,
    };

    newParticipants.push(newJoinee);

    setParticipants((prevParticipants) => [...prevParticipants, newJoinee]);

    enqueueSnackbar(`${newJoinee.name} just joined the quiz`, { variant: 'success' });
  };

  return [participants, handleJoinQuiz] as const;
};
