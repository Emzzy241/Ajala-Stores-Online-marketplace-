$(document).ready( function(){
    $("#buyer").submit( function(emma){
        emma.preventDefault();

        const firstName = $(".apply").val();
        const lastName = $(".apply1").val();
        const itemNumber = $(".apply2").val();
        const itemsLabel = $(".apply3").val();
        const itemsColor = $(".apply4").val();
        const date = $(".apply5").val();
        const jewellryType = $(".apply6").val();

        $(".apply").append(firstName);
        $(".apply1").append(lastName);
        $(".apply2").append(itemNumber);
        $(".apply3").append(itemsLabel);
        $(".apply4").append(itemsColor);
        $(".apply5").append(date);
        $(".apply6").append(jewellryType);

        $("#receipt").show();
    });
});