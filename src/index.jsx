/**
 * Created by KJ on 2016/3/10.
 */

require('./style/index.less');
import React from 'react';
import ReactDOM from 'react-dom';
import LinkButton from '../src_lib/src/component/LinkButton.jsx';
//import { Router, Route,Link,hashHistory } from 'react-router'

//import App from './js/app.jsx';
/*<Router history={hashHistory}>
    <Route path="/" component={App}/>
</Router>*/
ReactDOM.render((
    <LinkButton/>
), document.getElementById('app'));