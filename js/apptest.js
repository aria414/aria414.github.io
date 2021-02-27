console.log("hello world");

////////////////////////////////////////////
//PULL AND RENDER DATA FROM GOOGLE SHEET
////////////////////////////////////////////


$.ajax('https://spreadsheets.google.com/feeds/list/1Rg_VD_Okxh90ARUonKDDmRD-5uNZ_-H6FZx21ctRwTk/1/public/full?alt=json')
.then( (data) => {
     // checking my Data
    console.log(data);

    //Put our projects in a variable.
    const rawProjects = data.feed.entry;

    console.log(rawProjects);

    // Prettify our projects array

    const projects = rawProjects.map( (project) => {
        return {
            //the name is stored in an gsx$name object with property $t
            name: project.gsx$name.$t,
            img: project.gsx$image.$t,
            description: project.gsx$description.$t,
            live: project.gsx$livelink.$t,
            github: project.gsx$githublink.$t
        }
    })
    console.log( "my beautiful array: " , projects)


    const $projectsdiv = $(".projects")

    for(let i = 0; i <$projectsdiv.length; i++ ) {
        const $img = projects[i].img
        const $name =  projects[i].name
        const $desc =  projects[i].description
        // console.log($img, $name, $desc)

        $(".col-md-4").eq(i).html(`<img src="${$img}" style="width: 400px;">`)
        $(".card-title").eq(i).text($name)
        $(".card-text").eq(i).text($desc)
        console.log($(".card-title").eq(i).html())
    }


} );



////////////////////////////////////////////
//testing
////////////////////////////////////////////



// <div>
//     <img src="./images/lapis.jpg" alt="image"  style="width:400px">
//     <h2>Project 1</h2>
//     <p>
//         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
//     </p>
//     <button>
//         <a href="https://aria414.github.io/lapis-game/" target="_blank">Live</a>
//     </button>
//     <button>
//         <a href="https://github.com/aria414/lapis-game" target="_blank">Code</a>
//     </button>
// </div>

projects.forEach( (item) => {
    //1. Create the div to hold all the projects: line 34 & 46
    // const $div = $("<div>")
    // $div.attr("class", "thumbnails")
    // $div.text(item.name)

    // //2. Create the image tag
    // const $img = $("<img>")
    // $img.attr("class", "gallery")
    // $img.attr("src", item.img)

    // //3. Create the h2 for title

    // //4. Create <p> </p> to hold descriptions

    // //5. Create the two buttons for the Live and Code links

    // //6. Use append to put the div

    // //append image to div
    // $div.append($img)

    // const $fluid = $(".container-fluid")
    // $fluid.append($div)


})

// const $colmd4Img = $(".col-md-4").eq(1)
// console.log( "Checking images--", $colmd4Img.html())

// $colmd4Img.html('<img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,h_308/v1609649280/maxresdefault_s0wyjl.jpg">')

// const $colmd4Img = $(".col-md-4")

// for (let i = 0; i < $colmd4Img.length; i++) {
//     const $img = projects[i].img

//     $colmd4Img.eq(i).html(`<img src="${$img}">`)
// }
