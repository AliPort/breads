const React = require('react')
const Default = require('./layouts/Default')

function Index({breads, title}){
    console.log(breads)
    return (
        <Default title={title}>
  <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

  <h2>Index Page</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment. */}
  <ul>
    {
      breads.map((bread, index)=> {
        return (
        <li key ={index}>
           <a href={'/breads/${bread.id}'}>
            {bread.name}
            </a>
        </li>
        )
      }) 
    }
  </ul>
</Default>

    )
}

module.exports = Index