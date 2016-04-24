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
	
	
	$(document).ready(function() {
	
		//AJAX LIVE SEARCH 
		
		$("div.frmSearch").click(function(){
			$("#search").focus();
		});
		
		$("#search").autocomplete({
			source: "search.php",
			minLength: 2,
		});
	
		//HISTORY
		
		var nav, content fetchAndInsert;
		
		nav = $('nav#main');
		content = $('section#content');
		
		//Fetches and inserts content into conteiner
		fetchAndInsert = function(href) {
			$.ajax({
				url:'http://localhost/page/election_info/' + href.split('/').pop(),
				method: 'GET',
				cache: false,
				success: function(data) {
					content.html(data);
				}
			});
		};
		
		//User goes back/forward
		$(window).on('popstate', function() {
			fetchAndInsert(location.pathname);
		});
		
		nav.find('a').on('click', function(e) {
			var href = $(this).attr('href');
			
			//Manipulate history
			history.pushState(null, null, href);
			
			//Fetch and insert
			fetchAndInsert(href);
			
			e.preventDefault();
			
		});
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
