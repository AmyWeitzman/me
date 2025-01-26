import React from 'react';

function ResumeIconLink(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.altText} width="35" id={props.id} className="hover-grow"></img>
    </a>
  );
}

export default ResumeIconLink;
