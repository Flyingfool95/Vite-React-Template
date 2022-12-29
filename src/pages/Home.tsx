import Modal from "../components/reusable/modal/Modal";

export default function Home() {
  return (
    <div>
      <h1>Template Vite React w/ Typescript</h1>

      <Modal buttonText="Hello modal">
        <div>
          <h2>Hello</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis saepe pariatur at nemo sequi.</p>
        </div>
      </Modal>
    </div>
  );
}
