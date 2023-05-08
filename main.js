var num = document.getElementById('num'),

btn = document.getElementById('btn'),

h0 = document.getElementById('h0'),

h9 = document.getElementById('h9'),

h5 = document.getElementById('h5'),

h7 = document.getElementById('h7'),

h4 = document.getElementById('h4'),

tbl = document.getElementById('tbl'),

num2 = document.getElementById('num2'),

m = 0;

btn.onclick=function(){

  var numv=+num.value + +num2.value + +num.value/100*h9.value;

  num.value=numv;

    h0.value=m+1;

  h5.value =+num2.value + +num2.value + +num2.value * m++;

  

h4.value= +num.value - +h5.value;

h7.value= +num.value/100*h9.value;

tbl.innerHTML += `<tr id="tr2">`+'<td>'+Math.floor(num.value)+'</td>'+'<td>'+num2.value+'</td>'+'<td>'+ h9.value+'%'+'</td>'+'<td>'+Math.floor(h5.value)+'</td>'+'<td>'+Math.floor(h4.value)+'</td>'+'<td>'+Math.floor(h7.value)+'</td>'+'<td id="tde">'+h0.value+'</td>'+'</td>'+'</tr>'

}

var re = document.getElementById('re');

re.onclick=function(){

  h0.value='رقم العملية';

  m=0;

  num.value='';

  num2.value='';

  h4.value='';

  h5.value='';

  h7.value='';

  h9.value='';

}

var tq = document.getElementById('tq'),

page1 = document.getElementById('page1'),

tq1 = document.getElementById('tq1'),

page2 = document.getElementById('page2');

tq.onclick=function(){

  page1.hidden=true;

  page2.hidden=false;

}

tq1.onclick=function(){

  page2.hidden=true;

  page1.hidden=false;

}

var cle = document.getElementById('cle'),

tbl = document.getElementById('tbl');

cle.onclick=function(){

tbl.innerHTML =`

        <tr id="tr1">

          <td>الاجمالي</td>

          <td>الإيداع الشهري الثابت</td>

          <td>نسبة الربح الشهري</td>

          <td>صافي قيمة الإستثمار</td>

          <td>اجمالي الارباح المركبة</td>

          <td>ربح الشهر التالي</td>

          <td id="tde1">رقم العملية</td>

        </tr>

`;

}
var cle0=document.getElementById('cle0');

cle0.onclick=function(){

    window.print()

}
 
