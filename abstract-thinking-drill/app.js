const questions = {
  beginner: [
    {
      type: "具体 → 抽象",
      title: "これは何の話？",
      prompt:
        "雨が降りそうだったので、出かける前に傘を持った。\nこの話から言えることを選んでください。",
      choices: [
        "先に準備すると困りにくい",
        "雨の日は必ず出かけてはいけない",
        "未来を予想して行動している",
        "傘はいつも必要ない",
      ],
      correct: [0, 2],
      hint: "傘そのものではなく、出かける前に何をしているかを見ます。",
      answer: "具体から抽象にすると、「先に考えて準備する」という話になります。",
    },
    {
      type: "抽象 → 具体",
      title: "例にすると？",
      prompt:
        "抽象：先に準備すると、あとで困りにくい。\nこの考え方の具体例を選んでください。",
      choices: [
        "旅行前に持ち物リストを作る",
        "テスト前に少しずつ勉強する",
        "何も考えずに家を出る",
        "料理前に材料を確認する",
      ],
      correct: [0, 1, 3],
      hint: "あとで困らないように、前もってしている行動を選びます。",
      answer: "具体化すると、旅行の準備、勉強、材料確認のような行動になります。",
    },
    {
      type: "具体 → 抽象",
      title: "共通点はどれ？",
      prompt:
        "1. レシピを見て料理する\n2. 地図を見て目的地へ行く\n3. 説明書を見て家具を組み立てる\nこの3つに共通することを選んでください。",
      choices: [
        "手順があると進めやすい",
        "説明を見ない方がうまくいく",
        "目的地や完成形が見えている",
        "全部料理の話である",
      ],
      correct: [0, 2],
      hint: "3つの中身ではなく、どれも何を見ながら進めているかを考えます。",
      answer: "抽象化すると、「手順や完成形があると行動しやすい」と言えます。",
    },
    {
      type: "抽象 → 具体",
      title: "小さく分ける",
      prompt:
        "抽象：大きなことは、小さく分けると進めやすい。\nこの具体例を選んでください。",
      choices: [
        "部屋全体ではなく、まず机の上だけ片付ける",
        "宿題を1ページずつ進める",
        "全部を一気に終わらせようとして動けなくなる",
        "長い文章を見出しごとに読む",
      ],
      correct: [0, 1, 3],
      hint: "一気に全部ではなく、小さな単位にしているものを選びます。",
      answer: "具体化すると、机の上、1ページ、見出しごとのように小さく区切ることです。",
    },
    {
      type: "具体 → 抽象",
      title: "なぜ失敗した？",
      prompt:
        "買い物に行ったけど、何を買うか決めていなかったので、必要な物を買い忘れた。\nこの話から言えることを選んでください。",
      choices: [
        "目的が曖昧だと、行動もズレやすい",
        "買い物はしない方がいい",
        "先に決めておくと、忘れにくい",
        "忘れ物は絶対に直らない",
      ],
      correct: [0, 2],
      hint: "買い物の話ではなく、行動する前に何がなかったかを見ます。",
      answer: "抽象化すると、「目的やリストがないと行動がズレる」と言えます。",
    },
    {
      type: "抽象 → 具体",
      title: "見た目の例",
      prompt:
        "抽象：人は最初に見えるもので判断することがある。\nこの具体例を選んでください。",
      choices: [
        "おいしそうな写真を見て料理を注文する",
        "表紙を見て本を手に取る",
        "中身を見る前に何も感じない",
        "きれいに並んだ商品に目が止まる",
      ],
      correct: [0, 1, 3],
      hint: "中身を知る前に、最初に見た情報で動いている例を選びます。",
      answer: "具体化すると、写真、表紙、並び方などで判断する場面になります。",
    },
    {
      type: "具体 → 抽象",
      title: "続いた理由",
      prompt:
        "毎日30分運動しようとしたら続かなかった。でも毎日5分にしたら続いた。\nこの話から言えることを選んでください。",
      choices: [
        "ハードルを下げると続けやすい",
        "運動は意味がない",
        "小さく始めると行動しやすい",
        "5分以上やってはいけない",
      ],
      correct: [0, 2],
      hint: "時間の長さではなく、行動の始めやすさを見ます。",
      answer: "抽象化すると、「小さく始めると続きやすい」と言えます。",
    },
    {
      type: "抽象 → 具体",
      title: "比べて決める",
      prompt:
        "抽象：比べると、違いが見えやすくなる。\nこの具体例を選んでください。",
      choices: [
        "2つのスマホの値段と機能を見る",
        "A案とB案の良い点を並べる",
        "何も比べずに迷い続ける",
        "昨日と今日の体調を比べる",
      ],
      correct: [0, 1, 3],
      hint: "2つ以上を並べて、違いを見ているものを選びます。",
      answer: "具体化すると、商品、案、体調などを比べる場面になります。",
    },
    {
      type: "具体 → 抽象",
      title: "言い方を変える",
      prompt:
        "難しい説明を、小学生にもわかる言葉に言い換えたら伝わった。\nこの話から言えることを選んでください。",
      choices: [
        "相手に合わせると伝わりやすい",
        "難しい言葉だけ使えばいい",
        "同じ内容でも言い方で伝わり方が変わる",
        "説明は短ければ必ず伝わる",
      ],
      correct: [0, 2],
      hint: "内容そのものではなく、誰に向けてどう言い換えたかを見ます。",
      answer: "抽象化すると、「相手に合わせて表現を変えると伝わりやすい」と言えます。",
    },
    {
      type: "抽象 → 具体",
      title: "原因を探す",
      prompt:
        "抽象：うまくいかない時は、原因を分けて考えると見えやすい。\nこの具体例を選んでください。",
      choices: [
        "遅刻の原因を、起きる時間、準備、移動に分けて考える",
        "部屋が散らかる理由を、物の量と置き場所に分ける",
        "理由を考えずに同じ失敗をくり返す",
        "テストで間違えた理由を、暗記不足と読み間違いに分ける",
      ],
      correct: [0, 1, 3],
      hint: "原因をひとまとめにせず、いくつかに分けている例を選びます。",
      answer: "具体化すると、遅刻、片付け、テストの原因を分解することです。",
    },
  ],
  advanced: [
    {
      type: "具体 → 抽象 → 具体",
      title: "買い忘れの話",
      prompt:
        "買い物に行ったのに、必要な物を買い忘れました。\n\nやること：\n1. つまり？：この出来事から言える考え方を1文で書く\n2. たとえば？：同じ考え方が使える別の日常例を1つ書く",
      hint: "買い物そのものではなく、「先に決める」「準備する」という考え方にしてみましょう。",
      answer:
        "例：先に目的を決めないと、行動がズレやすい。別の例として、旅行前に持ち物リストを作らないと忘れ物をしやすい。",
    },
    {
      type: "抽象 → 具体",
      title: "小さく分ける話",
      prompt:
        "考え方：大きなことは、小さく分けると進めやすい。\n\nやること：\n1. この考え方が当てはまる日常例を1つ書く\n2. なぜその例が当てはまるのかを1文で書く",
      hint: "片付け、勉強、運動、仕事など、身近な行動に置き換えます。",
      answer:
        "例：部屋全体を片付けようとすると大変だけど、まず机の上だけにすると始めやすい。",
    },
    {
      type: "具体 → 抽象 → 具体",
      title: "レシピの話",
      prompt:
        "レシピを見ながら料理をしたら、失敗が減りました。\n\nやること：\n1. つまり？：この出来事から言える考え方を1文で書く\n2. たとえば？：料理以外で同じ考え方が使える例を1つ書く",
      hint: "レシピは、手順や完成形を示すものです。",
      answer:
        "例：手順が見えていると失敗しにくい。別の例として、家具を組み立てる時に説明書を見ると迷いにくい。",
    },
    {
      type: "抽象 → 具体",
      title: "伝え方の話",
      prompt:
        "考え方：相手に合わせて言い方を変えると伝わりやすい。\n\nやること：\n1. この考え方が当てはまる日常例を1つ書く\n2. どこを相手に合わせたのかを1文で書く",
      hint: "子ども、友達、初めての人など、相手を決めると書きやすいです。",
      answer:
        "例：子どもに説明する時は、専門用語を使わずに身近なたとえで話すと伝わりやすい。",
    },
    {
      type: "具体 → 抽象 → 具体",
      title: "運動が続いた話",
      prompt:
        "毎日30分の運動は続かなかったけど、毎日5分にしたら続きました。\n\nやること：\n1. つまり？：この出来事から言える考え方を1文で書く\n2. たとえば？：同じ考え方が使える別の日常例を1つ書く",
      hint: "時間の長さではなく、始めやすさに注目します。",
      answer:
        "例：ハードルを下げると続けやすい。別の例として、読書を毎日1章ではなく1ページから始める。",
    },
    {
      type: "抽象 → 具体",
      title: "比べる話",
      prompt:
        "考え方：比べると、違いが見えやすくなる。\n\nやること：\n1. この考え方が当てはまる日常例を1つ書く\n2. 何と何を比べるのかを書く",
      hint: "商品、予定、勉強方法、食べ物などを比べる例が使えます。",
      answer:
        "例：2つのスマホを比べると、値段、重さ、カメラの違いが見えて選びやすくなる。",
    },
    {
      type: "具体 → 抽象 → 具体",
      title: "表紙で本を選んだ話",
      prompt:
        "表紙が気になって本を手に取りました。\n\nやること：\n1. つまり？：この出来事から言える考え方を1文で書く\n2. たとえば？：本以外で同じ考え方が使える例を1つ書く",
      hint: "中身を見る前に、最初に見えたもので判断しています。",
      answer:
        "例：人は最初に見える情報で判断することがある。別の例として、料理の写真を見て注文したくなる。",
    },
    {
      type: "抽象 → 具体",
      title: "原因を分ける話",
      prompt:
        "考え方：うまくいかない原因は、分けると見つけやすい。\n\nやること：\n1. この考え方が当てはまる日常例を1つ書く\n2. 原因をどのように分けるかを書く",
      hint: "遅刻、片付け、勉強、忘れ物などを例にできます。",
      answer:
        "例：遅刻が多い時に、起きる時間、準備の時間、移動時間に分けて考えると原因が見つけやすい。",
    },
    {
      type: "具体 → 抽象 → 具体",
      title: "相談で困らせた話",
      prompt:
        "友達に「どうしたらいい？」とだけ聞いたら、相手も困っていました。\n\nやること：\n1. つまり？：この出来事から言える考え方を1文で書く\n2. たとえば？：相手が答えやすい聞き方の例を1つ書く",
      hint: "相手が答えやすいように、状況や選択肢を足します。",
      answer:
        "例：質問が曖昧だと、相手も答えにくい。相談例として、「AとBで迷っている。時間を優先するならどちらが良いと思う？」と聞く。",
    },
    {
      type: "抽象 → 具体",
      title: "目的を決める話",
      prompt:
        "考え方：目的を先に決めると、行動しやすくなる。\n\nやること：\n1. この考え方が当てはまる日常例を1つ書く\n2. 先に何を決めるのかを書く",
      hint: "買い物、勉強、掃除、休日の予定などで考えます。",
      answer:
        "例：休日に何となく過ごすより、午前中に掃除を終わらせると決めると動きやすい。",
    },
  ],
};

