module.exports = () => {
  process.env.TZ = "UTC";
  console.info(`\nSet process.env.TZ = ${process.env.TZ}`);
};
