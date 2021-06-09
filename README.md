# Classplus assignment to create infinite scroll Flickr images grid

The project is deployed on [https://flickrphotos.netlify.app/](https://flickrphotos.netlify.app/)
and satisfies the following criterions:
1. Default - By default, show the images from
https://www.flickr.com/services/api/flickr.photos.getRecent.html
2. Search - A Search bar should be placed in the header. When a user is typing, display
results from https://www.flickr.com/services/api/flickr.photos.search.html
3. Infinite Scroll - As you scroll down to the bottom of the page, display more results if
there are more results.
4. Suggestions - Save their search queries (in the browser itself) so that the next time they come back, you can suggest search queries (like as a list/tags near the search bar). -> `LocalStorage` is used for this.
5. Preview - Clicking on a photo in the results will bring the photo up in a modal
6. Handles all edge cases (0 results, loading)
7. `antd` (ant-design) has been used as UI framework due to wide availability of pre-made components with minimal amount of code required and easy customisability.
8. Proper loaders and placeholders are shown
9. Page is responsive
10. Apart from antd library, `react-infinite-scroll-component` has been used for infinite scrolling functionality in the image grid
11. The search bar section is fixed on top of the page results as you scroll down on the page
12. Network requests have been optimized by using `AbortController` functionality of fetch requests to cancel the requests if not needed and page by page loading of flickr api is used to prevent unnecessary bandwidth wastage
13. Error handling has been added using try/catch blocks wherever necessary
14. Minimal UI and easy-to-use UX has been created to make the website user-friendly
15. Reusable components and custom hooks have been created to improve the code quality

## Available Scripts to run the project

In the project directory, run `yarn install` and then you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\

