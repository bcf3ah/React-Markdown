import React, { Component } from 'react';
import marked from 'marked';
import {Col, Row, Grid, Jumbotron, ControlLabel, Panel} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';

import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			markup: ''
		}
	}

	convert(input){
		let newMarkup = marked(input);
		this.setState({markup: newMarkup})
	}



  render() {
    return (
    	<Grid>
				<Jumbotron>
					<h1 className='text-center'>Markdown Showdown</h1>
				</Jumbotron>
				<Row>
				<Col md={6}>
					<ControlLabel>Input: </ControlLabel>
					<CodeMirror value={this.state.markup} onChange={this.convert.bind(this)} options={{lineNumbers: true}} />
				</Col>
				<Col md={6}>
					<ControlLabel>Output: </ControlLabel>
					<Panel>
						<p dangerouslySetInnerHTML={{__html:this.state.markup}}></p>
					</Panel>
				</Col>
				</Row>
      </Grid>
    );
  }
}

export default App;
