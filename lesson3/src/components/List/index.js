import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import './styles.css';

const errorColor = 'red';
const successColor = 'blue';

const StyledSubTitle = styled.h2`
  color: ${props => props.active ? 'white' : 'purple'};
`;

const StyledList = styled.ul`
  background-color: orange;
  border: 1px solid brown;
  

  button {
    & > span {
      color: ${errorColor};
    }

    background-color: ${successColor};
  }

  ${StyledSubTitle} {
    border: 3px solid green;
  }

`;



const PrimaryText = styled.p`
  color: tan;
`;

const SecondaryText = styled(PrimaryText)`
  text-transform: uppercase;
`;



class List extends React.Component {

  state = {
    active: false
  }


  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const { active } = this.state;

    return (
      <StyledList>
        <h1 className={cn('default', { 'active-component': active, main: !active })}>{this.props.title}</h1>
        <StyledSubTitle active={active}>{this.props.title}</StyledSubTitle>
        <PrimaryText>First text</PrimaryText>
        <SecondaryText>Second text</SecondaryText>
        <button onClick={this.handleClick}>Click</button>
      </StyledList>
    );
  }
}

export default List;
