import React, { useState } from 'react';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  openModal,
  closeModal,
  selectButton,
  updateSelectTimes,
} from '../../../redux/modules/rooms';

function ModalDetail() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.rooms.modalOpen);
  const selectedButtons = useSelector((state) => state.rooms.selectedButtons);
  const initialState = useSelector((state) => state.rooms.items);
  const [roomname, roomnameSet] = useState('');

  const handleOpenModal = (item) => {
    dispatch(openModal());
    roomnameSet(item.name);
    console.log('room name:', item.name);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(selectButton([])); // (수정) 선택된 버튼을 빈 배열로 초기화
  };

  const handleButtonClick = (hour) => {
    dispatch(selectButton(hour));
    console.log('Selected button value:', hour);
  };

  const handleSelectedTimes = (roomname, updatedClosedTimes) => {
    dispatch(updateSelectTimes(roomname, updatedClosedTimes));
  };

  const timeSlots = Array.from({ length: 12 }, (_, index) => {
    const hour = index + 9;
    return {
      label: `${hour < 10 ? '0' + hour : hour}:00`,
      value: index,
    };
  });

  return (
    <>
      {initialState.map((item) => (
        <button key={item.id} onClick={() => handleOpenModal(item)}>
          {item.name}
        </button>
      ))}

      <Modal
        open={modalOpen}
        close={handleCloseModal}
        roomname={roomname}
        selectedButtons={selectedButtons}
        updateSelectTimes={handleSelectedTimes} // 변경된 부분
      >
        {timeSlots.map((timeSlot) => (
          <button
            key={timeSlot.value}
            style={{
              backgroundColor:
                selectedButtons && selectedButtons.includes(timeSlot.value)
                  ? 'red'
                  : 'rgba(128, 128, 128, 0.3)',
              color:
                selectedButtons && selectedButtons.includes(timeSlot.value)
                  ? 'white'
                  : 'black',
            }}
            onClick={() => handleButtonClick(timeSlot.value)}
          >
            {timeSlot.label}
          </button>
        ))}
      </Modal>
    </>
  );
}

export default ModalDetail;
