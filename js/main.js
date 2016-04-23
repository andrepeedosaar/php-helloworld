    window.onload = function() {
        if (document.getElementsByName("start_date")[0] && document.getElementsByName("start_date")[0]) {

            var today = new Date().toISOString().split('T')[0];
            document.getElementsByName("start_date")[0].setAttribute('min', today);
            document.getElementsByName("finish_date")[0].setAttribute('min', today);
            document.getElementsByName("start_date")[0].addEventListener('change', changeDateSelect);
        }

        if(document.getElementsByName("title")[0]){
            document.getElementsByName("title")[0].addEventListener('change', votingck);
        }
    };

    function changeDateSelect() {
        var second = document.getElementsByName("start_date")[0].value;
        document.getElementsByName("finish_date")[0].setAttribute('min', second);
    }

    function votingck(){
        var title = document.getElementsByName("title")[0].value;

        $.post("/function/checkvalues.php", {
            title : title
        }).done(function(error){
            if(error.length==0)
            {
                document.getElementById("titleck").innerHTML=title+" on saadaval!";
            }
            else
            {
                document.getElementById("titleck").innerHTML=title+" ei ole saadaval!";
            }
        });
    }
	
	//AJAX LIVE SEARCH 
	$(document).ready(function() {
	
		$("div.frmSearch").click(function(){
			$("#search").focus();
		});
		
		$( "#search" ).autocomplete({
			source: "search.php",
			minLength: 2,
		});
		
		$('.historyAPI').on('click', function(e){
            e.preventDefault();
            var href = $(this).attr('href');
             
            // Getting Content
            getContent(href, true);
             
            jQuery('.historyAPI').removeClass('active');
            $(this).addClass('active');
        });
	
	// Adding popstate event listener to handle browser back button  
    window.addEventListener("popstate", function(e) {
         
        // Get State value using e.state
        getContent(location.pathname, false);
    });
	
	function getContent(url, addEntry) {
        $.get(url).done(function( data ) {
             
            // Updating Content on Page
            $('#contentHolder').html(data);
             
            if(addEntry == true) {
                // Add History Entry using pushState
                history.pushState(null, null, url); 
            }
             
        });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
