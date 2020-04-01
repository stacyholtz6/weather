import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { DayWrapper } from '../styles';

const DayCard = props => {
  console.log('daycard-props', props);
  return (
    <Col onClick={props.setSelectedDay}>
      <DayWrapper isActive={props.isActive}>
        <Card>
          <CardHeader>{props.day}</CardHeader>
          <CardBody>
            <h2>{props.current}°</h2>
            <img
              src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`}
              alt={props.description}
            />
            <p>
              <strong>High: </strong>
              {props.high}°
            </p>
            <p>
              <strong>Low: </strong>
              {props.low}°
            </p>
          </CardBody>
        </Card>
      </DayWrapper>
    </Col>
  );
};

export default DayCard;
