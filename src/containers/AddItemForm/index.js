import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddItemForm extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.open || false}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Выставить аккаунт на продажу</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Заголовок"
                        type="text"
                        fullWidth
                        multiline
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Описание"
                        type="text"
                        rows="4"
                        fullWidth
                        multiline
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Цена"
                        type="text"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={this.props.handleClose} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}