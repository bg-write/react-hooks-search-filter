import { useState } from 'react';
import data from './data';
import styled from 'styled-components';

const StyledEmployeeList = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	margin: 0 auto;
	padding: 1rem;
	border: 2px solid #000;
	border-radius: 20px;
	background: #eee;
	max-width: 500px;
	#search-results {
		padding-top: 1rem;
	}
	#no-match-message {
		color: red;
	}
`;

const EmployeeSearch = () => {
	const [searchInput, setSearchInput] = useState('');
	const [filteredResults, setFilteredResults] = useState([]);

	const filteredData = data.filter((item) => {
		let cleanData = JSON.stringify(Object.values(item)).toLowerCase();
		let cleanSearch = searchInput.toLowerCase();
		return cleanData.includes(cleanSearch);
	});

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		searchInput ? setFilteredResults(filteredData) : setFilteredResults(data);
	};

	console.log(searchInput);
	console.log(filteredResults); // fix delay

	return (
		<>
			<StyledEmployeeList>
				<div id="header">
					<h1>Employee Search</h1>
				</div>
				<div id="search-input">
					<input
						placeholder="Search Employees ..."
						onChange={(e) => searchItems(e.target.value)}
					/>
				</div>
				<div id="search-results">
					{searchInput.length >= 0 &&
						filteredData.map((item) => {
							return (
								<div key={item.id} id="employee-name">
									<div>{item.fullName}</div>
								</div>
							);
						})}
					{filteredData.length === 0 ? (
						<div id="no-match-message">No Matching Employee</div>
					) : null}
				</div>
			</StyledEmployeeList>
		</>
	);
};

export default EmployeeSearch;
