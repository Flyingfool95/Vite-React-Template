import AutoModal from "../components/reusable/auto-modal/AutoModal";
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

          <img src="https://images.unsplash.com/photo-1672106157109-056c567e3833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80" alt="img" />
        </div>
      </Modal>

      <AutoModal modalRef="test-modal-1">
        <h2>Hello</h2>
      </AutoModal>
    </div>
  );
}
