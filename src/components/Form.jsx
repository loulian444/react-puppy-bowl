import { useEffect, useState } from "react";

const Form = ({ apiUrl }) => {
  const [newPuppy, setNewPuppy] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const submittedPuppy = {
      name: event.target.name.value,
      breed: event.target.breed.value,
      imageUrl: event.target.image.value,
      status: event.target.status.value,
    };

    setNewPuppy(submittedPuppy);
  };

  useEffect(() => {
    const addPuppy = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPuppy),
        });
        const result = await response.json();

        console.log(result);
      } catch (error) {
        alert(error);
      }
    };

    newPuppy ? addPuppy() : null;
  }, [newPuppy]);

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
          Image: <input type="text" name="image" />
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
