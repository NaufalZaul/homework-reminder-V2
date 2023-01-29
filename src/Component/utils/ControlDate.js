import React from 'react';

export default function ControlDate(props) {
  const dateParseToJSON = new Date(props.date).toJSON()
  const dateToString = new Date(dateParseToJSON).toDateString()

  return dateToString;
}

