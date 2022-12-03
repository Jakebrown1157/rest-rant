
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h1><img src={ data.place.pic } alt='some random image'></img></h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form> 
            <div> no Reviews </div>
            <div> no Comments yet</div>
          </main>
        </Def>
    )
}

module.exports = show
