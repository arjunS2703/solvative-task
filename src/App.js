import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../src/components/SearchBox/SearchBox';
import ResultsTable from '../src/components/ResultTable/ResultTable';
import Pagination from '../src/components/Pagination/Pagination';

const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const API_KEY = '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'; // Replace with your actual API key

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          params: {
            countryIds: 'IN',
            namePrefix: searchTerm,
            limit: 5,
            offset: (currentPage - 1) * 5,
          },
          headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        });
        setSearchResults(response.data.data);
        setTotalPages(Math.ceil(response.data.metadata.totalCount / 5));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, currentPage]);

  return (
    <div className="container">
      
      <SearchBox onSearch={handleSearch} />
      {loading ? (
        <div className="spinner">
        <div className="spinner__inner"></div>
      </div>
      ) : (
        <>
          <ResultsTable results={searchResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
