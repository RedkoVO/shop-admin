export default () => ({
  root: {
    paddingLeft: '20px'
  },
  header: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    border: 'none',
    padding: '0 10px',
    position: 'relative',
    minHeight: '25px',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)',
    marginBottom: '15px',
    borderRadius: '5px',
    backgroundColor: '#fff'
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
  sort: {
    width: '20px',
    cursor: 'pointer',

    '& img': {
      width: '100%'
    }
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
