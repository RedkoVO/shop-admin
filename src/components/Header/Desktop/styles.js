export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '70px',
    backgroundColor: '#fff'
  },
  toggleMenuBlock: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '250px',
    height: '100%',
    backgroundColor: '#263544'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px'
  },
  avatar: {
    padding: '0 10px',

    '& img': {
      width: '40px',
      borderRadius: '100%'
    }
  },
  wrCheckbox: {
    position: 'absolute',
    right: 0,
    width: '60px'
  },
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#323232'
      }
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 18,
    marginTop: -9,
    marginLeft: -21,
    border: '1px solid #fff',
    background: 'none',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  iOSIcon: {
    width: 16,
    height: 10,
    border: '2px solid #fff',
    borderRadius: '10px',
    boxShadow: 'none',
    background: 'none'
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1
    }
  }
})
