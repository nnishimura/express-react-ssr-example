import React from 'react';
import styled from '@emotion/styled';
import Button from '@ts-styling/Button';

const Title = styled.h1`
  font-size: 20px;
`;

class App extends React.Component {
    render() {
        return (
          <div>
            <Title>SSR Hello World</Title>
            <Button>Buttuon</Button>
          </div>
        );
    }
}

export default App;
