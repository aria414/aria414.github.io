console.log("hello world");

////////////////////////////////////////////
//PULL AND RENDER DATA FROM GOOGLE SHEET
////////////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1Rg_VD_Okxh90ARUonKDDmRD-5uNZ_-H6FZx21ctRwTk/1/public/full?alt=json")
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

    //Create a div and append to body. Then dump data inside div
    const $div = $("<div>")
    const $body = $("body")
    const $ul = $("<ul>")
    $body.append($div)
    $div.append($ul)

    projects.forEach( (item) => {
        const $li = $("<li>")
        const $name = item.name
        const $desc = item.description
        const $img = item.img
        const $live = item.live
        const $git = item.github

        $li.text(` ${$name} | ${$desc} | ${$img} | ${$live} | ${$git}`)
      //  appended after h1
      // $ul.append($li)
    })

} );








////////////////////////////////////////////
//Pull data from blog from Headless CMS
////////////////////////////////////////////