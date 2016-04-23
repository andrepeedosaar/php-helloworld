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
	//http://ninetofive.me/blog/build-a-live-search-with-ajax-php-and-mysql
	$(document).ready(function() {
	
		$("div.frmSearch").click(function(){
			$("#search").focus();
		});
		
		$("#search").typeahead({
			name: 'typeahead',
			remote:'../page/search.php?key=%QUERY',
			limit : 10
		});
		
	/*
		$("#search").live("keyup", function(e) {
			// Set Timeout
			clearTimeout($.data(this, 'timer'));
			
			// Set Search String
			var search_string = $(this).val();

			// Do Search
			if (search_string == '') {
				$("ul#results").fadeOut();
				$('h4#results-text').fadeOut();
			}
			else {
				$("ul#results").fadeIn();
				$('h4#results-text').fadeIn();
				$(this).data('timer', setTimeout(search, 100));
			};
			}return false;
		});
		
		// On Search Submit and Get Results
		function search() {
			var query_value = $('#search').val();
			$('b#search-string').text(query_value);
			if(query_value !== ''){
				$.ajax({
					type: "POST",
					url: "../page/search.php",
					data: { query: query_value },
					cache: false,
					success: function(html){
						$("ul#results").html(html);
					}
				});
			}return false;
		}
		
	});
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
