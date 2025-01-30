import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

// export const SearchResultsList = ({ results }) => {
//   console.log("Results passed to SearchResultsList:", results);
//   return (
//     <div className="results-list">
//       {results.map((result) => {
//         return <SearchResult result={result.title} key={result.id} />;
//       })}
//     </div>
//   );
// };

export const SearchResultsList = ({ results }) => {
  console.log("Results passed to SearchResultsList:", results); // Debugging

  return (
    <div className="results-list">
      {results.slice(0, 3).map((result) => {
        return <SearchResult result={result.title} key={result.id} />;
      })}
    </div>
  );
};
