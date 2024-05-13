type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// ts
// 1 返回一个对象 == {}
// 2 遍历Keys == [P in K]
// https://juejin.cn/post/7105778922851139598#heading-3
// 3 判断是否有这个key == K extends keyof T(泛型约束)
// https://yayujs.com/handbook/Generics.html#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F-generic-constraints
// 4 如果有就添加到对象中 == T[P](索引操作符)
// https://yayujs.com/handbook/IndexedAccessTypes.html

// js
// 对比学习法
function MyPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (todo.hasOwnProperty(key)) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

// 1 返回一个对象
// 2 遍历Keys
// 3 判断是否有这个key
// 4 如果有就添加到对象中
