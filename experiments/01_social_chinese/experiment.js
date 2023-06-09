const jsPsych = initJsPsych({
    show_progress_bar: true,
    auto_update_progress_bar: false,
    message_progress_bar: "实验完成程度线",
    on_finish: function (data) {
        // jsPsych.data.displayData('csv');
        proliferate.submit({"trials": data.values()});
      }
  });

let timeline = [];

const stopCollection = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p>This study is currently not accepting new participants. Please check back again tomorrow.</p>',
    choices: "NO_KEYS",
}

timeline.push(stopCollection); 

// const irb = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: `
//     <p style="width: 1000px; margin-bottom: -250px">
//     We invite you to participate in a research study on language production and comprehension.
//     <BR><BR>Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game.
//     <BR><BR>There are no risks or benefits of any kind involved in this study.
//     <BR><BR>You will be paid for your participation at the posted rate.
//     <BR><BR>
//     If you agree to participate, please proceed to the study tasks.
//     </p>
//     <p style="width: 1000px; font-size: 9pt; position: relative; top: 330px; padding-bottom: 30px; text-align: justify">
//     If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.
//     <BR><BR>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.
//     </p>`,
//     choices: ['Continue'],
//     on_start: function() {
//         jsPsych.setProgressBar(0)
//     }
// };

const irb = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <p style="width: 1000px; margin-bottom: -250px">
    您被邀请参加一项研究。
    <BR><BR>您会完成一项跟语言有关的任务，例如读或听一些字、描述图片或场景、造句、或完成简单的语言游戏。
    <BR><BR>本研究中没有已知的风险、成本或不适。
    <BR><BR>您将按照公布的费率支付被发到一份赔偿金您的参与费用。
    <BR><BR>
    如果您同意参与这项研究，请继续。
    <BR><BR>
    <BR><BR>
    </p>
    <p style="width: 1000px; font-size: 9pt; position: relative; top: 330px; padding-bottom: 30px; text-align: justify">
    如果您已读完此表格并决定参与此项目，请明白您的参与是自愿的，您有权随时撤回您的同意或停止参与，而不会受到惩罚或失去您原本可以享有的利益有权。 您有权拒绝回答任何问题。 您的个人隐私将在研究产生的所有已发布和书面数据中得到保护。
    <BR><BR>联系信息：问题、疑虑或投诉：如果您对本研究、其程序、风险和益处有任何问题、疑虑或投诉，请致电 (650) 723-4284 联系 Meghan Sumner 教授。如果您对这项研究的进行方式不满意，或者如果您对研究或您作为参与者的权利有任何疑虑、投诉或一般问题，请联系斯坦福机构审查委员会 (IRB) 发言与独立于研究团队的人联系 (650)-723-2480 或拨打免费电话 1-866-680-2906。 您也可以致函 Stanford IRB, Stanford University, Stanford, CA 94305-5401 或发送电子邮件至 irbnonmed@stanford.edu。
    </p>`,
    choices: ['继续'],
    on_start: function() {
        jsPsych.setProgressBar(0)
    }
};
timeline.push(irb);

// const irb = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
//     choices: ['Continue'],
//     on_start: function() {
//         jsPsych.setProgressBar(0)
//     }
// };
// timeline.push(irb);

// const intro_slide = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus:  `Please make sure that you are completing this experiment in a quiet room.
//     <BR><BR>This experiment should be completed on a desktop or laptop using the Google Chrome browser.
//     <BR><BR>You should use earphones or headphones for the duration of this experiment.
//     <BR><BR>Press the SPACE BAR to continue.`,
//     choices: [" "],
// };
// timeline.push(intro_slide);

// how to get things to show up in chinese

/* eligibility */
const intro1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus:  `<p>只有年满 18 岁的新加坡公民、新加坡永久居民 (PR)、中国国民、或台湾国民才能完成这项研究。</p>
            <p>>请与其他新加坡公民、新加坡永久居民 (PR)、中国国民、或台湾国民分享此链接，但不要多次参与此研究。您不会多次获得补偿。</p>
            <p>此实验不会超过 20 分钟，完成后您将获得相当于3美元 (USD) 的赔偿金。</p>
            <p>点击“继续”继续。</p>`,
    choices: ['继续'],
};
timeline.push(intro1);

