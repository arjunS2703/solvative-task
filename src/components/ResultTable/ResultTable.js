import React from 'react';
import "./ResultTable.css"
const ResultsTable = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.name}</td>
            <td>{result.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
