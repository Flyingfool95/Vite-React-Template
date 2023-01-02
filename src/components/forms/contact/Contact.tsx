import "./Contact.scss";

/* Component - email form */
export default function Contact() {

  //Functions
  const sendEmail = (e: any) => {
    e.preventDefault();

    //Input values
    const email = e.target[0].value;
    const name = e.target[1].value;
    const message = e.target[2].value;

    console.log(`Sending email to: ${email} - ${name}. Saying: ${message}`);
  }

  /* JSX */
  return (
    <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
      <label>
        Email
        <input type="email" name="email" id="email" placeholder="Email" />
      </label>
      <label>
        Name
        <input type="text" name="name" id="name" placeholder="Name" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" placeholder="Message" />
      </label>

      <label>
        <input type="submit" value="Send" />
      </label>
    </form>
  )
}
