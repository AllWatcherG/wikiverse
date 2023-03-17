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

	async function deletePage(slug){
		console.log(slug)
		const response = await fetch(`${apiURL}/wiki/${slug}`,{
			method:"DELETE"
		})
		const data = await response.json()
		console.log('Entry Deleted')
		setCurrentPage([])
		goBackToHome()
	}

	const [title,setTitle] = useState('')
	const [article,setArticle] = useState('')
	const [author,setAuthor] = useState('')
	const [email,setEmail] = useState('')
	const [tags,setTags] = useState('')

	function addPage(){
		try{
			setPageView(1)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const SubmitNewPage = async (e) => {
        e.preventDefault()

        const response = await fetch(`${apiURL}/wiki`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({
                title:title,
                content:article,
                name:author,
                email:email,
                tags:tags
            })
        })
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
			<button onClick={()=>addPage()}>Add A Page</button>
		</main>
	)
	} else if(pageView === 1){
		return(
			<main>
				<h1>WikiVerse</h1>
				<h2>Add a Page</h2>
				<form onSubmit={(event)=>SubmitNewPage(event)}>
				<ul className='list_of_fields'>
				<input type='text' onChange={(event)=>setTitle(event.target.value)} className='field' placeholder='Title'></input>
				<br/>
				<textarea rows='2' onChange={(event)=>setArticle(event.target.value)}cols='25'className='field' placeholder='Article Content'></textarea>
				<br/>
				<input type='text' onChange={(event)=>setAuthor(event.target.value)}className='field' placeholder='Author Name'></input>
				<br/>
				<input type='text' onChange={(event)=>setEmail(event.target.value)}className='field' placeholder='Author Email'></input>
				<br/>
				<input type='text' onChange={(event)=>setTags(event.target.value)}className='field' placeholder='Tags'></input>
				<br/>
				<button className='submitButton' type="submit">SUBMIT</button>
				<button onClick={()=>setPageView(0)}className='submitButton'>GO BACK</button>
				</ul>	
				</form>
				

			</main>
		)
	} else if(pageView === 2){
		return (
			<main>
				<PagesList pageView = {pageView} pages={pages} fetchSinglePageView ={fetchSinglePageView} goBackToHome = {goBackToHome} deletePage={deletePage}/>
			</main>
		)
	}


	
}