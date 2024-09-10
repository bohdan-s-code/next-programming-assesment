## Background
As a Web developer, one of the tasks you'll often be faced with is to bring a design to life, communicating with an API in order to surface the information used in the design, and providing the ability for user interaction.
With this exercise we are interested in seeing how you approach front end focused task. 

### Final Tips
In a team communication is important, and we like to share ideas, solutions and problems together! If you have any further questions about requirements, do not hesitate and ask them =)

You can also use Internet, if you need to check some docs, however **using AI is forbidden**!!!

Good luck and enjoy!

## Exercise
This task is to create a basic Photo Gallery page, where people are sharing photos.

The simple page design: https://drive.google.com/file/d/1NZ39vgJ72kqUESZUfakGzwGYD4mUJp-A/view?usp=sharing

Photos API endpoint: https://jsonplaceholder.typicode.com/photos

### Task 1
Create the Photo Gallery Home page. This task has the following requirements:
- Display the list of photos as grid on home page.
- Display loading state, when the API call is processing.

### Task 2
Add ability to Like/Unlike Photo in Gallery. This task has the following requirements:
- User should have ability to like/unlike photo.
- User should be able to see liked photos in dropdown(Refer to design).
- User should be able to unlike photo from dropdown menu.

### Task 3
The liked photos should remain, if user reload the page or open page on the new tab.

### Task 4
Open View Photo page, when user clicks on image item. 

The design for View Photo page: https://drive.google.com/file/d/1N_k8CSVBuiBmDpUugWt90YU_QF4iBHN0/view?usp=sharing

Photo by id endpoint: https://jsonplaceholder.typicode.com/photos/1
Album by id endpoint: https://jsonplaceholder.typicode.com/albums/1

This task has the following requirements:
- When user clicks on image item on Home page - navigate to View photo page with route `/photos/${id}`
- The new page should display the image, title and album name(Refer to design).



