import React from 'react';

const Alert = ({ messages, show, setShow }) => {
  return (
    <div className={`alert ${show ? 'show' : 'hide'}`}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default Alert;