import styled from 'styled-components';

/*

    display: block;
    width: 34%;
    height: 35px;
    margin-left: 29%;
    margin-bottom: 42px;

*/

const Input = styled.input`
    margin: 0 auto;
    width: 100%;
    height: 45px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #D0CFCE;
    outline: none;
    &:focus{
        border: 1px solid #008ABF;
        transition: 0.35s ease;
        color: #008ABF;
        &::-webkit-input-placeholder{
        transition: opacity 0.45s ease;
        opacity: 0;
        }
        &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
        }
        &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
        }
    }
`;

const SearchContainer = styled.div`
    width: 490px;
    display: block;
    margin-right: auto;
    margin-left: 339px;
    margin-top: -50px;
    margin-bottom: 50px;
`;

const SearchIcon = styled.img`
    position: relative;
    float: right;
    width: 75px;
    height: 75px;
    top: -62px;
    right: -45px;
`;

function SearchBar({ searchTerm, onSearch }) {
    return <SearchContainer>
        <Input type="text" value={searchTerm} onChange={(e) => onSearch(e.target.value)} placeholder="Поиск записей..." />
        <a href="#"><SearchIcon src="/public/search-icon.png" /></a>
    </SearchContainer>;
}

export default SearchBar;