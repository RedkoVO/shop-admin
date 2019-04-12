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
  id: {
    width: '50px'
  },
  login: {
    width: '300px'
  },
  role: {
    width: '75px'
  },
  created: {
    width: '300px'
  },
  showMoreIcon: {
    width: '20px',
    position: 'absolute',
    right: '20px',
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
      minWidth: '115px'
    }
  }
})
