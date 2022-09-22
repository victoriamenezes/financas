
export const dashboardStyles = {
  drawer: {
    width: 320,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 320,
      boxSizing: 'border-box',
      // backgroundColor: '#E0E6EE',
      color: '#E0E6EE',
      backgroundColor: '#0D3B66',
      // borderRadius: '16px',
      boxShadow: '0 4px 30px #0D3B66',
      backdropFilter: 'blur(4.1px)',
      webkitBackdropFilter: 'blur(4.1px)',
    },
    '& .Mui-selected': {
      color: 'green'
    },
  },
  icons: {
    color:'#E0E6EE',
    marginLeft: '20px'
  },
  text: {
    fontfamily: 'Encode Sans Expanded',

    '& span': {
      marginLeft: '-10px',
      fontWeight: '600',
      fontsize: '16px',
      fontfamily: 'Encode Sans Expanded'
    }
  }
};
