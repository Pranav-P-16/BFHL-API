# BFHL REST API

A tiny API that accepts an array and returns:
- `is_success`
- `user_id` (format: `<full_name>_<ddmmyyyy>`, with full name in lowercase)
- `email`, `roll_number`
- `odd_numbers`, `even_numbers` (numbers returned **as strings**)
- `alphabets` (converted to uppercase)
- `special_characters`
- `sum` (as a string)
- `concat_string` (all alphabetical chars concatenated, reversed, in alternating caps)

## Endpoints
- **POST** `/bfhl` — main endpoint

### Example Request
```json
{ "data": ["a","1","334","4","R","$"] }
```

### Example Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Configure Your Identity
Set these (or edit `config.js`):

- `FULL_NAME` (lowercase)
- `DOB` (ddmmyyyy)
- `EMAIL`
- `ROLL_NUMBER`

You can use a `.env` file (also works on Railway/Render):
```
FULL_NAME=your_full_name_in_lowercase
DOB=ddmmyyyy
EMAIL=you@example.com
ROLL_NUMBER=XXXXXXX
```

## Run Locally (Express)
```bash
npm install
npm run start
# POST http://localhost:3000/bfhl
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import into Vercel.
3. It exposes `POST https://<your-app>.vercel.app/bfhl` via `vercel.json` rewrite.

## Deploy to Railway/Render
- Use the Node.js buildpack. The app entry is `index.js` and listens on `PORT`.

## Notes
- All numbers are **returned as strings**.
- Alphabet groups like `"ABcD"` are preserved in `alphabets` as uppercased items, but their characters are also used for `concat_string`.
- Errors return `{ "is_success": false, "error": "..." }` with proper status codes.