interface Props {
    value: string
    onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: Props) => {
    return (
        <input
            className="search"
            placeholder="Search students..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar