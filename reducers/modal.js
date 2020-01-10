export const initialState = { isModalOpen: false, title: 'Lending a book away' };

const reducer = (state, action) => {
    switch (action.type) {
        case "CLOSE_MODAL":
            return { ...state, isModalOpen: false };
        case "OPEN_MODAL":
            return { ...state, isModalOpen: true };
        default:
            return state;
    }
};

export default reducer;
