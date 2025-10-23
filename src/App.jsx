import React, { useEffect, useState } from 'react';
import ProblemList from './components/ProblemList';
import Problem from './components/Problem';
import problems, { problemsById } from './data/problems';
import './App.css';

function App() {
  const [selectedId, setSelectedId] = useState(() => window.location.hash.replace('#', '') || '');

  useEffect(() => {
    const onHash = () => setSelectedId(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const selectedIndex = selectedId ? problems.findIndex((p) => p.id === selectedId) : -1;
  const selected = selectedIndex >= 0 ? problems[selectedIndex] : null;

  const goTo = (id) => { window.location.hash = `#${id}`; };

  return (
    <div className="App">
      <h1>Coding Interview Problems</h1>
      {!selected && <ProblemList initialProblems={problems} onSelect={(id) => goTo(id)} />}
      {selected && (
        <div>
          <div style={{display:'flex', gap:10, alignItems:'center', marginBottom:12}}>
            <button className="btn" onClick={() => goTo(problems[Math.max(0, selectedIndex-1)].id)}>← Prev</button>
            <a href="#" onClick={() => goTo('')} style={{marginRight:12}}>Back to list</a>
            <button className="btn" onClick={() => goTo(problems[Math.min(problems.length-1, selectedIndex+1)].id)}>Next →</button>
            <div style={{marginLeft:'auto'}}>{selectedIndex+1} / {problems.length}</div>
          </div>
          <Problem {...selected} />
        </div>
      )}
    </div>
  );
}

export default App;