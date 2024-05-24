import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { Model } from "mongoose";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Model.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Model.Open>
      <Model.Window name="cabin-form">
        <CreateCabinForm />
      </Model.Window> */}
    </Modal>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel((open) => !open)}>
//         Add New Cabin
//       </Button>
//       {isOpenModel && (
//         <Modal onCloseModel={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
