# Easter Poem Generator 
This NextJS app gets input from user and uses that input in an API call to `ChatGPT`.

`app/page.js`
- contains a form that has one checkbox for every Easter symbol. This is in the state variable `formData`.
- there is `Link` component beside each checkbox to a description page at `app/[symbolName]/page.js`.
- `handleChecking()` ensures that at least one checkbox is checked at all times, and sets `formData` accordingly.
- `handleSubmit()` sends the data to `pages/api/poemgen.js`, and displays the result.

`app/[symbolName]/page.js`
- There is an `Image` component. `[symbolName]` determines the `src` attribute.
- There is a paragaph tag containing text taken from the `texts` object. `[symbolName]` determines the text.

`app/api/poemgen/route.js`
- sends data to a `ChatGPT` endpoint.
- returns the data back to `app/page.js`.