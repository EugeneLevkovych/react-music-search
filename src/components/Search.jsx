import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

    return ( <input
        className="search"
        type="text"
        placeholder="Search music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />)
}