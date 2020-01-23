import React from "react";
import { Card } from "./lib/Card";
import styled from "styled-components/macro";

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="This is the title"
        secondaryText="Life is amazing"
      />
      <Card title="Only a title" secondaryText="And some text" />
      <Card>
        <h1>Hello from children</h1>
      </Card>
    </div>
  );
};
