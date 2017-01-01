/* @flow */

import React from 'react';
import { render } from 'react-dom';
import DropdownWidget from './dropdown-widget';

render(
	<DropdownWidget data={[ 'grapefruit', 'banana', 'coconut', 'mango' ]} />,
	document.getElementById('app')
); 