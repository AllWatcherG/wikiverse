import React from 'react';

export const Page = (props) => {
  console.log(props.page.title)
  console.log(props.pageView)
  if(props.pageView === 0){

    return <>
      <h3>{props.page.title}</h3>  
    </>
  } else if(props.pageView === 2){
    return <>
      {console.log(props)}
      <h3>{props.page.title}</h3>
      <p>Author: {props.page.author.name}</p>
      <p>Published: {props.page.createdAt}</p>
      <p>{props.page.content}</p>
      <p>Tags: {props.page.tags[0].name}</p>
      <p></p>
    </>
  }
    
} 
	