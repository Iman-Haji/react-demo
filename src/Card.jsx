const Card = ({ name, age, title, number }) => {
  return (
    <div>
      <h1>name: {name}</h1>
      <p>age: {age}</p>
      <p>title: {title}</p>
      <p>id: {number}</p>
    </div>
  );
};

export default Card;