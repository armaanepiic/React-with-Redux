let Person = (obj) => {
  console.log(obj);
  
  return (
    <div>
      {/* <p>Number: {Math.random()} </p> */}
      <p>
        Name : {obj.name} Age = {obj.age} years
      </p>
      <p>extra info: {obj.children}</p>
      
    </div>
  );
}
export default Person;