import EditIcon from '../../../../../assets/images/edit.png'

export default () => ({
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
    minHeight: '60px'
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
    marginLeft: '5px'
  },
  fieldPrice: {
    width: '70px'
  },
  fieldEditDescription: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',

    '& span': {
      width: '100%'
    }
  },
  id: {
    width: '50px'
  },
  price: {
    width: '230px'
  },
  title: {
    width: '320px'
  },
  created: {
    width: '300px'
  },
  image: {
    width: '40px',

    '& img': {
      width: '100%'
    }
  },
  wrRightButtons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '10px'
  },
  remove: {
    width: '20px',
    marginRight: '20px',
    cursor: 'pointer'
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
  },
  wrImageItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px'
  },
  imagesItem: {
    width: '40px'
  },
  removeItemImage: {
    width: '20px',
    marginLeft: '3px'
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
  }
})
