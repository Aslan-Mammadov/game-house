import { Badge } from "@chakra-ui/react";
import "./scorepoint.css";

const ScorePoint = ({ score }) => {
  let color =
    score >= 90 ? "green" : score >= 80 ? "yellow" : score < 80 ? "red" : "";
  return (
    <Badge borderRadius="5px" colorScheme={color} fontSize="15px">
      {score ? score : "N/A"}
    </Badge>
  );
};

export default ScorePoint;
