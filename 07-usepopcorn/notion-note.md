# 目的
- 在电影详情页展示时，同步更新浏览器标签标题，提升多标签场景下的可识别性。
- 将应用默认页面标题从通用文案调整为项目名，统一品牌展示。

# 思路
- 在 `MovieDetails` 组件中新增副作用监听 `title`，当电影详情数据加载完成后动态写入 `document.title`。
- 通过 `if (!title) return` 先做空值保护，避免初始加载阶段写入无效标题。
- 保持改动最小化：仅增强页面元信息，不改动现有数据请求与渲染逻辑。

# 代码
### 变更文件
- `src/App.js`
- `public/index.html`

### 关键代码片段
```js
useEffect(() => {
  if (!title) return;
  document.title = `Movie | ${title}`;
}, [title]);
```

```html
<title>usePopcorn</title>
```

### 注意事项
- 当前只在进入详情页时设置标题，关闭详情页后不会自动恢复为默认标题。
- 若后续需要更完整体验，可在详情组件卸载时恢复基础标题（如 `usePopcorn`）。
- 暂无其他回归风险。
