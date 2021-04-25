import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound(){

	let history = useHistory();
	return (
		<>
			<h3>Page not Found</h3>
			<p>
				<button onClick={()=>reDirect(history)} >go to home</button>
			</p>
		</>
	);
}


function reDirect(history){
	history.push('/guest');
}


export default PageNotFound;