import React from 'react';
import CatForm from './CatForm';

const CatModal = ({ cat, modalState, manageModal, deleteCat, onSubmit }) => {
	if (modalState) {
		return <CatForm onSubmit={onSubmit} />;
	} else return null;
};

export default CatModal;
