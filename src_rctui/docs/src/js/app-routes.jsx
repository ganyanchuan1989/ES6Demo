"use strict";

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Master from './pages/master.jsx';
import Home from './pages/home.jsx';
//import { createHashHistory } from 'history'
//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
let menulist = [];

function addMenu(list) {
  list.forEach(function (menu, index) {
    if (menu.component) {
      menulist.push(
        <Route key={index} path={menu.path} component={menu.component} />
      );
    }
  });
}
require('./menulist').forEach(function (list) {
  addMenu(list);
});

const AppRoutes = (
  <Router history={browserHistory}>
    <Route path="/" indexRoute={{component: Home}} component={Master}>
      <Route path="/home" component={Home} />
      {menulist}
      <Route path="/build" component={require('./pages/build.jsx')} />
    </Route>
  </Router>
);

module.exports = AppRoutes;
