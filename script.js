let first_button = document.querySelector('#first_button');
let second_button = document.querySelector('#second_button');
let third_button = document.querySelector('#third_button');


function taunt() {
  let first_answer = document.querySelector('#first_answer').value;
  (first_answer == "") ? first_answer = 'dog food': first_answer;
  document.querySelector('.first_response').innerHTML = `Wow, I can't believe you like ${first_answer}. Here is a search for <a href="https://duckduckgo.com/?q=${first_answer}">${first_answer}</a>.`;
}

function taunt_2() {
  let second_answer = document.querySelector('#second_answer').value;
  (second_answer == "") ? second_answer = 'Taylor Swift': second_answer;
  document.querySelector('.second_response').innerHTML = `Wow, I can't believe you like ${second_answer}. Here is a search for <a href="https://duckduckgo.com/?q=${second_answer}">${second_answer}</a>.`;
}

function taunt_3() {
  third_answer = document.querySelector('#third_answer').value;
  let yen = third_answer * 113.02;
  let euro = third_answer * 0.85;
  document.querySelector('.third_response').innerHTML = (`<p>Wow, much poor. Here is a rough estimate of your money in these currencies.</p> 
  <ul>
  <li>Japanese Yen: ${yen.toFixed(2)}</li>
  <li>Euro: ${euro.toFixed(2)}</li>
  </ul>`);
}

first_button.addEventListener('click', taunt);
second_button.addEventListener('click', taunt_2);
third_button.addEventListener('click', taunt_3);