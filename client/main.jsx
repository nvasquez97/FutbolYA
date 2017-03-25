import {Meteor} from "meteor/meteor";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/app';
import '../imports/style.css';
import '../imports/javascript.js'
Meteor.startup(() => {
		ReactDOM.render(<App/>, document.querySelector('.app'));
	}
);