const originalBeginnerQuestions = questions.beginner.map((question) => ({
  ...question,
  choices: [...question.choices],
  correct: [...question.correct],
}));

questions.intermediate = originalBeginnerQuestions.map((question) => ({
  ...question,
  prompt: toIntermediatePrompt(question.prompt),
}));

questions.beginner = originalBeginnerQuestions.map((question) => ({
  ...question,
  prompt: toBeginnerPrompt(question.prompt),
  correct: [question.correct[0]],
}));

questions.beginner = [
  {
    type: "具体 → 抽象",
    title: "傘を持った話",
    prompt:
      "雨が降りそうだったので、出かける前に傘を持った。\n\nこの出来事から言えることを1つ選んでください。",
    choices: [
      "先に準備すると困りにくい",
      "傘の色は青がよい",
      "雨の日は必ず家にいるべき",
      "出かける時は何も持たない方がよい",
    ],
    correct: [0],
    hint: "傘そのものではなく、出かける前に準備したことを見ます。",
    answer: "具体から抽象にすると、「先に考えて準備する」という話になります。",
  },
  {
    type: "抽象 → 具体",
    title: "準備の例",
    prompt:
      "考え方：先に準備すると、あとで困りにくい。\n\nこの考え方に一番合う具体例を1つ選んでください。",
    choices: [
      "旅行前に持ち物リストを作る",
      "忘れ物をしてから考える",
      "何も見ずに急いで家を出る",
      "必要な物をわざと置いていく",
    ],
    correct: [0],
    hint: "あとで困らないように、前もってしている行動を選びます。",
    answer: "具体化すると、旅行前に持ち物リストを作るような行動になります。",
  },
  {
    type: "具体 → 抽象",
    title: "手順を見る話",
    prompt:
      "レシピを見て料理したら、迷わず作れた。\n\nこの出来事から言えることを1つ選んでください。",
    choices: [
      "手順があると進めやすい",
      "説明を見ない方がうまくいく",
      "料理は必ず失敗する",
      "レシピは読む必要がない",
    ],
    correct: [0],
    hint: "何を見たことで進めやすくなったかを見ます。",
    answer: "抽象化すると、「手順があると進めやすい」と言えます。",
  },
  {
    type: "抽象 → 具体",
    title: "小さく分ける",
    prompt:
      "考え方：大きなことは、小さく分けると進めやすい。\n\nこの考え方に一番合う具体例を1つ選んでください。",
    choices: [
      "部屋全体ではなく、まず机の上だけ片付ける",
      "全部を一気に終わらせようとして動けなくなる",
      "何もせずに終わるのを待つ",
      "できない理由だけを考え続ける",
    ],
    correct: [0],
    hint: "一気に全部ではなく、小さな単位にしているものを選びます。",
    answer: "具体化すると、部屋全体ではなく机の上だけから始めることです。",
  },
  {
    type: "具体 → 抽象",
    title: "買い忘れの話",
    prompt:
      "買い物に行ったけど、何を買うか決めていなかったので、必要な物を買い忘れた。\n\nこの出来事から言えることを1つ選んでください。",
    choices: [
      "先に買う物を決めると忘れにくい",
      "買い物はしない方がいい",
      "店に行けば必ず思い出せる",
      "忘れ物は絶対に直らない",
    ],
    correct: [0],
    hint: "買い物の話ではなく、行動する前に何がなかったかを見ます。",
    answer: "抽象化すると、「先に決めておくと行動がズレにくい」と言えます。",
  },
  {
    type: "抽象 → 具体",
    title: "見た目の例",
    prompt:
      "考え方：人は最初に見えるもので判断することがある。\n\nこの考え方に一番合う具体例を1つ選んでください。",
    choices: [
      "表紙を見て本を手に取る",
      "本を見ても何も考えない",
      "表紙をまったく見ずに選ぶ",
      "見た目は判断に一切関係ない",
    ],
    correct: [0],
    hint: "中身を知る前に、最初に見た情報で動いている例を選びます。",
    answer: "具体化すると、表紙を見て本を手に取る場面になります。",
  },
  {
    type: "具体 → 抽象",
    title: "続いた理由",
    prompt:
      "毎日30分運動しようとしたら続かなかった。でも毎日5分にしたら続いた。\n\nこの出来事から言えることを1つ選んでください。",
    choices: [
      "小さく始めると続けやすい",
      "運動は意味がない",
      "5分以上やってはいけない",
      "長くやらないと必ず失敗する",
    ],
    correct: [0],
    hint: "時間の長さではなく、行動の始めやすさを見ます。",
    answer: "抽象化すると、「小さく始めると続きやすい」と言えます。",
  },
  {
    type: "抽象 → 具体",
    title: "比べて決める",
    prompt:
      "考え方：比べると、違いが見えやすくなる。\n\nこの考え方に一番合う具体例を1つ選んでください。",
    choices: [
      "2つのスマホの値段と機能を見る",
      "何も比べずに迷い続ける",
      "値段も機能も見ない",
      "どれも同じだと決めつける",
    ],
    correct: [0],
    hint: "2つ以上を並べて、違いを見ているものを選びます。",
    answer: "具体化すると、2つのスマホの値段と機能を見る場面になります。",
  },
  {
    type: "具体 → 抽象",
    title: "言い方を変える",
    prompt:
      "難しい説明を、小学生にもわかる言葉に言い換えたら伝わった。\n\nこの出来事から言えることを1つ選んでください。",
    choices: [
      "相手に合わせると伝わりやすい",
      "難しい言葉だけ使えばいい",
      "説明はしない方がよい",
      "相手が誰でも同じ言い方でよい",
    ],
    correct: [0],
    hint: "内容そのものではなく、誰に向けてどう言い換えたかを見ます。",
    answer: "抽象化すると、「相手に合わせて表現を変えると伝わりやすい」と言えます。",
  },
  {
    type: "抽象 → 具体",
    title: "原因を探す",
    prompt:
      "考え方：うまくいかない時は、原因を分けて考えると見えやすい。\n\nこの考え方に一番合う具体例を1つ選んでください。",
    choices: [
      "遅刻の原因を、起きる時間、準備、移動に分けて考える",
      "理由を考えずに同じ失敗をくり返す",
      "全部を運のせいにする",
      "原因は絶対に分からないと決めつける",
    ],
    correct: [0],
    hint: "原因をひとまとめにせず、いくつかに分けている例を選びます。",
    answer: "具体化すると、遅刻の原因をいくつかに分けて考えることです。",
  },
];

