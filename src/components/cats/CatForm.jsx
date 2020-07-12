import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomField from '../ui/CustomField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const validate = values => {
	const errors = {};
	const requiredFieldMessage = 'campo obligatorio';
	if (!values.name) {
		errors.name = requiredFieldMessage;
	}
	if (!values.age) {
		errors.age = requiredFieldMessage;
	}
	if (!values.breed) {
		errors.breed = requiredFieldMessage;
	}
	return errors;
};

const CatForm = ({ handleSubmit, manageDialog, dialogState, updateMode }) => {
	const dialogTitle = updateMode ? 'Actualizar gato' : 'Crear gato';
	return (
		<Dialog
			open={dialogState}
			onClose={() => manageDialog(false)}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

			<DialogContent>
				<form>
					<Field
						name="name"
						component={CustomField}
						placeholder="Nombre"
						title="Nombre:"
						type="text"
					/>
					<Field
						name="age"
						component={CustomField}
						placeholder="Edad"
						title="Edad"
						type="number"
					/>
					<Field
						name="breed"
						component={CustomField}
						placeholder="Raza"
						title="Raza"
						type="text"
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => manageDialog(false)} color="primary">
					Cancelar
				</Button>
				<Button onClick={() => handleSubmit()} color="primary">
					{dialogTitle}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default reduxForm({
	form: 'CatForm',
	validate,
	enableReinitialize: true,
})(CatForm);
