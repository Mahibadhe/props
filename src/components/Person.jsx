const Person = (props) => {

    const {name, city} = props;

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>City: {city}</h3>
      <hr />
    </div>
  );
};
export default Person;
