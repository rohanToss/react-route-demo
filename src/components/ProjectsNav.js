import React from 'react';
import { Link } from 'react-router-dom';

function projectNav({url}){
	return(
		<>
			<ul>
				<li>
					<Link to= {`${url}/angular`} >Angular </Link> 
				</li>

				<li>
					<Link to={`${url}/react`}>React </Link> 
				</li>

				<li>
					<Link to={`${url}/vue`}>Vue </Link> 
				</li>

				<li>
					<Link to={`${url}/node`}>Node </Link> 
				</li>
			</ul>
		</>
	);
}

export default projectNav;