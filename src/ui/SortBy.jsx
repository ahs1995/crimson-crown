import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const SelectedSortBy = searchParams.get("sortBy") || "";

  return (
    <div>
      <Select
        options={options}
        type={"white"}
        onChange={handleClick}
        value={SelectedSortBy}
      />
    </div>
  );
}

export default SortBy;
