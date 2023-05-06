const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
      }

    //on_finish: function(data) {
        //proliferate.submit({"trials": data.values()});
    //}
  });

let timeline = [];

// push experiment logic the timeline here...
// ......
const irb = {
    // Which plugin to use
    type: jsPsychHtmlButtonResponse,
    // What should be displayed on the screen
    stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
};

// push to the timeline
timeline.push(irb)

const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will hear a series of words. If it's your first time hearing the word, press 'D' for NEW. If you've already heard the word during the task, press 'K' for OLD. Try to respond as quickly and accurately as you can.<br>When you're ready to begin, press the space bar.",
    choices: [" "]
};
timeline.push(instructions);

let tv_array = create_tv_array(trial_objects);
let randomized = shuffle_array(tv_array);

let likert_scale = [
  "Strongly Disagree", 
  "Disagree", 
  "Neutral", 
  "Agree", 
  "Strongly Agree"
];

let attributes = [
            {prompt: "This speaker is FRIENDLY.", name: 'Friendly', labels: likert_scale},
            {prompt: "This speaker is EDUCATED.", name: 'Educated', labels: likert_scale},
            {prompt: "This speaker is INTELLIGENT.", name: 'Intelligent', labels: likert_scale},
            {prompt: "This speaker is TRUSTWORTHY.", name: 'Trustworthy', labels: likert_scale}
            ];
let ran_attributies = shuffle_array(attributes);




const trials = {
    timeline: [
        {
            type: jsPsychAudioKeyboardResponse,
            choices: ["NO_KEYS"],
            stimulus: jsPsych.timelineVariable('stimulus'),
            response_allowed_while_playing: false,
            //trial_duration: 4000,
            prompt: "Please listen to the current clip carefully.",
            trial_ends_after_audio: true,
            on_finish: function(data) {
                evaluate_response(data);
            },
            data: jsPsych.timelineVariable('data')
        },
        {
            [
              {
                type: 'likert-table',
                prompt: ' ',
                statements: [
                  {prompt: 'I like to eat vegetables', name: 'VeggiesTable'},
                  {prompt: 'I like to eat fruit', name: 'FruitTable'},
                  {prompt: 'I like to eat meat', name: 'MeatTable'},
                ],
                options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
              }
            ]

        },
        {
            type: jsPsychSurveyLikert,
            preamble: `<audio controls src="${jsPsych.timelineVariable('stimulus')}"></audio>`,
            // preamble: `<div id="soundtrack"></div>
            // <button onClick="setSong()">Set Song</button>`,
            //stimulus: jsPsych.timelineVariable('stimulus'),
            questions: function(){
                return ran_attributies;
            }
        },
        {
          type: jsPsychSurvey,
          pages: [
            [
              {
                type: 'html',
                prompt: 'Please answer the following questions:',
              },
              {
                type: 'multi-choice',
                prompt: "Which of the following do you like the most?", 
                name: 'VegetablesLike', 
                options: ['Tomato', 'Cucumber', 'Eggplant', 'Corn', 'Peas'], 
                required: true
              }, 
              {
                type: 'multi-select',
                prompt: "Which of the following do you like?", 
                name: 'FruitLike', 
                options: ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry'], 
                required: false,
              }
            ]
          ],
        },
    ],
    timeline_variables: randomized,
    // randomize_order: true
}
timeline.push(trials);

// const trial_1 = {
//     type: jsPsychAudioKeyboardResponse,
//     choices: ['d', 'k'],
//     stimulus: 'audio/Violin.wav',
//     response_allowed_while_playing: false,
//     trial_duration: 4000,
//     prompt: `<div class=\"option_container\">
//     			<div class=\"option\">NEW<br><br><b>D</b></div>
//     			<div class=\"option\">OLD<br><br><b>K</b></div>
//     		</div>`,
//     data: {
//         correct: "NEW"
//     },
//     on_finish: function(data) {
//         evaluate_response(data);
//     }
// }

// const trial_2 = {
//     type: jsPsychAudioKeyboardResponse,
//     prompt: "<div class=\"option_container\"><div class=\"option\">NEW<br><br><b>D</b></div><div class=\"option\">OLD<br><br><b>K</b></div></div>",
//     choices: ["d", 'k'],
//     stimulus: "audio/Bologna.wav",
//     trial_duration: 4000,
//     response_allowed_while_playing: false,
//     data: {
//         correct: "NEW"
//     },
//     on_finish: function(data) {
//         evaluate_response(data)
//     }
// }

// timeline.push(trial_1, trial_2);

// const trials = {
//     type: jsPsychAudioKeyboardResponse,
//     choices: ['d', 'k'],
//     response_allowed_while_playing: false,
//     trial_duration: 4000,
//     // randomize_order: true,
//     prompt: `<div class=\"option_container\"><div class=\"option\">NEW<br><br><b>D</b></div><div class=\"option\">OLD<br><br><b>K</b></div></div>`,
//     data: {
//         correct: "NEW"
//     },
//     on_finish: function(data) {
//         evaluate_response(data);
//     },
//     timeline: [
//         {stimulus: 'audio/Violin.wav', data: {correct: "NEW"}},
//         {stimulus: 'audio/Bologna.wav', data: {correct: "NEW"}},
//         {stimulus: 'audio/Violin.wav', data: {correct: "OLD"}},
//         {stimulus: 'audio/Bologna.wav', data: {correct: "OLD"}}
//     ]
// }
// timeline.push(trials)

// let likert_scale = [
//   "Strongly Disagree", 
//   "Disagree", 
//   "Neutral", 
//   "Agree", 
//   "Strongly Agree"
// ];

// let trial_likert = {
//   type: jsPsychSurveyLikert,
//   questions: [
//     {prompt: "This speaker is FRIENDLY.", name: 'Friendly', labels: likert_scale},
//     {prompt: "This speaker is EDUCATED.", name: 'Educated', labels: likert_scale},
//     {prompt: "This speaker is INTELLIGENT.", name: 'Intelligent', labels: likert_scale},
//     {prompt: "This speaker is TRUSTWORTHY.", name: 'Trustworthy', labels: likert_scale},
//   ],
  // randomize_question_order: true //this shuffles WITHIN. get rid of this once there is the more controlled shuffle
  //is this randomizing the order in which the attributes show up? random acros participants and consistent within particpants
  // if not, how then?
  // write a helper function that generates an array of the words (attributes),
  // input into the helper function be these four objects, shuffle it, and then have that output array be the input to the questions parameter
  // how to we make sure participants answer every single attribute? use the required: true parameter 
  // alternate trial types, where you have one page where it's just listen to this audio
  // the second type of trial where you embed the audio into a social questionnaire plugin and they can relisten to the same audio but 
  // then it forces them to listen at least once
  // use survey plugin https://www.jspsych.org/7.2/plugins/survey/
  // then put audio inside "prompt" in the string of html text 
  // you need a special css that is only available thru cdn

  // const, var, or let
  // const is constant and has to stay that way
  // let you can change, like let array = []
  // prompts can be just a string of text
  // there is an html tag that you can use to embed audio (just an audio) for the prompt
  // src is the path to the file 

  // link stimuli to stimuli in both audio keyboard plugin and survey plugin

  // js file for free sort, see how the icons are defined, where the paths to the photos are going, and then get into that html element
  // then in that html element add something that can play audio

// };

//timeline.push(trial_likert)


jsPsych.run(timeline)