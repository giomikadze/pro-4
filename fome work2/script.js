
const array = [
  {
      alt: "1",
    src: "https://media.istockphoto.com/id/491391396/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BD%D0%B5%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=7b9DhZJZoBSu--rWX3HsS7m5glSpsU4fTmxMA2VMMyc="
  },
  {
      alt: "2",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
  },
  {
      alt: "3",
    src: "https://www.keblog.it/wp-content/uploads/2021/12/foto-piu-belle-2021-39.jpg"
  },
  ];
const div = document.createElement('div');
document.body.append(div)

const biImg = document.createElement('img')
biImg.classList.add('img-1')
document.body.append(biImg)


for(let i = 0;i < array.length;i++){
let smallImg = document.createElement('img')
smallImg.src = array[i].src
smallImg.classList.add('img-2')
document.body.append(smallImg)

smallImg.addEventListener('click', ()=> {
  biImg.src = array[i].src
})

// smallImg.onclick = ()=> {
//   biImg.src = array[i].src
// }

}



