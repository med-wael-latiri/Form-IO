module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      data: [Object],
      UniqueKeys: [String],
      DefaultKey: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("enumerated-list", schema);

  return Tutorial;
};
