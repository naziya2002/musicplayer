
let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myprogressbar");
let songItem=Array.from(document.getElementsByClassName("songitem"));
let masterSongName=document.getElementById("masterSongName")
let songs=[
    {songName:"BTS-Dynamite-(TrendyBeatz.com)", songPath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"BTS-Butter" , songPath:"2.mp3" ,coverPath:"cover/2.jpg"},
    
    {songName:"BTS-Permission To Dance" ,songPath:"3.mp3" ,coverPath:"cover/3.jpg"},
    {songName:"BTS-Boy With Love" ,songPath:"4.mp3" ,coverPath:"cover/4.jpg"},
    {songName:"jk-Euphoria" ,songPath:"5.mp3" ,coverPath:"cover/5.jpg"},
    {songName:"Malama Pitha" ,songPath:"6.mp3" ,coverPath:"cover/6.jpg"},
    {songName:"Goriye-Darshan Raval" ,songPath:"7.mp3" ,coverPath:"cover/7.jpg"},
    {songName:"Do Din-DR" ,songPath:"8.mp3" ,coverPath:"cover/8.jpg"},
    {songName:"peh;i mohabbat" ,songPath:"9.mp3" ,coverPath:"cover/9.jpg"},
    {songName:"Vilayti Sharab -DR" ,songPath:"10.mp3" ,coverPath:"cover/10.jpg"},
]
songItem.forEach((element,i)=>{
    console.log(element,i)
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
})


//handel play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        giff.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        giff.style.opacity=0
    }
})
// listen to event
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeUpdate")



//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
        
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlay()
    
    index=parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src=`${index+1}.mp3`
        masterSongName=songs[index].songName
audioElement.currentTime=0
audioElement.play()
giff.style.opacity=1
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

    })

})

document.getElementById("next").addEventListener('click',()=>{
    if(index>=9){
        index=0
    }
    
else{
index+=1
}
audioElement.src=`${index+1}.mp3`
masterSongName=songs[index].songName
audioElement.currentTime=0
audioElement.play()
giff.style.opacity=1
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');


})

document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
        index=0
    }
else{
index-=1
}

audioElement.src=`${index+1}.mp3`
masterSongName=songs[index].songName
audioElement.currentTime=0
audioElement.play()
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

})
audiocont