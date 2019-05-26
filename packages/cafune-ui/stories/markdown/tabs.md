## 引入
```javascript
import { Tabs } from 'components';
const TabPanel = Tabs.Panel;
```

## 使用

```jsx
class NormalTab extends Component {
  state = {
    activeId: 'a'
  }
  onChange = id =>  {
    this.setState({
      activeId: id,
    })
  }
  render({}, { activeId }) {
    return (
      <Tabs
        activeId={ activeId }
        onChange={ this.onChange }
      >
        <TabPanel
          label="A"
          id="a"
        >
          <div>A</div>
        </TabPanel>
        <TabPanel
          label="B"
          id="b"
        >
          <div>B</div>
        </TabPanel>
        <TabPanel
          label="C"
          id="c"
        >
          <div>C</div>
        </TabPanel>
    </Tabs>
    )
  }
}
```

单独使用Nav

```jsx
const tabsData = [
  {
    id: 'Sporttrey320',
    actived: true,
    label: '足球'
  },
  {
    id: 'Sporttrey307',
    actived: false,
    label: '篮球'
  },
  {
    id: 'Sporttrey327',
    actived: false,
    label: 'aa球'
  }
];
// ...
<Tabs tabs={tabsData} type="card" />
// ...
```

## Tabs 配置项
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| activeId | 当前激活id | string / number | - | - | 是 |
| type | 组件类型 | string | `'slider'` | `'round'` | 否 |
| onTabChange | tab 切换回调 | (id: string / number) => any | - | - | 否 |
| navClass | 自定义标签栏类名 | string | - | - | 否 |
| maxCount | 最大可容纳标签数 | number | 5 | - | 否 |
| tabs | 标签属性列表 | array | - | - | 否 |

## TabPanel
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| id | panel id | string / number | - | - | 是 |
| label | panel 对应标签名字 | string | - | - | 是 |
| className | 自定义panel 类名 | string | - | - | 否 |

## TabNav
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| tabsData | 标签属性列表 | array | - | - | 是 |
| type | 标签类型 | string | 'slider' | - | 否 |
| navClass | 自定义标签栏类名 | string | - | - | 否 |
| maxCount | 最大可容纳标签数 | number | 5 | - | 否 |
| onChange | 标签切换回调 | (id: string / number) => any | - | - | 否 |

## TabNav 的`tabsData`属性
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| id | panel id | string / number | - | - | 是 |
| label | panel 对应标签名字 | string | - | - | 是 |
| actived | 是否激活 | boolean | false | - | 是 |
| className | 标签自定义类名 | string | - | - | 是 |