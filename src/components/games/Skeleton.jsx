import { Card, CardBody, SkeletonText, Skeleton, Box } from "@chakra-ui/react";
import React from "react";

const SkeletonGame = () => {
  return (
    <Box borderRadius={"10px"} overflow="hidden" height="400px">
      <Card>
        <Skeleton height="300px" />
        <CardBody>
          <SkeletonText height="100px" />
        </CardBody>
      </Card>
    </Box>
  );
};

export default SkeletonGame;
