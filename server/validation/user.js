import joi from "joi";

export const ValidateUserId = (userId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(userId);
};

export const ValidateUpdatedUserId = (userId) => {
  const Schema = joi.object({
    userId: joi.string().required(),
  });

  return Schema.validateAsync(userId);
};