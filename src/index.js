import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const students = [
  		{
  			name:"arjun",
  			email:"asdf@asdf.com",
  			mobile:123123123,
  			spi:1.2,
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
  		},
  		{
  			name:"bala",
  			email:"bala@asdf.com",
  			mobile:3213213123,
  			spi:2.3,
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  		},
  		{
  			name:"darshan",
  			email:"darshan@asdf.com",
  			mobile:345345345345,
  			spi:1.8,
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
  		},
      {
  			name:"bala",
  			email:"bala@asdf.com",
  			mobile:3213213123,
  			spi:2.3,
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  		},
  		{
  			name:"darshan",
  			email:"darshan@asdf.com",
  			mobile:345345345345,
  			spi:1.8,
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
  		},
  	];
const studentFormated = students.map((stu)=>{
  return(
    <div className='col-4 my-2'>
        <div class="card">
        <img src={ stu.image } class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{ stu.name }</h5>
          <p class="card-text">M: {stu.mobile}</p>
          <p class="card-text">E: {stu.email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
});

root.render(
  <div className='container'>
    <div className='row'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
    <div className='row'>
      {studentFormated}
    </div>
  </div>
);