questions.intermediate = [
  {
    type: "具体 → 抽象",
    title: "準備している行動",
    prompt:
      "テーマ：先に準備すると困りにくい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "雨が降りそうなので傘を持つ",
      "旅行前に持ち物リストを作る",
      "出かける直前まで何も考えない",
      "スマホの充電を前日にしておく",
    ],
    correct: [0, 1, 3],
    hint: "あとで困らないように、前もって動いているものを選びます。",
    answer: "傘、持ち物リスト、充電はすべて「先に準備する」具体例です。",
  },
  {
    type: "抽象 → 具体",
    title: "小さく始める例",
    prompt:
      "テーマ：小さく始めると続けやすい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "読書を1ページだけ読む",
      "運動を5分だけする",
      "最初から完璧にやろうとして止まる",
      "一度で全部終わらせることにこだわる",
    ],
    correct: [0, 1],
    hint: "小さな単位にして、始めやすくしているものを選びます。",
    answer: "1ページ、5分は、小さく始める例です。",
  },
  {
    type: "具体 → 抽象",
    title: "手順を使う行動",
    prompt:
      "テーマ：手順があると進めやすい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "レシピを見て料理する",
      "説明書を見て家具を組み立てる",
      "地図を見ずに知らない道を進む",
      "マニュアルを見て設定する",
    ],
    correct: [0, 1, 3],
    hint: "何かを見ながら順番に進めているものを選びます。",
    answer: "レシピ、説明書、マニュアルは、手順を使う具体例です。",
  },
  {
    type: "抽象 → 具体",
    title: "目的を決める例",
    prompt:
      "テーマ：目的を先に決めると行動しやすい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "買い物前に買う物を決める",
      "目的を決めずに何となく始める",
      "何となくスマホを見続ける",
      "終わってから目的を考える",
    ],
    correct: [0],
    hint: "行動する前に、何をするか決めているものを選びます。",
    answer: "買い物前に買う物を決めるのは、目的を先に決める例です。",
  },
  {
    type: "具体 → 抽象",
    title: "見た目で判断する例",
    prompt:
      "テーマ：人は最初に見えるもので判断することがある。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "表紙を見て本を手に取る",
      "料理の写真を見て注文する",
      "商品のパッケージを見て選ぶ",
      "きれいに並んだ商品に目が止まる",
    ],
    correct: [0, 1, 2, 3],
    hint: "中身を見る前に、目に入った情報で動いているものを選びます。",
    answer: "表紙、写真、パッケージ、並び方は、すべて最初に見える情報で判断する例です。",
  },
  {
    type: "抽象 → 具体",
    title: "比べる例",
    prompt:
      "テーマ：比べると違いが見えやすくなる。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "2つのスマホの値段と機能を見る",
      "A案とB案の良い点を並べる",
      "何も比べずに選ぶ",
      "どれも同じだと決めつける",
    ],
    correct: [0, 1],
    hint: "2つ以上を並べて、違いを見ているものを選びます。",
    answer: "スマホや案を比べるのは、違いを見る具体例です。",
  },
  {
    type: "具体 → 抽象",
    title: "相手に合わせる例",
    prompt:
      "テーマ：相手に合わせると伝わりやすい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "子どもに難しい言葉を使わず説明する",
      "初めての人に専門用語を減らして話す",
      "相手が誰でも同じ言い方だけにする",
      "友達に身近なたとえで説明する",
    ],
    correct: [0, 1, 3],
    hint: "相手に合わせて、言葉や例を変えているものを選びます。",
    answer: "言葉やたとえを相手に合わせると、伝わりやすくなります。",
  },
  {
    type: "抽象 → 具体",
    title: "原因を分ける例",
    prompt:
      "テーマ：原因を分けると見つけやすい。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "遅刻の原因を、起床・準備・移動に分ける",
      "部屋が散らかる理由を、物の量・置き場所に分ける",
      "理由を考えずに同じ失敗をくり返す",
      "全部を一言で「自分が悪い」とだけ考える",
    ],
    correct: [0, 1],
    hint: "原因をひとまとめにせず、いくつかに分けているものを選びます。",
    answer: "遅刻や片付けの原因を分けると、問題を見つけやすくなります。",
  },
  {
    type: "具体 → 抽象",
    title: "質問を具体的にする例",
    prompt:
      "テーマ：質問は具体的にすると答えやすくなる。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "「AとBならどちらが良い？」と聞く",
      "状況を説明せずに聞く",
      "「どうしたらいい？」だけを何度も聞く",
      "相手に何も情報を渡さずに聞く",
    ],
    correct: [0],
    hint: "相手が答えやすいように、選択肢や見るポイントを入れているものを選びます。",
    answer: "「AとBならどちらが良い？」は、選択肢があるので答えやすい質問です。",
  },
  {
    type: "抽象 → 具体",
    title: "共通点を見る例",
    prompt:
      "テーマ：いくつかの例から共通点を見ると、考え方が見つかる。\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。",
    choices: [
      "続いた習慣に共通する始めやすさを見る",
      "売れた商品の共通点を見る",
      "伸びた動画に共通する冒頭を見る",
      "うまくいった投稿に共通する書き方を見る",
    ],
    correct: [0, 1, 2, 3],
    hint: "複数の例を見て、同じところを探しているものを選びます。",
    answer: "習慣、商品、動画、投稿の共通点を見ると、考え方を見つけやすくなります。",
  },
];

