//API Code https://api.coinbase.com/v2/exchange-rates?currency=twd


$.ajax({
    url:"https://api.coinbase.com/v2/exchange-rates?currency=twd",
    type:"GET",
    dateType:"json",
    success:function(res){

        console.log(res);
    }
})