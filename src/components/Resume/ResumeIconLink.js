import React from 'react';
import Tooltip from '@mui/material/Tooltip';

function ResumeIconLink(props) {
  return (
    <Tooltip title={props.altText}>
      <a href={props.url} target="_blank" rel="noreferrer">
          <img src={props.image} alt={props.altText} width="35" id={props.id} className="hover-grow"></img>
      </a>
    </Tooltip>
  );
}

export default ResumeIconLink;