const questionThemes = [
  {
    title: "準備",
    principle: "先に準備すると困りにくい",
    hint: "あとで困らないように、前もって動いているかを見ます。",
    answer: "行動する前に準備しておくと、失敗や忘れ物を減らしやすくなります。",
    examples: [
      "雨が降りそうだったので、出かける前に傘を持った。",
      "旅行の前日に、持ち物リストを見ながら荷物を入れた。",
      "発表の前に、話す順番を紙に書いておいた。",
      "スマホの充電が切れないように、寝る前に充電した。",
      "料理を始める前に、材料がそろっているか確認した。",
    ],
    wrongExamples: [
      "出かける直前まで何も考えなかった。",
      "必要な物をわざと置いて出かけた。",
      "準備せずに、あとで全部思い出せると思った。",
      "忘れ物をしてから初めて考えた。",
    ],
  },
  {
    title: "小さく始める",
    principle: "小さく始めると続けやすい",
    hint: "一気に全部ではなく、始めやすい大きさにしているかを見ます。",
    answer: "行動のハードルを下げると、最初の一歩を出しやすくなります。",
    examples: [
      "毎日30分の運動は続かなかったが、5分にしたら続いた。",
      "本を1章読むのは重かったので、1ページだけ読むことにした。",
      "部屋全体ではなく、まず机の上だけ片付けた。",
      "英語の勉強を、単語3つだけ覚えるところから始めた。",
      "長い文章を、見出しごとに分けて読んだ。",
    ],
    wrongExamples: [
      "最初から完璧にやろうとして止まった。",
      "一度で全部終わらせることにこだわった。",
      "できない理由だけを考え続けた。",
      "少しだけやるのは意味がないと決めつけた。",
    ],
  },
  {
    title: "手順",
    principle: "手順があると進めやすい",
    hint: "順番や進め方が見えているかを見ます。",
    answer: "何からやるかが分かると、迷いが減って動きやすくなります。",
    examples: [
      "レシピを見ながら料理したら、迷わず作れた。",
      "説明書を見て、家具を順番に組み立てた。",
      "地図アプリを見ながら、目的地まで歩いた。",
      "掃除の順番を決めてから部屋を片付けた。",
      "登録画面の案内に沿って、アカウントを作った。",
    ],
    wrongExamples: [
      "何も見ずに適当に進めて迷った。",
      "順番を無視して途中から始めた。",
      "説明を読まない方が必ずうまくいくと思った。",
      "目的地を決めずに歩き続けた。",
    ],
  },
  {
    title: "目的",
    principle: "目的を先に決めると行動しやすい",
    hint: "行動する前に、何を目指すか決めているかを見ます。",
    answer: "目的があると、何をすればよいか判断しやすくなります。",
    examples: [
      "買い物に行く前に、今日買う物を決めた。",
      "勉強を始める前に、今日は3ページ進めると決めた。",
      "休日の朝に、午前中は掃除を終わらせると決めた。",
      "会議の前に、今日決めたいことを1つ書いた。",
      "散歩に出る前に、気分転換することを目的にした。",
    ],
    wrongExamples: [
      "何となくスマホを見続けた。",
      "目的を決めずに始めて、途中で迷った。",
      "終わってから目的を考えればいいと思った。",
      "何をしたいか考えずに時間だけ使った。",
    ],
  },
  {
    title: "見た目",
    principle: "人は最初に見える情報で判断することがある",
    hint: "中身を見る前に、目に入った情報で動いているかを見ます。",
    answer: "最初に見えるものは、選ぶきっかけになりやすいです。",
    examples: [
      "表紙が気になって、本を手に取った。",
      "料理の写真がおいしそうで、注文したくなった。",
      "きれいに並んだ商品に目が止まった。",
      "タイトルが分かりやすくて、記事を読み始めた。",
      "パッケージが見やすくて、商品を選んだ。",
    ],
    wrongExamples: [
      "見た目を一切見ずに決めた。",
      "中身も外側も何も見なかった。",
      "最初に見える情報は絶対に関係ないと考えた。",
      "何を見ても判断しないと決めた。",
    ],
  },
  {
    title: "比較",
    principle: "比べると違いが見えやすい",
    hint: "2つ以上を並べて、違いを見ているかを見ます。",
    answer: "比べることで、良い点や足りない点が分かりやすくなります。",
    examples: [
      "2つのスマホの値段と機能を比べた。",
      "A案とB案の良い点を並べて考えた。",
      "昨日と今日の体調を比べた。",
      "2つの勉強方法で、覚えやすさを比べた。",
      "同じ商品を、店ごとの値段で比べた。",
    ],
    wrongExamples: [
      "何も比べずに選んだ。",
      "全部同じだと決めつけた。",
      "違いを見るのをやめた。",
      "1つだけ見てすぐ決めた。",
    ],
  },
  {
    title: "伝え方",
    principle: "相手に合わせると伝わりやすい",
    hint: "誰に向けて、言葉や例を変えているかを見ます。",
    answer: "相手の知識や状況に合わせると、理解されやすくなります。",
    examples: [
      "小学生にも分かる言葉に言い換えたら伝わった。",
      "初めての人に、専門用語を減らして説明した。",
      "友達に、身近なたとえを使って話した。",
      "忙しい人に、先に結論だけ伝えた。",
      "相手が知っている話題に置き換えて説明した。",
    ],
    wrongExamples: [
      "相手が誰でも同じ言い方だけにした。",
      "難しい言葉だけを並べた。",
      "相手が分からなくても説明を変えなかった。",
      "伝わらない方がよいと考えた。",
    ],
  },
  {
    title: "原因",
    principle: "原因を分けると見つけやすい",
    hint: "原因をひとまとめにせず、いくつかに分けているかを見ます。",
    answer: "問題を分けると、どこを直せばよいか見えやすくなります。",
    examples: [
      "遅刻の原因を、起きる時間、準備、移動に分けて考えた。",
      "部屋が散らかる理由を、物の量と置き場所に分けた。",
      "テストのミスを、暗記不足と読み間違いに分けた。",
      "疲れた理由を、睡眠、食事、作業量に分けた。",
      "売れない理由を、商品、見せ方、伝え方に分けた。",
    ],
    wrongExamples: [
      "理由を考えずに同じ失敗をくり返した。",
      "全部を運のせいにした。",
      "原因は絶対に分からないと決めつけた。",
      "一言で全部片付けようとした。",
    ],
  },
  {
    title: "質問",
    principle: "質問は具体的にすると答えやすい",
    hint: "相手が答えやすいように、選択肢や条件を足しているかを見ます。",
    answer: "質問が具体的だと、相手は何を答えればよいか分かりやすくなります。",
    examples: [
      "「AとBならどちらが良い？」と聞いた。",
      "「どこを直せば読みやすい？」と聞いた。",
      "「時間を優先するならどちら？」と聞いた。",
      "「この文章の1行目だけ見て感想をください」と頼んだ。",
      "「初心者向けなら、この説明で分かる？」と聞いた。",
    ],
    wrongExamples: [
      "「どうしたらいい？」だけを何度も聞いた。",
      "状況を説明せずに聞いた。",
      "相手に何も情報を渡さずに聞いた。",
      "答えてほしいことを隠したまま聞いた。",
    ],
  },
  {
    title: "共通点",
    principle: "複数の例を見ると共通点が見つかる",
    hint: "いくつかの例を見て、同じところを探しているかを見ます。",
    answer: "共通点を見つけると、うまくいく理由を考えやすくなります。",
    examples: [
      "続いた習慣に共通する始めやすさを見つけた。",
      "売れた商品の共通点を見た。",
      "伸びた動画に共通する冒頭を調べた。",
      "うまくいった投稿に共通する書き方を見た。",
      "楽しかった予定に共通する条件を考えた。",
    ],
    wrongExamples: [
      "1つの出来事だけで全部決めた。",
      "同じところを探すのをやめた。",
      "共通点は絶対にないと決めつけた。",
      "例を見ずに思い込みだけで決めた。",
    ],
  },
  {
    title: "記録",
    principle: "記録すると忘れにくい",
    hint: "頭の中だけにせず、残しているかを見ます。",
    answer: "メモや記録に残すと、あとから確認しやすくなります。",
    examples: [
      "買う物をメモに書いてから店に行った。",
      "会議で決まったことをノートに残した。",
      "思いついたアイデアをスマホに保存した。",
      "薬を飲んだ時間を記録した。",
      "今日やることを紙に書き出した。",
    ],
    wrongExamples: [
      "全部覚えているつもりで何も書かなかった。",
      "大事なことほど記録しないと決めた。",
      "メモを見ずに忘れたままにした。",
      "思いついたことをすぐ消した。",
    ],
  },
  {
    title: "相談",
    principle: "早めに相談すると問題が大きくなりにくい",
    hint: "困りきる前に、人に聞いているかを見ます。",
    answer: "早めに相談すると、直せるうちに対処しやすくなります。",
    examples: [
      "宿題で分からない所を、早めに先生へ聞いた。",
      "仕事で迷った時に、締切前に確認した。",
      "体調が悪いので、早めに予定を相談した。",
      "道に迷ってすぐ近くの人に聞いた。",
      "作業が遅れそうなので、先に連絡した。",
    ],
    wrongExamples: [
      "最後まで黙って困り続けた。",
      "締切を過ぎてから初めて言った。",
      "誰にも言わずに問題を大きくした。",
      "聞くのは悪いことだと決めつけた。",
    ],
  },
  {
    title: "環境",
    principle: "環境を整えると行動しやすい",
    hint: "やる気だけでなく、周りの状態を変えているかを見ます。",
    answer: "行動しやすい環境を作ると、自然に動きやすくなります。",
    examples: [
      "勉強前に机の上からスマホを遠ざけた。",
      "運動しやすいように、前日に服を出しておいた。",
      "集中するために通知を切った。",
      "読みたい本を机の上に置いた。",
      "寝る前に部屋の明かりを暗くした。",
    ],
    wrongExamples: [
      "集中したいのに通知を全部つけた。",
      "邪魔な物を増やした。",
      "行動しにくい状態をそのままにした。",
      "環境は何も関係ないと決めつけた。",
    ],
  },
  {
    title: "優先順位",
    principle: "大事なことから先にやると進みやすい",
    hint: "先にやるべきことを選んでいるかを見ます。",
    answer: "重要なことを先に進めると、後で困りにくくなります。",
    examples: [
      "締切が近い仕事から先に終わらせた。",
      "テスト範囲で苦手な所から勉強した。",
      "朝の元気な時間に大事な作業をした。",
      "必要な連絡を先に済ませた。",
      "今日中に必要な買い物から先に行った。",
    ],
    wrongExamples: [
      "大事なことを最後まで後回しにした。",
      "急ぎの用事を無視した。",
      "楽なことだけやって締切を忘れた。",
      "何が大事か考えなかった。",
    ],
  },
  {
    title: "改善",
    principle: "結果を見直すと次を良くしやすい",
    hint: "やった後に、良かった点や直す点を見ているかを見ます。",
    answer: "振り返ることで、次に何を変えるか考えやすくなります。",
    examples: [
      "テスト後に、間違えた問題を見直した。",
      "発表後に、話し方の改善点をメモした。",
      "料理が薄味だったので、次は調味料を増やすと決めた。",
      "投稿の反応を見て、次の書き方を変えた。",
      "運動の記録を見て、無理のない量に調整した。",
    ],
    wrongExamples: [
      "結果を見ずに同じことをくり返した。",
      "失敗から何も学ばないと決めた。",
      "良かった点も悪かった点も見なかった。",
      "次に変えることを一切考えなかった。",
    ],
  },
  {
    title: "選択肢",
    principle: "選択肢を減らすと決めやすい",
    hint: "候補を少なくして、迷いを減らしているかを見ます。",
    answer: "選択肢が多すぎる時は、先に絞ると決めやすくなります。",
    examples: [
      "服を選ぶ前に、今日着る色を2色に絞った。",
      "昼ごはんを、和食か麺類のどちらかに絞った。",
      "候補の本を3冊だけにして選んだ。",
      "見る動画を、勉強用だけに絞った。",
      "買う商品を、予算内のものだけにした。",
    ],
    wrongExamples: [
      "候補を増やし続けて迷った。",
      "何も絞らずに決められなかった。",
      "選択肢が多いほど必ず楽だと思った。",
      "条件を決めずに全部見続けた。",
    ],
  },
  {
    title: "習慣",
    principle: "同じタイミングでやると習慣になりやすい",
    hint: "毎回同じきっかけで行動しているかを見ます。",
    answer: "行動するタイミングを決めると、忘れにくく続けやすくなります。",
    examples: [
      "歯みがきの後に、英単語を3つ見ることにした。",
      "朝食の後に、予定を確認した。",
      "寝る前に、明日の持ち物を確認した。",
      "帰宅したら、すぐ机の上を片付けた。",
      "昼休みに、5分だけ読書した。",
    ],
    wrongExamples: [
      "毎回バラバラの時間にして忘れた。",
      "きっかけを決めずに続けようとした。",
      "思い出した時だけやれば必ず続くと思った。",
      "習慣にする工夫を何もしなかった。",
    ],
  },
  {
    title: "視点",
    principle: "別の視点で見ると気づきが増える",
    hint: "自分だけでなく、他の立場から見ているかを見ます。",
    answer: "見方を変えると、見落としていたことに気づきやすくなります。",
    examples: [
      "自分の文章を、初めて読む人の目線で読み直した。",
      "店員ではなく、お客さんの立場で売り場を見た。",
      "友達ならどう感じるかを考えて伝え方を変えた。",
      "子どもの目線で、説明が分かるか確認した。",
      "未来の自分が困らないかを考えてメモを残した。",
    ],
    wrongExamples: [
      "自分の見方だけが正しいと決めた。",
      "相手の立場をまったく考えなかった。",
      "違う見方を全部無視した。",
      "見直しをしないまま出した。",
    ],
  },
  {
    title: "確認",
    principle: "事実を確認すると間違いを減らしやすい",
    hint: "思い込みではなく、実際の情報を見ているかを見ます。",
    answer: "事実を確認すると、勘違いやミスを防ぎやすくなります。",
    examples: [
      "集合時間を、もう一度メッセージで確認した。",
      "値段を見てから商品を買った。",
      "提出前に、名前を書いたか確認した。",
      "道順を地図で確認してから出発した。",
      "予約日をカレンダーで見直した。",
    ],
    wrongExamples: [
      "思い込みだけで動いた。",
      "確認せずに間違えたまま進めた。",
      "見れば分かる情報を見なかった。",
      "事実より気分だけで決めた。",
    ],
  },
  {
    title: "休憩",
    principle: "休むと集中し直しやすい",
    hint: "ずっと続けるより、回復してから進めているかを見ます。",
    answer: "疲れた時に休むと、次の行動の質を戻しやすくなります。",
    examples: [
      "集中できなくなったので、5分休んでから再開した。",
      "長く歩いた後に、水を飲んで少し座った。",
      "考えがまとまらないので、一度寝てから見直した。",
      "作業の合間に目を休めたら、ミスに気づけた。",
      "疲れた日は早めに寝て、翌朝に進めた。",
    ],
    wrongExamples: [
      "疲れても休まずミスを増やした。",
      "休むことは必ず悪いと決めつけた。",
      "眠いまま無理に続けた。",
      "集中が切れても何も変えなかった。",
    ],
  },
  {
    title: "期限",
    principle: "期限を決めると動きやすい",
    hint: "いつまでにやるかを決めているかを見ます。",
    answer: "期限があると、行動を始めるきっかけを作りやすくなります。",
    examples: [
      "今日の18時までに返信すると決めた。",
      "週末までに部屋を片付けると決めた。",
      "朝9時までに資料を送ると決めた。",
      "寝る前までに明日の準備を終えると決めた。",
      "月末までに本を1冊読むと決めた。",
    ],
    wrongExamples: [
      "いつかやると言って何も進めなかった。",
      "期限を決めずに後回しにした。",
      "時間を決めるのは意味がないと思った。",
      "終わる時期をまったく考えなかった。",
    ],
  },
  {
    title: "順番",
    principle: "順番を変えるとやりやすくなることがある",
    hint: "同じ作業でも、進める順番を工夫しているかを見ます。",
    answer: "順番を変えるだけで、負担や迷いが減ることがあります。",
    examples: [
      "難しい問題を後回しにして、解ける問題から進めた。",
      "料理で時間がかかる煮込みから先に始めた。",
      "文章は最後にタイトルを決めることにした。",
      "掃除は床より先に机の上を片付けた。",
      "買い物は重い物を最後に取るようにした。",
    ],
    wrongExamples: [
      "やりにくい順番のまま続けた。",
      "順番は絶対に変えてはいけないと思った。",
      "最初で詰まって全部やめた。",
      "何からやるか考えずに迷い続けた。",
    ],
  },
];

