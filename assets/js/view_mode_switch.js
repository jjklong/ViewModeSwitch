//grab document 'link' and switch between two css files

// function changeStyle(reff){
//   var stylesheet = document.getElementById("stylez");
//   stylesheet.setAttribute('href', reff);
// }


function switch_style(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
}
