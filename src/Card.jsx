const Card = ({ name, age, click }) => {
  return (
    <div className="card">
      <h1>name: {name}</h1>
      <p>age: {age}</p>
      <button onClick={click}>.....</button>
    </div>
  );
};

export default Card;