import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Modal from "../commons/components/Modals/Modal";
import ModalDetail from "../commons/components/Modals/ModalDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* / === localhost:3000 */}
        <Route path="/" element={<ModalDetail />} />

        {/* /detail/:id === localhost:3000/detail/{:id}에서는 <Detail/>컴포넌트가 보임 */}
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
