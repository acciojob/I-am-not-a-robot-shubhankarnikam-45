//adding first 5 images to the array
let arr=[];
arr.push("img1");
arr.push("img2");
arr.push("img3");
arr.push("img4");
arr.push("img5");


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





