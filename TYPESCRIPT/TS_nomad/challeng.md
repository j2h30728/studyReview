### 타입스크립트 챌린지 Day 4 과제

현재까지 배운 것을 토대로, 두 함수에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요

- [x] last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
- [x] prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

```ts
type Last = <T>(arr: T[]) => T;
const last: Last = arr => arr[arr.length];

type Prepend = <T, V>(arr: T[], item: V) => (T | V)[];
const prepend: Prepend = (arr, item) => [item, ...arr];

//연습
//1
type Last2 = {
  <T>(arr: T[]): T;
};
const last2: Last2 = arr => {
  return arr[arr.length - 1];
};
//2
function last3<T>(arr: T[]) {
  return arr[arr.length - 1];
}
//3
type Prepend1 = {
  <T, V>(arr: T[], item: V): (T | V)[];
};
//4
function prepend2<T, V>(arr: T[], item: V) {
  return [item, ...arr];
}
```

### [노마드스터디 챌린지 Day 10 과제](https://huchu.link/bKjMJGc)

현재까지 배운 것을 토대로, 두 함수에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요

- [x] last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
- [x] prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
- [x] mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
- [x] count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
- [x] findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
- [x] slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.

```ts
type Last = <T>(arr: T[]) => T;
const last: Last = arr => arr[arr.length - 1];

type Prepend = {
  <T, V>(arr: T[], item: V): (T | V)[];
};
const prepend: Prepend = (arr, item) => [item, ...arr];
// function prepend<T,V>(arr:T[],item:V){
//     return [item,...arr]
// }

type Mix = <T, V>(arr1: T[], arr2: V[]) => (T | V)[];
const mix: Mix = (arr1, arr2) => [...arr1, ...arr2];

type Count = {
  <T>(arr: T[]): number;
};
const count: Count = arr => arr.length;

type FindIndex = <T>(arr: T[], item: T) => number | null;
const findIndex: FindIndex = (arr, item) =>
  arr.indexOf(item) < 0 ? null : arr.indexOf(item);

type Slice = {
  <T>(arr: T[], startIndex: number, endIndex?: number): T[];
};
const slice: Slice = (arr, startIndex, endIndex) => {
  if (endIndex) {
    return arr.filter((x, idx) => idx >= startIndex && idx <= endIndex);
  }
  return arr.filter((x, idx) => idx >= startIndex);
};
```

### [Day9 타입스크립트 챌린지](https://huchu.link/GHpXODd)

