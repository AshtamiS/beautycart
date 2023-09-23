import React from 'react'


function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
    <img
              class="m-2"
              alt=""
              src="data:image/jpeg;base64,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"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
      <a class="navbar-brand" href="/"><h2 class="display-5" >   BEAUTY FACTORY</h2></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <button  class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>

    </div>
    
  )
}

export default Header