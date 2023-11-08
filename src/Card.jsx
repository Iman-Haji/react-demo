const Card = ({ name, age, click }) => {
  return (
    <div className="card">
      <div style={age > 30 ? { background: "grey" } : { background: "pink" }} className="Card">
      </div>



      <h1>name: {name}</h1>
      <p className={age > 30 ? "pink-age" : "red-age"}>age: {age}</p>
      <button onClick={click}>.....</button>
    </div>
  );
};

export default Card;

/*function AgeOfUser({ age }) {
  return ((age === 80) ? <p>Your age is {age}</p> : <p>Please type out your age.</p>)
}
<AgeOfUser age={age} />;

 */