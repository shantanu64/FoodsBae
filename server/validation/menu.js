import joi from "joi";

export const ValidateMenulistId = (menulistId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(menulistId);
};

export const ValidateMenuimagesId = (menuimagesId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(menuimagesId);
};