import { useCallback, useMemo, useState } from "react";
import PageItem from "./components/pageItem/PageItem";
import Button from "./components/button/Button";
import "./App.css";

import { pageList } from "./data/data";

const HomePage = () => {
  const pageListMemo = useMemo(() => pageList);
  const [selectedPages, setSelectedPages] = useState(() =>
    pageListMemo.reduce((acc, page) => {
      acc[page] = false;
      return acc;
    }, {})
  );

  const handleDoneClick = useCallback(() => {
    alert("👌 -> DONE✅");
  }, []);

  return (
    <main className="main">
      <div className="fixed-item">
        <PageItem
          label="All pages"
          checked={Object.values(selectedPages).every(Boolean)}
          setSelectedPages={setSelectedPages}
        />
      </div>
      <div className="divider"></div>
      <div className="page-list">
        {pageListMemo.map((page) => (
          <PageItem
            key={page}
            label={page}
            checked={selectedPages[page]}
            setSelectedPages={setSelectedPages}
          />
        ))}
      </div>
      <div className="divider"></div>
      <div>
        <Button label="Done" onClick={handleDoneClick} />
      </div>
    </main>
  );
};

export default HomePage;
