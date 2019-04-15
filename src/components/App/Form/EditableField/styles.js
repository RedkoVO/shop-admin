import EditIcon from '../../../../assets/images/edit.png'
import SaveIcon from '../../../../assets/images/save.png'

export default () => ({
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
  submit: {
    width: '15px',
    height: '15px',
    marginLeft: '10px',
    backgroundImage: `url(${SaveIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0,
    border: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  }
})
