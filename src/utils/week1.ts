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
export const ex1 = () => {
  //ここに処理を記述
}

//練習問題2
//自身のプロフィール情報を持つオブジェクトを作成し、コンソールに表示しなさい
//必ずオブジェクトの型宣言を行うこと
export const ex2 = () => {
  //ここに処理を記述
}

//練習問題3
//配列の中で、偶数のIDを持つオブジェクトの名前をコンソールに表示しなさい
//必ず map 関数と filter 関数を使いなさい
//結果: TypeScript Angular Vue.js
export const ex3 = () => {
  const objList = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'jQuery' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Vue.js' },
  ]
  //ここに処理を記述
  return objList
}
