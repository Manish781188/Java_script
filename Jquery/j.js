    // // //document.querySelector('h1').style.color='green'

    //     $('h1').css('color','red')
    //        console.log($);
    // $('#one').css({
    //     color:"green",
    //     backgroundColor:"yellow"
    // })

    // // console.log($('#one').text('byyy'));
    // console.log($('input').attr('type','number') )   ///getattr,setattr
    // console.log($('input').attr('type'));


    // $('div').css({
    //     height:'500px',
    //     width:'500px',
    //     backgroundColor:'gold'
    // })
    $('#two').click(()=>{
        $('div').fadeOut()
    })
    $('#three').click(()=>{
        $('div').fadeIn()
    })

$('#one').click(()=>{
    console.log("heloooooooo");
    $('body').fadeOut()
})
