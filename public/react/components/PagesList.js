import React from 'react';
import { Page } from './Page';

export const PagesList = (props) => {
	console.log(props)
	if(props.pageView === 0){
		
		return <>
		{
			props.pages.map((page) => {
				return <>
				{console.log(page.slug)}
				<div onClick={() => props.fetchSinglePageView(page.slug)} width='100%' background-color = 'red'>
					<Page page={page} pageView = {props.pageView}  />
				</div>
				</>
			})
		}
	</>
	} else if(props.pageView === 2){
		console.log(props)
		console.log(props.pages)
		return <>
			<Page page={props.pages[0]} pageView ={props.pageView}/>
			<button onClick={()=> props.goBackToHome()}>Go back to Home</button>	
		</>
	}
	
} 
