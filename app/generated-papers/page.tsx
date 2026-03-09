const objectiveQuestions = [
  {
    q: "The part of the body used for seeing is the ____.",
    options: ["nose", "ear", "eye", "tongue"],
    answer: "C",
  },
  {
    q: "How many times should we bathe in a day to keep clean?",
    options: ["once", "twice", "four times", "none"],
    answer: "B",
  },
  {
    q: "A clean environment helps to prevent ____. ",
    options: ["play", "disease", "reading", "singing"],
    answer: "B",
  },
  {
    q: "Which of these is a healthy food?",
    options: ["spoilt rice", "fresh fruits", "dirty water", "sand"],
    answer: "B",
  },
  {
    q: "Washing hands with soap should be done before ____. ",
    options: ["sleeping in class", "eating", "running", "singing"],
    answer: "B",
  },
  {
    q: "The body needs ____ to grow well.",
    options: ["balanced diet", "only sweets", "only biscuits", "only soft drink"],
    answer: "A",
  },
  {
    q: "A tooth brush is used to clean the ____. ",
    options: ["hair", "teeth", "nails", "legs"],
    answer: "B",
  },
  {
    q: "Which one is a bad health habit?",
    options: ["cutting nails", "washing hands", "sharing sharp objects", "bathing"],
    answer: "C",
  },
  {
    q: "The place where people go for treatment is the ____. ",
    options: ["market", "hospital", "garage", "bank"],
    answer: "B",
  },
  {
    q: "Which of these helps to keep our teeth healthy?",
    options: ["brushing morning and night", "eating mud", "drinking petrol", "not brushing"],
    answer: "A",
  },
  {
    q: "When you cough or sneeze, you should cover your ____. ",
    options: ["mouth and nose", "ears", "eyes", "head"],
    answer: "A",
  },
  {
    q: "Sleeping under a mosquito net helps to prevent ____. ",
    options: ["malaria", "toothache", "broken leg", "hunger"],
    answer: "A",
  },
  {
    q: "Which of these is a safety rule at home?",
    options: ["play with matches", "touch naked wire", "keep floor dry", "swallow medicine without adult"],
    answer: "C",
  },
  {
    q: "A child should drink ____ water.",
    options: ["dirty", "clean", "rain with sand", "soapy"],
    answer: "B",
  },
  {
    q: "Immunization helps to ____ children from diseases.",
    options: ["hide", "protect", "punish", "frighten"],
    answer: "B",
  },
  {
    q: "The best way to keep fingernails neat is to ____. ",
    options: ["paint with mud", "bite them", "trim them", "leave them very long"],
    answer: "C",
  },
  {
    q: "Which of these is a communicable disease?",
    options: ["malaria", "beauty", "hunger", "wisdom"],
    answer: "A",
  },
  {
    q: "Refuse should be thrown into a ____. ",
    options: ["gutter", "dustbin", "road", "classroom floor"],
    answer: "B",
  },
  {
    q: "Good posture means sitting and standing in the ____ way.",
    options: ["correct", "lazy", "crooked", "careless"],
    answer: "A",
  },
  {
    q: "When sick, you should report to a ____. ",
    options: ["carpenter", "farmer", "teacher/parent", "tailor"],
    answer: "C",
  },
];

const fillInTheGaps = [
  "We wash our hands with soap and clean ____. ",
  "We should brush our teeth ____ times daily.",
  "The ____ protects us from mosquito bites while sleeping.",
  "Keeping our body and clothes clean is called personal ____. ",
  "A child should eat a ____ diet for healthy growth.",
];

const theoryQuestions = [
  {
    a: "List four materials used for personal hygiene.",
    b: "State two reasons why personal hygiene is important.",
  },
  {
    a: "Mention three healthy habits every pupil should practice daily.",
    b: "Write two bad habits that can make a child sick.",
  },
  {
    a: "Name three safety rules to follow at home.",
    b: "Explain what you should do if you see a naked electric wire.",
  },
  {
    a: "Mention four foods that can help a child grow well.",
    b: "State two dangers of eating spoilt food.",
  },
  {
    a: "List three ways to keep your environment clean.",
    b: "Write two diseases that can spread in a dirty environment.",
  },
];

export default function GeneratedPapersPage() {
  return (
    <section className="panel">
      <h2>Generated Paper: Health Education — Basic 4 (First Term)</h2>
      <p><strong>SECTION A — OBJECTIVES</strong></p>
      <ol>
        {objectiveQuestions.map((item) => (
          <li key={item.q} style={{ marginBottom: 8 }}>
            {item.q}
            <div>A. {item.options[0]} &nbsp; B. {item.options[1]} &nbsp; C. {item.options[2]} &nbsp; D. {item.options[3]}</div>
          </li>
        ))}
      </ol>

      <p><strong>SECTION B — FILL IN THE GAPS</strong></p>
      <ol>
        {fillInTheGaps.map((question) => (
          <li key={question} style={{ marginBottom: 8 }}>{question}</li>
        ))}
      </ol>

      <p><strong>SECTION C — THEORY</strong></p>
      <p><strong>Answer any THREE (3) questions.</strong></p>
      <ol>
        {theoryQuestions.map((question) => (
          <li key={question.a} style={{ marginBottom: 12 }}>
            <div>({"a"}) {question.a}</div>
            <div>({"b"}) {question.b}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
