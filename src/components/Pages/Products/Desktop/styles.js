export default () => ({
  root: {
    paddingLeft: '20px'
  },
  headerProducts: {
    position: 'relative',
    padding: '0 10px',
    marginBottom: '15px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)',
    border: 'none',
    backgroundColor: '#fff'
  },
  wrButtons: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    minHeight: '60px'
  },
  addProduct: {
    padding: '10px 20px',
    color: '#fff',
    borderRadius: '20px',
    backgroundColor: '#2ed8b6',
    cursor: 'pointer'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',

    '& ul': {
      display: 'inline-block',
      paddingLeft: 0,
      margin: '20px 0',
      borderRadius: '4px',

      '& li': {
        display: 'inline',

        '& a': {
          position: 'relative',
          float: 'left',
          padding: '6px 12px',
          lineHeight: '1.4',
          textDecoration: 'none',
          color: '#337ab7',
          backgroundColor: '#fff',
          border: '1px solid #ddd',

          '&:first-child': {
            marginLeft: 0
          }
        },
        '& span': {
          position: 'relative',
          float: 'left',
          padding: '6px 12px',
          lineHeight: '1.4',
          textDecoration: 'none',
          color: '#337ab7',
          backgroundColor: '#fff',
          border: '1px solid #ddd',

          '&:first-child': {
            marginLeft: 0
          }
        }
      }
    },

    '& .active': {
      '& a': {
        color: '#fff',
        backgroundColor: '#337ab7',
        borderColor: '#337ab7',
        cursor: 'default',
        zIndex: 3
      }
    }
  }
})