const beginnerWrongIdeas = [
  "何もしなくても自然にうまくいく",
  "一度失敗したら全部やめるべき",
  "細かいことは考えなくていい",
  "運だけで結果が決まる",
  "人の話は聞かない方がいい",
  "急ぐほど必ずうまくいく",
  "見直しはまったく必要ない",
  "準備しない方が必ず良い",
];

questions.beginner = buildBeginnerQuestionPool();
questions.intermediate = buildIntermediateQuestionPool();
questions.advanced = buildAdvancedQuestionPool();

const storageKey = "abstract-thinking-drill-100-pattern-state";
const roundSize = 5;

const state = {
  level: "beginner",
  index: 0,
  solved: {},
  answered: {},
  correct: {},
  responses: {},
  rounds: {},
  reviewing: false,
};

const elements = {
  levelButtons: document.querySelectorAll(".level-button"),
  levelNote: document.getElementById("level-note"),
  questionMap: document.getElementById("question-map"),
  questionNumber: document.getElementById("question-number"),
  questionType: document.getElementById("question-type"),
  questionTitle: document.getElementById("question-title"),
  questionPrompt: document.getElementById("question-prompt"),
  choiceArea: document.getElementById("choice-area"),
  textAnswerWrap: document.getElementById("text-answer-wrap"),
  answerInput: document.getElementById("answer-input"),
  hintButton: document.getElementById("hint-button"),
  checkButton: document.getElementById("check-button"),
  feedbackPanel: document.getElementById("feedback-panel"),
  resultPanel: document.getElementById("result-panel"),
  resultTitle: document.getElementById("result-title"),
  resultText: document.getElementById("result-text"),
  hintPanel: document.getElementById("hint-panel"),
  hintText: document.getElementById("hint-text"),
  answerPanel: document.getElementById("answer-panel"),
  modelAnswer: document.getElementById("model-answer"),
  questionCard: document.getElementById("question-card"),
  finalResult: document.getElementById("final-result"),
  finalTitle: document.getElementById("final-title"),
  finalScore: document.getElementById("final-score"),
  finalMessage: document.getElementById("final-message"),
  scoreBreakdown: document.getElementById("score-breakdown"),
  restartButton: document.getElementById("restart-button"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return;
    state.level = questions[saved.level] ? saved.level : "beginner";
    state.index = Number.isInteger(saved.index) ? saved.index : 0;
    state.solved = saved.solved || {};
    state.answered = saved.answered || {};
    state.correct = saved.correct || {};
    state.responses = saved.responses || {};
    state.rounds = saved.rounds || {};
    state.reviewing = false;
  } catch {
    state.level = "beginner";
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getCurrentQuestions() {
  return getCurrentRound().map((questionIndex) => questions[state.level][questionIndex]);
}

function getCurrentQuestion() {
  return getCurrentQuestions()[state.index];
}

function createRound(level) {
  const indexes = questions[level].map((_, index) => index);
  const previousRound = Array.isArray(state.rounds[level]) ? state.rounds[level] : [];
  let candidates = indexes;

  if (previousRound.length && indexes.length >= roundSize * 2) {
    candidates = indexes.filter((index) => !previousRound.includes(index));
  }

  let nextRound = shuffle(candidates).slice(0, roundSize);
  if (nextRound.length < roundSize) {
    const rest = shuffle(indexes.filter((index) => !nextRound.includes(index)));
    nextRound = [...nextRound, ...rest].slice(0, roundSize);
  }

  state.rounds[level] = nextRound;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getCurrentRound() {
  const round = state.rounds[state.level];
  const isValidRound =
    Array.isArray(round) &&
    round.length === roundSize &&
    round.every((index) => Number.isInteger(index) && questions[state.level][index]);

  if (!isValidRound) {
    createRound(state.level);
    saveState();
  }

  return state.rounds[state.level];
}

function getQuestionId(index = state.index) {
  return `${state.level}-${index}`;
}

function buildBeginnerQuestionPool() {
  const pool = [];

  questionThemes.forEach((theme, themeIndex) => {
    theme.examples.forEach((example, exampleIndex) => {
      const offset = themeIndex + exampleIndex;
      const choiceSet = makeChoiceSet(
        [theme.principle],
        pickLoop(beginnerWrongIdeas, 3, offset),
        offset,
      );

      pool.push({
        type: exampleIndex % 2 === 0 ? "具体 → 抽象" : "考え方を選ぶ",
        title: `${theme.title} ${exampleIndex + 1}`,
        prompt: `${example}\n\nこの出来事から言えることを1つ選んでください。`,
        choices: choiceSet.choices,
        correct: choiceSet.correct,
        hint: theme.hint,
        answer: `答えは「${theme.principle}」です。${theme.answer}`,
      });
    });
  });

  return pool;
}

function buildIntermediateQuestionPool() {
  const pool = [];

  questionThemes.forEach((theme, themeIndex) => {
    theme.examples.forEach((_, exampleIndex) => {
      const offset = themeIndex + exampleIndex;
      const correctCount = (offset % 4) + 1;
      const correctChoices = pickLoop(theme.examples, correctCount, exampleIndex);
      const wrongChoices = pickLoop(theme.wrongExamples, 4 - correctCount, offset);
      const choiceSet = makeChoiceSet(correctChoices, wrongChoices, offset);

      pool.push({
        type: exampleIndex % 2 === 0 ? "抽象 → 具体" : "当てはまる例を選ぶ",
        title: `${theme.title} ${exampleIndex + 1}`,
        prompt: `テーマ：${theme.principle}\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。`,
        choices: choiceSet.choices,
        correct: choiceSet.correct,
        hint: theme.hint,
        answer: `正解は ${correctChoices.join(" / ")} です。${theme.answer}`,
      });
    });
  });

  return pool;
}

function buildAdvancedQuestionPool() {
  const pool = [];

  questionThemes.forEach((theme, themeIndex) => {
    theme.examples.forEach((example, exampleIndex) => {
      const nextExample = theme.examples[(exampleIndex + 1) % theme.examples.length];
      const isConcreteStart = (themeIndex + exampleIndex) % 2 === 0;

      pool.push({
        type: isConcreteStart ? "具体 → 抽象 → 具体" : "抽象 → 具体",
        title: `${theme.title} ${exampleIndex + 1}`,
        prompt: isConcreteStart
          ? `${example}\n\nやること：\n1. この出来事から言える考え方を1文で書く\n2. 同じ考え方が使える別の具体例を1つ書く`
          : `考え方：${theme.principle}\n\nやること：\n1. この考え方が当てはまる具体例を1つ書く\n2. なぜその例が当てはまるのかを1文で書く`,
        hint: `「${theme.principle}」に近い形で考えると書きやすいです。`,
        answer: isConcreteStart
          ? `例：${theme.principle}。別の例として、${nextExample}`
          : `例：${nextExample} これは「${theme.principle}」が当てはまる場面です。`,
      });
    });
  });

  return pool;
}

function makeChoiceSet(correctChoices, wrongChoices, offset) {
  const entries = [
    ...correctChoices.map((choice) => ({ choice, isCorrect: true })),
    ...wrongChoices.map((choice) => ({ choice, isCorrect: false })),
  ];
  const rotated = rotateChoiceEntries(entries, offset);

  return {
    choices: rotated.map((entry) => entry.choice),
    correct: rotated
      .map((entry, index) => (entry.isCorrect ? index : null))
      .filter((index) => index !== null),
  };
}

function rotateChoiceEntries(entries, offset) {
  if (!entries.length) return entries;
  const shift = offset % entries.length;
  return [...entries.slice(shift), ...entries.slice(0, shift)];
}

function pickLoop(items, count, offset) {
  return Array.from({ length: count }, (_, index) => items[(offset + index) % items.length]);
}

function isChoiceLevel() {
  return state.level === "beginner" || state.level === "intermediate";
}

function toBeginnerPrompt(prompt) {
  return `${prompt}\n\n当てはまるものを1つだけ選んでください。`;
}

function toIntermediatePrompt(prompt) {
  return `${prompt}\n\n当てはまるものをすべて選んでください。正解は1つとは限りません。`;
}

function resetFeedback() {
  elements.feedbackPanel.hidden = true;
  elements.resultPanel.hidden = true;
  elements.hintPanel.hidden = true;
  elements.answerPanel.hidden = true;
}

function getAnsweredCount() {
  return getCurrentQuestions().filter((_, index) => state.answered[getQuestionId(index)]).length;
}

function getCorrectCount() {
  if (!isChoiceLevel()) {
    return getAnsweredCount();
  }

  return getCurrentQuestions().filter((question, index) => {
    const response = state.responses[getQuestionId(index)] || [];
    return isSameAnswer(response, question.correct);
  }).length;
}

function isLevelComplete() {
  return getAnsweredCount() >= getCurrentQuestions().length;
}

function renderMap() {
  elements.questionMap.innerHTML = "";
  getCurrentQuestions().forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dot-button";
    button.textContent = String(index + 1);
    button.classList.toggle("active", index === state.index);
    button.classList.toggle("done", Boolean(state.answered[getQuestionId(index)]));
    button.addEventListener("click", () => {
      state.index = index;
      state.reviewing = true;
      saveState();
      render();
    });
    elements.questionMap.appendChild(button);
  });
}

function renderChoices(question) {
  elements.choiceArea.innerHTML = "";
  if (!isChoiceLevel()) {
    elements.choiceArea.hidden = true;
    elements.textAnswerWrap.hidden = false;
    elements.answerInput.value = state.responses[getQuestionId()] || "";
    return;
  }

  elements.choiceArea.hidden = false;
  elements.textAnswerWrap.hidden = true;
  const savedResponse = state.responses[getQuestionId()] || [];
  question.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    label.className = "choice-option";

    const input = document.createElement("input");
    input.type = state.level === "beginner" ? "radio" : "checkbox";
    input.name = `choice-${getQuestionId()}`;
    input.value = String(index);
    input.checked = savedResponse.includes(index);
    input.addEventListener("change", updateAnswerButtonState);

    const text = document.createElement("span");
    text.textContent = choice;

    label.append(input, text);
    elements.choiceArea.appendChild(label);
  });
}

