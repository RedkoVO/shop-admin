import compose from 'recompose/compose'
import { branch, renderComponent, pure } from 'recompose'

import withDeviceTarget from '../../hocs/withDeviceTarget'

import NavMenuDesktop from './Desktop'
import NavMenuMobile from './Mobile'

export default compose(
  withDeviceTarget,
  branch(({ isMobile }) => isMobile, renderComponent(NavMenuMobile)),
  pure
)(NavMenuDesktop)
