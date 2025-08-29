function processDataArray(data, profile) {
  const { FULL_NAME, DOB, EMAIL, ROLL_NUMBER } = profile;
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let alphaString = "";

  if (!Array.isArray(data)) {
    return { is_success: false, error: "Invalid input: 'data' must be an array" };
  }

  for (const raw of data) {
    const item = String(raw);

    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaString += item;
    } else {
      special_characters.push(item);
    }
  }

  const reversed = alphaString.split("").reverse().join("");
  const concat_string = reversed
    .split("")
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return {
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  };
}

module.exports = { processDataArray };