import React from "react";

const jumbotron = () => {
  return (
    <div className="p-5 mt-4 mb-4 bg-secondary bg-opacity-10 rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
          aliquid reprehenderit, dicta aperiam asperiores officiis laudantium,
          et fugiat non rem mollitia quod animi doloremque, magni excepturi
          dolore error! Nesciunt!
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to Action!
        </button>
      </div>
    </div>
  );
};

export default jumbotron;