function updateAnswerButtonState() {
  if (isChoiceLevel()) {
    elements.checkButton.disabled = getCheckedChoices().length === 0;
    return;
  }

  elements.checkButton.disabled = elements.answerInput.value.trim().length === 0;
}

function render() {
  const currentQuestions = getCurrentQuestions();
  if (state.index >= currentQuestions.length) state.index = 0;

  if (isLevelComplete() && !state.reviewing) {
    renderFinalResult();
    return;
  }

  const question = getCurrentQuestion();
  elements.questionCard.hidden = false;
  elements.finalResult.hidden = true;

  elements.levelButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.level === state.level);
  });
  elements.levelNote.textContent =
    state.level === "beginner"
      ? "当てはまるものを1つだけ選んでください"
      : state.level === "intermediate"
        ? "当てはまるものをすべて選んでください（1つとは限りません）"
        : "自分で打って、往復する力を鍛える";

  elements.questionNumber.textContent = `${getAnsweredCount()} / ${currentQuestions.length} 回答済み`;
  elements.questionType.textContent = question.type;
  elements.questionTitle.textContent = question.title;
  elements.questionPrompt.textContent = question.prompt;
  elements.hintText.textContent = question.hint;
  elements.modelAnswer.textContent = question.answer;

  resetFeedback();
  renderChoices(question);
  renderMap();
  updateAnswerButtonState();
}

