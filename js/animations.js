init = function(){
      jarallax = new Jarallax();
      
	  jarallax.setDefault('.navigate, .footer .carl, .carr', {opacity:'0'});
	  jarallax.setDefault('.navigate', {top:'150%'}); 
	   
	   
	   jarallax.addAnimation('#scroll',[{progress: "0%", opacity:"1"}, {progress: "2%", opacity: "0"},{progress: "100%", opacity: "0"}]);
	   
	   
	   
	   
	  jarallax.addAnimation('.planet2',[{progress: "0%", rotate:"0"},{progress: "80%", rotate:"0"}, {progress: "83.5%", rotate:"90"},{progress: "100%", rotate:"90"}]);
	  
	   jarallax.addAnimation('.pizza',[{progress: "0%", top:"0px"}, {progress: "19%", top:"0px"}]);
	   jarallax.addAnimation('.pizza',[{progress: "19%", top:"0px"}, {progress: "22%", top:"-2200px"}]);
	   jarallax.addAnimation('.pizza',[{progress: "22%", top:"-2200px"}, {progress: "100%", top:"-2200px"}]);
	   
	   
	   jarallax.addAnimation('.footer',[{progress: "0%", opacity:"0"}, {progress: "86%", opacity:"0"}, {progress: "92%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
	    jarallax.addAnimation('.navigate',[{progress: "0%", top:"150%"}, {progress: "86%", top:"150%"}, {progress: "92%", top:"50%"}, {progress: "100%", top:"50%"}]);
		jarallax.addAnimation('.navigate',[{progress: "0%", opacity:"0"}, {progress: "86%", opacity:"0"}, {progress: "92%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
	   
	   
	  
	  jarallax.addAnimation('#divlogo',[{progress: "0%", opacity:"1"}, {progress: "3%", opacity:"1"}]);
	   jarallax.addAnimation('#divlogo',[{progress: "3%", opacity:"1"}, {progress: "6%", opacity:"0"}]);
	   jarallax.addAnimation('#divlogo',[{progress: "6%", opacity:"0"}, {progress: "100%", opacity:"0"}]);

	    jarallax.addAnimation('#divlogob',[{progress: "0%", opacity:"0"}, {progress: "3%", opacity:"0"}]);
	   jarallax.addAnimation('#divlogob',[{progress: "3%", opacity:"0"}, {progress: "6%", opacity:"1"}]);
	   jarallax.addAnimation('#divlogob',[{progress: "6%", opacity:"1"}, {progress: "19%", opacity:"1"}]);
		jarallax.addAnimation('#divlogob',[{progress: "19%", opacity:"1"}, {progress: "22%", opacity:"0"}]);
	   jarallax.addAnimation('#divlogob',[{progress: "22%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
	  
      jarallax.setDefault('h2, #p1_1,#p1_2,#p1_3, #p2, #p3, #divlogob', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3', {marginLeft:'-1000px'});
	  jarallax.addAnimation('.planet2',[{progress: "0%", left:"50%"}, {progress: "100%", left: "50%"}]);
	  jarallax.addAnimation('.planet2',[{progress: "0%", top:"100%"}, {progress: "30%", top: "100%"}, {progress: "37%", top: "22%"}, {progress: "43%", top: "40%"}, {progress: "83.5%", top: "40%"}, {progress: "93%", top: "-80%"}]);
	  jarallax.addAnimation('.planet2',[{progress: "0%", marginLeft:"-8px"},{progress: "80%", marginLeft:"-8px"}, {progress: "83.5%", marginLeft:"-60px"},{progress: "100%", marginLeft:"-60px"}]);
	  
	  jarallax.addAnimation('.road',[{progress: "0%", left:"50%"}, {progress: "100%", left: "50%"}]);
	  jarallax.addAnimation('.road',[{progress: "0%", top:"100%"}, {progress: "29%", top: "100%"},{progress: "39%", top: "-20%"}, {progress: "89%", top: "-620%"}]);
	  jarallax.addAnimation('.road',[{progress: "0%", height:"140%"}, {progress: "29%", height:"140%"}, {progress: "69%", height:"620%"}]);
	  
	  
	  jarallax.addAnimation('.slogan',[{progress: "0%", top:"100%"}, {progress: "21%", top: "100%"},{progress: "24%", top: "30%"}, {progress: "26%", top: "30%"}, {progress: "42%", top: "-140%"}, {progress: "100%", top: "-140%"}]);
	  var start = jarallax.addAnimation('.sloganshot',[{progress: "0%", top:"100%"}, {progress: "29%", top: "100%"}, {progress: "48.5%", top: "-140%"}, {progress: "100%", top: "-140%"}]);
	  jarallax.addAnimation('.sloganshot2',[{progress: "0%", top:"100%"}, {progress: "80%", top: "100%"}, {progress: "92%", top: "-40%"}, {progress: "100%", top: "-40%"}]);
	   
	  jarallax.addAnimation('#t1',[{progress: "0%", left:"10%"}, {progress: "100%", left: "10%"}]);
	  var animation = jarallax.addAnimation('#t1',[{progress: "0%", top:"100%"}, {progress: "32%", top: "100%"}, 
			{progress: "42%", top: "-20%"}, {progress: "40%", opacity:"1"}, {progress: "42%", opacity:"0"}, {progress: "98%", opacity:"0"}]);
	  
	 
	  jarallax.cloneAnimation('#t2',{progress:'+2'}, animation);
	  jarallax.addAnimation('#t2',[{progress: "0%", left:"78%"}, {progress: "100%", left: "78%"}]);
	  
	  jarallax.cloneAnimation('#t3',{progress:'+4'}, animation);
	  jarallax.addAnimation('#t3',[{progress: "0%", left:"29%"}, {progress: "100%", left: "29%"}]);

	  jarallax.cloneAnimation('#t4',{progress:'+6'}, animation);
	  jarallax.addAnimation('#t4',[{progress: "0%", left:"72%"}, {progress: "100%", left: "72%"}]);
	  
	  jarallax.cloneAnimation('#t5',{progress:'+8'}, animation);
	  jarallax.addAnimation('#t5',[{progress: "0%", left:"12%"}, {progress: "100%", left: "12%"}]);
	 
	  jarallax.cloneAnimation('#t6',{progress:'+11'}, animation);
	  jarallax.addAnimation('#t6',[{progress: "0%", left:"82%"}, {progress: "100%", left: "82%"}]);
	  
	  jarallax.cloneAnimation('#t7',{progress:'+13'}, animation);
	  jarallax.addAnimation('#t7',[{progress: "0%", left:"26%"}, {progress: "100%", left: "26%"}]);
	  
	  jarallax.cloneAnimation('#t8',{progress:'+15'}, animation);
	  jarallax.addAnimation('#t8',[{progress: "0%", left:"87%"}, {progress: "100%", left: "87%"}]);
	  
	  jarallax.cloneAnimation('#t9',{progress:'+17'}, animation); 
	  jarallax.addAnimation('#t9',[{progress: "0%", left:"9%"}, {progress: "100%", left: "9%"}]);
   	  
	  jarallax.cloneAnimation('#t10',{progress:'+20'}, animation);
	  jarallax.addAnimation('#t10',[{progress: "0%", left:"68%"}, {progress: "100%", left: "68%"}]);
	  
	  
	  jarallax.addAnimation('#pi1',[{progress: "0%", left:"82%"}, {progress: "100%", left: "82%"}]);
	  var animationpi = jarallax.addAnimation('#pi1',[{progress: "0%", top:"100%"}, {progress: "59%", top: "100%"}, {progress: "69%", top: "-20%"},{progress: "0%", opacity:"1"}, {progress: "67%", opacity:"1"}, 
				{progress: "69%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
	  
	  jarallax.cloneAnimation('#pi2',{progress:'+2'}, animationpi);
	  jarallax.addAnimation('#pi2',[{progress: "0%", left:"20%"}, {progress: "100%", left: "20%"}]);
	  
	  
	  jarallax.cloneAnimation('#pi3',{progress:'+5'}, animationpi);
	  jarallax.addAnimation('#pi3',[{progress: "0%", left:"81%"}, {progress: "100%", left: "81%"}]);
	  
	  
	  
	  var animroad = jarallax.addAnimation('.roadl',[{progress: "0%", top:"100%"}, {progress: "71%", top: "100%"}, {progress: "81%", top: "-20%"},{progress: "0%", opacity:"0"},{progress: "69%", opacity:"0"}, {progress: "71%", opacity: "1"},{progress: "81%", opacity: "1"},{progress: "83%", opacity: "0"}, {progress: "100%", opacity: "0"}]);
	  jarallax.cloneAnimation('.roads',{progress:'+0'}, animroad);
	  
	  jarallax.addAnimation('.carr',[{progress: "68%", left:"-45%"}, {progress: "75%", left: "26%"},{progress: "76.5%", left: "26%"}, {progress: "82%", left: "100%"}]);
	  jarallax.cloneAnimation('.carr',{progress:'+0'}, animroad);
	  jarallax.addAnimation('.carl',[{progress: "68%", left:"145%"}, {progress: "75%", left: "66%"},{progress: "77%", left: "65%"}, {progress: "82%", left: "0%"}]);
	  jarallax.cloneAnimation('.carl',{progress:'+0'}, animroad);
	  
	  
	  
	  
	   jarallax.addAnimation('#bd_start',[{progress: "0%",  opacity:"1"}, {progress: "56%",  opacity:"1"}, {progress: "63%",  opacity:"0"}, {progress: "100%",  opacity:"0"}]);
	  
	   jarallax.addAnimation('#bd_start_purple',[{progress: "0%",  opacity:"0"}, {progress: "75%",  opacity:"0"}, {progress: "80%",  opacity:"1"}, {progress: "100%",  opacity:"1"}]);
	  
	  
	  
	  jarallax.addAnimation('.plane',[{progress: "74%", left:"-50%"}, {progress: "83%", left: "150%"}]);
	  jarallax.addAnimation('.plane',[{progress: "74%", top:"150%"}, {progress: "83%", top: "-50%"}]); 
	  jarallax.addAnimation('.plane',[{progress: "83%", opacity:"1"}, {progress: "85%", opacity: "0"}]); 
	  
      
      jarallax.addAnimation('#head1',[{progress: "2%", left:"-800px"}, {progress: "6%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "6%", left:"100px"}, {progress: "17%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "4%", opacity:"1"}, {progress: "17%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "17%", opacity:"1"}, {progress: "23%", opacity:"0"}]);
      
      jarallax.addAnimation('#head2',[{progress: "32%", left:"-800px"}, {progress: "38%", left: "100px"}, {progress: "51%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "32%", opacity:"1"}, {progress: "41%", opacity:"1"}, {progress: "51%", opacity:"0"}]);
      
      jarallax.addAnimation('#head3',[{progress: "55%", left:"-800px"}, {progress: "64%", left: "100px"}, {progress: "73%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "55%", opacity:"1"}, {progress: "64%", opacity:"1"}, {progress: "73%", opacity:"0"}]);
	  
	  jarallax.addAnimation('#head4',[{progress: "69%", left:"-800px"}, {progress: "74%", left: "100px"}, {progress: "82%", left: "150px"}]);
      jarallax.addAnimation('#head4',[{progress: "69%", opacity:"1"}, {progress: "74%", opacity:"1"}, {progress: "82%", opacity:"0"}]);
      
      jarallax.addAnimation('#p1_1',[{progress: "0%", opacity:"0"}, {progress: "6%", opacity:"0"}, {progress: "9%", opacity:"1"}, {progress: "16%", opacity:"1"}, {progress: "20%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
	  jarallax.addAnimation('#p1_2',[{progress: "0%", opacity:"0"}, {progress: "7%", opacity:"0"}, {progress: "10%", opacity:"1"}, {progress: "17%", opacity:"1"}, {progress: "20%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
	  jarallax.addAnimation('#p1_3',[{progress: "0%", opacity:"0"}, {progress: "8%", opacity:"0"}, {progress: "11%", opacity:"1"}, {progress: "16%", opacity:"1"}, {progress: "20%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
	  
      jarallax.addAnimation('#p2',[{progress: "36%", opacity:"0"}, {progress: "44%", opacity:"1"}, {progress: "47%", opacity:"1"}, {progress: "55%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "36%", marginLeft:"0"}, {progress: "55%"}]);
      
      jarallax.addAnimation('#p3',[{progress: "56%", opacity:"0"}, {progress: "63%", opacity:"1"}, {progress: "73%", opacity:"0"}]);
      jarallax.addAnimation('#p3',[{progress: "56%", marginLeft:"0"}, {progress: "73%"}]);
    }
