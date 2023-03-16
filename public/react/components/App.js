import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [pageView, setPageView] = useState(0) //0 is main page 1 is add page 2 is singlepage view (delete)
	
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSinglePageView(page){
		try {
			const response = await fetch(`${apiURL}/wiki/${page}`);
			const pagesData = await response.json();
			setPages([pagesData])
			setPageView(2)
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}		

	}

	async function goBackToHome(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
			setPageView(0)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
		
	}

	useEffect(() => {
		fetchPages();
	}, []);
	if(pageView === 0){
		return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} fetchSinglePageView={fetchSinglePageView} pageView={pageView}/>
		</main>
	)
	} else if(pageView === 1){

	} else if(pageView === 2){
		return (
			<main>
				<PagesList pageView = {pageView} pages={pages} fetchSinglePageView ={fetchSinglePageView} goBackToHome = {goBackToHome}/>
			</main>
		)
	}


	
}