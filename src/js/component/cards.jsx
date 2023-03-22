import React from "react";

const card = () => {
  return (
    <div className="container col-sm-3 my-3 mb-4">
      <div className="card">
        <img
          src="https://i.ibb.co/sJ2pRgk/imagen-2023-03-21-213511846.png"
          className="card-img-top "
          alt="generic image"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Never gonna give you up <br></br>Never gonna let you down<br></br> Never gonna run
            <br></br>around and desert you<br></br> Never gonna make you cry<br></br> Never gonna say
            goodbye <br></br>Never gonna tell a lie and hurt you
          </p>
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            className="btn btn-primary"
          >
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
