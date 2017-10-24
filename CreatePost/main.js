
let database = firebase.database().ref('/');
let postForm = document.getElementById('postForm');

let userName = document.getElementById('userName').innerHTML = `' ${localStorage.getItem('email')} ' Dashboard`;
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let bloodgroup = document.getElementById('bloodgroup');
    let noOfUnitReq = document.getElementById('noOfUnitReq');
    let urgency = document.getElementById('urgency');
    let country = document.getElementById('country');
    let city = document.getElementById('city');
    let hospital = document.getElementById('hospital');
    let relation = document.getElementById('relation');
    let contactNo = document.getElementById('contactNo');
    let extrainfo = document.getElementById('extrainfo');
    // console.log(bloodgroup.value);
    // console.log(noOfUnitReq.value);
    // console.log(urgency.value);
    // console.log(urgency.value);
    // console.log(city.value);
    // console.log(hospital.value);
    // console.log(relation.value);
    // console.log(contactNo.value);
    // console.log(extrainfo.value);
    let postData = {
        bloodgroup: bloodgroup.value,
        noOfUnitReq: noOfUnitReq.value,
        urgency : urgency.value,
        city : city.value,
        hospital : hospital.value,
        relation : relation.value,
        contactNo: contactNo.value,
        extrainfo : extrainfo.value
    }
    let uidUser  = localStorage.getItem('uid');
    database.child(`posts/${uidUser}`).push(postData).then(() => {
        console.log('Done')
    })


});


