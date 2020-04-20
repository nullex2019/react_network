import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToJ7QR-40ysomI8GKEjbHqdvd4bNfBpgKsuwqMdV0WogtMshuL&usqp=CAU"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://www.wur.nl/upload_mm/f/3/0/63b287aa-f976-4a3d-baed-c2035f14dd8f_Irene_tinto-river.jpg"
                        alt=""/>
                </div>
                <div>
                    avatar+description
                </div>

                <div>
                    my post
                    <div>
                        new post
                    </div>
                </div>

                <div>
                    post1
                </div>
                <div>
                    post2
                </div>


            </div>

        </div>
    );
}

export default App;
