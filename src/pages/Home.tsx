import Modal from "../components/reusable/modal/Modal";

export default function Home() {
  return (
    <div>
      <h1>Template Vite React w/ Typescript</h1>

      <Modal buttonText="Hello modal">
        <div>
          <h2>Hello</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis alias autem vitae?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tempore beatae doloribus nemo tempora tenetur placeat odio? Neque, eos laudantium.</p>
        </div>
      </Modal>
    </div>
  );
}
