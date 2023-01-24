// ;(
//     {
//         "plugins": ["jsdom-quokka-plugin"]
//     }
// )
// //adding first 5 images to the array

// let arr=[];
// arr.push("img1");
// arr.push("img2");
// arr.push("img3");
// arr.push("img4");
// arr.push("img5");
// // let firstDiv=document.getElementsByTagName("img");

// //adding reset button html page




// //code for adding reset in button html page
// let resetBtn=document.createElement("button");
// resetBtn.innerHTML="Reset";
// document.body.appendChild(resetBtn);
// //adding 'id' and 'class name' to button.
// resetBtn.setAttribute("id","reset");


// //*************************************************************** */


// //at first the reset button is disabled.
// resetBtn.hidden=true;

// //now for random image we find the desird index by random() method.
// let randomImage=Math.floor(Math.random()*5);

// //adding to the array.
// arr.push(arr[randomImage]);

// display();

// //creating function to give every time new image on screen.
// function display()
// {
//     let brr=[];
//     let count=0;
//     while(count<6)
//     {
//         let ri=Math.floor(Math.random()*6);
//         if(arr[ri]!=0)
//         {   
//             brr.push(arr[ri]);
//             arr[ri]=0;
//             count++;
//         }
//     }

//     arr=brr;

//     for(let i=0;i<brr.length;i++)
//     {
//         let img=document.createElement("img");
//         document.body.appendChild(img);
//         img.classList.add(brr[i]);
//     }

   
// }


// //code for when cliking on image then reset button is shown.

// let imgTag=document.getElementsByTagName("img");
// for(let i=0;i<arr.length;i++)
// {
//     imgTag[i].addEventListener("click",()=>{imageClick()});
// //  document.getElementByClassName(arr[i]).addEventListener("click",()=>{imageClick()});
// }

// function imageClick()   
// {
//     resetBtn.hidden=false;
// }


// //code for adding h3 tag using the js.
// let heading=document.createElement("h3");
// heading.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
// document.body.appendChild(heading);
// heading.setAttribute("id","h");


// // let firstDiv=document.getElementsByClassName("all-img");
// // firstDiv.appendChild(heading);


// //code for reset button







//code which is teach by abhishek sir

//adding p tag
let para=document.createElement("p");
para.setAttribute("id","para");
document.body.append(para);
//adding h3 heading.
let heading=document.createElement("h3");
heading.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
heading.setAttribute("id","h");
document.body.prepend(heading);

//creating the reset button using js
let resetBtn=document.createElement("button")
resetBtn.innerHTML="Reset";
resetBtn.setAttribute("id","reset");
document.body.appendChild(resetBtn);
resetBtn.style.cssText="color:tomato; background-color:black;";
resetBtn.style.display="none";

//creating the verify button using js
let verifyBtn=document.createElement("button")
verifyBtn.innerHTML="Verify";
verifyBtn.setAttribute("id","verify");
document.body.appendChild(verifyBtn);
verifyBtn.style.cssText="color:tomato; background-color:black;";
verifyBtn.style.display="none"



//here we generate the same two images.
let classArray=["img1","img2","img3","img4","img5"]
let randomIndex=Math.floor(Math.random()*5);
classArray.push(classArray[randomIndex]);

//now we add class name to the img-tag
let imgTag=document.querySelectorAll("img");
for(let i=0;i<classArray.length;i++)
{
    imgTag[i].setAttribute("class",classArray[i]);
    imgTag[i].setAttribute("id",i)
}

//code for get everytime random images.
let temp=[]
let count=0;
while(count<classArray.length)
{
    // if(count==5)
    // break;
    let randomIndex1=Math.floor(Math.random()*classArray.length);
    if(temp[randomIndex1]==undefined)
    {
        temp[randomIndex1]=classArray[count];
        count=count+1;
    }
    else if(temp[randomIndex1]!=undefined)
    {
        continue
    }
}


//now displaying the images at output
for(let i=0;i<imgTag.length;i++)
{
    imgTag[i].setAttribute("class",temp[i])
    imgTag[i].setAttribute("id",i);
}
console.log()

//code for clicking on image
for(let t of imgTag)
{
    t.addEventListener("click",humanOrRobot);

}

let previourId="";
let c=0;

function humanOrRobot(e)
{
    resetBtn.style.display="inline";
    let currentId=e.target.id;
    console.log(currentId)
    if(currentId!=previourId)
    {
        c++;
        imgTag[currentId].classList.add("selected");
        previourId=currentId;

        if(c==2)
        {
            verifyBtn.style.display="inline";

        }

        if(c>2)
        {
            verifyBtn.style.display="none";
        }
    }
 
}


//code for reset button

resetBtn.addEventListener("click",()=>{resetBtnFun()});

function resetBtnFun()
{
    para.innerHTML=""
    resetBtn.style.display="none";
    verifyBtn.style.display="none"
    count=0;
    selectedImage=document.querySelectorAll(".selected");
    selectedImage[0].classList.remove("selected");
    selectedImage[1].classList.remove("selected");

}


//code for verify button

verifyBtn.addEventListener("click",verifyBtnFun);

function verifyBtnFun()
{   

    let p=document.createElement("p");
    verifyBtn.style.display="none";

    // console.log(selectedImage)
    selectedImage=document.querySelectorAll(".selected");
    console.log(selectedImage)
    class1=selectedImage[0].className
    class2=selectedImage[1].className
    
    console.log(class1)
    console.log(class2)
    if(class1==class2)
    {
        para.innerHTML=" You are a human. Congratulations! ";
    }
    else
    {
        para.innerHTML="We can't verify you as a human. You selected the non-identical tiles."
    }

}