const intro_chinese = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  `请在一间安静的屋子里做这个实验。
    <BR><BR>请用电脑来做这个实验。
    <BR><BR>请戴上您的耳机，用耳机来做这个实验。
    <BR><BR>请按空格键继续。`,
    choices: [" "],

    on_start: function() {
        jsPsych.setProgressBar(0)
    }
};
timeline.push(intro_chinese);


const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  `在本实验中，您将听到简短的音频片段。
    <BR><BR>听完每个片段后，请对每一行被提供的句子表示同意度，来评价演讲者。
    <BR><BR>请按空格键继续。`,
    choices: [" "],
    on_start: function() {
        jsPsych.setProgressBar(0)
    }
};
timeline.push(instructions);

const soundcheck = {
  type: jsPsychCloze,
  text: `<center><BR><BR><audio controls src="stimuli/soundcheck.wav"></audio></center><BR><BR>请仔细听以上的音频片段。在以下的空处输入最后说的两个中文字母，然后按“继续”。<BR><BR>% 看书 %`,
  check_answers: true,
  button_text: '继续',
  mistake_fn: function () { alert("错误的答案。请确保您的音响系统没有问题，然后重试。") }
};
timeline.push(soundcheck);

var likert_scale = [
  "非常不同意", 
  "不同意", 
  "稍微不同意",
  "没意见", 
  "稍微同意",
  "同意", 
  "非常同意"
];

/* create array of stimuli and randomize stimuli*/
let tv_array = create_tv_array(trial_objects);
let stimuli = shuffle_array(tv_array);


// The attributes we will use are kind, honest, humorous, trustworthy, confident, intelligent, educated, and wealthy.

/* create array of attributes and randomize attribute order per participant */
let raw_attributes = [
                {prompt: "这是一位善良的人。", name: 'Kind', labels: likert_scale, required: true},
                {prompt: "这是一位诚实的人。", name: 'Honest', labels: likert_scale, required: true},
                {prompt: "这是一位幽默的人。", name: 'Humorous', labels: likert_scale, required: true},
                {prompt: "这是一位可信赖的人。", name: 'Trustworthy', labels: likert_scale, required: true},
                {prompt: "这是一位自信的人。", name: 'Confident', labels: likert_scale, required: true},
                {prompt: "这是一位聪明的人。", name: 'Intelligent', labels: likert_scale, required: true},
                {prompt: "这是一位有学问的人。", name: 'Educated', labels: likert_scale, required: true},
                {prompt: "这是一位富有的人。", name: 'Wealthy', labels: likert_scale, required: true},

                // {prompt: "This speaker is LIKEABLE.", name: 'Likeable', labels: likert_scale, required: true},
                // {prompt: "This speaker is RELIABLE.", name: 'Reliable', labels: likert_scale, required: true},
                // {prompt: "This speaker is HELPFUL.", name: 'Helpful', labels: likert_scale, required: true},
                // {prompt: "This speaker is AMBITIOUS.", name: 'Ambitious', labels: likert_scale, required: true},
                // {prompt: "This speaker is SELF CONFIDENT.", name: 'Self Confident', labels: likert_scale, required: true},
                // {prompt: "This speaker is LEADERSHIP.", name: 'Leadership', labels: likert_scale, required: true},
                // {prompt: "This speaker is FRIENDLY.", name: 'Friendly', labels: likert_scale, required: true},
                // {prompt: "This speaker is SINCERE.", name: 'Sincere', labels: likert_scale, required: true},
                // {prompt: "This speaker is MODEST.", name: 'Modest', labels: likert_scale, required: true},
                // {prompt: "This speaker is CONTENT.", name: 'Content', labels: likert_scale, required: true},
                // {prompt: "This speaker is NOT SELFISH.", name: 'Not Selfish', labels: likert_scale, required: true},
                // {prompt: "This speaker is COURTEOUS.", name: 'Courteous', labels: likert_scale, required: true},
                // {prompt: "This speaker is FAIR.", name: 'Fair', labels: likert_scale, required: true},
                // {prompt: "This speaker is OBLIGING.", name: 'Obliging', labels: likert_scale, required: true},
                // {prompt: "This speaker is DILIGENT.", name: 'Diligent', labels: likert_scale, required: true},
                // {prompt: "This speaker is SOCIAL STATUS.", name: 'Social Status', labels: likert_scale, required: true},
                // {prompt: "This speaker is NOT SUPERSTITIOUS.", name: 'Not Superstitious', labels: likert_scale, required: true},
                // {prompt: "This speaker is OPEN.", name: 'Open', labels: likert_scale, required: true},
                // {prompt: "This speaker is GOOD LOOKING.", name: 'Good Looking', labels: likert_scale, required: true},
                // {prompt: "This speaker is HAVING CHARACTER.", name: 'Having Character', labels: likert_scale, required: true},
                ];


            
