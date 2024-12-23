function Biodata(obj) {
  console.log(obj);
    const { name, age, mobile, occupation, skills, interests } = obj;
  return (
    <div className="biodata">
      <h1>Biodata of {name}</h1>
      <div className="personal-info">
        <p>Age: {age}</p>
        {mobile && <p>Mobile: {mobile}</p>}
        <p>Occupation: {occupation}</p>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>My Interests</h2>
        <ul>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Biodata;
