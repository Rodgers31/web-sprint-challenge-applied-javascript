const Header = (title, date, temp) => {

  const titleHeader = document.createElement('div')
  const titleDate = document.createElement('span')
  const headTitle = document.createElement('h1')
  const headTemp = document.createElement('span')
  
   titleHeader.classList.add('header')
  titleDate.classList.add('date')
  headTemp.classList.add('temp')
  
  headTitle.textContent = title
  titleDate.textContent = date
  headTemp.textContent = temp
  
   titleHeader.appendChild(titleDate)
   titleHeader.appendChild(headTitle)
   titleHeader.appendChild(headTemp)
  
  return  titleHeader
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const create = document.querySelector(selector);
  create.appendChild(Header("We developer blog", "May 7", "Breaking News: Arsenal Fc loosing in europa league semifinals"));
  
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }