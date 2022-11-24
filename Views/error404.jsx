const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              So enjoy these cats <a href='http://placekitten.com'>here</a> by <a href='placekitten.com'>placeKitten.com</a>
          </main>
      </Def>
    )
  }
  

module.exports = error404
