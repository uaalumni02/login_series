const settings = {
  development: {
    api_key: "local",
    apiBaseUrl: "http://localhost:3000",
  },
};

const env = process.env.NODE_ENV || "local";

export default settings[env];
