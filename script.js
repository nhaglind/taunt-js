let first_button = document.querySelector('#first_button');
let second_button = document.querySelector('#second_button');
let fourth_button = document.querySelector('#fourth_button');

let approvedCEDomains = `site%3Anytimes.com%2Cwashingtonpost.com`

function taunt() {
  let first_answer = document.querySelector('#first_answer').value;
  (first_answer == "") ? first_answer = 'dog food': first_answer;
  document.querySelector('.first_response').href = `https://duckduckgo.com/?q=${first_answer}`;
}

function taunt_2() {
  let second_answer = document.querySelector('#second_answer').value;
  (second_answer == "") ? second_answer = 'Taylor Swift': second_answer;
  document.querySelector('.second_response').href = `https://duckduckgo.com/?q=${second_answer}&iax=images&ia=images`;
}

function taunt_4() {
  let fourth_answer = document.querySelector('#fourth_answer').value;
  document.querySelector('.fourth_response').href = `https://duckduckgo.com/?q=${approvedCEDomains}+${fourth_answer}&ia=web`
}

first_button.addEventListener('click', taunt);
second_button.addEventListener('click', taunt_2);
fourth_button.addEventListener('click', taunt_4);