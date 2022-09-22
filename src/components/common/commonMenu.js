import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CommonMenu = ({ anchorEl, handleClose, open, menuItems }) => {
    return (
      <Menu
        id="common-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={handleClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

    )
}

export default CommonMenu
