import React from "react";

const Lists = (props) => {
  const { fav } = props;
  return (
    <div className="container">
      <div className="row">
        {fav.map((person, index) => {
          return (
            <div className="person col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="card">
                <img class="img" src={person.image} />
                <div class="card-description">
                  <h3>{person.title}</h3>
                  <p>{person.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
