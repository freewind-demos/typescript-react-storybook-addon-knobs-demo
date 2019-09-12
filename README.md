JavaScript React "storybook" "addon-knobs" Demo
================================================

'knobs'可以让我们方便的在storybook中修改某些参数。

注意：由于在`Select` component中使用了`useState`来保存selected value，当Knobs中的value改变之后，并不会改变state里的值。
所以需要在`Select`中使用`useEffect`来更新。

注意：使用`yarn`运行会报错，必须使用npm

```
npm install
npm run storybook
```
