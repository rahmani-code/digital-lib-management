import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

// export const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={() => alert(`You selected ${result}`)}
//     >
//       {result}
//     </div>
//   );
// };

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bk/${result.id}`); // Pass the book ID to the SingleBook page
  };
  return (
    <div className="search-result" onClick={handleClick}>
      {result.title}
    </div>
  );
};