function showHint() {
  elements.feedbackPanel.hidden = false;
  elements.hintPanel.hidden = false;
}

function getCheckedChoices() {
  return [...elements.choiceArea.querySelectorAll("input:checked")].map((input) =>
    Number(input.value),
  );
}

function isSameAnswer(response, correct) {
  return (
    response.length === correct.length && response.every((value) => correct.includes(value))
  );
}

function checkAnswer() {
  const question = getCurrentQuestion();
  let solved = true;
  let attempted = true;

  if (isChoiceLevel()) {
    const checked = getCheckedChoices();
    attempted = checked.length > 0;
    solved = attempted;
    if (attempted) {
      state.responses[getQuestionId()] = checked;
    }
  } else {
    const writtenAnswer = elements.answerInput.value.trim();
    attempted = writtenAnswer.length > 0;
    if (attempted) {
      state.responses[getQuestionId()] = writtenAnswer;
    }
    solved = attempted;
  }

  if (!attempted) return;

  if (solved) {
    state.solved[getQuestionId()] = true;
  }

  if (attempted) {
    state.answered[getQuestionId()] = true;
    state.correct[getQuestionId()] =
      isChoiceLevel() ? isSameAnswer(state.responses[getQuestionId()], question.correct) : solved;
    saveState();
  }

  elements.feedbackPanel.hidden = true;
  elements.resultPanel.hidden = true;
  elements.answerPanel.hidden = true;
  renderMap();

  if (isLevelComplete()) {
    state.reviewing = false;
    window.setTimeout(renderFinalResult, 150);
    return;
  }

  moveToNextUnanswered();
}

function nextQuestion() {
  state.index = (state.index + 1) % getCurrentQuestions().length;
  saveState();
  render();
}

function moveToNextUnanswered() {
  const currentQuestions = getCurrentQuestions();
  const startIndex = state.index;

  for (let offset = 1; offset <= currentQuestions.length; offset += 1) {
    const nextIndex = (startIndex + offset) % currentQuestions.length;
    if (!state.answered[getQuestionId(nextIndex)]) {
      state.index = nextIndex;
      state.reviewing = false;
      saveState();
      render();
      return;
    }
  }
}

