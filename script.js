/* Continuous Falling */
function createFall(){
    const el=document.createElement("div");
    el.classList.add("fall");
    el.innerHTML=Math.random()>0.5?"❤️":"🌸";
    el.style.left=Math.random()*100+"vw";
    el.style.animationDuration=(Math.random()*5+5)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),10000);
}
setInterval(createFall,400);

/* Sparkle Cursor */
document.addEventListener("mousemove",function(e){
    const sparkle=document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left=e.pageX+"px";
    sparkle.style.top=e.pageY+"px";
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),800);
});

/* Answer Buttons */
function answerYes(){
    document.getElementById("questionScreen").style.display="none";
    document.getElementById("storyScreen").style.display="flex";
    startStory();
}

function answerNo(){
    alert("please rethink this My love 💌");
}

/* First Story */
function startStory(){
    const text=`From the first secret we shared...

Something felt different.

How we bonded easily

And now that you said yes...

Let me tell you something beautiful. 💕`;

    let i=0;
    function type(){
        if(i<text.length){
            document.getElementById("message").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,40);
        } else {
            setTimeout(showFinalScene,1500);
        }
    }
    type();
}

/* Final Scene */
function showFinalScene(){
    document.getElementById("storyScreen").style.display="none";
    document.getElementById("finalScreen").style.display="flex";
    revealStory();
}

function revealStory(){
    const text=`It started with simple conversations.

Then laughter that stayed in my heart.

Then moments I never wanted to end.

Somewhere between secrets and smiles,
you became my favorite chapter.

And if this feels like a movie scene...

I hope it never fades to black.

Because I want every heartbeat,
every smile,
every page...

With you. 💕`;

    let i=0;
    function type(){
        if(i<text.length){
            document.getElementById("storyText").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,40);
        } else {
            document.getElementById("continued").style.opacity="1";
        }
    }
    type();
}
