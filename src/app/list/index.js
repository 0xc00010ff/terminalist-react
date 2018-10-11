import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="ListPage">
        <div className="NavBar">
          Terminalist
        </div>
        <div className="Content">
          Popular | Newest
          <ul className="CommandList">
            <li>
              <a className="CommandItem" href="https://github.com/0xc00010ff/dash">
                <div>
                  > Dash
                  <p className="CommandDescription">Convenient helper for command-line git lovers. Clear, ls, and git goodies</p>
                </div>
              </a>
            </li>
            <li>
              <a className="CommandItem" href="https://github.com/0xc00010ff/whatwasidoing">
                <div>
                  > Doing
                  <p className="CommandDescription">Single item todo list to keep you focused and remind you what you're working on in each directory.</p>
                </div>
              </a>
            </li>
            <li>
              <a className="CommandItem" href="https://github.com/0xc00010ff/">
                <div>
                  > Schript
                  <p className="CommandDescription">Quickly write your own command using your language and editor of choice</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
