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
			$("#search-box").focus();
		});
		
		$("#search-box").keyup(function() {
			$.ajax({
				type: "POST",
				url: "../page/search.php",
				data: "keyword="+$(this).val(),
				beforeSend: function() {
					//$("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
				},
				success: function(data) {
					$("#suggesstion-box").show();
					$("#suggesstion-box").html(data);
					$("#search-box").css("background","#FFF");
				}
			});
		});
		
		function selectCandidate(val) {
			$("#search-box").val(val);
			$("#suggesstion-box").hide();
		}
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
