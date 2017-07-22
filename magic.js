/**
 * Created by Spiker on 22/07/2017.
 */
ax=0;
function viewtable() {
    ax=Math.round(Math.random()*26);
    alphaArray=new Array("a", "n", "b", "d", "f", "h", "{", "i", "l", "v", "x", "z", "I", "J", "M", "N", "o", "O", "R", "S", "T", "U", "m", "6", "^", "u", "_", "[", "]");
    table="<table align=\"center\" border=\"0\" cellspacing=\"5\" cellpadding=\"1\"><tr>";
    j=1;
    for ( i = 99 ; i >= 0 ; i-- ) {
        a=Math.round(Math.random()*26);
        if(i%9 == 0 &&  i < 89)
            a=ax;
        table+="<td class=\"num\">"+i+"</td><td class=\"symbols\">"+alphaArray[a]+"</td>";
        if(j%10 == 0) table+="</tr><tr>"; j++;
    }
    table+="</table>";
    sym.innerHTML=table
    sh.innerHTML=""
}

function show() {
    sh.innerHTML=alphaArray[ax]
    sym.innerHTML="<center><big>Have you guessed this symbol?</big><br><br><b>Share this link if you liked!</b><br><a href='http://magic.denisbaciu.com' target='_blank'>http://magic.denisbaciu.com</a><br/><br/> <a href='http://www.denisbaciu.com'>Back</a></center>";
}