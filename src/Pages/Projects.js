import React from 'react';
import {Switch, Route, useRouteMatch } from 'react-router-dom';

import ProjectsNav from '../components/ProjectsNav';
import AngularProject from './projects/AngularProject';
import ReactProject from './projects/ReactProject';
import VueProject from './projects/VueProject';
import NodeProject from './projects/NodeProject';

function Projects(){
	let { url } = useRouteMatch();
	return(
		<>
			<h1> Projects Page </h1>
			
			<ProjectsNav url={url} />
			
				<Switch>
					<Route path="/projects/angular" exact >
						<AngularProject />
					</Route>
					<Route path="/projects/react" exact >
						<ReactProject />
					</Route>
					<Route path="/projects/vue" exact >
						<VueProject />
					</Route>
					<Route path="/projects/node" exact >
						<NodeProject />
					</Route>

				</Switch>
		</>
	);
}

export default Projects;