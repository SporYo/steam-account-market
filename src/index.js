import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './containers/Feed';
import registerServiceWorker from './registerServiceWorker';
import {
	  HashRouter,
	  Route
} from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
	      <div>
	        <Route exact path="/" component={Feed} />
	        <Route path="/feed" component={Feed} />
	      </div>
	   </HashRouter >
	,
	document.getElementById('root')
);
registerServiceWorker();
