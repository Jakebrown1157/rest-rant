const React = require('react')

const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1> Home </h1>
            <div>
                <img src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt='french toast'/>
                <div>
                    Photo by <a href='https://unsplash.com/@miracletwentyone'>Joseph Gonzalez</a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
            </div>
            <a href="/places">
            <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
)}

module.exports = home 