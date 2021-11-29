import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  searchSomething: (value: string) => void;
};

const Search: React.FC<Props> = ({ searchSomething }) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
    searchSomething(value);
  };
  return (
    <div className="search-container">
      <TextField
            variant="outlined"
            className="search-field"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleSearch(event.target.value)}
          />
    </div>
  );
};

export default React.memo(Search);
