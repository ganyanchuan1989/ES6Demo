/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
require('../todomvc-common/base.css');
require("../css/app.css");

console.log(123);
console.log(123);
console.log(123);
console.log(123);

var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.react');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
