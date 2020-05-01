import React from 'react'
import { Input } from 'semantic-ui-react'

/**
 *
 * SearchInput Component
 *
 */
const SearchInput = ({ handleSearch }) => (
    <Input 
        icon='search' 
        placeholder='Search'
        onChange={(event) => handleSearch(event)} 
    />
)

export default SearchInput
