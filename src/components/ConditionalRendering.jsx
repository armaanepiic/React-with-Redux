/*
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + "✅"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}
  */
/*
function Item({ name, isPacked }) {
  if (isPacked)
    return <li className="item">{name} ✅</li>;
  else
    return <li className="item">{name}</li>;
}
    */
/*
function Item({ name, isPacked }) {
  if (isPacked) return null;
  else
    return <li className="item">{name}</li>;
}
    */
/*
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name+"✅":name}
    </li>
  )
}
  */
/*
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>{name+" ✅"}</del>
      ) : (
          name
      )}
    </li>
  );
}
  */
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && " ✅"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
