import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
	${normalize}
	
	*,
	*:before,
	*:after {
	    box-sizing: inherit;
	}
	
	a {
	    text-decoration: none;
	    color: inherit;
	}
	
	html,
	body {
	    height: 100%;
	  	margin: 0;
	    box-sizing: border-box;
      	-webkit-tap-highlight-color: transparent;
	}
	
	body {
		min-width: 1025px;
	}
	
	ul {
	    margin: 0;
	    list-style: none;
	}
	
	ul, li, p, button {
	    padding: 0;
	}
	
	p {
		margin: 0;
	}
	
	input {
	    font-family: inherit;
		appearance: none;
		-webkit-appearance: none;
		-webkit-border-radius: 0;
	}

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
	textarea {
		outline: none;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
      	-webkit-border-radius: 0;
    }
	
	button {
		border: none;
	}
`;