let attributes = shuffle_array(raw_attributes);

let filepath = function getaudio() {
    return jsPsych.timelineVariable("stimulus")
  };

let audio_path = "";
let clip_id = "";
let speaker_id = "";

/* rating trials */
const trials = {
    on_timeline_start: function() {
        jsPsych.setProgressBar(jsPsych.getProgressBarCompleted())
    },
    timeline: [

        {
            type: jsPsychAudioKeyboardResponse,
            choices: ['NO_KEYS'],
            stimulus: jsPsych.timelineVariable("stimulus"),
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            prompt: `请仔细听此音频片段。`,
            on_start: function() {
                jsPsych.setProgressBar(jsPsych.getProgressBarCompleted())
            },
        },
        {
            type: jsPsychSurveyLikert,
            preamble: function() {
              new_audio_path = "<audio controls src=" + '"' + jsPsych.timelineVariable("stimulus") + '"' + ">";
              return `<p>如果您想再次听本音频片段，您可以再次播放。</p>
              <p>${new_audio_path}</p>
              <p>请评价您同意或不同意以下句子的程度:</p>`
            },
            questions: function() {
              return attributes
            },
            data: jsPsych.timelineVariable('data'),
            on_finish: function(data) {
                // console.log(data.trial_index)
                // console.log(data.trial_index/78)
                // console.log(jsPsych.getProgressBarCompleted())
                jsPsych.setProgressBar(data.trial_index/140);
                // console.log(jsPsych.getProgressBarCompleted())

            },
            button_label: '继续',
        },
        {
          type: jsPsychSurveyText,
          preamble: function() {
              new_audio_path = "<audio controls src=" + '"' + jsPsych.timelineVariable("stimulus") + '"' + ">";
              return `<p>如果您想再次听本音频片段，您可以再次播放。</p>
              <p>${new_audio_path}</p>`
            },
          questions: [
            {
            prompt: '您认为这个人来自哪里？',
            required: true,
            // button_label: '继续',
            }
          ],
          button_label: '继续',
          // data: jsPsych.timelineVariable('place'),
          // required: true,
          // how to collect data? also why won't this let me make it required??

        },

        // {
        //     type: jsPsychSurvey,
        //     pages: [
        //     [
        //     {
        //         type: 'likert',
        //         prompt: function() {
        //           new_audio_path = "<audio controls src=" + '"' + jsPsych.timelineVariable("stimulus") + '"' + ">";
        //           return `<p>Press play to listen to the audio again.</p>
        //           <p>${new_audio_path}</p>
        //           <p>Rate how much you agree or disagree with the following statements:</p>`
        //         },
        //         questions: function() {
        //           return attributes
        //         },
        //         data: jsPsych.timelineVariable('data'),

        //     },
        //       {

        //         type: 'text',
        //         prompt: "Where is this person from?", 
        //         // placeholder: 'City, State, Country',
        //         name: 'birthplace', 
        //         required: true,
        //       }, 
        //     ],
        //   ],
        // },

        ],
    timeline_variables: stimuli,
};
timeline.push(trials);

