import Select from './select';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Select legend='select' options={[{value: '1', label: 'a'}]}/>,
  document.getElementById("content")
);

