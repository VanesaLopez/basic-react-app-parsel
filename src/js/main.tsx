import * as React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import '../css/main.scss';
import { HelloComponent } from "./components/helloComponent";

render(<HelloComponent />, document.getElementById('mainApp'))