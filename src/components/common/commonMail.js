import React from 'react'
import Badge from '@mui/material/Badge';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CommonMenu from './commonMenu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import CommonBadge from './commonBadge';

const mail = [
    {
        id: 0,
        label: 'Mensagem 1'
    },
    {
        id: 1,
        label: 'Mensagem 2'
    },
];

const CommonMail = ({ iconColor }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const newMail = `Você possui ${mail.length} novas mensagens!`;
    const noMail = 'Sem novas mensagens';

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={mail.length ? newMail : noMail}>
                <IconButton
                    color="primary"
                    onClick={mail.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    <Badge
                        badgeContent={mail.length}
                        color="error"
                    >
                        <MailOutlineIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <CommonMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={mail}
            />
        </div>
    )
}

export default CommonMail
