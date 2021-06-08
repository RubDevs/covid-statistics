// Import libraries
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export const Component = ({ token }) => {
  // Router
  let history = useHistory();
  let location = useLocation();

  // State
  const [path, setPath] = useState(location.pathname);

  // Change url path
  const changePath = (url) => {
    setPath(url);
    history.push(url);
  }

  if (!token) {
    return null;
  }

  return (
    <section className="menu">
      <select
        className="form-select menu__select"  
        value={path} 
        onChange={({ target }) => changePath(target.value)}
      >
        <option value="/statistics/active/map">Active cases</option>
        <option value="/statistics/death/map">Death cases</option>
        <option value="/statistics/death/ratio">Death ratio cases</option>
        <option value="/statistics/death/chart">Death cases projection</option>
      </select>
    </section>
  )
}

// Map state
const mapStateToProps = state => ({
  token: state.authReducer.token
});

export const Menu = connect(mapStateToProps, null)(Component);