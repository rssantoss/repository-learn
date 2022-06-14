/*

*/

/*
"as HTMLInputElement"
Informa ao TypeScript o input
*/
const input1 = document.getElementById(input) as HTMLInputElement;

input1.value;

const input2 = document.getElementById(input);

input2.value;
/* 
Acusa um erro sem informar o type: 
Property 'value' does not exist on type 'HTMLElement'
*/

const input = document.getElementById(input) as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});