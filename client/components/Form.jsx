import React from 'react';

const Form = (props) => {
  const delays = props.serviceChanges
    ? ''
    : 'There are no delays (im surprised too)';
  const serviceChanges = props.serviceChanges
    ? ''
    : 'No Service Changes Planned';
  return (
    <div className='Form'>
      <p>{`Add information about ${props.line} train here lol`}</p>
      <div className='formInfo'>
        Delays:
        <div style={{ fontWeight: 'bold' }}>{delays}</div>
      </div>
      <div className='formInfo'>
        Service Changes:
        <div style={{ fontWeight: 'bold' }}>{serviceChanges}</div>
      </div>
    </div>
  );
};

export default Form;
