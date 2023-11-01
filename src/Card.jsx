const Card = (props) => {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <p>age: {props.age}</p>
      <p>title: {props.title}</p>
    </div>
  );
};

export default Card;