// /* survey 1: demographic questions */
const survey1 = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p style="color: #000000">请回答以下的问题。</p>`,
      },
      {
        type: 'multi-choice',
        prompt: "您的公民身份是什么？",
        name: 'citizenship',
        options: ['中华人民共和国（中国）', '中华民国台湾（台湾）', '新加坡', '新加坡永久居民 (新加坡PR)', '其他国家身份', '不想回答'],
        required: true
      },
      {
        type: 'multi-choice',
        prompt: "您的性别是什么？",
        name: 'gender',
        options: ['男性', '女性', '非二元性别', '其他性别', '不想回答'],
        required: false,
      },
      {
        type: 'drop-down',
        prompt: "您哪一年出生？",
        name: 'age',
        options: ['2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', 'Prefer not to answer'],
        required: true,
      },
      // {
      //   type: 'multi-choice',
      //   prompt: "What is your highest level of education?",
      //   name: 'education',
      //   options: ['No qualification', 'Primary school', 'Secondary school', 'Junior college/Polytechnic', 'Undergraduate degree', 'Postgraduate degree', 'Prefer not to answer'],
      //   required: false,
      // }
    ]
  ],
  on_finish: function(data) {
      jsPsych.setProgressBar(data.trial_index/140);
    },
  button_label_finish: '继续',
};
timeline.push(survey1);


// /* survey: family questions */
const survey_family = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p style="color: #000000">请回答以下的问题。</p>`,
      },

      {
        type: 'text',
        prompt: "您现在住哪里？（比如，国家、省、县、城市、等等）",
        name: 'now_live',
        input_type: "text",
        required: true,
      },
      {
        type: 'text',
        prompt: "您家人来自哪里？（比如，国家、省、县、城市、等等）",
        name: 'family_from',
        input_type: "text",
        required: true,
      },
      {
        type: 'multi-choice',
        prompt: "您有没有搬过家？",
        name: 'moved',
        options: ['有', '没有'],
        required: true,
      },
        {
        type: 'text',
        prompt: "如果您搬过家，您从哪里搬到哪里？大概在每个地方待得多久？",
        name: 'moved_places',
        input_type: "text",
        required: false,
      },

    ]
  ],
    on_finish: function(data) {
      jsPsych.setProgressBar(data.trial_index/140);
    },
  button_label_finish: '继续',
};
timeline.push(survey_family);


// /* survey 2: language background questions */
const survey2a = {
  type: jsPsychSurveyHtmlForm,
  preamble: `<p>您会说哪些语言？</p>
  <p>请在以下列出最多 5 种语言，并<b>按使用频率降序排列</b>，也就是说，语言 1 是最常用的语言，语言 2 是第二常用的语言。</p>
  <p>比如，如果普通话是第一语言，粤语是第二语言，台语是第三语言，这意味着您用普通话最多，粤语第二，台语最少。
  </p>`,
  html: `<p>
  <input name="lang1" type="text" placeholder="语言 1" required><BR><BR>
  <input name="lang2" type="text" placeholder="语言 2"><BR><BR>
  <input name="lang3" type="text" placeholder="语言 3"><BR><BR>
  <input name="lang4" type="text" placeholder="语言 4"><BR><BR>
  <input name="lang5" type="text" placeholder="语言 5">
  </p>`,
  button_label: '继续',
};
timeline.push(survey2a);

const survey2b = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'multi-choice',
        prompt: "您会讲普通话/国语/华文吗？",
        name: 'mandarin',
        options: ['会', '不会'],
        required: true,
      },
      {
        type: 'text',
        prompt: "您每天大概会用几个小时的普通话/国语/华文？",
        name: 'mandarin_hours',
        input_type: "number",
        required: true,
      },
      {
        type: 'multi-choice',
        prompt: "您的朋友们会用普通话/国语/华文吗？",
        name: 'mandarin_friends',
        options: ['会', '不会'],
        required: true,
      },
      {
        type: 'likert',
        prompt: "您和朋友们在一起的时候会用多少普通话/国语/华文？",
        name: 'mandarin_friends_frequency',
        required: true,
        likert_scale_min_label: '从来不用',
        likert_scale_max_label: '我们只会用普通话/国语/华文',
        likert_scale_values: [
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 }
        ]
      },
      {
        type: 'multi-choice',
        prompt: "您的家人会用普通话/国语/华文吗？",
        name: 'mandarin_family',
        options: ['会', '不会'],
        required: true,
      },
      {
        type: 'likert',
        prompt: "您和家人在一起的时候会用多少普通话/国语/华文？",
        name: 'mandarin_family_frequency',
        required: true,
        likert_scale_min_label: '从来不用',
        likert_scale_max_label: '我们只会用普通话/国语/华文',
        likert_scale_values: [
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 }
        ]
      },
      {
        type: 'multi-choice',
        prompt: "您的家人会用其他方言吗？",
        name: 'dialect',
        options: ['会', '不会'],
        required: true,
      },
      {
        type: 'text',
        prompt: "您的家人会用哪些方言？请列出来。",
        name: 'what_dialects',
        input_type: "text",
        required: false,
      },
      {
        type: 'likert',
        prompt: "您和家人在一起的时候会用多少方言？",
        name: 'dialect_family_frequency',
        required: false,
        likert_scale_min_label: '从来不用',
        likert_scale_max_label: '我们只会用方言',
        likert_scale_values: [
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 }
        ]
      },
    ],
  ],
    on_finish: function(data) {
      jsPsych.setProgressBar(data.trial_index/140);
    },
  button_label_finish: '继续',
};
timeline.push(survey2b);


