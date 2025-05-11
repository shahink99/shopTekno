 function shortten(title, maxLength) {
  if (title.length <= maxLength) {
    return title;
  }else{
    return title.slice(0,maxLength).trim() + ' ...';
  }
}


// window.shortten = shortten