import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * 动作面板
 */
class ActionSheet extends Component {
  static defaultProps = {
    prefix: 'caf-actsheet',
    isShow: false,
    showMask: false,
  }
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 面板开启状态
      */
    isShow: PropTypes.bool.isRequired,
    /**
     * 是否显示遮罩
      */
    showMask: PropTypes.bool,
    /**
     * 是否在点击遮罩后关闭
      */
    closeOnClickMask: PropTypes.bool
  }
  render({ prefix, isShow, showMask }) {
    return isShow ? <div class={prefix}>
      { showMask && <div class={`${prefix}-mask`} /> } 
    </div> : null;
  }
}
export default ActionSheet;
