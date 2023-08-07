const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`hello`);
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <br />
        <label>
          Breed: <input type="text" name="breed" />
        </label>
        <br />
        <label>
          Image: <input type="url" name="image" />
        </label>
        <br />
        <label>
          Status:
          <select id="status" name="status" required>
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <br />
        <label>
          Team:
          <select id="team" name="team" required>
            <option>no options rn sowwie</option>
          </select>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
