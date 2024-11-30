import React from 'react'
import Menu from './parts/Menu';

const Faculties = () => {
    
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
  return (
    <>
    <div className='container'>
      <div className='row'>
        {studentFormated}
      </div>
    </div>
  </>
  )
}

export default Faculties;