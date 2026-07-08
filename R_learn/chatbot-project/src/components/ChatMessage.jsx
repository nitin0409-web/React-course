import RobotProfileImage from "../assets/image.png";
import UserProfileImage from "../assets/user.png";

// destructuring  shortcut is heavily applyed in the code below.
export function ChatMessage({ message, sender }) {
  /*const message = props.message;
            const sender = props.sender;
            line 35 does the same thing it  is called destructuring */
  //const { message, sender } = props; line 31 was the shortcut for this line of code.

  /*
          if (sender === "robot") {
            return (
            <div>
              <img src="robot.png" width="50" />
              {message} 
              </div> 
              the code above will give a picture represent robot ansering the question asked by user 
            );
          }
            */
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>

    /* in the code above it  will give a picture representing user and command asked by user
            as the div aquires the entire line it self 
            attributes are saved in the components as props*/
  );
}

//if we use setChatMessage data to update, React will update the HTML
//array[0] rep the current state and arr[1]rep the updater function
// in the code above we  are storing values in arr we are forming the  objects.
//  function sendMessage() {
//    setChatMessages([
//     ...ChatMessages,
//     {
//       message: 'text',
//       sender: 'user',
//       id: crypto.randomUUID()
//     }
//    ]);
//...ChatMessages spread operator
// in React we should not modify data directly, we always create a copy, and then modify the copy.
// state is the connected data to html when we update state html also updates
//mapping and event handlers are also used