=> [수정](https://huchu.link/b1uHtBB)

```ts
//수정전
interface LocalStorageAPI<T> {
  [key: string]: T;
}
interface GeolocationAPI {
  getCurrentPostion(
    successFn: void,
    errorFn?: void,
    optionObj?: PositionOtions
  ): void;

  watchPosition(success: void, error?: void, option?: {}): number;

  clearWatch(id: number): void;
}
interface PositionOtions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

class LocalStorage<T> {
  private storage: LocalStorageAPI<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {}
}

const teststorage = new LocalStorage<boolean>();
teststorage.setItem("test1", true);
teststorage.getItem("test2");
```

```ts
//수정후
interface LocalStorageAPI<T> {
  [key: string]: T;
}
interface GeolocationAPI {
  getCurrentPostion(
    successFn: void,
    errorFn?: void,
    optionObj?: PositionOtions
  ): void;

  watchPosition(success: void, error?: void, option?: {}): number;

  clearWatch(id: number): void;
}
interface PositionOtions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

abstract class LocalStorage<T> {
  constructor(protected storage: LocalStorageAPI<T>) {}

  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}
class SuperStorage<T> extends LocalStorage<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
const test = new SuperStorage<Boolean>({
  test: true,
  "123": false,
  sdfsdf: false,
});
console.log(test);
console.log(test.clear());
console.log(test);
console.log(test.setItem("111", true));
console.log(test);
```

### [노마드 10주 스터디 Day11 코드 챌린지](https://huchu.link/bFMNRVc)

Challenge goals:
타입스크립트의 클래스를 이용하여 Dict (사전. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

- [x] add: 단어를 추가함.
- [x] get: 단어의 정의를 리턴함.
- [x] delete: 단어를 삭제함.
- [x] update: 단어를 업데이트 함.
- [x] showAll: 사전 단어를 모두 보여줌.
- [x] count: 사전 단어들의 총 갯수를 리턴함.
- [x] upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
- [x] exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
- [x] bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
- [x] bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]

```ts
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(word: Word | string) {
    if (typeof word === "string") {
      delete this.words[word];
    } else {
      delete this.words[word.term];
    }
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.definition;
    }
  }
  showAll() {
    console.log(this.words);
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert(word: Word) {
    this.words[word.term] = word.definition;
  }
  exists(word: Word) {
    return Object.keys(this.words).includes(word.term);
  }
  bulkAdd(words: Word[]) {
    words.map(word => (this.words[word.term] = word.definition));
  }
  bulkDelete(words: string[]) {
    words.map(word => delete this.words[word]);
  }
}

class Word {
  constructor(public term: string, public definition: string) {}
}

// 적용 예시 코드
const kimchi = new Word("김치", "한국의 음식");
const zzazang = new Word("짜짱면", "춘장으로 만든 음식");
const ramen = new Word("라면", "인스턴트 식품");
const dic = new Dict();
dic.add(kimchi);
dic.add(zzazang);
dic.bulkDelete(["김치", "짜짱면"]);
dic.bulkAdd([zzazang, kimchi, ramen]);
dic.update({ term: "짜짱면", definition: "먹고싶다" });
dic.upsert({ term: "짬뽕", definition: "짬뽕이없었네" });
dic.upsert({ term: "짜짱면", definition: "바뀌겠지?" });
console.log(dic.count());
console.log(dic);
dic.showAll();
console.log(dic.get("김치"));
dic.delete("김치");
dic.delete({ term: "라면", definition: "인스턴트 식품" });
dic.showAll();
```

## 4.2 Interfaces

### readonly :읽기전용

`public` : 외부에서 접근 하기 위함
public 일지라도 readonly를 부여하면 수정되지 않음.
데이터를 덮어쓰는것을 방지하기 위해 사용하며, 오로지 읽기전용으로 변경시키는 property임. : 데이터 보호
**컴파일된 자바스크립트에서는 보이지 않음**

```ts
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}
const kimchi = new Word("김치", "한국의 음식");

kimchi.term = "xxx"; // error : Cannot assign to 'term' because it is a read-only property.
```

### [Static Members](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)

클래스에는 static 멤버가 있을 수 있음.
이 멤버는 클래스의 특정 인스턴스와 연결되지 않는다.
클래스 생성자 객체 자체를 통해 액세스 가능.
static 멤버는 동일한 public, protected 및 private 과 함께 사용도 가능.

```ts
class MyClass {
  static x = 10;
  static printX() {
    console.log("Print", MyClass.x);
  }
}
console.log(MyClass.x); // Print 10
MyClass.printX(); // 10
```

### [타입스크립트 챌린지 Day 14 졸업 과제](https://huchu.link/wKIaie3)

Goal of the Challenge:
Your task is to translate the JSDoc comments of the following files to Typescript Type Declarations.
여러분들의 목표는 다음 JSDoc 파일들의 주석 부분들을 타입스크립트 타입 정의로 바꾸는 것입니다.
head.js: https://github.com/lodash/lodash/blob/master/head.js
hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js
isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js
toString.js: https://github.com/lodash/lodash/blob/master/toString.js
split.js: https://github.com/lodash/lodash/blob/master/split.js
hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js
filter.js: https://github.com/lodash/lodash/blob/master/filter.js
every.js: https://github.com/lodash/lodash/blob/master/every.js
map.js: https://github.com/lodash/lodash/blob/master/map.js
함수를 실행시키는 것까지 하실 필요는 없습니다. 타입 정의만 만드시면 충분합니다.

```ts
declare module "lodash" {
function head<T>(array:T[]):(T|undefined)

type Obj<T> = {
    [key:string]:T
}
function hasIn<T>(object:Obj<T>, key:string):boolean
function isBoolean<T>(value:T):boolean
function isSymbol<T>(value:T):boolean
function toString<T>(value:T):string
function split(str:string,separator:RegExp|string,limit:number):string[]
function hasPath<T>(object:Obj<T>,path:string[]|string):boolean

type Pre<T> = (value:T,index:number,array:T[])=>boolean

function filter<T>(array:unknown[],predicate:Pre<T>):unknown[]
function every<T>(array:unknown[],predicate:Pre<T>):boolean

type Iteratee<T> = (value:T, index:number, array:T[])=>T

function map<T>(array:unknown[],iteratee:Iteratee<T>):T[]
}
```
