(function shoppingcart(){
$('.fa-shopping-cart').click(function addproduct()	{
	var id = $(this).parent().parent().attr("id");
	if($('#'+id+id).length < 1)
	{
		var name		=	$('#'+id).children().eq(1).text();
		var price		=	$('#'+id+' '+'.price').text();
		price	=	parseInt(price,10);
		var ilosc		=	$('#'+id+' '+'.sum').val();
		element=document.getElementById("shoppingcartlist");
		element.innerHTML += "<tr id="+id+id+"><th>"+name+"</th><th><span class='price'>"+price+'</span>zł'+"</th><th><input class="+"sum"+" value="+""+ilosc+""+"></th><th class='text-center'><i class='fa fa-refresh fa-2x' aria-hidden='true'></i></th><th><span class='sumvalue'>"+ilosc*price+"</span>zł</th><th class='text-center'><i class='fa fa-times fa-2x' ></i></th></tr>";
	}else	{
	var	ilosc	= 	$('#'+id+id+' '+'.sum').val();
	var	ilosc1 	= 	$('#'+id+' '+'.sum').val();
		ilosc	=	parseInt(ilosc,10);
		ilosc1	=	parseInt(ilosc1,10);
		ilosc	=	ilosc+ilosc1;
		var price		=	$('#'+id+' '+'.price').text();
		price	=	parseInt(price,10);
		element	=	$('#'+id+id).children().eq(2);
		$(element).children().replaceWith("<input class="+"sum"+" value="+""+ilosc+""+"></th>");
		element	=	$('#'+id+id).children().eq(4);
		$(element).replaceWith("<th><span class='sumvalue'>"+ilosc*price+"</span>zł</th>");


	}check();
});

$(document.body).on('click', '.fa-times',function()	{
	$(this).parent().parent().remove();
	check();
});

$(document.body).on('click', '.fa-refresh',function()	{
	id 			= 	$(this).parent().parent().attr("id");
	price		=	$('#'+id+' '+'.price').text();
	ilosc		= 	$('#'+id+' '+'.sum').val();
	price		=	parseInt(price,10);
	element	=	$('#'+id).children().eq(4);
	$(element).replaceWith("<th><span class='sumvalue'>"+ilosc*price+"</span>zł</th>");
	check();
});

function check()	{
	var allvalue = 0;
	for(x=0;0==0;x++)	{
	if($('#shoppingcartlist').children().eq(x).length != 0)	{
	element	=	$('#shoppingcartlist').children().eq(x);
	var id = $(element).attr("id");
	var sumvalue	=	$('#'+id+' '+'span.sumvalue').html();
	sumvalue = parseInt(sumvalue,10);
	allvalue	=	allvalue+sumvalue;

	} else	{
		$('.paysum').replaceWith("<th class='paysum'>"+allvalue+"zł</th>");
		return false;
	};
	};
};
})();
