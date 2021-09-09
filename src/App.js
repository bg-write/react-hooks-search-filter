import EmployeeSearch from './components/EmployeeSearch';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: teal;
		margin: 1rem;
		padding: 1rem;
	}
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<EmployeeSearch />
		</div>
	);
}

export default App;