// /* payment information */
const payment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: `
            <p>请在以下的空处提供您的电子邮件 (email)。研究人员将通过此电子邮件与您联系来给您您参加此实验的补偿金。</p>
            `,
      name: 'payment'

    }
    // button_label: '继续',
  ],
    on_finish: function(data) {
      jsPsych.setProgressBar(data.trial_index/140);
    },
  button_label: '继续',
};
timeline.push(payment);

// /* thank u */
const thankyou = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
            <p>感谢您完成实验！</p>
            <p>我们将尽快与您联系以安排补偿金。</p>
            <p>请点击“完成”按钮提交您的回答并完成研究。</p>
      `,
  choices: ["完成"],
};
timeline.push(thankyou);

// /* future study? */
// const futurestudies = {
//   type: jsPsychSurvey,
//   pages: [
//     [
//       {
//         type: 'multi-choice',
//         prompt: "Do you consent to being contacted for future studies?",
//         name: 'futurestudies',
//         options: ['Yes', 'No'],
//         required: true,
//       }
//     ]
//   ],
//   button_label_finish: 'Continue',
// };
// timeline.push(futurestudies);

// /* thank u */
// const thankyou = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: `
//             <p>Thank you for completing the experiment!</p>
//             <p>We will contact you soon to arrange for participant reimbursement.</p>
//             <p>Please click the "Submit" button to submit your responses and complete the study.</p>
//       `,
//   choices: ["Submit"],
// };
// timeline.push(thankyou);

jsPsych.run(timeline);


//


//


// const jsPsych = initJsPsych({
//     on_finish: function () {
//         jsPsych.data.displayData('csv');
//       }

//     //on_finish: function(data) {
//         //proliferate.submit({"trials": data.values()});
//     //}
//   });

// let timeline = [];

// // push experiment logic the timeline here...
// // ......
// const irb = {
//     // Which plugin to use
//     type: jsPsychHtmlButtonResponse,
//     // What should be displayed on the screen
//     stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
//     // What should the button(s) say
//     choices: ['Continue']
// };

// // push to the timeline
// timeline.push(irb)

// const instructions = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: "In this experiment, you will hear a series of words. If it's your first time hearing the word, press 'D' for NEW. If you've already heard the word during the task, press 'K' for OLD. Try to respond as quickly and accurately as you can.<br>When you're ready to begin, press the space bar.",
//     choices: [" "]
// };
// timeline.push(instructions);

// let tv_array = create_tv_array(trial_objects);
// let randomized = shuffle_array(tv_array);

// let likert_scale = [
//   "Strongly Disagree", 
//   "Disagree", 
//   "Neutral", 
//   "Agree", 
//   "Strongly Agree"
// ];

