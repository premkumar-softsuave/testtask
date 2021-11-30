import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import usePrevious from "../hooks/usePrevious";

type Props = {
  searchSomething: (value: string) => void;
};

const Search: React.FC<Props> = ({ searchSomething }) => {
  const [searchKey, setsearchKey] = useState<string>("");
  const prevSearch = usePrevious(searchKey);

  const handleSearch = (e?: React.FormEvent) => {
    if(e) e.preventDefault()
    
    if (searchKey !== prevSearch) {
      searchSomething(searchKey);
    }
  };

  return (
    <div className="search-container" data-testid="container">
      <form onSubmit={handleSearch}>
        <TextField
          variant="outlined"
          className="search-field"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" onClick={() => handleSearch()}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => setsearchKey(event.target.value)}
        />
      </form>
    </div>
  );
};

export const MemoizedSearch = React.memo(Search);
