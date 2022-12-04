export const globalError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
};

export const notFound = (req, res, next) => {
  res.status(404).json({ message: "Not Found" });
};
