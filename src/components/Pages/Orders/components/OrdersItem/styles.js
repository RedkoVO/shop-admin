import EditIcon from '../../../../../assets/images/edit.png'

export default theme => ({
  root: {
    position: 'relative',
    padding: '0 10px',
    marginBottom: '15px',
    minHeight: '60px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)',
    border: 'none',
    backgroundColor: '#fff'
  },
  shortContent: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    minHeight: '60px',

    [theme.breakpoints.down('lg')]: {
      alignItems: 'start',
      flexDirection: 'column'
    },

    '& .field': {
      padding: '10px 0'
    }
  },
  edit: {
    width: '15px',
    height: '15px',
    marginLeft: '10px',
    backgroundImage: `url(${EditIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0,
    cursor: 'pointer'
  },
  alowEdit: {
    display: 'flex',
    alignItems: 'center'
  },
  fieldEdit: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',

    '& input': {
      paddingLeft: '5px',
      height: '30px',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #e0e0e0'
    }
  },
  id: {
    width: '50px'
  },
  email: {
    width: '300px',

    [theme.breakpoints.down('lg')]: {
      width: 'inherit'
    }
  },
  phone: {
    width: '230px',

    [theme.breakpoints.down('lg')]: {
      width: 'inherit'
    }
  },
  name: {
    width: '240px',

    [theme.breakpoints.down('lg')]: {
      width: 'inherit'
    }
  },
  payed: {
    width: '100px',

    '& .green': {
      color: 'green'
    },
    '& .red': {
      color: 'red'
    }
  },
  wrRightButtons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '10px',

    [theme.breakpoints.down('lg')]: {
      top: '23px'
    }
  },
  remove: {
    width: '20px',
    marginRight: '20px',
    cursor: 'pointer'
  },
  wrConfirmationRemove: {
    marginRight: '20px',

    '& div': {
      marginBottom: '5px',
      cursor: 'pointer',

      '&:first-child': {
        color: 'red'
      },

      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  showMoreIcon: {
    width: '20px',
    right: '50px',
    cursor: 'pointer'
  },
  moreContent: {
    padding: '20px 0',
    borderTop: '2px solid #f0eff0'
  },
  moreItem: {
    paddingBottom: '10px',

    '& span': {
      display: 'inline-block',
      minWidth: '125px'
    }
  }
})
