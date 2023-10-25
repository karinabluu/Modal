import { v4 as uuid } from 'uuid';

export const initialState = {
  items: [
    {
      id: uuid(),
      name: '안녕',
      boolean: true,
      selectTimes: [],
    },
    {
      id: uuid(),
      name: '표선',
      boolean: true,
      selectTimes: [],
    },
    {
      id: uuid(),
      name: 'Nabox',
      boolean: true,
      selectTimes: [],
    },
  ],
  modalOpen: false,
  selectedButtons: [],
};

// Action types
const OPEN_MODAL = 'rooms/OPEN_MODAL';
const CLOSE_MODAL = 'rooms/CLOSE_MODAL';
const SELECT_BUTTON = 'rooms/SELECT_BUTTON';
const UPDATE_SELECT_TIMES = 'rooms/UPDATE_SELECT_TIMES';

// Action creators for modal

export const openModal = () => {
  return { type: OPEN_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

export const selectButton = (button) => ({
  type: SELECT_BUTTON,
  payload: button,
});

export const updateSelectTimes = (roomname, selectTimes) => ({
  type: UPDATE_SELECT_TIMES,
  payload: { roomname, selectTimes },
});

// Reducer
const rooms = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalOpen: true }; // 모달 열기 처리

    case CLOSE_MODAL:
      return { ...state, modalOpen: false }; // 모달 닫기 처리

    case SELECT_BUTTON:
      const { payload: button } = action;
      return {
        ...state,
        selectedButtons: handleSelectedTimes(state.selectedButtons, button),
      };

    case UPDATE_SELECT_TIMES:
      const { roomname, selectTimes } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === roomname
            ? { ...item, selectedButtons: selectTimes }
            : item
        ),
      };

    default:
      return state;
  }
};

const handleSelectedTimes = (selectedButtons, button) => {
  // 수정
  if (selectedButtons.includes(button)) {
    return [];
  } else if (selectedButtons.length < 2) {
    return [...selectedButtons, button];
  } else {
    return [button];
  }
};

export default rooms;
