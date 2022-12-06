const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input id="name" value={data.place.name} name="name" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input id="pic"value={data.place.pic} name="pic"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input id="city"value={data.place.city} name="city"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="=state">State</label>
                    <input id="state"value={data.place.state} name="state"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="cusines">Cusines</label>
                    <input id="cusines"value={data.place.cusines} name="cusines"/>
                </div>
                <input className="btn btn-primary" type="submit" value="submit changes" />
            </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
