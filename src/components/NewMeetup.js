import { useNavigate } from "react-router-dom";
import NewMeetupForm from "./meetups/NewMeetupForm";

const NewMeetup = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-ec2b1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
