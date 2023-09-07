import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="data:image/png;base64,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"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"/>
                </div>
                <div>
                    avatar + descriptios
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
