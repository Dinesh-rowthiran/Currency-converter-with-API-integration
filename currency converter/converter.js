let select=document.querySelectorAll('.currency')
let input=document.getElementById('input')


fetch('https://api.frankfurter.app/currencies')

.then(res => res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
    let curr= Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}" >${curr[i][0]}  </option> `
        // console.log(curr[i][0])
        // console.log(curr[i][1])
        select[0].innerHTML =select[0].innerHTML+opt
        select[1].innerHTML =select[1].innerHTML+opt
    }       
}

function flagclick1(){
    let str1=select[0].value
    let a1=str1.slice(0, -1);
    let b1=a1.toLowerCase();
    console.log(b1)
    document.getElementById('flags1').src=`https://flagcdn.com/48x36/${b1}.png`
}

function flagclick2(){
    let str1=select[1].value
    let a1=str1.slice(0, -1);
    let b1=a1.toLowerCase();
    console.log(b1)
    document.getElementById('flags2').src=`https://flagcdn.com/48x36/${b1}.png`
}


btn.addEventListener('click',()=> {
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value
    convert(curr1,curr2,inputval)
});



function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
}





