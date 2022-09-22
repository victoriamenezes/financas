import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CommonButton from './commonButton';

const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {

  const modalStyles = {
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '15px',
        '.MuiInput-root': {
            marginBottom: '20px',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'end',
    }
};

    return (
        <Modal open={open} onClose={onClose} >
            <Box sx={modalStyles.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyles.buttons}>
                    <CommonButton
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Enviar
                    </CommonButton>
                    <CommonButton onClick={onClose}>Cancelar</CommonButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal
