export default () => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  form: {
    width: '400px',
    padding: '30px',
    margin: 'auto',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)'
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 500
  },
  field: {
    marginBottom: '20px',
    height: '43px',
    width: '100%',
    border: 'none',
    fontSize: '16px',
    fontWeight: 400,
    padding: 0,
    borderBottom: '1px solid #ccc',

    '&:focus': {
      outline: 'none'
    },
    '&.input-error': {
      borderBottom: '1px solid red'
    }
  },
  button: {
    width: '100%',
    padding: '10px 16px',
    color: '#fff',
    fontSize: '20px',
    borderColor: '#4099ff',
    backgroundColor: '#4099ff',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      backgroundColor: '#2b8cfb'
    }
  }
})
