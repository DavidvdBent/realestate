import { useState } from "react"

const Search = ({ onChangeCallback }) => {
const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue)
    onChangeCallback && onChangeCallback(inputValue)
  }

  return (
    <input
      type="text"
      className="border-2 h-10 w-2/3 m-auto rounded-l mt-2 mb-2 pl-2"
      value={query}
      onChange={handleSearch}
      placeholder='Zoek op Adres'
    />
  )
}

export default Search;