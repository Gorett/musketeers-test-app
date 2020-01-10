import React, { useContext } from 'react';
import get from 'lodash.get';

import { ModalConductor } from '../components/ModalConductor';

import ModalContext from '../contexts/modal';
import { closeModal } from '../actions';

const ModalConductorContainer = () => {
    const { store, dispatch } = useContext(ModalContext);

    return <ModalConductor
        isModalOpen={get(store, 'isModalOpen', false)}
        title={get(store, 'title', '')}
        closeModal={() => dispatch(closeModal())}
    />
};

export default ModalConductorContainer;
