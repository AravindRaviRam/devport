import React from 'react'; 


const SearchBox=({onSearchChange})=>{
	return(
		<div className="text-center">
			<input 
				type='search' 
				className="p-3 w-25 border border-dark m-3"
				placeholder='Search Company'
				onChange={onSearchChange}

				/>
		</div>
		)
}

export default SearchBox