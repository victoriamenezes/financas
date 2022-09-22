import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CommonMenu from './commonMenu';
// import CommonBadge from './commonBadge';

const notifications = [
    {
        id: 0,
        label: 'Primeira notificação'
    },
    {
        id: 1,
        label: 'Segunda notificação'
    },
];

const CommonBadge = ({ iconColor }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const newNotifications = `Você possui ${notifications.length} novas notificações!`;
    const noNotifications = 'Sem novas notificações';

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color="primary"
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    <Badge
                        badgeContent={notifications.length}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <CommonMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

export default CommonBadge
