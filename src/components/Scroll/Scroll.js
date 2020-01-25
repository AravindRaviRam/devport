import React from 'react';

const Scroll = (props) => {
  return (
    <div className="float-right" style={{ overflow: 'scroll', border: '5px solid black', height: '640px', width:'84%', }}>
      {props.children}
    </div>
  );
};

export default Scroll;