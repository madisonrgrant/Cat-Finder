import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Search from './search.js'

class Header extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="/">Adopt-A-Cat</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarColor02">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="/cats">Current Cats</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="/addcat">Add A Cat</a>
			      </li>
			    </ul>
			    <Search />
			  </div>
			</nav>
		);
	}
}

export default Header;