// let attributes = [
//             {prompt: "This speaker is FRIENDLY.", name: 'Friendly', labels: likert_scale},
//             {prompt: "This speaker is KIND.", name: 'Kind', labels: likert_scale},
//             {prompt: "This speaker is HONEST.", name: 'Honest', labels: likert_scale},
//             {prompt: "This speaker is LIKEABLE.", name: 'Likeable', labels: likert_scale},
//             {prompt: "This speaker is RELIABLE.", name: 'Reliable', labels: likert_scale},
//             {prompt: "This speaker is HELPFUL.", name: 'Helpful', labels: likert_scale},
//             {prompt: "This speaker is CONFIDENT.", name: 'Confident', labels: likert_scale},
//             {prompt: "This speaker is AMBITIOUS.", name: 'Ambitious', labels: likert_scale},
//             {prompt: "This speaker is INTELLIGENT.", name: 'Intelligent', labels: likert_scale},
//             {prompt: "This speaker is EDUCATED.", name: 'Educated', labels: likert_scale},
//             {prompt: "This speaker is SELF CONFIDENT.", name: 'Self Confident', labels: likert_scale},
//             {prompt: "This speaker is WEALTHY.", name: 'Wealthy', labels: likert_scale},
//             {prompt: "This speaker is LEADERSHIP.", name: 'Leadership', labels: likert_scale},
//             {prompt: "This speaker is TRUSTWORTHY.", name: 'Trustworthy', labels: likert_scale},
//             {prompt: "This speaker is SINCERE.", name: 'Sincere', labels: likert_scale},
//             {prompt: "This speaker is HUMOROUS.", name: 'Humorous', labels: likert_scale},
//             {prompt: "This speaker is MODEST.", name: 'Modest', labels: likert_scale},
//             {prompt: "This speaker is CONTENT.", name: 'Content', labels: likert_scale},
//             {prompt: "This speaker is NOT SELFISH.", name: 'Not Selfish', labels: likert_scale},
//             {prompt: "This speaker is COURTEOUS.", name: 'Courteous', labels: likert_scale},
//             {prompt: "This speaker is FAIR.", name: 'Fair', labels: likert_scale},
//             {prompt: "This speaker is OBLIGING.", name: 'Obliging', labels: likert_scale},
//             {prompt: "This speaker is DILIGENT.", name: 'Diligent', labels: likert_scale},
//             {prompt: "This speaker is SOCIAL STATUS.", name: 'Social Status', labels: likert_scale},
//             {prompt: "This speaker is NOT SUPERSTITIOUS.", name: 'Not Superstitious', labels: likert_scale},
//             {prompt: "This speaker is OPEN.", name: 'Open', labels: likert_scale},
//             {prompt: "This speaker is GOOD LOOKING.", name: 'Good Looking', labels: likert_scale},
//             {prompt: "This speaker is HAVING CHARACTER.", name: 'Having Character', labels: likert_scale},

//             ];
// let ran_attributes = shuffle_array(attributes);


// let audio_path = "";


// const trials = {
//     timeline: [
//         {
//             type: jsPsychAudioKeyboardResponse,
//             choices: ["NO_KEYS"],
//             stimulus: jsPsych.timelineVariable('stimulus'),
//             response_allowed_while_playing: false,
//             //trial_duration: 4000,
//             prompt: "Please listen to the current clip carefully.",
//             trial_ends_after_audio: true,
//             on_finish: function(data) {
//                 evaluate_response(data);
//             },
//             data: jsPsych.timelineVariable('data')
//         },

//         //`<audio controls src=` + audio_path + `></audio>`


//         // {
//         //     [
//         //       {
//         //         type: 'likert-table',
//         //         prompt: ' ',
//         //         statements: [
//         //           {prompt: 'I like to eat vegetables', name: 'VeggiesTable'},
//         //           {prompt: 'I like to eat fruit', name: 'FruitTable'},
//         //           {prompt: 'I like to eat meat', name: 'MeatTable'},
//         //         ],
//         //         options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
//         //       }
//         //     ]

//         // },
//         {
//             type: jsPsychSurveyLikert,
//             on_start: function(){
//                 audio_path = jsPsych.timelineVariables('stimulus')
//             },
//            // let new_audio_path = `<audio controls src=` + audio_path + `></audio>`
//             preamble: `<audio controls src= + audio_path + ></audio>`,
//             // preamble: `<div id="soundtrack"></div>
//             // <button onClick="setSong()">Set Song</button>`,
//             //stimulus: jsPsych.timelineVariable('stimulus'),
//             questions: function(){
//                 return ran_attributes;
//             }
//         },
//         // {
//         //   type: jsPsychSurvey,
//         //   pages: [
//         //     [
//         //       {
//         //         type: 'html',
//         //         prompt: 'Please answer the following questions:',
//         //       },
//         //       {
//         //         type: 'multi-choice',
//         //         prompt: "Which of the following do you like the most?", 
//         //         name: 'VegetablesLike', 
//         //         options: ['Tomato', 'Cucumber', 'Eggplant', 'Corn', 'Peas'], 
//         //         required: true
//         //       }, 
//         //       {
//         //         type: 'multi-select',
//         //         prompt: "Which of the following do you like?", 
//         //         name: 'FruitLike', 
//         //         options: ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry'], 
//         //         required: false,
//         //       },
//         //     ],
//         //   ],
//         // },
//     ],
//     timeline_variables: randomized,
//     // randomize_order: true
// }
// timeline.push(trials);

