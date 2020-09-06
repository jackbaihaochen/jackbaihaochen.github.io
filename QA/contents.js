var contents = [
'<div>'+
'    <div class="main_content_title"><h1>登録方法PC</h1></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_02.png" alt="sign_up2"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_03.png" alt="sign_up3"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_04.png" alt="sign_up4"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_05.png" alt="sign_up5"></div>'+
'</div>',
'<div>'+
'    <div class="main_content_title"><h1>登録方法Android</h1></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_06.png" alt="sign_up6"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_07.png" alt="sign_up7"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_08.png" alt="sign_up8"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_09.png" alt="sign_up9"></div>'+
'    <div><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_10.png" alt="sign_up10"></div>'+
'</div>',
'<div>'+
'    <div class="main_content_title"><h1>登録方法iPhone</h1></div>'+
'    <div"><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_11.png" alt="sign_up11"></div>'+
'    <div"><img class="content_pic" src="QA_pics/himalaya操作方法マニュアル_12.png" alt="sign_up12"></div>'+
'</div>'
];

function changeMainContent(index,element){
    element.innerHTML = contents[index];
}