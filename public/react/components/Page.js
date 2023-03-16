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
      <h3>{props.page.title}</h3>
      <p>Author:</p>
      <p>Published:</p>
      <p>{props.page.content}</p>
      <p>Tags:</p>
      <p></p>
    </>
  }
    
} 
	