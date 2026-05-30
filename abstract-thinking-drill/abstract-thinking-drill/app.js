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

const storageKey = "abstract-thinking-drill-three-level-state";
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
