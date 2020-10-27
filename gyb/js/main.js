//////////////////////preloader ////////////////////////////////////
$(document).ready(function(){
    $("#overlayer").delay(3500).fadeOut("slow");
});


////////////////////////////////////////////////////////////////



////////////////////////map hover text box/////////////////////////
function svgTip(opts) {
    opts = opts || {};
    opts.fontsize = opts.fontsize || "16px";
    opts.padding = opts.padding || "2px";
    opts.bgcolor = opts.bgcolor || "#000";
    opts.color = opts.color || "#fff";
    opts.opacity = opts.opacity || 0.6;

    $.each($('[title]', 'svg'), function (id, obj) {
        var tt = $(this).attr("title")
        var ttd = $(this).attr("data-count"),
            that = $("<div class='svgtip'>" + tt +'<br>population:'+ ttd + "</div>");

        that.css({
            'position': "absolute",
            'top': 0,
            'left': 0,
            'width': "auto",
            'display': "none",
            'background-color': opts.bgcolor,
            'color': opts.color,
            'padding': opts.padding,
            'font-size': opts.fontsize,
            'opacity': opts.opacity,
            'pointer-events': 'none'
        });

        $(this).hover(function (event) {
            that.css({
                'left': event.clientX,
                'top': event.clientY + $(window).scrollTop()
            });
            that.addClass("active");
            that.slideDown(100);
        }, function () {
            that.slideUp(100);
            that.removeClass("active");
        });
        $(this).on("mousemove", function (event) {
            if (that.hasClass("active")) {
                that.css({
                    'left': event.clientX,
                    'top': event.clientY + $(window).scrollTop() - that.height()
                });
            }
        });
        $('body').append(that);
    });
}

new svgTip({
    fontsize: "11px",
    padding: "10px"
});


function lll(msg) {
    $('#debug').append(msg + "<br/>");
}
////////////////////////////////////////////////////////







/////////////////////side panel jquery/////////////////////

/////////////////////////////////////////////////////////////


//////////////////////////currency exchange rate jquery///////////////////////////
$(document).ready(function(){
    $(".USD").text('loading');
    $(".EUR").text('loading');
    $(".GBP").text('loading');
    $(".CNY").text('loading');
    setInterval(function() {
    $.ajax({
    type:"GET",  
      url:"https://api.exchangerate-api.com/v4/latest/INR",
    success: function(data) {
      //console.log(data.graphql.user.edge_followed_by.count);
      let USD=parseFloat(1/data.rates.USD);
      let EUR=parseFloat(1/data.rates.EUR);
      let GBP=parseFloat(1/data.rates.GBP);
      let CNY=parseFloat(1/data.rates.CNY);
      $(".USD").empty();
      $(".USD").append(USD.toFixed(2));
      $(".EUR").empty();
      $(".EUR").append(EUR.toFixed(2));
      $(".GBP").empty();
      $(".GBP").append(GBP.toFixed(2));
      $(".CNY").empty();
      $(".CNY").append(CNY.toFixed(2));
    }  
    })},1800);
  });
  ///////////////////////////////////////////////////////