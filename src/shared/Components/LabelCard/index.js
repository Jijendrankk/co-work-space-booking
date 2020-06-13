import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Cards = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : "19px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.background ? props.background : "#f2f2f2")};
  height: 69%;
  border-radius: 11px;
  padding: 5px 14px 5px 14px;
  margin: ${props => (props.margin ? props.margin : "0%")};
  color: ${props => (props.color ? props.color : "#000000")};
  cursor: ${props => (props.cursor ? props.cursor : "inherit")};
`;

export default function LabelCard(props) {
  return (
    <Cards
      background={props.background}
      margin={props.margin}
      color={props.color}
      onClick={props.handleAction}
      fontSize={props.fontSize}
      cursor={props.cursor}
    >
      {props.label}
    </Cards>
  );
}

LabelCard.propTypes = {
  handleHoverCard: PropTypes.func
};

LabelCard.defaultProps = {
  handleHoverCard: () => {}
};
