//じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください')；

//じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザーの手をjavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let = judge = winlose(user_hand,js_hand)
alert('あなたの選んだ手'＋user_hand + 'です\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です')；
function getJShand(){
    let js_hand_num = Math.floor(Math.random() * 3);
    
    if(js_hand_num ==0){
        js_hand = "グー"；
    }else if(js_hand_num == 1){
        js_hand = "チョキ";
    }else if (js_hand_num == 2){
        js_hand = "パー";
    }
    return js_hand;
}