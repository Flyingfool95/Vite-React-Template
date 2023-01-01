import Accordion from "../components/reusable/accordion/Accordion";

export default function Home() {

  return (
    <div>
      <h1>Template Vite React w/ Typescript</h1>

    <Accordion triggerText="Accordion trigger">
      <div>
        <h2>Hello</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta laboriosam eius blanditiis voluptates accusantium tempora ratione ad expedita illum.</p>
      </div>
    </Accordion>
    </div>
  );
}
