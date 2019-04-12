import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import DefaultHeader from '../../../containers/Header'
import DefaultNavMenu from '../../../components/NavMenu/Desktop'

export const PageLayout = ({
  content: Content,
  header: Header,
  navMenu: NavMenu,
  // footer: Footer,
  handleToogleMenu,
  isShowMenu,
  role,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Header
        handleToogleMenu={handleToogleMenu}
        isShowMenu={isShowMenu}
        {...rest}
      />
      <NavMenu isShowMenu={isShowMenu} {...rest} />
      <content className={cn('content', { hiddenMenu: !isShowMenu })}>
        <Content {...rest} />
      </content>
      {/* <Footer {...rest} /> */}
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  header: PropTypes.func.isRequired,
  navMenu: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired
  // footer: PropTypes.func.isRequired
}

PageLayout.defaultProps = {
  header: DefaultHeader,
  navMenu: DefaultNavMenu
  // footer: DefaultFooter
}

export default PageLayout