// // const trial_1 = {
// //     type: jsPsychAudioKeyboardResponse,
// //     choices: ['d', 'k'],
// //     stimulus: 'audio/Violin.wav',
// //     response_allowed_while_playing: false,
// //     trial_duration: 4000,
// //     prompt: `<div class=\"option_container\">
// //     			<div class=\"option\">NEW<br><br><b>D</b></div>
// //     			<div class=\"option\">OLD<br><br><b>K</b></div>
// //     		</div>`,
// //     data: {
// //         correct: "NEW"
// //     },
// //     on_finish: function(data) {
// //         evaluate_response(data);
// //     }
// // }

// // const trial_2 = {
// //     type: jsPsychAudioKeyboardResponse,
// //     prompt: "<div class=\"option_container\"><div class=\"option\">NEW<br><br><b>D</b></div><div class=\"option\">OLD<br><br><b>K</b></div></div>",
// //     choices: ["d", 'k'],
// //     stimulus: "audio/Bologna.wav",
// //     trial_duration: 4000,
// //     response_allowed_while_playing: false,
// //     data: {
// //         correct: "NEW"
// //     },
// //     on_finish: function(data) {
// //         evaluate_response(data)
// //     }
// // }

// // timeline.push(trial_1, trial_2);

// // const trials = {
// //     type: jsPsychAudioKeyboardResponse,
// //     choices: ['d', 'k'],
// //     response_allowed_while_playing: false,
// //     trial_duration: 4000,
// //     // randomize_order: true,
// //     prompt: `<div class=\"option_container\"><div class=\"option\">NEW<br><br><b>D</b></div><div class=\"option\">OLD<br><br><b>K</b></div></div>`,
// //     data: {
// //         correct: "NEW"
// //     },
// //     on_finish: function(data) {
// //         evaluate_response(data);
// //     },
// //     timeline: [
// //         {stimulus: 'audio/Violin.wav', data: {correct: "NEW"}},
// //         {stimulus: 'audio/Bologna.wav', data: {correct: "NEW"}},
// //         {stimulus: 'audio/Violin.wav', data: {correct: "OLD"}},
// //         {stimulus: 'audio/Bologna.wav', data: {correct: "OLD"}}
// //     ]
// // }
// // timeline.push(trials)

// // let likert_scale = [
// //   "Strongly Disagree", 
// //   "Disagree", 
// //   "Neutral", 
// //   "Agree", 
// //   "Strongly Agree"
// // ];

// // let trial_likert = {
// //   type: jsPsychSurveyLikert,
// //   questions: [
// //     {prompt: "This speaker is FRIENDLY.", name: 'Friendly', labels: likert_scale},
// //     {prompt: "This speaker is EDUCATED.", name: 'Educated', labels: likert_scale},
// //     {prompt: "This speaker is INTELLIGENT.", name: 'Intelligent', labels: likert_scale},
// //     {prompt: "This speaker is TRUSTWORTHY.", name: 'Trustworthy', labels: likert_scale},
// //   ],
//   // randomize_question_order: true //this shuffles WITHIN. get rid of this once there is the more controlled shuffle
//   //is this randomizing the order in which the attributes show up? random acros participants and consistent within particpants
//   // if not, how then?
//   // write a helper function that generates an array of the words (attributes),
//   // input into the helper function be these four objects, shuffle it, and then have that output array be the input to the questions parameter
//   // how to we make sure participants answer every single attribute? use the required: true parameter 
//   // alternate trial types, where you have one page where it's just listen to this audio
//   // the second type of trial where you embed the audio into a social questionnaire plugin and they can relisten to the same audio but 
//   // then it forces them to listen at least once
//   // use survey plugin https://www.jspsych.org/7.2/plugins/survey/
//   // then put audio inside "prompt" in the string of html text 
//   // you need a special css that is only available thru cdn

//   // const, var, or let
//   // const is constant and has to stay that way
//   // let you can change, like let array = []
//   // prompts can be just a string of text
//   // there is an html tag that you can use to embed audio (just an audio) for the prompt
//   // src is the path to the file 

//   // link stimuli to stimuli in both audio keyboard plugin and survey plugin

//   // js file for free sort, see how the icons are defined, where the paths to the photos are going, and then get into that html element
//   // then in that html element add something that can play audio

// // };

// //timeline.push(trial_likert)


// jsPsych.run(timeline)