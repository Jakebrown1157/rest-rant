
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
              <img src={ data.place.pic } alt={data.place.name}></img>
              <h3> Located in {data.place.city}, {data.place.state}</h3>
              <h3> Discription</h3>
              <div> no Reviews </div>
              <div> no Comments yet</div>
              <h3> {data.place.showEstaplished()}</h3>
              <h4> serving {data.place.cuisines}</h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form>

            
          </main>
        </Def>
    )
}

module.exports = show
