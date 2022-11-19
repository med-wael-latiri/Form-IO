module.exports = (mongoose) => {
  var FormValuesschema = new mongoose.Schema(
    {
      values: Object,
    },
    { timestamps: true }
  );
  FormValuesschema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const FormValues = mongoose.model("formvalues", FormValuesschema);
  return FormValues;
};
