import { h, Component } from 'preact';
import style from './style';
import classNames from 'classnames';

export default class Panel extends Component {
  static displayName = 'TabPanel';
  render({ children, className, actived }) {
    const cx = classNames(style.tabPanel, className);
    return (
      <div class={cx} data-actived={actived ? 1 : 0}>
        {children}
      </div>
    );
  }
}
