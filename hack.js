

function hack()
{
	var inputname = document.getElementById("name").value;
	var integer = parseInt(inputname, 10);
	let booolean = "";
	booolean = Number.isInteger(integer);
	if (booolean === true)   {
		var audio = new Audio ('Dont enter numbers.mp3');
		audio.play()
		document.getElementById('name').value = '';
		alert("Don't enter numbers")
		


	}

	else if (!inputname) {
		var audio = new Audio ('Kindly Enter Your Name!.mp3');
		audio.play()
		document.getElementById('name').value = '';
		alert("Kindly Enter Your Name!")
	}

	else if (booolean === false) 
{

	// document.getElementById("output").innerHTML =  inputname;

	var element = document.getElementById("name");
  	element.classList.remove("Name");
  	var element = document.getElementById("proceed");
  	element.classList.remove("Proceed");
   	element.style.visibility = 'hidden';
   	var element = document.getElementById("main");
  	element.classList.remove("Main");
  	

  	var element = document.getElementById("name");
  	element.classList.add("HideName");
  	var element = document.getElementById("proceed");
  	element.classList.add("HideProceed");
   	element.style.visibility = 'visible';
   	var element = document.getElementById("main");
  	element.classList.add("HideMain");
  	

  	setTimeout(programrun,1000)
  	function programrun()
  	{
  		var element = document.getElementById("loadertxt");
  	element.classList.remove("nonetxt");
  		var element = document.getElementById("outputback");
  		element.classList.add("OutputBack");
  		var element = document.getElementById("loader");
  		element.classList.add("Loader");
  		var element = document.getElementById("loadertxt");
  		element.classList.add("Loadertxt");

  		setTimeout(hackloop1,1000)
    	function hackloop1()
    	{			

    				var syshackcom = "<p> <strong> Security System Has Hacked Succesfully. </strong> <p>";
    				let hackloop = 0;
    				let hacknum = "<p>";
    				let hacktimes = setInterval(()=>{
    					hackloop++ 
    				
    				hacknum += "By Passing System Security " +  hackloop + "% Completed";
    				hacknum += "</p>";
  					document.getElementById("output").innerHTML =  hacknum;


  					if (hackloop > 99) {
  						document.getElementById("output").innerHTML =  hacknum + syshackcom;
						clearInterval(hacktimes)

		setTimeout(databaseloop1,1000)
    	function databaseloop1()
    	{			
    			var dataextract = "<p>Extracting...</p>";
    			var comdataextract = "<p>Extracting Completed.</p>"
    			var datadecoding = "<p>Decoding...</p>";
    			var datadecoded = "<p>Data Decoded.</p>"

    				var sysdatabasecom = "<p> <strong> Database Files Collected. </strong> <p>";
    				let databaseloop = 0;
    				let datanum = "<p>";
    				let datatimes = setInterval(()=>{
    				 databaseloop = databaseloop + 17
    				
    				datanum += "Collecting Database Files " +  databaseloop ;
    				datanum += "</p>";
  					document.getElementById("output").innerHTML =  hacknum + syshackcom + datanum;


  					if (databaseloop > 459) {
  						clearInterval(datatimes)
  						document.getElementById("output").innerHTML =  hacknum + syshackcom + datanum + sysdatabasecom;  					    	       			
    	       			document.getElementById("output").innerHTML =  hacknum + syshackcom + datanum + sysdatabasecom + dataextract;
    	       			setTimeout(extracting,4000)
    	       				function extracting(){
    	       					document.getElementById("output").innerHTML =  hacknum + syshackcom + datanum + sysdatabasecom + comdataextract + datadecoding;
    	       					setTimeout(extracting,2000)
    	       				function extracting(){
    	       					var element = document.getElementById("loader");
  								element.classList.remove("Loadertxt");
  								var element = document.getElementById("loadertxt");
  								element.classList.remove("Loader");
  								var element = document.getElementById("super");
  								element.classList.remove("Super");
  								var element = document.getElementById("super");
  								element.classList.add("displaynone");
  								var linkname = "Click Here!";
  								var linkres = linkname.link("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    	      	       			document.getElementById("output").innerHTML =  hacknum + syshackcom + datanum + sysdatabasecom + comdataextract + datadecoded + "<br> Details:<br>UserName: " + inputname + "<br>E-mail and Password: " + linkres;																								


    	       				}
    	       			}
  						
        	
    		}
			}, 250)
    			}
  						
        	
    		}
			}, 50)
    			}
    				}
    			}
    		}