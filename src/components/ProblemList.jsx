import React, { useMemo, useState } from 'react';
import './Problem.css';

const ProblemList = ({ initialProblems = [], onSelect }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialProblems;
    return initialProblems.filter((p) => p.title.toLowerCase().includes(q) || (p.content || '').toLowerCase().includes(q));
  }, [initialProblems, query]);

  return (
    <div className="problem-list">
      <div style={{display:'flex', gap:12, alignItems:'center', marginBottom:12}}>
        <input
          aria-label="Search problems"
          placeholder="Search problems by title or content..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{flex:1, padding:10, borderRadius:8, border:'1px solid #ddd'}}
        />
        <div style={{minWidth:120, textAlign:'right'}} className="count-badge">{filtered.length} / {initialProblems.length}</div>
      </div>

      <ul style={{listStyle:'none', padding:0, margin:0}}>
        {filtered.map((p) => (
          <li key={p.id} style={{marginBottom:10}}>
            <a href={`#${p.id}`} onClick={() => onSelect && onSelect(p.id)} className="button">
              {query ? (
                (() => {
                  const qi = p.title.toLowerCase().indexOf(query.toLowerCase());
                  if (qi === -1) return p.title;
                  const before = p.title.slice(0, qi);
                  const match = p.title.slice(qi, qi + query.length);
                  const after = p.title.slice(qi + query.length);
                  return (<span>{before}<span className="highlight">{match}</span>{after}</span>);
                })()
              ) : p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
