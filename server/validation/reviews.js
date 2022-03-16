import joi from "joi";

export const ValidateReview = (reviewObj) => {
  const Schema = joi.object({
    reviewData: joi.array().items(joi.string()).required(),
  });

  return Schema.validateAsync(reviewObj);
};

export const ValidateDeleteReview = (reviewObj) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(reviewObj);
};