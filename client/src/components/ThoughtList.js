import React from 'react';

const styles = {
    list: {
        padding: '2%',
        margin: '2%',
        textAlign: "center",
    }
}

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>Nothing yet...</h3>;
  }

  return (
    <div style={styles.list}>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            {/* <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.thoughtAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {thought.createdAt}
              </span>
            </h4> */}
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;