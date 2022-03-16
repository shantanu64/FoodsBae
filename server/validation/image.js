import joi from "joi";

export const ValidateImageFile = (imageObj) => {
  const Schema = joi.object({
    file: joi.array().items(joi.string()).required(),
  });

  return Schema.validateAsync(imageObj);
};