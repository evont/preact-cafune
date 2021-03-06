import { Component } from 'preact';
import PropTypes from 'prop-types';
import Tab from './components/tab';
import cx from 'classnames';
import { isBrowser } from '../../util/isomorphic';

function setTransform(obj, offsetLeft) {
  obj.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.msTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.MozTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.webkitTransform = `translate3d(${offsetLeft}px, 0, 0)`;
}

const defaultMax = 5;
export default class Nav extends Component {
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 当前激活id
     */
    tabsData: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      actived: PropTypes.bool.isRequired,
      className: PropTypes.string,
      visable: PropTypes.bool
    }).isRequired,
    /**
     * 组件类型
     */
    type: PropTypes.oneOf(['slider', 'round', 'card']),
    /**
     * 切换tab时回调
     */
    onChange: PropTypes.func,
    /**
     * 自定义标签栏类名
     */
    navClass: PropTypes.string,
    /**
     * 最大可容纳标签数
     */
    maxCount: PropTypes.number
  };
  static defaultProps = {
    type: 'slider',
    prefix: 'caf-tabs-nav',
    maxCount: 5
  };
  onTabSelected = id => {
    const { onChange } = this.props;
    onChange(id);
  };
  resizing = () => {
    this.positionInkBar();
  };
  componentDidMount() {
    const { type = 'slider' } = this.props;
    if (type === 'slider' && isBrowser) {
      this.positionInkBar();
      window.addEventListener('resize', this.resizing);
    }
  }
  componentDidUpdate() {
    const { type = 'slider' } = this.props;
    if (type === 'slider' && isBrowser) {
      this.positionInkBar();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizing);
  }
  // 定位底部指示线
  positionInkBar() {
    const { inkBar, activeTab } = this;
    if (activeTab) {
      const { base } = activeTab;
      const itemWidth = base.offsetWidth;
      const percent = 0.6;
      inkBar.style.width = `${itemWidth * percent}px`;
      const offsetLeft = itemWidth * ((1 - percent) / 2) + base.offsetLeft;
      setTransform(inkBar, offsetLeft);
    }
  }
  renderTabs() {
    const { tabsData, maxCount } = this.props;
    const tabs = [];
    tabsData.forEach(item => {
      let ref;
      if (item.actived) {
        ref = c => (this.activeTab = c);
      }
      let tabStyle = {};
      if (maxCount !== defaultMax) {
        tabStyle.style = `min-width:${(1 / maxCount) * 100}%`;
      }
      tabs.push(
        <Tab
          {...item}
          id={item.id}
          onSelected={this.onTabSelected}
          ref={ref}
          tabStyle={tabStyle}
          key={item.key}
        >
          {item.label}
        </Tab>
      );
    });
    return tabs;
  }
  render({ prefix, className, navClass, type, ...restProps }) {
    const cls = cx(
      prefix,
      className,
      {
        [`${prefix}__slider`]: type === 'slider',
        [`${prefix}__round`]: type === 'round',
        [`${prefix}__card`]: type === 'card'
      },
      navClass
    );
    return (
      <div className={cls} {...restProps}>
        <div className={`${prefix}-content`}>{this.renderTabs()}</div>
        <span className={`${prefix}-ink`} ref={c => (this.inkBar = c)} />
      </div>
    );
  }
}
