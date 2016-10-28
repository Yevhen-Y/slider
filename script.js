var picturies = [ 'pic/img1.jpg' , 'pic/img2.jpg' , 'pic/img3.jpg', 'pic/img4.jpg', 'pic/img5.jpg', 'pic/img6.jpg']; // images for gallery

var prev = document.querySelector('.backward span'); // find backward button
var next = document.querySelector('.forward span');  // find forward button
currentPicture =  document.querySelector('.picture img'); // find current picture
initNumber = 0;

// event for forward button
next.addEventListener("click", function(e){  
	if(initNumber<picturies.length -1){
		initNumber = initNumber+1
	}else{
		initNumber = 0
	}
	currentPicture.src = picturies[initNumber]

 
})

// event for backward button
prev.addEventListener("click", function(e){ 
	if(initNumber > 0){
		initNumber = initNumber - 1
	}else{
		initNumber = picturies.length-1
	}
	currentPicture.src = picturies[initNumber]
})


// event for overlay effect
var pics = document.querySelector("img");
    pics.addEventListener('click', function(e){
        e.preventDefault();

        var semitransparent = document.createElement('div')

         semitransparent.style.backgroundColor = 'rgba(255,255,255,0.7)';
         semitransparent.style.width = '100%';
         semitransparent.style.position = 'fixed';
         semitransparent.style.top = '0';
         semitransparent.style.left = '0';
         semitransparent.style.height = '100%';

        var bigPic = document.createElement('img');
        bigPic.src = e.target.src;

                bigPic.style.height =  '500px';
                bigPic.style.width = '700px';
                bigPic.style.left = '50%';
                bigPic.style.opacity = '1';
                bigPic.style.position = 'absolute';
                bigPic.style.marginTop =  '60px';
                bigPic.style.marginLeft = '-350px';
                bigPic.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                bigPic.style.cursor = 'pointer';
 
        document.body.appendChild(semitransparent)
        semitransparent.appendChild(bigPic)
        
     semitransparent.addEventListener('click', function(e){
        this.parentNode.removeChild(this)
     })
    })