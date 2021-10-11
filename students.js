/*async function fetchPosts(){
    const ul = document.getElementById("studentList");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    console.log(data.data);
    data=>{
        for(student of data.data)
        {
            console.log(student);
            ul.innerHTML+=`
                <li class="card-list__item">
                <figure class="card-list__item__fig">
                    <img src="${student.avatar}" alt="Student Image" class="card-list__item__fig__img">
                </figure>
                <p class="card-list__item__title">${student.first_name +  student.last_name}</p>
                <button class="card-list__item__button" onclick="">Review</button>
                </td>
                </li>
           `
        }
    }
}
fetchPosts();*/ 


    function getStudentList(){
    const ul = document.getElementById("studentList");
    fetch("https://reqres.in/api/users?page=1")
    .then(response=>response.json())
    .then(data=>{
        for(student of data.data)
        {
            console.log(student);
            ul.innerHTML+=`
                
                <li class="card-list__item">
                <figure class="card-list__item__fig">
                    <img src="${student.avatar}" alt="Student Image" class="card-list__item__fig__img">
                </figure>
                <p class="card-list__item__title">${student.first_name + ' ' +  student.last_name}</p>
                <button class="card-list__item__button" onclick="">Review</button>
                </td>
                </li>
           `
        }
    })
}

getStudentList();