function renderFinalResult() {
  const total = getCurrentQuestions().length;
  const answered = getAnsweredCount();
  const correct = getCorrectCount();

  elements.questionCard.hidden = true;
  elements.finalResult.hidden = false;
  elements.questionNumber.textContent = `${answered} / ${total} 回答済み`;
  renderMap();

  if (isChoiceLevel()) {
    elements.finalTitle.textContent = `${getLevelLabel(state.level)}の結果`;
    elements.finalScore.textContent = `${correct}/${total}`;
    elements.finalMessage.textContent = getChoiceResultMessage(correct, total);
    renderChoiceBreakdown();
  } else {
    const grades = getAdvancedGrades();
    const score = grades.reduce((sum, grade) => sum + grade.score, 0);
    const maxScore = grades.length * 3;
    elements.finalTitle.textContent = `${getLevelLabel(state.level)}の結果`;
    elements.finalScore.textContent = `${score}/${maxScore}`;
    elements.finalMessage.textContent = getAdvancedResultMessage(score, maxScore);
    renderAdvancedBreakdown(grades);
  }
}

function getAdvancedGrades() {
  return getCurrentQuestions().map((question, index) => {
    const answer = state.responses[getQuestionId(index)] || "";
    return gradeAdvancedAnswer(question, answer, index);
  });
}

function gradeAdvancedAnswer(question, answer, index) {
  const text = answer.replace(/\s+/g, "");
  const checks = [
    {
      label: "抽象化",
      ok: hasAny(text, [
        "つまり",
        "一言",
        "共通",
        "大事",
        "必要",
        "しやすい",
        "先に",
        "目的",
        "準備",
        "手順",
        "原因",
        "相手",
        "小さく",
        "比べ",
        "判断",
        "記録",
        "相談",
        "環境",
        "優先",
        "改善",
        "選択肢",
        "習慣",
        "視点",
        "確認",
        "休む",
        "期限",
        "順番",
      ]),
    },
    {
      label: "具体化",
      ok: hasAny(text, [
        "例えば",
        "例",
        "旅行",
        "買い物",
        "料理",
        "勉強",
        "掃除",
        "片付け",
        "運動",
        "読書",
        "友達",
        "本",
        "スマホ",
        "遅刻",
        "休日",
        "子ども",
        "家具",
        "机",
        "メモ",
        "先生",
        "仕事",
        "通知",
        "会議",
        "テスト",
        "服",
        "朝食",
        "お客さん",
        "集合時間",
        "資料",
      ]),
    },
    {
      label: "別の具体例",
      ok: text.length >= 35 || hasAny(text, ["別", "他", "置き換え", "同じ", "たとえば"]),
    },
  ];
  const score = checks.filter((check) => check.ok).length;
  const missing = checks.filter((check) => !check.ok).map((check) => check.label);
  const comment =
    score === 3
      ? "かなり良いです。抽象化と具体例のつながりが見えています。"
      : score === 2
        ? `あと少しです。${missing.join("・")}を足すと、もっと往復が見えます。`
        : `もう少し頑張ろう。${missing.join("・")}を意識して書くと、答えが強くなります。`;

  return {
    index: index + 1,
    title: question.title,
    score,
    comment,
  };
}

function hasAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function renderAdvancedBreakdown(grades) {
  elements.scoreBreakdown.hidden = false;
  elements.scoreBreakdown.innerHTML = "";

  grades.forEach((grade) => {
    const item = document.createElement("article");
    item.className = "grade-item";

    const head = document.createElement("div");
    head.className = "grade-head";

    const title = document.createElement("strong");
    title.textContent = `問${grade.index}：${grade.title}`;

    const score = document.createElement("span");
    score.className = "grade-score";
    score.textContent = `${grade.score}/3`;

    const comment = document.createElement("p");
    comment.textContent = grade.comment;

    head.append(title, score);
    item.append(head, comment);
    item.appendChild(createAnswerLine("答え", getCurrentQuestions()[grade.index - 1].answer));
    elements.scoreBreakdown.appendChild(item);
  });
}

function renderChoiceBreakdown() {
  elements.scoreBreakdown.hidden = false;
  elements.scoreBreakdown.innerHTML = "";

  getCurrentQuestions().forEach((question, index) => {
    const response = state.responses[getQuestionId(index)] || [];
    const isCorrect = isSameAnswer(response, question.correct);
    const item = document.createElement("article");
    item.className = "grade-item";

    const head = document.createElement("div");
    head.className = "grade-head";

    const title = document.createElement("strong");
    title.textContent = `問${index + 1}：${question.title}`;

    const score = document.createElement("span");
    score.className = "grade-score";
    score.textContent = isCorrect ? "正解" : "確認";

    head.append(title, score);
    item.appendChild(head);
    item.appendChild(createAnswerLine("あなたの回答", formatChoices(question, response)));
    item.appendChild(createAnswerLine("答え", formatChoices(question, question.correct)));
    item.appendChild(createAnswerLine("考え方", question.answer));
    elements.scoreBreakdown.appendChild(item);
  });
}

function createAnswerLine(label, text) {
  const line = document.createElement("p");
  line.className = "answer-line";
  const labelElement = document.createElement("b");
  labelElement.textContent = `${label}：`;
  line.append(labelElement, text || "未回答");
  return line;
}

function formatChoices(question, indexes) {
  if (!indexes.length) return "未選択";
  return indexes.map((index) => question.choices[index]).filter(Boolean).join(" / ");
}

function getAdvancedResultMessage(score, maxScore) {
  if (score === maxScore) {
    return "完璧です。抽象から具体、具体から別の具体への変換がかなり自然にできています。";
  }
  if (score >= 11) {
    return "かなり良いです。少しだけ抜けた視点を足せば、考え方の往復がもっと強くなります。";
  }
  if (score >= 7) {
    return "もう少し頑張ろう。抽象化で止まらず、別の具体例まで出す練習をしましょう。";
  }
  return "まずは型を意識しましょう。具体例、つまり何か、別の具体例の順で書くと整いやすいです。";
}

function getChoiceResultMessage(correct, total) {
  if (correct === total) {
    return "完璧です。抽象と具体の行き来がかなり自然にできています。次は上級で、自分の言葉にしてみましょう。";
  }
  if (correct >= 4) {
    return "かなり良いです。あと少しで完璧。具体例から共通点を抜き出す感覚が育っています。";
  }
  if (correct >= 2) {
    return "もう少し頑張ろう。具体例そのものではなく、「つまり何が言えるか」を見る練習を続けましょう。";
  }
  return "まずは基礎から整えよう。抽象は「共通点」、具体は「実際の場面」と考えると掴みやすいです。";
}

function getLevelLabel(level) {
  if (level === "beginner") return "初級";
  if (level === "intermediate") return "中級";
  return "上級";
}

function restartLevel() {
  getCurrentQuestions().forEach((_, index) => {
    delete state.solved[getQuestionId(index)];
    delete state.answered[getQuestionId(index)];
    delete state.correct[getQuestionId(index)];
    delete state.responses[getQuestionId(index)];
  });
  createRound(state.level);
  state.index = 0;
  state.reviewing = false;
  saveState();
  render();
}

elements.levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    state.index = 0;
    state.reviewing = false;
    saveState();
    render();
  });
});

elements.hintButton.addEventListener("click", showHint);
elements.checkButton.addEventListener("click", checkAnswer);
elements.answerInput.addEventListener("input", updateAnswerButtonState);
elements.restartButton.addEventListener("click", restartLevel);

loadState();
render();
