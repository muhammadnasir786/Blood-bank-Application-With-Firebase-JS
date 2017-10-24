// Get Logic

// database, child('posts').on(Child_added, () => {
    // var demo = snapshot.val();
    // for (var key in demo) {

    //     var element = demo[key];
    //     element.ID = key;
    //     console.log(element);
    // }
// }) 
let database = firebase.database().ref('/');
database.child('posts').on('child_added',(s)=>{
    var demo = s.val();
    for (var key in demo) {

        var element = demo[key];
        element.ID = key;
        // console.log(element);bloodgroup
        renderPost(element)
    }
    // console.log(s.val())
})

let renderPost = (element)=>{
let allPost = document.getElementById('allpost');
// console.log(element)
let temCard = "<div class='card text-center'>"+
                    "<div class='card-header'>"+
                       " Boold Group<span class='bloodgroup'>"+element.bloodgroup+"</span>"+
                    "</div>"+
                    "<div class='card-block'>"+
                       " <h4 class='card-title'><span class='unitreq'>"+element.noOfUnitReq+"</span> Unit Requied in <span>"+element.hospital+"</span></h4>"+
                        "<p class='card-text'>City = <span class='pull-left'>"+element.city+"</span> <span class='pull-right'>Contact No:"+element.contactNo+"</span></p>"+
                        "<p class='card-text'> Urgency :<span class='pull-left'>"+element.urgency+"</span> <span class='pull-right'>Pateint is my "+element.relation+"</span></p>"+
                        "<p class='card-text'>"+element.extrainfo+"</p>"+
                        "<a href='#' class='btn btn-primary'>Go Volintrier</a>"+
                        "<a href='#' class='btn btn-info'>Exchange</a>'"+
                   "</div>"+
                    "<div class='card-footer text-muted'>"+
                     "   Post Date"+
                    "</div>"+
               " </div>";
        allPost.insertAdjacentHTML('beforeend', temCard);
}