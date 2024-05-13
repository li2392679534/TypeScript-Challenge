type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  readonly name: string;
  age: number;
}

// js
function readonly(todo) {
  const obj = {};
  for (const key in todo) {
    obj["readonly" + key] = todo[key];
  }

  return obj;
}
// 1 返回一个对象
// 2 遍历todo的key == [P in keyof T]
// 3 添加key的readonly关键字 ==  readonly [P in keyof T]
// 4 todo[key]赋值给obj[readonly  key]  ==  [P in keyof T]: T[P];
