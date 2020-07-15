import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NabVar from './components/ui/NabVar';
import Container from '@material-ui/core/Container';
import loadable from '@loadable/component';

//aca añadir dotenv
const appTitle = 'Cat Apps';

const Home = loadable(() => import('./components/home/Home'));
const Cats = loadable(() => import('./components/cats/Cats'));
const Counter = loadable(() => import('./components/counter/Counter'));
const Info = loadable(() => import('./components/info/Info'));
function App() {
	return (
		<div>
			<NabVar title={appTitle} />
			<Container maxWidth="xl">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cats" component={Cats} />
					<Route exact path="/counter" component={Counter} />
					<Route exact path="/tech-info" component={Info} />
				</Switch>
			</Container>
		</div>
	);
}
export default App;
