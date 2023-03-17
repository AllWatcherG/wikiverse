import React from 'react';

export const Page = (props) => {
  if(props.pageView === 0){

    return <>
      <h3>{props.page.title}</h3>  
    </>
  } else if(props.pageView === 2){
    return <>
      <h3>{props.page.title}</h3>
      <p>Author: {props.page.author.name}</p>
      <p>Published: {props.page.createdAt}</p>
      <p>{props.page.content}</p>
      <p>Tags: {props.page.tags[0].name}</p>
      <p></p>
    </>
  }
    
} 
	