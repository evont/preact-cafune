# Button - 按钮

## 引入
```jsx
import { Button } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-btn'` | - | ❌ |
| type | 按钮类型 | string | `'default'` | `'default'`,`'primary'`,`'warning'` | ❌ |
| ghost | 是否为幽灵按钮 | bool | `false` | - | ❌ |
| size | 按钮尺寸 | string | `'normal'` | `'large'`,`'normal'`,`'small'`,`'tiny'` | ❌ |
| icon | 按钮图标（加载状态时会被加载图标覆盖） | <a class="caf-markdown-hover" data-desc="{ type: union ❌,position: union ❌ }">custom</a> | - | - | ❌ |
| disabled | 是否禁用 | bool | `false` | - | ❌ |
| loading | 是否处于加载状态 | bool | `false` | - | ❌ |
| loadingInfo | 加载图标信息 | <a class="caf-markdown-hover" data-desc="{ type: enum ❌,color: string ❌,size: string ❌ }">custom</a> | - | - | ❌ |
| gradient | 背景渐变 | <a class="caf-markdown-hover" data-desc="{ angle: number ❌,from: string ❌,to: string ❌ }">custom</a> | - | - | ❌ |
| radius | 圆角，若为`true`，则为全圆角矩形按钮，若为`false`，则为直角矩形，若为`String`类型。则为圆角尺寸，不指定时则使用默认圆角 | bool/string | - | - | ❌ |
| block | 是否为块级元素 | bool | `false` | - | ❌ |
| onClick | 点击事件 | func | - | - | ❌ |
