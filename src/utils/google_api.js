const { google } = require("googleapis");

const writeToSheet = async (data) => {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const sheetsApi = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = "Sheet1";

  const valueInputOption = "RAW";

  const resource = {
    values: [Object.values(data)],
  };

  try {
    const response = await sheetsApi.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    return response.data
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  writeToSheet,
};
