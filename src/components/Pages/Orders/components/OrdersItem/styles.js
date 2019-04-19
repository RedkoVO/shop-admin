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
  id: {
    width: '50px'
  },
  email: {
    width: '330px'
  },
  phone: {
    width: '230px'
  },
  name: {
    width: '265px'
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
  }
})
