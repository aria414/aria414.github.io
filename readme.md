# Project Overview

## Project Schedule
This schedule will be used to keep track of my progress throughout the week and align with their expectations.  

I am **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Pending
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Project Description
Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.



## Google Sheet
Google sheet made on Friday [Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vT5-0fzI-wdRZl-mQooaMVS4vY_24hiappFOW8Y0I8ZXTffC5Z0646pZVmGR-G-PVcsbyBDNZyDVnXG/pubhtml) 

## Portfolio I want to Emulate
Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [Template found on Pintrest](https://i.pinimg.com/originals/67/be/82/67be820520e8ace919241649d270d698.png)|Inspiration for About Me layout
|[investigatormarketing.com](https://investigatormarketing.com/products/private-investigator-websites/) | Mobile layout with alternating colors for each section |
| [onmyojiguide.com](https://onmyojiguide.com/) |  Simple slide-down for hamburger menu
---

## Wireframes
Dropbox folder containing mockup design
- [Mobile](https://www.dropbox.com/sh/pqbg9h5ng5kpzkd/AACudEeb34F5QCFy9roR6ERAa?dl=0)
- [Desktop](https://www.dropbox.com/sh/qeibuv019og6cod/AADetl35LGaHN42f0W5rJqxSa?dl=0
)

Wireframing Resources:
- Photoshop

## Time/Priority Matrix 
[Link](https://www.dropbox.com/sh/sg9rasy9uhciwmi/AABozktiP9YCmul7ySTRGqwja?dl=0)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  
Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)
- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 
- Anything else that is not MVP

## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### Design
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Wireframe | M | 1hr | hr |
| Mockup | H | 6hr+ | hr |  
| Total | H | 7hrs+| hrs |

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | M | 1hr | hr |
| Regular Nav | M | 1hr | hr |  
| Make a Form | H | 1hr|  hr | 
| Connect Form | H | 3hr|  hr | 
| Pull and display data for projects | H | 7hrs|  hr | 
| Enter data for credits| H | 2hrs|  hr | 
| Pull/display data for credits| H | 5hrs|  hr | 
| Responsive | H | 5hr | hr | hr |
| Total | H | 25hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Add images | H | 1.5hr | -hr | hr |
| Bootstrap component | L | 2hr | hr |
| customize font-awesome icons | L | 4hr | hr |
| Total | H | 7.5hrs| hrs |

## Additional Libraries
jQuery

 
## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description  
```

// Add the eventListener
// on a click event done to button -  do the clickHandler function
// clickHandler doens't have () because i don't want to invoke it immediately. I want to pass it in to be called.
// $button.on("click", clickHandler);
//add the eventListener with an arrow function instead of passing in clickHandler
$button.on("click", (event) => {

    if ($('li').length > 0){
        $('ul').empty()
    } else {
    // Our array of data
    const myArray = [1,2,3,4,5,6]

    // store the UL in a variable
    const $ul = $("ul")

    //empty the ul
    $ul.empty()

    // Loop over the array and add the lis
    myArray.forEach((item) => {
        const $li = $("<li>")
        $li.text(item)
        $ul.append($li)
    })
    }
})
```
## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.