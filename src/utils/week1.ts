//例題
//文字列を受け取ってそれをコンソールに表示する関数
export const sample = (text: string) => {
  console.log(text)
}
//必ずアロー関数で記述すること
//変数はできる限り const を用いること
//練習問題1
//二つの文字列を引数にして、それぞれの文字列の長さを足した値を返す関数を作成し、コンソールに表示しなさい
//(例) 引数: "aaa", "bbb"; 結果: 6;
export const ex1 = (text1: string, text2: string) => {
  //ここに処理を記述
  // return text1.length + text2.length
  console.log(text1.length + text2.length)
}
//練習問題2
//自身のプロフィール情報を持つオブジェクトを作成し、コンソールに表示しなさい
//必ずオブジェクトの型宣言を行うこと
type Profile = {
  name: string
  age: number
}
export const ex2 = () => {
  //ここに処理を記述
  const profile: Profile = {
    name: "せきやん",
    age: 25
  }
  console.log(profile)
}
//練習問題3
//配列の中で、偶数のIDを持つオブジェクトの名前をコンソールに表示しなさい
//必ず map 関数と filter 関数を使いなさい
//結果: TypeScript Angular Vue.js
type Obje = {
  id: number
  name: string
}
export const ex3 = () => {
  const objList: Obje[] = [
    {id: 1, name: "JavaScript"},
    {id: 2, name: "TypeScript"},
    {id: 3, name: "jQuery"},
    {id: 4, name: "Angular"},
    {id: 5, name: "React"},
    {id: 6, name: "Vue.js"},
  ]
  //ここに処理を記述
  objList
    .filter(content => content.id % 2 === 0)
    .map(content => console.log(content.name))
}