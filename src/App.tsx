import { useState } from 'react';
import { teams } from './data';
import type { Team } from './data/team-template';
import './App.css';

function App() {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  return (
    <div className="app">
      <div className="hero-content">
        <h1>The AI Collective</h1>
        <h2>Beginner Project Spring Quarter 2026</h2>
      </div>

      <div className="button-grid">
        {teams.map((team) => (
          <button
            key={team.name}
            className={`team-button ${activeTeam?.name === team.name ? 'active' : ''}`}
            onClick={() => setActiveTeam(team)}
          >
            {team.name.toLowerCase().replace(' ', '-')}
          </button>
        ))}
      </div>

      <div className="team-detail">
        {activeTeam ? (
          <div className="team-card">
            <div className="team-card-top">
              <span className="team-tag">{activeTeam.name}</span>
              <h3>{activeTeam.pm}</h3>
              <p className="team-prompt">Project manager</p>
            </div>
            <div className="team-members">
              {activeTeam.members.map((member) => (
                <div key={member.name} className="member-row">
                  <p className="member-name">{member.name}</p>
                  <p className="member-fact">{member.funFact}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="team-card empty">
            <p>Select a team button above to view the details in this block.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
