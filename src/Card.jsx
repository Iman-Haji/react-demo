const Card = ({ name, age, title, click }) => {
  return (
    <div
      style={{ background: age > 30 ? "lightgrey" : "#663980" }}
      className="card"
    >
      <h2>Name: {name}</h2>
      <p>Title: {title}</p>
      <p className={age > 30 ? "purple-age" : "blue-age"}>Age: {age}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;

/*function AgeOfUser({ age }) {
  return ((age === 80) ? <p>Your age is {age}</p> : <p>Please type out your age.</p>)
}
<AgeOfUser age={age} />;

 */