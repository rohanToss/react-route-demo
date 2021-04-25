import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Home(){
	let { name } = useParams();
	let history = useHistory();
	return(
		<>
			<h1> Home Page for {name} </h1>
			<p>
				<button onClick={()=>redirectTo(history)}> show Mohan</button>
			</p>
		</>
	);
}

function redirectTo(history){
	history.push('/mohan');
}

export default Home;