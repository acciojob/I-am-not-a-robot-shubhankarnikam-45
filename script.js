//adding first 5 images to the array
let arr=[];
arr.push("img1");
arr.push("img2");
arr.push("img3");
arr.push("img4");
arr.push("img5");
// let firstDiv=document.getElementsByTagName("img");

//adding reset button html page




//code for adding reset in button html page
let resetBtn=document.createElement("button");
resetBtn.innerHTML="Reset";
document.body.appendChild(resetBtn);
//adding 'id' and 'class name' to button.
resetBtn.setAttribute("id","reset");


//*************************************************************** */


//at first the reset button is disabled.
resetBtn.hidden=true;

//now for random image we find the desird index by random() method.
let randomImage=Math.floor(Math.random()*5);

//adding to the array.
arr.push(arr[randomImage]);

display();

//creating function to give every time new image on screen.
function display()
{
    let brr=[];
    let count=0;
    while(count<6)
    {
        let ri=Math.floor(Math.random()*6);
        if(arr[ri]!=0)
        {   
            brr.push(arr[ri]);
            arr[ri]=0;
            count++;
        }
    }

    arr=brr;

    for(let i=0;i<brr.length;i++)
    {
        let img=document.createElement("img");
        document.body.appendChild(img);
        img.classList.add(brr[i]);
    }

   
}


//code for when cliking on image then reset button is shown.

let imgTag=document.getElementsByTagName("img");
for(let i=0;i<arr.length;i++)
{
    imgTag[i].addEventListener("click",()=>{imageClick()});
//  document.getElementByClassName(arr[i]).addEventListener("click",()=>{imageClick()});
}

function imageClick()   
{
    resetBtn.hidden=false;
}


//code for adding h3 tag using the js.
let heading=document.createElement("h3");
heading.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
document.body.appendChild(heading);
heading.setAttribute("id","h");


// let firstDiv=document.getElementsByClassName("all-img");
// firstDiv.appendChild(heading);


//code for reset button






