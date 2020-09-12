import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'


function App() {
    return (
        <div className="container text-center">
            <h1 className=" text-capitalize text-center mt-5">Pictures Album</h1>
            <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card" >
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
      <img className='card-img-top' src="https://picsum.photos/536/354"/>

      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <img className='card-img-top' src="https://picsum.photos/536/354"/>

    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <div class="card-body">

  <img className='card-img-top' src="https://picsum.photos/536/354"/>
  
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
  </div>
</div>

           
        </div>
    )
}

export default App
